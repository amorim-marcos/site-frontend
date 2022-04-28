import { Flex, Image, Text } from '@chakra-ui/react'
import ChannelBnkRelationalItem from '@components/ChannelBnkRelationalItem'
import { useTranslation } from 'react-i18next'

export type SectionChannelBNKProps = {
  items: {
    category: {
      id: number
      name: string
      color: string
    }
    url_code: string
    urlImage: string
    title: string
  }[]
}

export const SectionChannelBNK = (props: SectionChannelBNKProps) => {
  const homeViewLabels = useTranslation('homeView')
  return (
    <Flex
      justifyContent={'center'}
      paddingY="4%"
      // bg="brown.100"
      bg="rgb(246, 239, 227, 90%)"
      // maxW={'1536px'}
      // flexDirection={{ base: 'column', md: 'row' }}
    >
      <Flex
        // justifyContent={'center'}
        // paddingY="4%"
        bg="brown.100"
        maxW={'1536px'}
        // flex="1"
        w={'100%'}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Flex
          flexDirection={'column'}
          alignItems={{ base: 'flex-start' }}
          justifyContent={'center'}
          w={{ base: '100%', md: '25%' }}
          paddingX={{ base: '5%', md: '0' }}
          paddingY={{ base: '10%', md: '0' }}
          paddingTop={{ base: '0', md: '10%' }}
          margin={{ base: '0', md: '0 0 0 4%', lg: '0 0 0 5%' }}
          // bg="red.100"
        >
          <Image
            w={{ base: '45%', md: '50%' }}
            maxWidth={'170px'}
            src="/assets/imgs/canal-bnk/Canal_Berneck.svg"
          />
          <Text
            marginTop="5%"
            w={{ md: '50%' }}
            maxWidth={'180px'}
            as="h4"
            variant={'h4' as any}
            fontWeight={'normal'}
          >
            {homeViewLabels.t('sectionChannelBnk.channelDescription')}
          </Text>
        </Flex>
        <Flex
          // bg="cyan"
          justifyContent={{ md: 'flex-start' }}
          overflowX={{ base: 'scroll', xl: 'hidden' }}
          w={{ base: '100vw', md: '75%' }}
          gap="5%"
          paddingLeft={{ base: '5%', md: '0' }}
          css={{
            '-webkit-scrollbar': {
              display: 'none'
            },
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none'
          }}
        >
          {props.items &&
            props.items.length > 0 &&
            props.items.map((item, j) => {
              return (
                <ChannelBnkRelationalItem
                  key={j}
                  categoryTitle={item.category.name}
                  categoryId={item.category.id}
                  color={item.category.color}
                  url_code={item.url_code}
                  urlImage={item.urlImage}
                  title={item.title}
                  w="28%"
                />
              )
            })}
        </Flex>
      </Flex>
    </Flex>
  )
}
