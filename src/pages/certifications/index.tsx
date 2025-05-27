import { GetStaticProps } from 'next'
import {
  Certification,
  CertificationViewProps
} from 'views/Certification/Certification'
import DOMPurify from 'isomorphic-dompurify'
import { nameSpaces, ni18nConfig } from '../../../ni18n.config'
import { loadTranslations } from 'ni18n'

export type CertificatePageProps = CertificationViewProps

export default function CertificatesPage(props: CertificatePageProps) {
  return <Certification {...props} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale
  let productsCertificates
  let forestCertificate: ForestCertificationsResponse
  let page_content
  let res

  try {
    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
        `/products-certifications?_locale=${locale}`
    )
    productsCertificates = await res.json()

    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
        `/forest-certification?_locale=${locale}`
    )
    forestCertificate = await res.json()

    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/certifications?_locale=${locale}`
    )
    page_content = await res.json()
  } catch (e) {
    // if locale not working, get default
    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/products-certifications`
    )
    productsCertificates = await res.json()

    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/forest-certification`)
    forestCertificate = await res.json()

    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/certifications`)
    page_content = await res.json()
  }

  forestCertificate.description = DOMPurify.sanitize(
    forestCertificate.description
  )

  if (forestCertificate.forest_img) {
    forestCertificate.forest_img =
      process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL +
      forestCertificate.forest_img.url
  }

  if (
    typeof forestCertificate.certificates !== 'undefined' &&
    typeof forestCertificate.certificates.map === 'function'
  ) {
    forestCertificate.certificates = forestCertificate.certificates.map(
      (item: { certificate_file: { url: string } }) => {
        return {
          ...item,
          certificate_file: {
            ...item.certificate_file,
            url:
              item.certificate_file === null
                ? null
                : process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL +
                  item.certificate_file.url
          }
        }
      }
    )
  } else {
    forestCertificate.certificates = []
  }

  productsCertificates =
    typeof productsCertificates !== 'undefined' &&
    typeof productsCertificates.map === 'function'
      ? productsCertificates.map(
          (item: { certificates: { certificate_file: { url: string } }[] }) => {
            return {
              ...item,
              certificates:
                typeof item.certificates !== 'undefined' &&
                typeof item.certificates.map === 'function'
                  ? item.certificates.map((item2) => {
                      return {
                        ...item2,
                        certificate_file: {
                          ...item2.certificate_file,
                          url:
                            item2.certificate_file === null
                              ? null
                              : process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL +
                                item2.certificate_file.url
                        }
                      }
                    })
                  : []
            }
          }
        )
      : []

  return {
    props: {
      productsCertificates,
      forestCertificate,
      page_content,
      ...(await loadTranslations(ni18nConfig, locale, nameSpaces))
    },
    revalidate: parseInt(
      process.env.NEXT_PUBLIC_PAGES_REVALITATION_TIME ?? '7200'
    )
  }
}
