import { GetStaticProps } from 'next'
import { Certification } from 'views/Certification/Certification'

export type CertificatePageProps = {
  productsCertificates: object
  forestCertificate: object
}

export default function CertificatesPage(props: CertificatePageProps) {
  console.log(props)
  return <Certification />
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale
  let productsCertificates
  let forestCertificate
  let res

  try {
    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
        `/products-certifications?_locale=${locale}`
    )
    productsCertificates = await res.json()

    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
        `/products-certifications?_locale=${locale}`
    )
    forestCertificate = await res.json()
  } catch (e) {
    // if locale not working, get default
    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/products-certifications`
    )
    productsCertificates = await res.json()

    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/products-certifications`
    )
    forestCertificate = await res.json()
  }

  return {
    props: {
      productsCertificates,
      forestCertificate
    },
    revalidate: parseInt(
      process.env.NEXT_PUBLIC_PAGES_REVALITATION_TIME ?? '7200'
    )
  }
}
