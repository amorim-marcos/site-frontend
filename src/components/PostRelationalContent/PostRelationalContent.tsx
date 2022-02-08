import { Flex, Text } from '@chakra-ui/react'
import ChannelBnkRelationalItem from '@components/ChannelBnkRelationalItem'

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
      <Flex
        overflowX={{ base: 'scroll', md: 'visible' }}
        alignItems="center"
        justifyContent="space-between"
      >
        <ChannelBnkRelationalItem
          category="INSPIRAÇÃO SOB MEDIDA"
          urlImage="https://casaclaudia.abril.com.br/wp-content/uploads/2017/06/sala31.jpg"
          color="brown.150"
          title="Como usar o círculo cromático para combinar padrões BP"
        />

        <ChannelBnkRelationalItem
          category="INSPIRAÇÃO SOB MEDIDA"
          urlImage="https://casaclaudia.abril.com.br/wp-content/uploads/2017/06/sala31.jpg"
          color="green.600"
          title="Como usar o círculo cromático para combinar padrões BP"
        />

        <ChannelBnkRelationalItem
          category="INSPIRAÇÃO SOB MEDIDA"
          urlImage="https://casaclaudia.abril.com.br/wp-content/uploads/2017/06/sala31.jpg"
          color="brown.150"
          title="Como usar o círculo cromático para combinar padrões BP"
        />

        <ChannelBnkRelationalItem
          category="INSPIRAÇÃO SOB MEDIDA"
          urlImage="https://casaclaudia.abril.com.br/wp-content/uploads/2017/06/sala31.jpg"
          color="brown.150"
          title="Como usar o círculo cromático para combinar padrões BP"
        />
      </Flex>
    </Flex>
  )
}
