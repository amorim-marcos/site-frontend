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
  widthFirst = false
}: ProductDimensionsProps) => {
  const componentsLabels = useTranslation('components')

  return (
    <Flex
    // justifyContent="space-between"
    // bg="blue"
    >
      <Flex flexDirection="column">
        <Text
          as={'h3'}
          variant={'h3'}
          color="green.900"
          fontWeight={'extrabold'}
        >
          {componentsLabels.t('product.dimensionsMM')}
        </Text>
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
                {componentsLabels.t('product.thickness')}
              </Td>
              <Td {...tableItemStyle(tableBorderColor, tableBackgroundColor)}>
                {dimensions?.thickness}
              </Td>
            </Tr>
            <Tr>
              <Td {...tableItemStyle(tableBorderColor, tableBackgroundColor)}>
                {widthFirst
                  ? componentsLabels.t('product.width')
                  : componentsLabels.t('product.length')}
              </Td>
              <Td {...tableItemStyle(tableBorderColor, tableBackgroundColor)}>
                {widthFirst ? dimensions?.width : dimensions?.length}
              </Td>
            </Tr>
            <Tr>
              <Td {...tableItemStyle(tableBorderColor, tableBackgroundColor)}>
                {!widthFirst
                  ? componentsLabels.t('product.width')
                  : componentsLabels.t('product.length')}
              </Td>
              <Td {...tableItemStyle(tableBorderColor, tableBackgroundColor)}>
                {!widthFirst ? dimensions?.width : dimensions?.length}
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <Text
          as={'h6'}
          variant={'h6'}
          fontSize={{ base: '10px', sm: '11px', lg: '11px', xl: '11px' }}
          fontWeight={'normal'}
          color="green.300"
          mt={'1%'}
        >
          {componentsLabels.t('product.otherDimensionsText')}
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
