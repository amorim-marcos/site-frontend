import { Image, Flex, Box, Text, BoxProps } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

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
  const componentsLabels = useTranslation('components')
  return (
    <Box>
      <Flex flexDirection="column" bg="#F3F3F3">
        <Flex marginBottom="5px">
          <Box w={firstItemWidth}></Box>
          <Box
            w={itemWidthDoble}
            borderBottom="solid #C2DFB7"
            borderBottomWidth={{ base: '5px', sm: '3px', lg: '5px' }}
            margin="1px"
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
            margin="1px"
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
              {componentsLabels.t('plusInfoTable.testBody')}
            </Text>
          </Flex>
          <Flex alignItems="center" {...tableItemTitle}>
            <Text
              variant={'productBody' as any}
              fontSize={tableText}
              color="#626161"
            >
              {componentsLabels.t('plusInfoTable.amountOfWaterAbsorbed')}
            </Text>
          </Flex>
          <Flex alignItems="center" {...tableItemTitle}>
            <Text
              variant={'productBody' as any}
              fontSize={tableText}
              color="#626161"
            >
              {componentsLabels.t('plusInfoTable.absorption')}
            </Text>
          </Flex>
          <Flex alignItems="center" {...tableItemTitle}>
            <Text
              variant={'productBody' as any}
              fontSize={tableText}
              color="#626161"
            >
              {componentsLabels.t('plusInfoTable.thicknessIncrease')}
            </Text>
          </Flex>
          <Flex alignItems="center" {...tableItemTitle}>
            <Text
              variant={'productBody' as any}
              fontSize={tableText}
              color="#626161"
            >
              {componentsLabels.t('plusInfoTable.swelling')}
            </Text>
          </Flex>
        </Flex>
        {rows &&
          rows.map((r, j) => {
            return (
              <Flex
                position={'relative'}
                key={j}
                maxWidth={{ base: '365px', md: '100vw' }}
              >
                {r.plus && (
                  <Image
                    src="/img/plus.svg"
                    position={'absolute'}
                    right="0"
                    top="25%"
                    width={'30px'}
                    display={{ base: 'none', sm: 'block' }}
                  />
                )}
                <Box
                  {...tableFirstItem}
                  w={firstItemWidth}
                  bg={r.plus ? '#C2DFB7' : '#FFF'}
                >
                  <Text
                    variant={'productBody' as any}
                    fontSize={tableText}
                    color={'#626161'}
                    fontWeight={r.plus ? 'bold' : 'normal'}
                  >
                    {r.column1}
                  </Text>
                </Box>
                <Box {...(r.plus ? tableItemPlus : tableItem)}>
                  <Text
                    variant={'productBody' as any}
                    fontSize={tableText}
                    color={'#626161'}
                    fontWeight={r.plus ? 'bold' : 'normal'}
                  >
                    {r.column2}
                  </Text>
                </Box>
                <Box {...(r.plus ? tableItemPlus : tableItem)}>
                  <Text
                    variant={'productBody' as any}
                    fontSize={tableText}
                    color={'#626161'}
                    fontWeight={r.plus ? 'bold' : 'normal'}
                  >
                    {r.column3}
                    {' %'}
                  </Text>
                </Box>
                <Box {...(r.plus ? tableItemPlus : tableItem)}>
                  <Text
                    variant={'productBody' as any}
                    fontSize={tableText}
                    color={'#626161'}
                    fontWeight={r.plus ? 'bold' : 'normal'}
                  >
                    {r.column4}
                    {' mm'}
                  </Text>
                </Box>
                <Box {...(r.plus ? tableItemPlus : tableItem)}>
                  <Text
                    variant={'productBody' as any}
                    fontSize={tableText}
                    color={'#626161'}
                    fontWeight={r.plus ? 'bold' : 'normal'}
                  >
                    {r.column5}
                    {' %'}
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
  base: '60px',
  sm: '72px',
  md: '129px',
  lg: '170px',
  xl: '200px',
  '2xl': '260px'
}

const itemWidth = {
  base: '60px',
  sm: '68px',
  md: '90px',
  lg: '113px',
  xl: '136px',
  '2xl': '170px'
}

const itemWidthDoble = {
  base: '126px',
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
  margin: '2px',
  paddingX: itemPaddingX,
  paddingY: itemPaddingY,
  paddingRight: itemPaddingRight
}

const tableItem: BoxProps = {
  width: itemWidth,
  bg: '#FFF',
  margin: '2px',
  paddingX: itemPaddingX,
  paddingY: itemPaddingY,
  paddingRight: itemPaddingRight
}

const tableItemPlus: BoxProps = {
  width: itemWidth,
  bg: '#C2DFB7',
  margin: '2px',
  paddingX: itemPaddingX,
  paddingY: itemPaddingY,
  paddingRight: itemPaddingRight
}

const tableItemTitle: BoxProps = {
  width: itemWidth,
  bg: 'none',
  // border: '1px solid #F3F3F3',
  paddingX: itemPaddingX,
  paddingY: itemPaddingY,
  paddingRight: itemPaddingRight
}
