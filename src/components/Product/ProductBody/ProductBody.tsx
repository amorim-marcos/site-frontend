import { Heading, Flex, Text, Table, Tbody, Tr, Td } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { tableItemStyle, paragraphStyle, headingStyle } from './styles'
import { ProductWithBP } from './ProductWithBP/ProductWithBP'

import { ProductWithBPProps } from './ProductWithBP/ProductWithBP'

export type ProductBodyProps = {
  heading1?: string
  paragraph1?: string | Array<string>
  heading2?: string
  paragraph2?: string
  heading3?: string
  paragraph3?: string | Array<string>
  dimensions?: {
    thickness?: string
    length?: string
    width?: string
  }
  backgroundColor?: string
  secondaryBackground?: string
  productWithBP?: ProductWithBPProps
}
export const ProductBody = ({
  heading1,
  heading2,
  heading3,
  paragraph1,
  paragraph2,
  paragraph3,
  dimensions,
  backgroundColor = 'white.100',
  secondaryBackground = '#FEFEFE',
  productWithBP
}: ProductBodyProps) => {
  const product = useTranslation('product')
  return (
    <Flex
      maxWidth="1920px"
      padding="5%"
      flexDirection="column"
      bg={backgroundColor}
    >
      <Heading {...headingStyle}>{heading1}</Heading>
      {typeof paragraph1 === 'string' ? (
        <Text {...paragraphStyle}>{paragraph1}</Text>
      ) : (
        paragraph1?.map((p, i) => (
          <Text
            key={p}
            {...paragraphStyle}
            marginBottom={i === paragraph1.length - 1 ? '80px' : '50px'}
          >
            {p}
          </Text>
        ))
      )}

      {heading2 && <Heading {...headingStyle}>{heading2}</Heading>}
      {paragraph2 && <Text {...paragraphStyle}>{paragraph2}</Text>}
      {paragraph3 && <Heading {...headingStyle}>{heading3}</Heading>}

      {typeof paragraph3 === 'string' ? (
        <Text {...paragraphStyle}>{paragraph3}</Text>
      ) : (
        paragraph3?.map((p, i) => (
          <Text
            key={p}
            {...paragraphStyle}
            marginBottom={i === paragraph3.length - 1 ? '80px' : '0px'}
          >
            {p}
          </Text>
        ))
      )}

      {dimensions && (
        <Flex justifyContent="space-between">
          <Flex flexDirection="column">
            <Heading {...headingStyle}>{product.t('dimensionsMM')}</Heading>
            <Table
              fontWeight="light"
              fontSize={{
                base: '8px',
                sm: '7px',
                md: '12px',
                lg: '14px',
                xl: '16px',
                '2xl': '18.5px'
              }}
              fontFamily="Montserrat"
              width={{
                base: '200px',
                sm: '170px',
                md: '270px',
                lg: '350px',
                xl: '400px',
                '2xl': '450px'
              }}
              variant="unstyled"
              color="#626161"
            >
              <Tbody>
                <Tr>
                  <Td {...tableItemStyle(backgroundColor, secondaryBackground)}>
                    {product.t('thickness')}
                  </Td>
                  <Td {...tableItemStyle(backgroundColor, secondaryBackground)}>
                    {dimensions?.thickness}
                  </Td>
                </Tr>
                <Tr>
                  <Td {...tableItemStyle(backgroundColor, secondaryBackground)}>
                    {product.t('length')}
                  </Td>
                  <Td {...tableItemStyle(backgroundColor, secondaryBackground)}>
                    {dimensions?.length}
                  </Td>
                </Tr>
                <Tr>
                  <Td {...tableItemStyle(backgroundColor, secondaryBackground)}>
                    {product.t('width')}
                  </Td>
                  <Td {...tableItemStyle(backgroundColor, secondaryBackground)}>
                    {dimensions?.width}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
            <Text
              marginBottom="80px"
              fontSize={{
                base: '6px',
                sm: '8px',
                md: '10px',
                lg: '12px',
                xl: '14px',
                '2xl': '16px'
              }}
              color="green.900"
            >
              {product.t('otherDimensionsText')}
            </Text>
          </Flex>
        </Flex>
      )}
      {productWithBP && <ProductWithBP {...productWithBP} />}
    </Flex>
  )
}
