import { Box } from '@chakra-ui/react'
import Pagebar from '@components/Pagebar'
import {
  QualityPinus,
  QualityPinusProps
} from '@components/QualityPinus/QualityPinus'
import { useTranslation } from 'react-i18next'
import Product from '../../components/Product'

export type BerneckPinusViewProps = {
  pinus: {
    title: string
    subTitle: string
    technical_sheet: string
    subTitleDescription: string
    description: string
    usesAndApplications: string
  }
  specifications: {
    title: string
    description: string
  }[]
  qualityPinus: QualityPinusProps
}

export default function BerneckPinusView({
  pinus,
  specifications,
  qualityPinus
}: BerneckPinusViewProps) {
  const productsViewLabels = useTranslation('productsView')
  return (
    <Box>
      <Pagebar
        paths={[
          {
            title: productsViewLabels.t('pagebar.products'),
            url: '/products'
          },
          {
            title: pinus.title,
            url: '/products/berneck-pinus'
          }
        ]}
      />
      <Product
        grafismProps={{
          grafism: 'type3',
          grafismProps: {
            color: '#FFF'
          }
        }}
        imgSrc="/img/pinus.png"
        imgWidth={{ base: '100vw', sm: '60vw' }}
        imgMaxWidth="1151px"
        imgMarginTop={{ base: '-30%', sm: '-5%' }}
        imgMarginRight={{
          base: '-30px',
          sm: '-40px',
          md: '-75px',
          lg: '-100px',
          xl: '-150px'
        }}
        secondaryBackground="#F5F6F4"
        downloadAndLinks={{
          textColor: '#376B5C',
          hoverColor: '#59993F',
          whereBuy: true,
          datasheetUrl: pinus.technical_sheet,
          qualityCertificate: false
        }}
        header={{
          title: pinus.title,
          headerBgColor: '#A1B5A8',
          subtitle: pinus.subTitle,
          description: pinus.subTitleDescription
        }}
        body={{
          description: pinus.description,
          usesAndApplications: pinus.usesAndApplications,
          specifications: specifications,
          backgroundColor: '#E8E8E8'
        }}
      />
      <QualityPinus items={qualityPinus.items} pdfUrl={pinus.technical_sheet} />
    </Box>
  )
}
