import { Flex, Text, Box, List, ListItem, ListIcon } from '@chakra-ui/react'
import ArrowIcon from '@components/Icons/ArrowIcon'
import ProductDimensions from '@components/ProductDimensions'
import { DimensionsProps } from '@components/ProductDimensions/ProductDimensions'
import { useTranslation } from 'react-i18next'
import parser from 'react-html-parser'
import { Wrapper } from './style'
import HtmlTextParser from '@components/HtmlTextParser'
import Paragraph from '@components/Paragraph'

export type TecaInfoProps = {
  dimensions?: DimensionsProps
  usesAndApplications?: string
  machinability?: string
  supplyInformation?: Array<string>
}
export const TecaInfo = ({
  dimensions,
  usesAndApplications,
  machinability,
  supplyInformation
}: TecaInfoProps) => {
  const componentsLabels = useTranslation('components')

  return (
    <Flex
      maxWidth="1536px"
      marginX="auto"
      flexDirection={{ base: 'column', sm: 'row' }}
      padding={{ base: '5% 0 10% 5%', '2xl': '5% 0 5% 3%' }}
    >
      <Box
        marginBottom={{ base: '20px', sm: '0' }}
        width={{ base: '100%', sm: '45%' }}
      >
        <Text
          as={'h3'}
          variant={'h3'}
          color="green.900"
          fontWeight={'extrabold'}
        >
          {componentsLabels.t('product.machinability')}
        </Text>

        {machinability && (
          <Wrapper>
            <Text variant={'productBody' as any}>
              <HtmlTextParser>{machinability}</HtmlTextParser>
            </Text>
            {/* <Text variant={'productBody' as any}>{parser(machinability)}</Text> */}
          </Wrapper>
        )}
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
            <Text
              as={'h3'}
              variant={'h3'}
              color="green.900"
              fontWeight={'extrabold'}
            >
              {componentsLabels.t('product.usesAndApplications')}
            </Text>
            <Text variant={'productBody' as any}>
              <HtmlTextParser>{usesAndApplications}</HtmlTextParser>
            </Text>
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
              widthFirst
            />
          </Box>
        )}
      </Flex>
    </Flex>
  )
}
