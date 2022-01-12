import {
  Heading,
  Flex,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  Center,
  Image
} from '@chakra-ui/react'
import { ProductDownloadItem } from './ProductDownloadItem/ProductDownloadItem'
import { useTranslation } from 'react-i18next'
import { tableItemStyle, paragraphStyle, headingStyle } from './styles'

export type ProductBodyProps = {
  heading1?: string
  paragraph1?: string | Array<string>
  heading2?: string
  paragraph2?: string
  heading3?: string
  paragraph3?: string
  dimensions?: {
    thickness?: string
    length?: string
    width?: string
  }
  backgroundColor?: string
  secondaryBackground?: string
  whereBuy?: boolean
  qualityCertificate?: boolean
  datasheet?: boolean
}
export const ProductBody = ({
  heading1,
  heading2,
  heading3,
  paragraph1,
  paragraph2,
  paragraph3,
  dimensions,
  backgroundColor = 'white.100',
  secondaryBackground = '#FEFEFE',
  whereBuy = false,
  qualityCertificate = false,
  datasheet = false
}: ProductBodyProps) => {
  const product = useTranslation('product')
  return (
    <Flex
      maxWidth="1920px"
      padding="90px"
      flexDirection="column"
      bg={backgroundColor}
    >
      <Heading {...headingStyle}>{heading1}</Heading>
      {typeof paragraph1 === 'string' ? (
        <Text {...paragraphStyle}>{paragraph1}</Text>
      ) : (
        paragraph1?.map((p, i) => (
          <Text
            key={p}
            {...paragraphStyle}
            marginBottom={i === paragraph1.length - 1 ? '80px' : '50px'}
          >
            {p}
          </Text>
        ))
      )}

      <Heading {...headingStyle}>{heading2}</Heading>
      <Text {...paragraphStyle}>{paragraph2}</Text>
      <Heading {...headingStyle}>{heading3}</Heading>
      <Text {...paragraphStyle}>{paragraph3}</Text>
      <Flex justifyContent="space-between">
        <Flex flexDirection="column">
          <Heading {...headingStyle}>{product.t('dimensionsMM')}</Heading>
          <Table
            fontWeight="light"
            fontSize="18.5px"
            fontFamily="Montserrat"
            width="450px"
            variant="unstyled"
            color="#626161"
          >
            <Tbody>
              <Tr>
                <Td {...tableItemStyle(backgroundColor, secondaryBackground)}>
                  {product.t('thickness')}
                </Td>
                <Td {...tableItemStyle(backgroundColor, secondaryBackground)}>
                  {dimensions?.thickness}
                </Td>
              </Tr>
              <Tr>
                <Td {...tableItemStyle(backgroundColor, secondaryBackground)}>
                  {product.t('length')}
                </Td>
                <Td {...tableItemStyle(backgroundColor, secondaryBackground)}>
                  {dimensions?.length}
                </Td>
              </Tr>
              <Tr>
                <Td {...tableItemStyle(backgroundColor, secondaryBackground)}>
                  {product.t('width')}
                </Td>
                <Td {...tableItemStyle(backgroundColor, secondaryBackground)}>
                  {dimensions?.width}
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Text marginBottom="80px" fontSize="16px" color="green.900">
            {product.t('otherDimensionsText')}
          </Text>
        </Flex>
        {(qualityCertificate || whereBuy || datasheet) && (
          <Flex
            alignItems="center"
            justifyContent="space-around"
            marginTop="25px"
            w={qualityCertificate && whereBuy && datasheet ? '930px' : '789px'}
            h="136px"
            bg={secondaryBackground}
          >
            {datasheet && (
              <ProductDownloadItem
                iconName="datasheet"
                text={product.t('datasheet')}
              />
            )}
            {whereBuy && (
              <ProductDownloadItem
                iconName="location"
                text={product.t('whereBuy')}
              />
            )}
            {qualityCertificate && (
              <ProductDownloadItem
                iconName="qualityCertificate"
                text={product.t('qualityCertificate')}
              />
            )}
          </Flex>
        )}
      </Flex>
      <Flex
        marginX="auto"
        w="100%"
        bg="white.100"
        alignItems="flex-start"
        justifyContent="flex-start"
        paddingX="30px"
        boxShadow="0px 0px 15px #00000007"
        position="relative"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          flexDirection="column"
          paddingY="160px"
          width="50%"
          position="relative"
        >
          <Heading fontWeight="light" fontSize="33px" color="#72675E">
            HDF PLUS BERNECK® com BP
          </Heading>
          <Text fontSize="20px">
            Inove nos projetos com os acabamentos BP em HDF PLUS, laminados
            melamínicos com a proteção do PLUS BERNECK .
          </Text>
          <Center
            position="absolute"
            bottom="-39px"
            bg="#ACCC9F"
            _hover={{ bg: '#96BC87' }}
            h="78px"
            width="80%"
            borderRadius="17px"
            cursor="pointer"
          >
            <Heading fontSize="18px" color="#FFF">
              Conheça todos os padrões BP BERNECK em HDF PLUS
            </Heading>
          </Center>
        </Flex>
        <Image
          position="absolute"
          top="-7px"
          right="-50px"
          src="/img/hdf_plus_bp.png"
          width="950px"
        />
      </Flex>
    </Flex>
  )
}
