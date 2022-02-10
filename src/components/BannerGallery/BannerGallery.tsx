import { Heading, Flex, Box, Text, Center, Image } from '@chakra-ui/react'
import { useState } from 'react'

export type BannerGalleryProps = {
  title?: string
  bgColor?: string
  backgroundImage?: string
}
export const BannerGallery = (props: BannerGalleryProps) => {
  const [mouseEnter, setMouseEnter] = useState(false)
  return (
    <Box
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      cursor={'pointer'}
      position={'relative'}
      h={'100%'}
      w={'100%'}
      overflow="hidden"
    >
      <Flex
        backgroundImage={props.backgroundImage}
        transition={'0.5s'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={'cover'}
        width={mouseEnter ? '103%' : '100%'}
        height={mouseEnter ? '103%' : '100%'}
        position={'absolute'}
        top="0"
        left="0"
      >
        <Flex
          // bg="red"
          w="100%"
          alignItems={'flex-end'}
        >
          <Flex
            bg={props.bgColor}
            borderTopRightRadius={'20px'}
            h={'70px'}
            p={'20px'}
            flex="0.98"
            transition={'0.5s'}
            opacity={mouseEnter ? '0' : '1'}
            marginBottom={mouseEnter ? '-30px' : '0'}
          >
            <Text as="h4" variant={'h4' as any} color={'white'}>
              {props.title}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
