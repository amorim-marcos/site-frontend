import { Heading, Flex, Box, Text, Center, Button, useMediaQuery } from '@chakra-ui/react'
import Arrow from '@components/Arrow'
import useMobile from 'hooks/useMobile'
import { useState, useEffect } from 'react'

export type CarouselMultiElementsProps = {
  numberOfEvidenceElements?: number
  children: React.ReactNode[]
}
export const CarouselMultiElements = ({
  numberOfEvidenceElements = 3,
  children
}: CarouselMultiElementsProps) => {
  const [startItem, setStartItem] = useState(0)
  const [endItem, setEndItem] = useState(numberOfEvidenceElements - 1)
  const [transform, setStranform] = useState(0)
  const [hoverBtnControl, setHoverBtnControl] = useState(false)
  const { isMobile } = useMobile(568)

  function next() {
    if (startItem < children.length - numberOfEvidenceElements) {
      setStartItem((v) => v + 1)
      setStranform(transform - 1)
      setEndItem(endItem + 1)
    }
  }

  function back() {
    if (startItem > 0 && endItem > 0 + numberOfEvidenceElements - 1) {
      setStartItem(startItem - 1)
      setStranform(transform + 1)
      setEndItem(endItem - 1)
    }
  }

  useEffect(() => {
    if (numberOfEvidenceElements) {
      setStartItem(0)
      setEndItem(numberOfEvidenceElements - 1)
      setStranform(0)
    }
  }, [numberOfEvidenceElements])

  return (
    <Box marginBottom={{ base: '10%', md: '5%' }} position={'relative'}>
      <Flex
        alignItems={'center'}
        justifyContent={'flex-start'}
        maxWidth={'1920px'}
        marginX="auto"
        padding={{ base: '2%', md: '2% 5%' }}
        overflow="hidden"
      >
        <Flex w="100%">
          {children &&
            children.map((i, j) => {
              return (
                <Box
                  overflow="hidden"
                  key={j}
                  // border="1px solid magenta"
                  minWidth={`${100 / numberOfEvidenceElements}%`}
                  paddingX="1%"
                  transition={'0.5s'}
                  transform={`translateX(${transform * 100}%)`}
                  opacity={j < startItem || j > endItem ? '0' : '1'}
                >
                  <Box maxWidth="100%">{i}</Box>
                </Box>
              )
            })}
        </Flex>
      </Flex>
      <Flex
        position="absolute"
        left="0px"
        right="0px"
        marginX="auto"
        w="fit-content"
        bottom={{ base: '-20px', sm: '-25px', lg: '-25px', xl: '-30px' }}
      >
        <Button
          onMouseEnter={() => setHoverBtnControl(true)}
          onMouseLeave={() => setHoverBtnControl(false)}
          variant="no-border"
          background="gray.300"
          color="gray.150"
          w={{ base: '40px', sm: '50px', lg: '60px', xl: '77px' }}
          h={{ base: '40px', sm: '50px', lg: '60px', xl: '77px' }}
          _hover={{
            background: 'green.550',
            color: 'white.100'
          }}
          onClick={back}
        >
          {
            isMobile 
            ? <Arrow width="5" height="5" direction="left" />
            : <Arrow width="22" height="30" direction="left" />
          }
        </Button>
        <Button
          onMouseEnter={() => setHoverBtnControl(true)}
          onMouseLeave={() => setHoverBtnControl(false)}
          variant="no-border"
          background="gray.300"
          color="gray.150"
          w={{ base: '40px', sm: '50px', lg: '60px', xl: '77px' }}
          h={{ base: '40px', sm: '50px', lg: '60px', xl: '77px' }}
          _hover={{
            background: 'green.550',
            color: 'white.100'
          }}
          onClick={next}
        >
          {
            isMobile 
            ? <Arrow width="5" height="5" direction="right" />
            : <Arrow width="22" height="30" direction="right" />
          }
        </Button>
      </Flex>
    </Box>
  )
}
