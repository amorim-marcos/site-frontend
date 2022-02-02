import { Heading, Flex, Box, Text, Image } from '@chakra-ui/react'
import ArrowIcon from '@components/Icons/ArrowIcon'

export type PostRelationalContentProps = {
  title?: string
}
export const PostRelationalContent = ({
  title
}: PostRelationalContentProps) => {
  return (
    <Flex
      flexDirection="column"
      w="100%"
      padding="5%"
      maxWidth="1920px"
      bg="brown.150"
    >
      <Text marginBottom="3%" as="h3" color="green.800" variant={'h3' as any}>
        Conteúdos Relacionados
      </Text>
      <Flex alignItems="center" justifyContent="space-between">
        <RelationalItem
          category="INSPIRAÇÃO SOB MEDIDA"
          urlImage="https://casaclaudia.abril.com.br/wp-content/uploads/2017/06/sala31.jpg"
          color="brown.150"
          title="Como usar o círculo cromático para combinar padrões BP"
        />

        <RelationalItem
          category="INSPIRAÇÃO SOB MEDIDA"
          urlImage="https://casaclaudia.abril.com.br/wp-content/uploads/2017/06/sala31.jpg"
          color="green.600"
          title="Como usar o círculo cromático para combinar padrões BP"
        />

        <RelationalItem
          category="INSPIRAÇÃO SOB MEDIDA"
          urlImage="https://casaclaudia.abril.com.br/wp-content/uploads/2017/06/sala31.jpg"
          color="brown.150"
          title="Como usar o círculo cromático para combinar padrões BP"
        />

        <RelationalItem
          category="INSPIRAÇÃO SOB MEDIDA"
          urlImage="https://casaclaudia.abril.com.br/wp-content/uploads/2017/06/sala31.jpg"
          color="brown.150"
          title="Como usar o círculo cromático para combinar padrões BP"
        />
      </Flex>
    </Flex>
  )
}

export type RelationalItemProps = {
  category: string
  title: string
  color: string
  urlImage: string
}

export const RelationalItem = ({
  category,
  urlImage,
  title,
  color
}: RelationalItemProps) => {
  return (
    <Flex flexDirection="column" w="22%" h="540px">
      <Box h="50%" w="100%" overflow="hidden">
        <Image h="100%" w="100%" objectFit="cover" src={urlImage} />
      </Box>
      <Flex
        w="100%"
        h="50%"
        bg="white.100"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Flex padding="8%" flexDirection="column">
          <Flex alignItems="center">
            <ArrowIcon stroke={color} width="5%" />
            <Text marginLeft="3%" color="grey.400">
              {category}
            </Text>
          </Flex>
          <Text
            marginTop="8%"
            variant={'breadcrumbs-selected' as any}
            color="green.800"
          >
            {title}
          </Text>
        </Flex>
        <Box
          width="50%"
          borderBottom="4px solid"
          borderBottomColor={color}
          marginLeft="10%"
        />
      </Flex>
    </Flex>
  )
}
