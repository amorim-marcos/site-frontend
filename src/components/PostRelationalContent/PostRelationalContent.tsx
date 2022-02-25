import { Flex, Text } from '@chakra-ui/react'
import ChannelBnkRelationalItem from '@components/ChannelBnkRelationalItem'

export type PostRelationalContentProps = {
  items: {
    category: string
    urlImage: string
    color: string
    title: string
  }[]
}
export const PostRelationalContent = ({
  items
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
        justifyContent={items.length >= 4 ? 'space-between' : 'flex-start'}
      >
        {items &&
          items.map((item, i) => {
            return (
              i < 4 && (
                <ChannelBnkRelationalItem
                  key={i}
                  category={item.category}
                  urlImage={item.urlImage}
                  color={item.color}
                  title={item.title}
                  marginRight={{
                    base: '40px',
                    md: items.length >= 4 ? '0' : '3%'
                  }}
                />
              )
            )
          })}
      </Flex>
    </Flex>
  )
}
