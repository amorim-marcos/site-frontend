import { Flex, Text, Heading, Link, Box } from '@chakra-ui/react'
import { ProductDownloadItem } from './ProductDownloadItem/ProductDownloadItem'
import { useTranslation } from 'react-i18next'
import ArrowIcon from '@components/Icons/ArrowIcon'
import ConditionalLanguageRender from '@components/ConditionalLanguageRender/ConditionalLanguageRender'

export type ProductDownloadAndLinksProps = {
  textColor?: string
  hoverColor?: string
  qualityCertificate?: boolean
  whereBuy?: boolean | string
  datasheetUrl?: string
  backgroundColor?: string
  plusProduct?: boolean
}

export const ProductDownloadAndLinks = ({
  qualityCertificate = true,
  whereBuy = true,
  datasheetUrl = '/',
  backgroundColor = '#FEFEFE',
  plusProduct = false,
  textColor = '#665E5A',
  hoverColor = '#595959'
}: ProductDownloadAndLinksProps) => {
  const componentsLabels = useTranslation('components')
  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      // alignItems="center"
      // justifyContent="space-around"
      marginTop={{ base: '0', md: '5%' }}
      marginRight={{
        base: '0',
        md: '2%',
        lg: '3%',
        xl: '3%',
        '2xl': '2%'
      }}
      position="relative"
      marginLeft={{ base: '-7px', md: '0' }}
      // bg="violet"
    >
      {datasheetUrl && (
        <Link href={datasheetUrl} _hover={{ outline: 'none' }} isExternal>
          <ProductDownloadItem
            textColor={textColor}
            hoverColor={hoverColor}
            iconName="datasheet"
            text={componentsLabels.t('product.datasheet')}
            backgroundColor={backgroundColor}
          />
        </Link>
      )}
      <ConditionalLanguageRender>
        {whereBuy && typeof whereBuy === 'string' ? (
          <Box onClick={() => window.open(whereBuy, '_blank')}>
            <ProductDownloadItem
              textColor={textColor}
              hoverColor={hoverColor}
              iconName="location"
              text={componentsLabels.t('product.whereBuy')}
              backgroundColor={backgroundColor}
            />
          </Box>
        ) : (
          <Link href="/where-to-buy" _hover={{ outline: 'none' }}>
            <ProductDownloadItem
              textColor={textColor}
              hoverColor={hoverColor}
              iconName="location"
              text={componentsLabels.t('product.whereBuy')}
              backgroundColor={backgroundColor}
            />
          </Link>
        )}
      </ConditionalLanguageRender>
      {qualityCertificate && (
        <Link href="/certifications" _hover={{ outline: 'none' }}>
          <ProductDownloadItem
            textColor={textColor}
            hoverColor={hoverColor}
            iconName="qualityCertificate"
            text={componentsLabels.t('product.qualityCertificate')}
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
            position={{ base: 'relative', md: 'absolute' }}
            marginY={{ base: '30px', md: '0px' }}
            bottom={{
              base: '0',
              sm: '0',
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
                  base: '12px',
                  sm: '10px',
                  md: '12px',
                  lg: '14px',
                  xl: '16px',
                  '2xl': '18px'
                }}
                color="green.800"
              >
                {componentsLabels.t('product.knowMoreAbout')}{' '}
              </Text>
              <Heading
                color="green.800"
                fontSize={{
                  base: '14px',
                  sm: '12px',
                  md: '14px',
                  lg: '16px',
                  xl: '18px',
                  '2xl': '20px'
                }}
              >
                {componentsLabels.t('product.plusBerneck')}
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
