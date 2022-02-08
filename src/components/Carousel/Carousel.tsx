import { useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'

import { useSwipeable } from 'react-swipeable'

export type CarouselProps = {
  children?: React.ReactNode[]
  carouselType?: string
}

export const Carousel = (props: CarouselProps) => {
  const [curr, setCurr] = useState(0)
  const handlers = useSwipeable({
    trackMouse: true,
    onSwipedLeft: () => switchTo('next'),
    onSwipedRight: () => switchTo('prev')
  })

  const switchTo = (act: 'next' | 'prev') => {
    if (!props.children) return
    const childrenCount = props.children.length

    act === 'next'
      ? setCurr(curr < childrenCount - 1 ? curr + 1 : curr)
      : setCurr(curr > 0 ? curr - 1 : curr)
  }

  const getPosition = (num: number) => {
    if (num > curr) return 'next'
    if (num < curr) return 'prev'
    return 'present'
  }

  return (
    <Flex
      {...handlers}
      data-testid="carousel"
      direction="column"
      // align="center"
      // justify="center"
      pos="relative"
      // bg="blue"
      maxHeight={{ base: '220px', sm: '400px', lg: '500px', xl: '800px' }}
      w="100%"
    >
      <Box data-testid="items" pos="relative" w="100%">
        {props.children?.map((item, index) => (
          <Item key={index} position={getPosition(index)}>
            {item}
          </Item>
        ))}
      </Box>

      {props.carouselType != 'brown' && (
        <Flex
          data-testid="indicators"
          pos="relative"
          alignSelf="center"
          gap="15px"
          w="100%"
          h="100%"
          justify="center"
          // bg="red"
          marginTop={'20px'}
        >
          {props.children?.map((_, index) => (
            <Box
              id={`${index}`}
              key={index}
              boxSize={'19px'}
              borderWidth="2px"
              borderRadius="100%"
              borderColor="green.600"
              bg={curr === index ? 'green.600' : 'white'}
              cursor={curr === index ? 'default' : 'pointer'}
              onClick={() => setCurr(index)}
            />
          ))}
        </Flex>
      )}
      {props.carouselType === 'brown' && (
        <Flex
          data-testid="indicators"
          pos="absolute"
          zIndex={10}
          // bg="blue"
          flex="1"
          marginTop={{ base: '32%', sm: '33%', lg: '35%', xl: '35%' }}
          marginLeft={{ base: '8%', sm: '10%', lg: '10%', xl: '10%' }}
          gap={{ base: '3px', sm: '8px', lg: '10px', xl: '10px' }}
        >
          {props.children?.map((_, index) => (
            <Box
              id={`${index}`}
              key={index}
              boxSize={{ base: '10px', sm: '16px', lg: '20px', xl: '20px' }}
              bg={curr === index ? 'brown.300' : 'brown.200'}
              cursor={curr === index ? 'default' : 'pointer'}
              onClick={() => setCurr(index)}
            />
          ))}
        </Flex>
      )}
    </Flex>
  )
}

const getMargin = (position: 'present' | 'next' | 'prev') => {
  if (position === 'present') return '0 0 0 0'
  if (position === 'prev') return '0 0 0 -100%'
  return '0 0 0 100%'
}

const getTransform = (position: 'present' | 'next' | 'prev') => {
  if (position === 'present') return 'translateX(0)'
  if (position === 'prev') return 'translateX(-100%)'
  return 'translateX(100%)'
}

const Item = (props: {
  position: 'present' | 'next' | 'prev'
  children: React.ReactNode
}) => (
  <Box
    top={0}
    pos={props.position === 'present' ? 'relative' : 'absolute'}
    opacity={props.position === 'present' ? 1 : 0}
    transition="all 0.8s ease-in-out"
    transform={getTransform(props.position)}
    margin={getMargin(props.position)}
  >
    {props.children}
  </Box>
)
