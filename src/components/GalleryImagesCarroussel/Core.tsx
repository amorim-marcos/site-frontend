import { Box, Flex, Image } from '@chakra-ui/react'
import { useCallback, useEffect, useRef, useState } from 'react'

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function GalleryCarrouselCore({
  data,
  index = 0
}: {
  data: string[]
  index?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [tab, setTab] = useState(index)

  function nextImage() {
    if (tab < data.length - 1) {
      setTab(tab + 1)
    } else {
      setTab(0)
    }
  }

  function previousImage() {
    if (tab > 0) {
      setTab(tab - 1)
    } else {
      setTab(data.length - 1)
    }
  }

  useEffect(() => {
    setTab(index)
  }, [index])

  return (
    <Flex
      pos={'relative'}
      marginX="auto"
      width="100vw"
      maxWidth={'100vw'}
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bg="#FFF"
    >
      <Flex
        alignItems={'center'}
        justifyContent="center"
        w="100%"
        h="100%"
        position={'relative'}
      >
        {data.map((img, index) => (
          <Flex
            key={index}
            minW="75%"
            alignItems={'center'}
            justifyContent="center"
            position={'absolute'}
            left="50%"
            transition={'all 0.5s ease'}
            transform={`translateX(calc(-50% + ${(-tab + index) * 100}%))`}
            draggable="true"
          >
            <Image
              transition={'all 0.5s ease'}
              transform={tab === index ? '' : 'scale(0.85)'}
              opacity={tab === index ? 1 : 0.5}
              src={img}
              w={'100%'}
              objectFit={'contain'}
            />
          </Flex>
        ))}
      </Flex>
      {data.length > 1 && (
        <Flex
          position={'absolute'}
          right={{ base: '0', md: '50px' }}
          top="50%"
          transform={'translateY(-50%)'}
          w="34px"
          h="34px"
          bg={'green.800'}
          cursor="pointer"
          alignItems="center"
          justifyContent="center"
          onClick={nextImage}
        >
          <FiChevronRight size="34px" stroke={'white'} color={'white'} />
        </Flex>
      )}

      {data.length > 1 && (
        <Flex
          position={'absolute'}
          left={{ base: '0', md: '50px' }}
          top="50%"
          transform={'translateY(-50%)'}
          w="34px"
          h="34px"
          bg={'green.800'}
          cursor="pointer"
          alignItems="center"
          justifyContent="center"
          _hover={{ opacity: 0.8 }}
          onClick={previousImage}
        >
          <FiChevronLeft size="34px" stroke={'white'} color={'white'} />
        </Flex>
      )}
    </Flex>
  )
}
