import { Heading, Table, Tbody, Tr, Td } from '@chakra-ui/react'
import { headingStyle } from '../styles'
import { useTranslation } from 'react-i18next'

export const tableItemStyle = (borderColor: string, background: string) => ({
  padding: '0px',
  paddingLeft: {
    base: '3px',
    sm: '7px',
    md: '11px',
    lg: '14px',
    xl: '18px',
    '2xl': '22px'
  },
  bg: background,
  height: {
    base: '15px',
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
      <Heading {...headingStyle}>{product.t('Specifications')}</Heading>
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
          base: '50%'
        }}
        variant="unstyled"
        color={textColor}
      >
        <Tbody>
          {content.map((i) => {
            return (
              <Tr key={i.title}>
                <Td
                  {...tableItemStyle(tableBorderColor, tableBackgroundColor)}
                  width="40%"
                >
                  {i.title}
                </Td>
                <Td
                  {...tableItemStyle(tableBorderColor, tableBackgroundColor)}
                  width="60%"
                >
                  {i.description}
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </>
  )
}
