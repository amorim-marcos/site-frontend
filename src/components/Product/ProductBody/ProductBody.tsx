import { Heading, Flex, Box, Text } from '@chakra-ui/react'
import { ProductWithBP } from './ProductWithBP/ProductWithBP'
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
import QualityCertificateIcon from '@components/Icons/QualityCertificateIcon'

export type ProductBodyProps = {
  description?: string | Array<string>
  moreTechnologyQualityProtection?: string | Array<string>
  usesAndApplications?: string | Array<string>
  finishes?: string | Array<string>
  qualityStandards?: string | Array<string>
  abntInfo?: string
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
  BottomComponent,
  qualityStandards,
  abntInfo
}: ProductBodyProps) => {
  const componentsLabels = useTranslation('components')

  return (
    <Flex
      bg={backgroundColor}
      flexDirection="column"
      flex="1"
      alignItems={'center'}
    >
      <Flex
        maxWidth="1536px"
        flexDirection="column"
        flex="1"
        w={'100%'}
        padding={{ base: '5% 0 10% 5%', '2xl': '5% 0 5% 3%' }}
      >
        <Box>
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
              <Text
                as={'h3'}
                variant={'h3'}
                color="green.900"
                fontWeight={'extrabold'}
              >
                {componentsLabels.t('product.description')}
              </Text>
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
              <Text
                as={'h3'}
                variant={'h3'}
                color="green.900"
                fontWeight={'extrabold'}
              >
                {componentsLabels.t('product.moreTechnologyQualityProtection')}
              </Text>
              <ProductText
                paragraph
                content={moreTechnologyQualityProtection}
              />
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
              <Text
                as={'h3'}
                variant={'h3'}
                color="green.900"
                fontWeight={'extrabold'}
              >
                {componentsLabels.t('product.usesAndApplications')}
              </Text>
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
              <Text
                as={'h3'}
                variant={'h3'}
                color="green.900"
                fontWeight={'extrabold'}
              >
                {componentsLabels.t('product.finishes')}
              </Text>
              {typeof finishes === 'string' ? (
                '• ' + finishes
              ) : (
                <>
                  {finishes.map((item, i) => {
                    return <Text key={i}>{'• ' + item}</Text>
                  })}
                </>
              )}
            </Box>
          )}

          {qualityStandards && (
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
              <Text
                as={'h3'}
                variant={'h3'}
                color="green.900"
                fontWeight={'extrabold'}
              >
                {componentsLabels.t('product.qualityStandards')}
              </Text>
              <ProductText content={qualityStandards} />
            </Box>
          )}

          {abntInfo && (
            <Flex alignItems="center">
              <Box
                marginRight={{
                  base: '20px',
                  sm: '6px',
                  md: '10px',
                  lg: '14px',
                  xl: '16px',
                  '2xl': '20px'
                }}
              >
                <QualityCertificateIcon
                  stroke="green.900"
                  width={{
                    base: '40px',
                    sm: '10px',
                    md: '15px',
                    lg: '20px',
                    xl: '30px',
                    '2xl': '40px'
                  }}
                />
              </Box>
              <ProductText content={abntInfo} />
            </Flex>
          )}

          {specifications && (
            <Box
              marginBottom={{
                base: '20px',
                sm: '30px',
                md: '40px',
                lg: '60px',
                xl: '80px',
                '2xl': '100px'
              }}
            >
              <ProductSpecification
                tableBackgroundColor={tertiaryBackgroundColor}
                tableBorderColor={backgroundColor}
                content={specifications}
              />
            </Box>
          )}

          {!dimensions && !specifications && (
            <Box width={'100%'} height={{ '2xl': '200px' }} />
          )}

          {dimensions && (
            <Box
              marginBottom={{
                base: '20px',
                sm: '30px',
                md: '40px',
                lg: '60px',
                xl: '80px',
                '2xl': '100px'
              }}
            >
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
          //marginBottom={{ base: '30px', sm: '50px' }}
          //paddingX={{ base: '0', sm: '5%' }}
          >
            <ProductWithBP {...productWithBP} />
          </Box>
        )}
      </Flex>
    </Flex>
  )
}
