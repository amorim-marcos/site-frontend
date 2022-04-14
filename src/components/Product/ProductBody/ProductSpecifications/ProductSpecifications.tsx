import { Text, Table, Tbody, Tr, Td } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export const tableItemStyle = (borderColor: string, background: string) => ({
  padding: '0px',
  paddingLeft: {
    base: '7px',
    sm: '7px',
    md: '11px',
    lg: '14px',
    xl: '18px',
    '2xl': '22px'
  },
  bg: background,
  height: {
    base: '45px',
    sm: '20px',
    md: '25px',
    lg: '30px',
    xl: '35px',
    '2xl': '40px'
  },
  border: `3px solid ${borderColor}`
})

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
  const product = useTranslation('product')

  return (
    <>
      <Text
          color="green.900"
          w={{ base: '70%', md: '50%' }}
        >
          {product.t('Specifications')}
      </Text>
      <Table
        fontWeight="light"
        fontSize={{
          base: '8px',
          sm: '9px',
          md: '11px',
          lg: '13px',
          xl: '15px',
          '2xl': '17px'
        }}
        fontFamily="Montserrat"
        width={{
          base: '100%',
          sm: '65%',
          '2xl': '50%'
        }}
        variant="unstyled"
        color={textColor}
      >
        <Tbody>
          {content.map((i, j) => {
            return (
              <Tr key={j}>
                <Td
                  {...tableItemStyle(tableBorderColor, tableBackgroundColor)}
                  width="40%"
                >
                  <Text variant={'productBody' as any}>{i.title}</Text>
                </Td>
                <Td
                  {...tableItemStyle(tableBorderColor, tableBackgroundColor)}
                  width="60%"
                >
                  <Text variant={'productBody' as any}>{i.description}</Text>
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </>
  )
}
