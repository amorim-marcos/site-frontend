import { Flex, Text } from '@chakra-ui/react'

import ChannelBnkRelationalItem from '@components/ChannelBnkRelationalItem'
import { useTranslation } from 'react-i18next'
import { ImageProps } from 'types/utils'

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
    cover_img: ImageProps
  }[]
}
export const PostRelationalContent = ({
  items
}: PostRelationalContentProps) => {
  const componentsLabels = useTranslation('components')

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
          {componentsLabels.t('postRelationalContent.title')}
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
                    cover_img={item.cover_img}
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
