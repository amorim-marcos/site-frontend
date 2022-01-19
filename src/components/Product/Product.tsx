import { Box, Image, Flex } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'
import {
  GrafismProduct,
  GrafismProductProps
} from './GrafismProduct/GrafismProduct'
import { ProductBody, ProductBodyProps } from './ProductBody/ProductBody'
import {
  ProductDownloadAndLinks,
  ProductDownloadAndLinksProps
} from './ProductDownloadAndLinks/ProductDownloadAndLinks'
import {
  ProductHeader,
  ProductHeaderProps
} from './ProductHeader/ProductHeader'

export type ProductProps = {
  header?: ProductHeaderProps
  body?: ProductBodyProps
  imgSrc?: string
  imgMarginTop?: ResponsiveCss
  imgMarginRight?: ResponsiveCss
  secondaryBackground?: string
  plusProduct?: boolean
  downloadAndLinks?: ProductDownloadAndLinksProps
  imgWidth?: ResponsiveCss
  imgMaxWidth?: ResponsiveCss
  grafismProps: GrafismProductProps
}
export const Product = ({
  header,
  body,
  imgSrc,
  imgMarginTop,
  imgMarginRight,
  secondaryBackground,
  plusProduct,
  downloadAndLinks,
  imgWidth = '80vw',
  imgMaxWidth = '1415px',
  grafismProps
}: ProductProps) => {
  return (
    <Box overflow="hidden" position="relative" marginX="auto" maxWidth="1920px">
      <GrafismProduct {...grafismProps} />

      <ProductHeader {...header} />
      {imgSrc && (
        <Flex
          direction="column"
          width="100vw"
          maxWidth="1920px"
          position="absolute"
          top="0"
          right="0"
          alignItems="flex-end"
          visibility={{ base: 'hidden' }}
        >
          <Box>
            <Image
              src={imgSrc}
              alt="product image"
              width={imgWidth}
              maxWidth={imgMaxWidth}
              marginTop={imgMarginTop}
              marginRight={imgMarginRight}
            />
          </Box>
          {downloadAndLinks && (
            <ProductDownloadAndLinks
              plusProduct={plusProduct}
              backgroundColor={secondaryBackground}
              {...downloadAndLinks}
            />
          )}
        </Flex>
      )}
      <ProductBody {...body} secondaryBackgroundColor={secondaryBackground} />
    </Box>
  )
}
