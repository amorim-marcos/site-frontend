import { Flex, Heading, Table, Tbody, Tr, Td, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { ResponsiveCss } from 'types/responsive'

export type ProductDimensionsProps = {
  tableBorderColor?: string
  tableBackgroundColor?: string
  dimensions: DimensionsProps
  tableWidth?: ResponsiveCss
  widthFirst?: boolean
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
    sm: '350px',
    md: '500px',
    lg: '500px',
    xl: '400px',
    '2xl': '450px'
  },
  widthFirst = false
}: ProductDimensionsProps) => {
  const product = useTranslation('product')

  return (
    <Flex justifyContent="space-between">
      <Flex flexDirection="column">
        <Heading {...headingStyle}>{product.t('dimensionsMM')}</Heading>
        <Table
          fontWeight="light"
          fontSize={{ base: '12px', sm: '12px', lg: '13px', xl: '14px' }}
          fontFamily="Montserrat"
          //width={tableWidth}
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
                {widthFirst ? product.t('width') : product.t('length')}
              </Td>
              <Td {...tableItemStyle(tableBorderColor, tableBackgroundColor)}>
                {widthFirst ? dimensions?.width : dimensions?.length}
              </Td>
            </Tr>
            <Tr>
              <Td {...tableItemStyle(tableBorderColor, tableBackgroundColor)}>
                {!widthFirst ? product.t('width') : product.t('length')}
              </Td>
              <Td {...tableItemStyle(tableBorderColor, tableBackgroundColor)}>
                {!widthFirst ? dimensions?.width : dimensions?.length}
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <Text
          fontSize={{ base: '10px', sm: '10px', lg: '12px', xl: '12px' }}
          color="green.900"
          mt={"1%"}
        >
          {product.t('otherDimensionsText')}
        </Text>
      </Flex>
    </Flex>
  )
}

export const tableItemStyle = (borderColor: string, background: string) => ({
  padding: '0px',
  bg: background,
  height: {
    base: '20px',
    sm: '20px',
    md: '25px',
    lg: '30px',
    xl: '35px',
    '2xl': '40px'
  },
  border: `3px solid ${borderColor}`,
  paddingLeft: { base: '5px', md: '15px' },
  paddingRight: { base: '5px', md: '15px' }
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
    base: '18px', lg: '22px', xl: '24px'
  },
  fontWeight: 'extrabold',
  zIndex: 'docked'
}
