import { Box, Image, Flex } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'
import { GrafismProduct } from './GrafismProduct/GrafismProduct'
import { ProductBody, ProductBodyProps } from './ProductBody/ProductBody'
import { ProductDownloadAndLinks } from './ProductDownloadAndLinks/ProductDownloadAndLinks'
import {
  ProductHeader,
  ProductHeaderProps
} from './ProductHeader/ProductHeader'

export type ProductProps = {
  header?: ProductHeaderProps
  body?: ProductBodyProps
  grafism?: 'type1' | 'type2'
  imgSrc?: string
  imgMarginTop?: ResponsiveCss
  imgMarginRight?: ResponsiveCss
  secondaryBackground?: string
  plusProduct?: boolean
}
export const Product = ({
  header,
  body,
  grafism,
  imgSrc,
  imgMarginTop,
  imgMarginRight,
  secondaryBackground,
  plusProduct
}: ProductProps) => {
  return (
    <Box overflow="hidden" position="relative" marginX="auto" maxWidth="1920px">
      <GrafismProduct grafism={grafism || 'type1'} />

      {imgSrc && (
        <Flex
          direction="column"
          width="100vw"
          maxWidth="1920px"
          position="absolute"
          top="0"
          right="0"
          alignItems="flex-end"
        >
          <Box>
            <Image
              src={imgSrc}
              alt="product image"
              width="80vw"
              maxWidth="1414px"
              marginTop={imgMarginTop}
              marginRight={imgMarginRight}
            />
          </Box>
          <ProductDownloadAndLinks
            plusProduct={plusProduct}
            backgroundColor={secondaryBackground}
          />
        </Flex>
      )}
      <ProductHeader {...header} />
      <ProductBody {...body} secondaryBackground={secondaryBackground} />
    </Box>
  )
}
