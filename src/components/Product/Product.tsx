import { Box, Image, Flex } from '@chakra-ui/react'
import useWindowDimensions from 'hooks/useWindow'
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
  grafismProps?: GrafismProductProps
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
  grafismProps = {
    grafism: 'type1'
  }
}: ProductProps) => {
  const { width } = useWindowDimensions()
  const isMobile = width && width < 568

  return (
    <Box
      aria-label="productContainer"
      overflow="hidden"
      position="relative"
      marginX="auto"
      maxWidth="1920px"
      id={plusProduct ? 'plus' : 'product'}
    >
      <GrafismProduct {...grafismProps} />

      <ProductHeader {...header} />
      {imgSrc && (
        <Flex
          direction="column"
          width="100vw"
          maxWidth="1920px"
          position={{ base: 'relative', sm: 'absolute' }}
          top="0"
          right="0"
          alignItems={'flex-end'}
        >
          <Flex
            justifyContent="flex-end"
            w="100vw"
            bg={{ base: body?.backgroundColor, sm: 'none' }}
          >
            <Image
              as="img"
              src={imgSrc}
              alt="product image"
              width={imgWidth}
              maxWidth={imgMaxWidth}
              marginTop={imgMarginTop}
              marginRight={imgMarginRight}
            />
          </Flex>
          {!isMobile && downloadAndLinks && (
            <ProductDownloadAndLinks
              plusProduct={plusProduct}
              backgroundColor={secondaryBackground}
              {...downloadAndLinks}
            />
          )}
        </Flex>
      )}
      <ProductBody
        {...body}
        secondaryBackgroundColor={secondaryBackground}
        BottomComponent={
          isMobile &&
          downloadAndLinks && (
            <Flex
              bg={body?.backgroundColor}
              alignItems="center"
              justifyContent="center"
              w="100vw"
            >
              <ProductDownloadAndLinks
                plusProduct={plusProduct}
                backgroundColor={secondaryBackground}
                {...downloadAndLinks}
              />
            </Flex>
          )
        }
      />
    </Box>
  )
}
