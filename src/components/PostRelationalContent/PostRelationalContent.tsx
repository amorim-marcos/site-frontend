import { Flex, Text } from '@chakra-ui/react'

import ChannelBnkRelationalItem from '@components/ChannelBnkRelationalItem'

export type PostRelationalContentProps = {
  items: {
    category: {
      id: number
      name: string
      color: string
    }
    urlImage: string
    title: string
    url_code: string
  }[]
}
export const PostRelationalContent = ({
  items
}: PostRelationalContentProps) => {
  if (items.length > 0) {
    return (
      <Flex
        flexDirection="column"
        w="100%"
        padding="5%"
        maxWidth="1536px"
        bg="brown.150"
      >
        <Text marginBottom="3%" as="h3" color="green.800" variant={'h3' as any}>
          Conteúdos Relacionados
        </Text>
        <Flex
          overflowX={{ base: 'scroll', md: 'visible' }}
          alignItems="center"
          justifyContent={
            !!items && items.length >= 4 ? 'space-between' : 'flex-start'
          }
        >
          {items &&
            items.map((item, i) => {
              return (
                i < 4 && (
                  <ChannelBnkRelationalItem
                    key={i}
                    categoryTitle={item.category.name}
                    categoryId={item.category.id}
                    color={item.category.color}
                    urlImage={item.urlImage}
                    title={item.title}
                    marginRight={{
                      base: '40px',
                      md: items.length >= 4 ? '0' : '3%'
                    }}
                    url_code={item.url_code}
                  />
                )
              )
            })}
        </Flex>
      </Flex>
    )
  } else return null
}
