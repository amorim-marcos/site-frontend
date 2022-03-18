import { Image, Flex, Box, Text, BoxProps } from '@chakra-ui/react'

export type PlusInfoTableProps = {
  rows?: {
    column1: string
    column2: string
    column3: string
    column4: string
    column5: string
    plus: boolean
  }[]
}

export const PlusInfoTable = ({ rows }: PlusInfoTableProps) => {
  return (
    <Box
      padding="10px"
      marginTop={{ base: '0', sm: '20px' }}
      marginLeft={{ base: '0', sm: '20px' }}
    >
      <Flex flexDirection="column">
        <Flex marginBottom="5px">
          <Box w={firstItemWidth}></Box>
          <Box
            w={itemWidthDoble}
            borderBottom="solid #C2DFB7"
            borderBottomWidth={{ base: '5px', sm: '3px', lg: '5px' }}
            borderX="1px solid #E8E8E8"
            display="flex"
            alignItems="center"
            justifyContent="center"
            paddingBottom="20px"
          >
            <Image
              w={{
                base: '20px',
                sm: '11px',
                md: '15px',
                lg: '19px',
                xl: '23px',
                '2xl': '29px'
              }}
              src="/img/gota.png"
              aria-label="gotaIcon.png"
            />
          </Box>
          <Box
            w={itemWidthDoble}
            borderBottom="solid #C2DFB7"
            borderBottomWidth={{ base: '5px', sm: '3px', lg: '5px' }}
            borderX="1px solid #E8E8E8"
            display="flex"
            alignItems="center"
            justifyContent="center"
            paddingBottom="20px"
          >
            <Image
              w={{
                base: '36px',
                sm: '22px',
                md: '29px',
                lg: '37px',
                xl: '44px',
                '2xl': '56px'
              }}
              src="/img/mdfIcon.png"
              aria-label="mdfIcon.png"
            />
          </Box>
        </Flex>
        <Flex marginBottom="5px">
          <Flex
            justifyContent="center"
            alignItems="center"
            {...tableItemTitle}
            width={firstItemWidth}
          >
            <Text
              variant={'productBody' as any}
              color="#82A872"
              fontWeight="bold"
              fontSize={tableText}
            >
              CORPO DE PROVA
            </Text>
          </Flex>
          <Flex alignItems="center" {...tableItemTitle}>
            <Text variant={'productBody' as any} fontSize={tableText}>
              Quantidade de água absorvida
            </Text>
          </Flex>
          <Flex alignItems="center" {...tableItemTitle}>
            <Text variant={'productBody' as any} fontSize={tableText}>
              Absorção
            </Text>
          </Flex>
          <Flex alignItems="center" {...tableItemTitle}>
            <Text variant={'productBody' as any} fontSize={tableText}>
              Aumento de espessura
            </Text>
          </Flex>
          <Flex alignItems="center" {...tableItemTitle}>
            <Text variant={'productBody' as any} fontSize={tableText}>
              Inchamento
            </Text>
          </Flex>
        </Flex>
        {rows &&
          rows.map((r, j) => {
            return (
              <Flex key={j}>
                <Box
                  {...tableFirstItem}
                  w={firstItemWidth}
                  bg={r.plus ? '#C2DFB7' : '#FFF'}
                >
                  <Text variant={'productBody' as any} fontSize={tableText}>
                    {r.column1}
                  </Text>
                </Box>
                <Box {...(r.plus ? tableItemPlus : tableItem)}>
                  <Text variant={'productBody' as any} fontSize={tableText}>
                    {r.column2}
                  </Text>
                </Box>
                <Box {...(r.plus ? tableItemPlus : tableItem)}>
                  <Text variant={'productBody' as any} fontSize={tableText}>
                    {r.column3}
                  </Text>
                </Box>
                <Box {...(r.plus ? tableItemPlus : tableItem)}>
                  <Text variant={'productBody' as any} fontSize={tableText}>
                    {r.column4}
                  </Text>
                </Box>
                <Box {...(r.plus ? tableItemPlus : tableItem)}>
                  <Text variant={'productBody' as any} fontSize={tableText}>
                    {r.column5}
                  </Text>
                </Box>
              </Flex>
            )
          })}
      </Flex>
    </Box>
  )
}

export const tableItemStyle = (borderColor: string, background: string) => ({
  bg: background,
  height: {
    base: '45px',
    sm: '20px',
    md: '25px',
    lg: '30px',
    xl: '35px',
    '2xl': '30px'
  },
  border: `4px solid ${borderColor}`,
  padding: '10px'
})

const tableText = {
  base: '6px',
  xs: '8px',
  sm: '5px',
  md: '9px',
  lg: '11px',
  xl: '14px',
  '2xl': '17px'
}

const firstItemWidth = {
  base: '100px',
  sm: '72px',
  md: '129px',
  lg: '170px',
  xl: '200px',
  '2xl': '260px'
}

const itemWidth = {
  base: '100px',
  sm: '68px',
  md: '90px',
  lg: '113px',
  xl: '136px',
  '2xl': '170px'
}

const itemWidthDoble = {
  base: '200px',
  sm: '136px',
  md: '180px',
  lg: '226px',
  xl: '272px',
  '2xl': '340px'
}

const itemPaddingY = {
  base: '2px',
  sm: '3px',
  md: '4px',
  lg: '5px',
  xl: '6px',
  '2xl': '7px'
}

const itemPaddingRight = {
  base: '5px',
  sm: '10px',
  md: '15px',
  lg: '20px',
  xl: '25px',
  '2xl': '30px'
}

const itemPaddingX = {
  base: '5px',
  sm: '3px',
  md: '6px',
  lg: '9px',
  xl: '12px',
  '2xl': '15px'
}

const tableFirstItem: BoxProps = {
  width: firstItemWidth,
  bg: '#FFF',
  border: '1px solid #E8E8E8',
  paddingX: itemPaddingX,
  paddingY: itemPaddingY,
  paddingRight: itemPaddingRight
}

const tableItem: BoxProps = {
  width: itemWidth,
  bg: '#FFF',
  border: '1px solid #E8E8E8',
  paddingX: itemPaddingX,
  paddingY: itemPaddingY,
  paddingRight: itemPaddingRight
}

const tableItemPlus: BoxProps = {
  width: itemWidth,
  bg: '#C2DFB7',
  border: '1px solid #E8E8E8',
  paddingX: itemPaddingX,
  paddingY: itemPaddingY,
  paddingRight: itemPaddingRight
}

const tableItemTitle: BoxProps = {
  width: itemWidth,
  bg: 'none',
  border: '1px solid #E8E8E8',
  paddingX: itemPaddingX,
  paddingY: itemPaddingY,
  paddingRight: itemPaddingRight
}
