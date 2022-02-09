import { Heading, Flex, Box, Text, Center, Button } from '@chakra-ui/react'
import ArrowIcon from '@components/Icons/ArrowIcon'
import { useState, useEffect } from 'react'

export type CarouselMultiElementsProps = {
  items?: string[]
  numberOfEvidenceElements?: number
  children?: React.ReactNode[]
}
export const CarouselMultiElements = ({
  items = ['1', '2', '3', '4', '5', '6', '7'],
  numberOfEvidenceElements = 3,
  children
}: CarouselMultiElementsProps) => {
  const [startItem, setStartItem] = useState(0)
  const [endItem, setEndItem] = useState(numberOfEvidenceElements - 1)
  const [transform, setStranform] = useState(0)
  const [hoverBtnControl, setHoverBtnControl] = useState(false)

  function next() {
    if (
      startItem < items.length - numberOfEvidenceElements &&
      endItem < items.length - numberOfEvidenceElements - 1
    ) {
      setStartItem(startItem + 1)
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
        padding="5%"
        overflow="hidden"
      >
        <Flex w="100%">
          {children &&
            children.map((i, j) => {
              return (
                <Box
                  key={i?.toString()}
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
        bottom={{ base: '-37px', sm: '-25px', lg: '-30px', xl: '-38px' }}
      >
        <Button
          onMouseEnter={() => setHoverBtnControl(true)}
          onMouseLeave={() => setHoverBtnControl(false)}
          variant="no-border"
          background="grey.300"
          color="grey.150"
          w={{ base: '70px', sm: '50px', lg: '60px', xl: '77px' }}
          h={{ base: '70px', sm: '50px', lg: '60px', xl: '77px' }}
          _hover={{
            background: 'green.600',
            color: 'white.100'
          }}
          onClick={back}
        >
          <ArrowIcon
            direction="left"
            stroke={hoverBtnControl ? 'white.100' : 'grey.200'}
            width="40%"
          />
        </Button>
        <Button
          onMouseEnter={() => setHoverBtnControl(true)}
          onMouseLeave={() => setHoverBtnControl(false)}
          variant="no-border"
          background="grey.300"
          color="grey.150"
          w={{ base: '70px', sm: '50px', lg: '60px', xl: '77px' }}
          h={{ base: '70px', sm: '50px', lg: '60px', xl: '77px' }}
          _hover={{
            background: 'green.600',
            color: 'white.100'
          }}
          onClick={next}
        >
          <ArrowIcon
            width="40%"
            stroke={hoverBtnControl ? 'white.100' : 'grey.200'}
          />
        </Button>
      </Flex>
    </Box>
  )
}
