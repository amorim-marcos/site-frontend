import { Flex, Text, Box, List, ListItem, ListIcon } from '@chakra-ui/react'
import ArrowIcon from '@components/Icons/ArrowIcon'
import ProductDimensions from '@components/ProductDimensions'
import { DimensionsProps } from '@components/ProductDimensions/ProductDimensions'
import { useTranslation } from 'react-i18next'
import parser from 'react-html-parser'
import { Wrapper } from './style'

export type TecaInfoProps = {
  dimensions?: DimensionsProps
  usesAndApplications?: string | Array<string>
  machinability?: string
  supplyInformation?: Array<string>
}
export const TecaInfo = ({
  dimensions,
  usesAndApplications,
  machinability,
  supplyInformation
}: TecaInfoProps) => {
  const product = useTranslation('product')

  return (
    <Flex
      padding="4%"
      justifyContent="space-around"
      maxWidth="1920px"
      marginX="auto"
      flexDirection={{ base: 'column', sm: 'row' }}
    >
      <Box
        marginBottom={{ base: '20px', sm: '0' }}
        paddingLeft={{ base: '15px' }}
        width={{ base: '100%', sm: '45%' }}
      >
        <Text variant={'productTitle' as any}>
          {product.t('machinability')}
        </Text>
        {/* {machinability && (
          <Text variant={'productBody' as any}>{parser(machinability)}</Text>
        )} */}

        {machinability && (
          <Wrapper>
            <Text variant={'productBody' as any}>{parser(machinability)}</Text>
          </Wrapper>
        )}

        {/* {machinability &&
          machinability.map((m) => <ItemCite key={m} text={m} />)} */}

        {/* <Box marginTop="20px">
          <Text variant={'productBody' as any}>
            {product.t('supplyInformationTitleTeca')}
          </Text>

          {supplyInformation &&
            supplyInformation.map((s) => <ItemCite key={s} text={s} />)}
        </Box> */}
      </Box>

      <Flex
        justifyContent="flex-start"
        width={{ base: '100%', sm: '45%' }}
        flexDirection="column"
      >
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
            <Text variant={'productTitle' as any}>
              {product.t('UsesAndApplications')}
            </Text>
            <Text variant={'productBody' as any}>{usesAndApplications}</Text>
          </Box>
        )}
        {dimensions && (
          <Box>
            <ProductDimensions
              dimensions={dimensions}
              tableBackgroundColor="#E8DDD5"
              tableBorderColor="#FFF"
              tableWidth={{
                base: '210px',
                xs: '320px',
                sm: '250px',
                md: '350px',
                lg: '480px',
                xl: '610px',
                '2xl': '710px'
              }}
            />
          </Box>
        )}
      </Flex>
    </Flex>
  )
}

const ItemCite = ({ text = '' }) => {
  return (
    <Flex marginBottom="5px">
      <Box
        margin={{
          base: '3px',
          sm: '3px',
          md: '4px',
          lg: '6px',
          xl: '8px',
          '2xl': '10px'
        }}
      >
        <ArrowIcon
          width={{
            base: '10px',
            sm: '3px',
            md: '4px',
            lg: '6px',
            xl: '8px',
            '2xl': '10px'
          }}
          stroke="#E8DDD5"
        />
      </Box>
      <Text variant={'productBody' as any}>{text}</Text>
    </Flex>
  )
}
