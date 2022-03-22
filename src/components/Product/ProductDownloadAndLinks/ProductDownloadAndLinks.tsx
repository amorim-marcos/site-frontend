import { Flex, Text, Heading, Link } from '@chakra-ui/react'
import { ProductDownloadItem } from './ProductDownloadItem/ProductDownloadItem'
import { useTranslation } from 'react-i18next'
import ArrowIcon from '@components/Icons/ArrowIcon'

export type ProductDownloadAndLinksProps = {
  qualityCertificate?: boolean
  whereBuy?: boolean
  datasheetUrl?: string
  backgroundColor?: string
  plusProduct?: boolean
}

export const ProductDownloadAndLinks = ({
  qualityCertificate = true,
  whereBuy = true,
  datasheetUrl = '/',
  backgroundColor = '#FEFEFE',
  plusProduct = false
}: ProductDownloadAndLinksProps) => {
  const product = useTranslation('product')
  return (
    <Flex
      flexDirection={{ base: 'column', sm: 'row' }}
      alignItems="center"
      justifyContent="space-around"
      marginTop="4%"
      marginRight={{
        base: '0',
        sm: '1%',
        md: '2%',
        lg: '3%',
        xl: '3%',
        '2xl': '2%'
      }}
      position="relative"
    >
      {datasheetUrl && (
        <Link href={datasheetUrl} isExternal>
          <ProductDownloadItem
            iconName="datasheet"
            text={product.t('datasheet')}
            backgroundColor={backgroundColor}
          />
        </Link>
      )}
      {whereBuy && (
        <Link href="/onde-comprar">
          <ProductDownloadItem
            iconName="location"
            text={product.t('whereBuy')}
            backgroundColor={backgroundColor}
          />
        </Link>
      )}
      {qualityCertificate && (
        <Link href="/certificacoes">
          <ProductDownloadItem
            iconName="qualityCertificate"
            text={product.t('qualityCertificate')}
            backgroundColor={backgroundColor}
          />
        </Link>
      )}
      {plusProduct && (
        <Link href="/products/plus-berneck">
          <Flex
            cursor={'pointer'}
            alignItems="center"
            justifyContent="center"
            position={{ base: 'relative', sm: 'absolute' }}
            marginY={{ base: '30px', sm: '0px' }}
            bottom={{
              base: '0',
              sm: '-45px',
              md: '-50px',
              lg: '-60px',
              xl: '-80px',
              '2xl': '-90px'
            }}
            right="0"
          >
            <Flex
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              marginRight="15px"
            >
              <Text
                fontSize={{
                  base: '18px',
                  sm: '10px',
                  md: '12px',
                  lg: '14px',
                  xl: '16px',
                  '2xl': '18px'
                }}
                color="green.800"
              >
                Saiba mais sobre o{' '}
              </Text>
              <Heading
                color="green.800"
                fontSize={{
                  base: '20px',
                  sm: '12px',
                  md: '14px',
                  lg: '16px',
                  xl: '18px',
                  '2xl': '20px'
                }}
              >
                PLUS BERNECK
              </Heading>
            </Flex>
            <ArrowIcon
              width={{
                base: '30px',
                sm: '10px',
                md: '15px',
                lg: '20px',
                xl: '25px',
                '2xl': '30px'
              }}
              stroke="#0A6C3B"
            />
          </Flex>
        </Link>
      )}
    </Flex>
  )
}
