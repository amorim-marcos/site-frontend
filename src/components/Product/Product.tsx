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
  pointerEvents?: 'none' | 'auto'
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
  const isMobile = width && width < 768

  return (
    <Flex
      aria-label="productContainer"
      overflow="hidden"
      position="relative"
      marginX="auto"
      flexDirection="column"
    >
      <Box id={plusProduct ? 'plus' : 'product'}>
        <GrafismProduct {...grafismProps} />
        <ProductHeader {...header} />

        {imgSrc && (
          <Flex
            direction="column"
            width="100vw"
            position={{ base: 'relative', md: 'absolute' }}
            top={{ md: '0' }}
            right={{ md: '50%' }}
            transform={{ md: 'translateX(50%)' }}
            alignItems="flex-end"
            bg={{ base: body?.backgroundColor, md: 'none' }}

          >
            <Flex justifyContent="flex-end" w={{ base: '90%', md: '47%' }}>
              <Image
                marginTop={{ base: '-50px', md: '0' }}
                as="img"
                src={imgSrc}
                alt="product image"
                w="100%"
                objectFit="contain"
                objectPosition="right"
                maxH="1000px"
                zIndex="base"
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
            isMobile && downloadAndLinks ? (
              <Flex 
              bg={body?.backgroundColor} 
              w="100%" 
              flex="1"
              pointerEvents="auto"
              >
                <ProductDownloadAndLinks
                  plusProduct={plusProduct}
                  backgroundColor={secondaryBackground}
                  {...downloadAndLinks}
                />
             </Flex>
            ) : null
          }
        />
      </Box>
    </Flex>
  );
};

