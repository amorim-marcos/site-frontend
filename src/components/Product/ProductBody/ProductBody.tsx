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
  paddingBottom
}: ProductBodyProps) => {
  const product = useTranslation('product')

  return (
    <Flex
      maxWidth="1920px"
      padding="5%"
      flexDirection="column"
      bg={backgroundColor}
      paddingBottom={paddingBottom}
    >
      {description && (
        <>
          <Heading {...headingStyle}>{product.t('Description')}</Heading>
          <ProductText paragraph content={description} />
        </>
      )}

      {moreTechnologyQualityProtection && (
        <>
          <Heading {...headingStyle}>
            {product.t('MoreTechnologyQualityProtection')}
          </Heading>
          <ProductText paragraph content={moreTechnologyQualityProtection} />
        </>
      )}

      {usesAndApplications && (
        <>
          <Heading {...headingStyle}>
            {product.t('UsesAndApplications')}
          </Heading>
          <ProductText content={usesAndApplications} />
        </>
      )}

      {finishes && (
        <>
          <Heading {...headingStyle}>{product.t('Finishes')}</Heading>
          <ProductText content={finishes} />
        </>
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
          />
        </Box>
      )}
      {productWithBP && <ProductWithBP {...productWithBP} />}
    </Flex>
  )
}
