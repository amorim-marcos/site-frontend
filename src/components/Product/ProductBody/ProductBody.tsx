import { Heading, Flex, Box } from '@chakra-ui/react'
import { ProductWithBP } from './ProductWithBP/ProductWithBP'
import { headingStyle } from './styles'
import {
  ProductDimensions,
  DimensionsProps
} from '../../ProductDimensions/ProductDimensions'
import { useTranslation } from 'react-i18next'

import { ProductWithBPProps } from './ProductWithBP/ProductWithBP'
import { ProductText } from './ProductText/ProductText'
import {
  Specification,
  ProductSpecification
} from './ProductSpecifications/ProductSpecifications'
import { ResponsiveCss } from 'types/responsive'

export type ProductBodyProps = {
  description?: string | Array<string>
  moreTechnologyQualityProtection?: string | Array<string>
  usesAndApplications?: string | Array<string>
  finishes?: string | Array<string>
  dimensions?: DimensionsProps
  specifications?: Array<Specification>
  backgroundColor?: string
  secondaryBackgroundColor?: string
  tertiaryBackgroundColor?: string
  productWithBP?: ProductWithBPProps
  paddingBottom?: ResponsiveCss
  BottomComponent?: React.ReactNode
}
export const ProductBody = ({
  description,
  usesAndApplications,
  moreTechnologyQualityProtection,
  finishes,
  dimensions,
  backgroundColor = 'white.100',
  secondaryBackgroundColor = '#FEFEFE',
  tertiaryBackgroundColor = '#BDCEC3',
  productWithBP,
  specifications,
  paddingBottom = '0px',
  BottomComponent
}: ProductBodyProps) => {
  const product = useTranslation('product')

  return (
    <Flex
      maxWidth="1920px"
      flexDirection="column"
      bg={backgroundColor}
      paddingBottom={paddingBottom}
      paddingTop={{ base: '5%' }}
    >
      <Box paddingX="5%">
        {description && (
          <Box
            marginBottom={{
              base: '30px',
              sm: '40px',
              md: '50px',
              lg: '60px',
              xl: '70px',
              '2xl': '80px'
            }}
          >
            <Heading
              fontSize={{
                base: '20px',
                sm: '11px',
                md: '14px',
                lg: '18px',
                xl: '22px',
                '2xl': '30px'
              }}
              variant="productTitle"
            >
              {product.t('Description')}
            </Heading>
            <ProductText paragraph content={description} />
          </Box>
        )}

        {moreTechnologyQualityProtection && (
          <Box
            marginBottom={{
              base: '30px',
              sm: '40px',
              md: '50px',
              lg: '60px',
              xl: '70px',
              '2xl': '80px'
            }}
          >
            <Heading
              variant="productTitle"
              fontSize={{
                base: '20px',
                sm: '11px',
                md: '14px',
                lg: '18px',
                xl: '22px',
                '2xl': '30px'
              }}
            >
              {product.t('MoreTechnologyQualityProtection')}
            </Heading>
            <ProductText paragraph content={moreTechnologyQualityProtection} />
          </Box>
        )}

        {usesAndApplications && (
          <Box
            marginBottom={{
              base: '30px',
              sm: '40px',
              md: '50px',
              lg: '60px',
              xl: '70px',
              '2xl': '80px'
            }}
          >
            <Heading
              variant="productTitle"
              fontSize={{
                base: '20px',
                sm: '11px',
                md: '14px',
                lg: '18px',
                xl: '22px',
                '2xl': '30px'
              }}
            >
              {product.t('UsesAndApplications')}
            </Heading>
            <ProductText content={usesAndApplications} />
          </Box>
        )}

        {finishes && (
          <Box
            marginBottom={{
              base: '30px',
              sm: '40px',
              md: '50px',
              lg: '60px',
              xl: '70px',
              '2xl': '80px'
            }}
          >
            <Heading
              fontSize={{
                base: '20px',
                sm: '11px',
                md: '14px',
                lg: '18px',
                xl: '22px',
                '2xl': '30px'
              }}
              variant="productTitle"
            >
              {product.t('Finishes')}
            </Heading>
            <ProductText content={finishes} />
          </Box>
        )}

        {specifications && (
          <ProductSpecification
            tableBackgroundColor={tertiaryBackgroundColor}
            tableBorderColor={backgroundColor}
            content={specifications}
          />
        )}

        {dimensions && (
          <Box marginBottom="80px">
            <ProductDimensions
              tableBorderColor={backgroundColor}
              tableBackgroundColor={secondaryBackgroundColor}
              dimensions={dimensions}
              tableWidth={{
                base: '300px',
                sm: '170px',
                md: '270px',
                lg: '350px',
                xl: '400px',
                '2xl': '450px'
              }}
            />
          </Box>
        )}
      </Box>
      {BottomComponent}
      {productWithBP && (
        <Box
          marginBottom={{ base: '30px', sm: '50px' }}
          paddingX={{ base: '0', sm: '5%' }}
        >
          <ProductWithBP {...productWithBP} />
        </Box>
      )}
    </Flex>
  )
}
