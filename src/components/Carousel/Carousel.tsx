import { useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'

import { useSwipeable } from 'react-swipeable'

export type CarouselProps = { children?: React.ReactNode[] }

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
      align="center"
      justify="center"
      gap="30px"
      pos="relative"
    >
      <Box data-testid="items" pos="relative">
        {props.children?.map((item, index) => (
          <Item key={index} position={getPosition(index)}>
            {item}
          </Item>
        ))}
      </Box>

      <Flex
        data-testid="indicators"
        pos="relative"
        alignSelf="center"
        gap="15px"
        w="100%"
        h="100%"
        justify="center"
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
