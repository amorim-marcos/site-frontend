import { Flex, Text, Heading } from '@chakra-ui/react'
import { ProductDownloadItem } from './ProductDownloadItem/ProductDownloadItem'
import { useTranslation } from 'react-i18next'
import ArrowIcon from '@components/Icons/ArrowIcon'

export type ProductDownloadAndLinksProps = {
  qualityCertificate?: boolean
  whereBuy?: boolean
  datasheet?: boolean
  backgroundColor?: string
  plusProduct?: boolean
}

export const ProductDownloadAndLinks = ({
  qualityCertificate = true,
  whereBuy = true,
  datasheet = true,
  backgroundColor = '#FEFEFE',
  plusProduct = false
}: ProductDownloadAndLinksProps) => {
  const product = useTranslation('product')
  return (
    <Flex
      alignItems="center"
      justifyContent="space-around"
      marginRight={{
        base: '1.5%',
        sm: '1%',
        md: '2%',
        lg: '3%',
        xl: '3%',
        '2xl': '4%'
      }}
      paddingX={{
        base: '3px',
        sm: '5px',
        md: '20px',
        lg: '10px',
        xl: '20px'
      }}
      w={
        qualityCertificate && whereBuy && datasheet
          ? {
              base: '250px',
              sm: '320px',
              md: '399px',
              lg: '520px',
              xl: '650px',
              '2xl': '50%'
            }
          : {
              base: '250px',
              sm: '220px',
              md: '300px',
              lg: '375px',
              xl: '480px',
              '2xl': '40%'
            }
      }
      h={{
        base: '40px',
        sm: '50px',
        md: '65px',
        lg: '85px',
        xl: '100px',
        '2xl': '136px'
      }}
      bg={backgroundColor}
      position="relative"
      maxWidth="930px"
    >
      {datasheet && (
        <ProductDownloadItem
          iconName="datasheet"
          text={product.t('datasheet')}
        />
      )}
      {whereBuy && (
        <ProductDownloadItem iconName="location" text={product.t('whereBuy')} />
      )}
      {qualityCertificate && (
        <ProductDownloadItem
          iconName="qualityCertificate"
          text={product.t('qualityCertificate')}
        />
      )}
      {plusProduct && (
        <Flex
          alignItems="center"
          justifyContent="center"
          position="absolute"
          bottom={{
            base: '-40px',
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
                base: '8px',
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
                base: '10px',
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
              base: '5px',
              sm: '10px',
              md: '15px',
              lg: '20px',
              xl: '25px',
              '2xl': '30px'
            }}
            stroke="#0A6C3B"
          />
        </Flex>
      )}
    </Flex>
  )
}
