import { Image, Flex, Box, Text, Button, useInterval } from '@chakra-ui/react'
import ArrowIcon from '@components/Icons/ArrowIcon'
import { useState } from 'react'

export type HomeBannerProps = {
  items: {
    imageUrl: string
    category: string
    title: string
  }[]
}
export const HomeBanner = ({ items }: HomeBannerProps) => {
  const [opacity, setOpacity] = useState(true)
  const [currentItem, setCurrentItem] = useState(0)

  function next() {
    let newIndex = 0
    if (currentItem < items.length - 1) {
      newIndex = currentItem + 1
    }
    setOpacity(false)

    setTimeout(() => {
      setCurrentItem(newIndex)

      setOpacity(true)
    }, 400)
  }

  useInterval(next, 3000)
  return items.length <= 0 ? (
    <h1>No items passed</h1>
  ) : (
    <Flex
      maxWidth="1920px"
      marginX="auto"
      position="relative"
      overflowY="hidden"
      overflowX="hidden"
      bg="brown.100"
      h={{ base: 'auto', md: '40vw' }}
      maxHeight={{ base: 'none', md: '770px' }}
      flexDirection={'column-reverse'}
      paddingBottom={{ md: '12%' }}
    >
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        w="100%"
        display={{ base: 'flex', md: 'none' }}
        marginY="5%"
      >
        <Indicator items={items} currentItem={currentItem} />
      </Flex>
      <Image
        src="/assets/imgs/grafismos_home_header/grafismo_esquerda_home.svg"
        position={'absolute'}
        top="10%"
        left="-4%"
        onClick={next}
        w="12vw"
        maxWidth={'231px'}
        cursor={'pointer'}
        display={{ base: 'none', md: 'block' }}
      />

      <Image
        src="/assets/imgs/grafismos_home_header/grafismo_direita_home_parte1.svg"
        position={'absolute'}
        top={{ base: 'none', md: '0' }}
        bottom={{ base: '5%', md: 'none' }}
        right={{ base: '-15%', md: '0%' }}
        w={{ base: '100vw', md: '34vw' }}
        maxWidth={'655px'}
        zIndex={'docked'}
        onClick={next}
        cursor={'pointer'}
      />
      <Box
        zIndex={'base'}
        position={{ base: 'relative', md: 'absolute' }}
        right={{ base: '0', md: opacity ? '5.5%' : '5%' }}
        top={{ base: '0', md: '8%' }}
        w={{ base: '100vw', md: '60vw' }}
        maxWidth={'1150px'}
        h={{ base: '100vw', md: '34.5vw' }}
        maxHeight={'650px'}
        bg="#c2d898"
        opacity={opacity ? '1' : '0'}
        transition={'0.4s'}
        onClick={next}
        cursor={'pointer'}
      >
        <Box
          position={'absolute'}
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg={{
            base: 'none',
            md: 'linear-gradient(90deg, rgba(241,224,196,0.76234243697479) 0%, rgba(255,255,255,0) 100%)'
          }}
        ></Box>

        <Image
          src={items[currentItem].imageUrl}
          objectFit={'cover'}
          w="100%"
          h="100%"
        />
      </Box>

      <Flex
        flexDirection={'column'}
        position={{ base: 'relative', md: 'absolute' }}
        top={{ base: '0', md: '40%' }}
        left={{ base: '0', md: '9.5%' }}
        marginY={{ base: '7%', md: '0' }}
        paddingLeft={{ base: '20px', md: '0' }}
      >
        <Flex>
          <ArrowIcon
            width={{
              base: '20px',

              md: '10px',
              lg: '13px',
              xl: '16px',
              '2xl': '20px'
            }}
            stroke="green.600"
          />
          <Flex marginLeft={'2%'} flexDirection={'column'}>
            <Text
              marginBottom={'2%'}
              variant={'canal-bnk-menu' as any}
              fontSize={{
                base: '20px',

                md: '10px',
                lg: '13px',
                xl: '16px',
                '2xl': '20px'
              }}
            >
              {items[currentItem].category}
            </Text>
            <Box opacity={opacity ? '1' : '0'} transition={'0.4s'}>
              <Text
                maxWidth={{
                  base: '95vw',

                  md: '421px',
                  lg: '526px',
                  xl: '632px',
                  '2xl': '790px'
                }}
                height={{ md: '18vw' }}
                maxHeight={{ md: '384px' }}
                as="h1"
                variant={'h1' as any}
                color="green.900"
                fontSize={{
                  base: '42px',

                  md: '36px',
                  lg: '45px',
                  xl: '54px',
                  '2xl': '68px'
                }}
                marginLeft={{ base: '-30px', md: '0' }}
              >
                {items[currentItem].title}
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Box display={{ base: 'none', md: 'block' }}>
          <Indicator items={items} currentItem={currentItem} />
        </Box>
      </Flex>
    </Flex>
  )
}

type IndicatorProps = {
  items: {
    imageUrl: string
    category: string
    title: string
  }[]
  currentItem: number
}

const Indicator = ({ items, currentItem }: IndicatorProps) => {
  return (
    <Flex marginLeft={{ md: '4%' }}>
      {items.map((item, i) => {
        return i === currentItem ? (
          <Box
            key={i}
            margin="5px"
            border="1px solid"
            borderColor={'brown.300'}
            w={{
              base: '20px',
              md: '10px',
              lg: '13px',
              xl: '16px',
              '2xl': '20px'
            }}
            h={{
              base: '20px',
              md: '10px',
              lg: '13px',
              xl: '16px',
              '2xl': '20px'
            }}
            cursor={'pointer'}
            bg="brown.350"
          />
        ) : (
          <Box
            key={i}
            margin="5px"
            w={{
              base: '20px',
              md: '10px',
              lg: '13px',
              xl: '16px',
              '2xl': '20px'
            }}
            h={{
              base: '20px',
              md: '10px',
              lg: '13px',
              xl: '16px',
              '2xl': '20px'
            }}
            cursor={'pointer'}
            bg="brown.200"
          />
        )
      })}
    </Flex>
  )
}
