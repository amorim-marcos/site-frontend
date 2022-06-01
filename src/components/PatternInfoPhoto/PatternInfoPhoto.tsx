import { Heading, Flex, Box, Text, Center, Image } from '@chakra-ui/react'
import React, { ReactNode, useState } from 'react'
import GrafismLeft from '@components/GrafismLeft'

export type PatternInfoPhotoProps = {
  title: string
  titleColor: string
  description: string
  descriptionColor: string
  imgSrc: string
  onClick?: () => void
  grafism?: boolean
}
export const PatternInfoPhoto = ({
  onClick,
  imgSrc,
  grafism = true,
  title,
  titleColor,
  description,
  descriptionColor
}: PatternInfoPhotoProps) => {
  const [mouseEnter, setMouseEnter] = useState(false)
  return (
    <Flex
      onMouseLeave={() => setMouseEnter(false)}
      onMouseEnter={() => setMouseEnter(true)}
      data-testid="pattern-info-box-photo"
      cursor="pointer"
      pos="relative"
      zIndex="base"
      onClick={onClick}
      _hover={{
        filter: 'brightness(90%)'
      }}
      overflowY="hidden"
      overflowX="hidden"
      // bg="tomato"
      padding={{ base: '5%' }}
      h={{
        base: '200px',
        md: '286px',
        lg: '180px',
        xl: '230px',
        '2xl': '260px'
      }}
    >
      <Image
        position={'absolute'}
        top="0"
        left="0"
        src={imgSrc}
        objectFit={'cover'}
        width={'100%'}
        height={'100%'}
      />
      {grafism && (
        <Image
          position={'absolute'}
          zIndex="base"
          src="/img/home_grafismo_banner.svg"
          right="0"
          top="0"
          w={{ base: '30vw', lg: '18vw' }}
          maxWidth={'350px'}
        />
      )}

      <Flex
        flexDirection={'column'}
        justifyContent={'flex-end'}
        alignItems={'flex-start'}
        zIndex={'docked'}
      >
        <Text
          as="h4"
          variant={'h4' as any}
          fontWeight={'medium'}
          color={titleColor}
        >
          {title}
        </Text>

        <Text
          as="h2"
          variant={'h2' as any}
          fontWeight="extrabold"
          letterSpacing="-0.68px"
          color={descriptionColor}
        >
          {description}
        </Text>
      </Flex>

      <Box
        position={'absolute'}
        top="0"
        left="0"
        w="100%"
        h="100%"
        opacity={'0.4'}
        bg={
          mouseEnter
            ? 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(19,49,40,0.8547794117647058) 100%)'
            : 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(19,49,40,0.6418942577030813) 70%)'
        }
      />
    </Flex>
  )
}
