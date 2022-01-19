import { Flex, Heading, Table, Tbody, Tr, Td, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { ResponsiveCss } from 'types/responsive'

export const tableItemStyle = (borderColor: string, background: string) => ({
  padding: '0px',
  bg: background,
  height: {
    base: '15px',
    sm: '20px',
    md: '25px',
    lg: '30px',
    xl: '35px',
    '2xl': '40px'
  },
  border: `3px solid ${borderColor}`,
  paddingLeft: '15px'
})

const headingStyle = {
  marginBottom: {
    base: '8px',
    sm: '9px',
    md: '11px',
    lg: '14px',
    xl: '17px',
    '2xl': '20px'
  },
  color: 'green.900',
  fontSize: {
    base: '8px',
    sm: '11px',
    md: '14px',
    lg: '18px',
    xl: '22px',
    '2xl': '30px'
  },
  zIndex: 'docked'
}

export type ProductDimensionsProps = {
  tableBorderColor?: string
  tableBackgroundColor?: string
  dimensions: DimensionsProps
  tableWidth?: ResponsiveCss
}

export type DimensionsProps = {
  thickness?: string
  length?: string
  width?: string
}

export const ProductDimensions = ({
  tableBackgroundColor = '#FFF',
  tableBorderColor = '#000',
  dimensions,
  tableWidth = {
    base: '200px',
    sm: '170px',
    md: '270px',
    lg: '350px',
    xl: '400px',
    '2xl': '450px'
  }
}: ProductDimensionsProps) => {
  const product = useTranslation('product')

  return (
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
          width={tableWidth}
          variant="unstyled"
          color="#626161"
        >
          <Tbody>
            <Tr>
              <Td {...tableItemStyle(tableBorderColor, tableBackgroundColor)}>
                {product.t('thickness')}
              </Td>
              <Td {...tableItemStyle(tableBorderColor, tableBackgroundColor)}>
                {dimensions?.thickness}
              </Td>
            </Tr>
            <Tr>
              <Td {...tableItemStyle(tableBorderColor, tableBackgroundColor)}>
                {product.t('length')}
              </Td>
              <Td {...tableItemStyle(tableBorderColor, tableBackgroundColor)}>
                {dimensions?.length}
              </Td>
            </Tr>
            <Tr>
              <Td {...tableItemStyle(tableBorderColor, tableBackgroundColor)}>
                {product.t('width')}
              </Td>
              <Td {...tableItemStyle(tableBorderColor, tableBackgroundColor)}>
                {dimensions?.width}
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <Text
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
  )
}
