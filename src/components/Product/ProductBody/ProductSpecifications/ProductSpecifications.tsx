import { Text, Table, Tbody, Tr, Td, Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export type ProductSpecificationProps = {
  tableBorderColor?: string
  tableBackgroundColor?: string
  content: Array<Specification>
  textColor?: string
}

export type Specification = {
  title: string
  description: string
}

export const ProductSpecification = ({
  tableBackgroundColor = 'green',
  tableBorderColor = 'blue',
  textColor = 'green.900',
  content
}: ProductSpecificationProps) => {
  const componentsLabels = useTranslation('components')

  return (
    <>
      <Flex
      // justifyContent="space-between"
      // bg="red"
      >
        <Flex flexDirection="column">
          <Text
            as={'h3'}
            variant={'h3'}
            color="green.900"
            fontWeight={'extrabold'}
          >
            {componentsLabels.t('product.specifications')}
          </Text>
          <Table
            fontWeight="light"
            fontSize={{ base: '12px', sm: '12px', lg: '13px', xl: '14px' }}
            fontFamily="Montserrat"
            //width={tableWidth}
            variant="unstyled"
            color={textColor}
          >
            <Tbody>
              {content &&
                content.map((i, j) => {
                  return (
                    <Tr key={j}>
                      <Td
                        {...tableItemStyle(
                          tableBorderColor,
                          tableBackgroundColor
                        )}
                      >
                        {i.title}
                      </Td>
                      <Td
                        {...tableItemStyle(
                          tableBorderColor,
                          tableBackgroundColor
                        )}
                      >
                        {i.description}
                      </Td>
                    </Tr>
                  )
                })}
            </Tbody>
          </Table>
        </Flex>
      </Flex>
    </>
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
