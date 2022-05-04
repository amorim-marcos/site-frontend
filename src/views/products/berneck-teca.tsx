import TecaInfo from '@components/TecaInfo'
import Product from '../../components/Product'
import Pagebar from '@components/Pagebar'
import { Box } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export type BerneckTecaViewProps = {
  title: string
  header_subtitle: string
  header_subtitle_description: string
  description: string
  technical_sheet: string
  machinability: string
  uses_and_applications: string
  _length: string
  _width: string
  thickness: string
}

export default function BerneckTecaView(props: BerneckTecaViewProps) {
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
            title: props.title,
            url: '/products/berneck-teca'
          }
        ]}
      />
      <Product
        grafismProps={{
          grafism: 'type2',
          grafismProps: {
            color: '#dbc3b2'
          }
        }}
        imgSrc="/img/teca.png"
        imgWidth={{ base: '110vw', sm: '56vw' }}
        imgMaxWidth="1075px"
        imgMarginTop={{
          base: '-30%',
          sm: '-24px',
          md: '-30px',
          lg: '0px',
          xl: '-20px',
          '2xl': '-60px'
        }}
        imgMarginRight={{
          base: '-65px',
          sm: '-51px',
          md: '-100px',
          lg: '-100px',
          xl: '-100px',
          '2xl': '-100px'
        }}
        secondaryBackground="#F5F6F4"
        downloadAndLinks={{
          textColor: '#987257',
          hoverColor: '#3E1500',
          datasheetUrl: props.technical_sheet,
          whereBuy: true,
          qualityCertificate: false,
          backgroundColor: '#dbc3b2'
        }}
        header={{
          title: props.title,
          headerBgColor: '#CFB8A7',
          subtitle: props.header_subtitle,
          description: props.header_subtitle_description
        }}
        body={{
          description: props.description,
          backgroundColor: '#E8E8E8'
        }}
      />
      <TecaInfo
        dimensions={{
          length: props._length,
          width: props._width,
          thickness: props.thickness
        }}
        usesAndApplications={props.uses_and_applications}
        machinability={props.machinability}
      />
    </Box>
  )
}
