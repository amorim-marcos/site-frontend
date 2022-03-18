import { ReactNode, useState } from 'react'
import { useRouter } from 'next/router'

import { Box, Flex, Image, Text } from '@chakra-ui/react'

import { ReportsIcon, PlayIcon, Arrow } from '@components/Icons'

export interface InspireProps {
  textureName: string
  textureIcon: string
  textureDescription: string
  productPresentation: string
  urlVideo: string
  urlEbook: string
  combine_with: { name: string; img: string }[]
  in_ambients: { id: number; image_url: string }[]
}

export const Inspire = (props: InspireProps) => {
  const [curr, setCurr] = useState(0)
  const router = useRouter()

  const switchTo = (act: 'next' | 'prev') => {
    const count = props.in_ambients.length

    act === 'next'
      ? setCurr(curr < count - 1 ? curr + 1 : curr)
      : setCurr(curr > 0 ? curr - 1 : curr)
  }

  return (
    <Box pos="relative">
      <Flex
        data-testid="micro-texture"
        pos="relative"
        left={{ base: '15%', '2xl': '140px' }}
        top="-65px"
        w="fit-content"
      >
        <Image
          src={props.textureIcon}
          borderRadius="100%"
          boxSize={{ base: '100px', '2xl': '130px' }}
          zIndex={10}
        />

        <Flex>
          <Text
            bg="green.650"
            w={{ base: 'fit-content', sm: '185px' }}
            padding={{ base: '10px 20px', sm: 0 }}
            h="40px"
            pt={{ base: '3px' }}
            borderTopRightRadius="22px"
            color="white"
            fontSize={{ base: '23px', '2xl': '26px' }}
            fontWeight="bold"
            letterSpacing="-0.26px"
            textAlign="center"
            pos="absolute"
            top="25px"
            left={{ base: '90px', '2xl': '110px' }}
          >
            {props.textureName}
          </Text>

          <Text
            w={{ base: '80vw', lg: '532px', '2xl': '532px' }}
            pos="absolute"
            fontSize="18px"
            letterSpacing="0px"
            color="gray.300"
            top={{ base: '130px', lg: '75px' }}
            left={{ base: '-18%', lg: '110px', '2xl': '145px' }}
            textAlign={{ base: 'center', '2xl': 'left' }}
            whiteSpace={{ base: 'normal', '2xl': 'pre-wrap' }}
          >
            {props.textureDescription}
          </Text>
        </Flex>
      </Flex>

      {props.combine_with.length > 0 ? (
        <Flex
          data-testid="combine-texture"
          pos="relative"
          direction="column"
          w={{ base: '100%', '2xl': 'fit-content' }}
          align={{ base: 'center', '2xl': 'inherit' }}
          top={{ base: '80px', sm: '25px', '2xl': '-330px' }}
          left={{ '2xl': '52%' }}
        >
          <Box>
            <Flex
              bg="green.900"
              w={{ base: '100%', sm: '214px' }}
              h="44px"
              padding="10px 27px"
              borderTopRightRadius={{ base: 'none', sm: '26px' }}
              align="center"
              alignSelf="flex-start"
              justify="center"
            >
              <Text
                fontSize="20px"
                fontWeight="medium"
                color="white"
                letterSpacing="-0.2px"
                _after={{ sm: ':>>>>>' }}
              >
                COMBINE COM:
              </Text>
            </Flex>

            <Flex direction={{ base: 'column', sm: 'row' }}>
              {props.combine_with?.map((texture) => (
                <Flex
                  key={texture.name}
                  direction="column"
                  pos="relative"
                  gap={{ sm: '9px' }}
                >
                  <Image
                    src={texture.img}
                    w={{ base: '100vw', sm: '211px' }}
                    h={{ base: '120px', sm: '350px' }}
                  />
                  <Text
                    fontSize="20px"
                    letterSpacing="0px"
                    color={{ base: 'gray.400', sm: 'gray.300' }}
                    textAlign={{ base: 'center', '2xl': 'left' }}
                    pos={{ base: 'absolute', sm: 'relative' }}
                    bg={{ base: 'rgba( 226, 226, 226, 0.55 )', sm: 'none' }}
                    backdropFilter={{ base: 'blur( 4px )', sm: 'none' }}
                    borderBottomRightRadius={{ base: '10px', sm: 'none' }}
                    border={{
                      base: '1px solid rgba( 255, 255, 255, 0.18 )',
                      sm: 'none'
                    }}
                    pr={{ base: '10px', sm: '0' }}
                  >
                    {texture.name}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Box>
        </Flex>
      ) : (
        <Box
          h={{ base: '164px', sm: '394px' }}
          w={{ base: '100%', '2xl': 'fit-content' }}
          top={{ base: '80px', sm: '25px', '2xl': '-330px' }}
          left={{ '2xl': '52%' }}
        />
      )}

      <Flex
        pl={{ '2xl': '88px' }}
        pos="relative"
        mt={{ '2xl': '-580px' }}
        wrap={{ base: 'wrap', '2xl': 'nowrap' }}
        w={{
          base: '100%',
          '2xl': 'inherit'
        }}
        _before={{
          backgroundColor: '#D6DCD5',
          position: 'absolute',
          content: '""',
          right: 0,
          top: { base: '80px', '2xl': '135px' },
          h: { base: '490px', sm: '633px' },
          w: { base: '1440px', xl: '100%', '2xl': '1440px' },
          zIndex: '-1'
        }}
      >
        {props.in_ambients.length ? (
          <Flex
            data-testid="texture-examples"
            pt={{ base: '110px', '2xl': '208px' }}
            direction="column"
            align={{ base: 'center', '2xl': 'inherit' }}
            w={{
              base: '100vw',
              '2xl': 'inherit'
            }}
          >
            <Text
              fontSize="37px"
              fontWeight={800}
              letterSpacing="-0.74px"
              color="green.700"
              pb="21px"
              alignSelf={{ base: 'center', '2xl': 'flex-start' }}
            >
              Inspire-se
            </Text>

            <Image
              src={props.in_ambients[curr].image_url}
              w={{ base: '320px', xs: '100%', sm: '846px' }}
              h={{ base: '321px', sm: '562px' }}
              objectFit={{ base: 'scale-down', xs: 'cover' }}
            />

            <Flex
              data-testid="examples-control"
              alignSelf={{ base: 'flex-start', sm: 'center', lg: 'flex-end' }}
              mr={{ lg: '160px', xl: '270px', '2xl': '50px' }}
              mt={{ base: '-5px', sm: '-38px' }}
              w={{ base: '154px' }}
            >
              <ArrowButton onClick={() => switchTo('prev')} direction="left" />
              <ArrowButton onClick={() => switchTo('next')} direction="right" />
            </Flex>
          </Flex>
        ) : (
          <Box
            pt={{ base: '110px', '2xl': '208px' }}
            w={{ base: '320px', xs: '100%', sm: '846px' }}
            h={{ base: '321px', sm: '562px' }}
          />
        )}

        <Flex
          data-testid="texture-description"
          mt={{ base: '50px', '2xl': '165px' }}
          w={{ base: '100%', xl: '100%', '2xl': '840px' }}
          h={{ '2xl': '633px' }}
          padding={{
            base: '40px 20px',
            xl: '40px 120px',
            '2xl': '223px 100px 203px 120px'
          }}
          direction="column"
          right="0"
        >
          <Text
            textAlign={{ base: 'center', '2xl': 'left' }}
            w={{ '2xl': '660px' }}
            fontSize="20px"
            letterSpacing="0px"
            color="green.900"
          >
            {props.productPresentation}
          </Text>

          <Flex
            pt="52px"
            gap="116px"
            zIndex={1000}
            justify={{ base: 'center', '2xl': 'flex-start' }}
          >
            <TextureContentButton
              title="Assista ao vídeo"
              onClick={() =>
                props.urlVideo && window.open(props.urlVideo, '_blank')
              }
            >
              <PlayIcon />
            </TextureContentButton>

            <TextureContentButton
              title="Confira o ebook"
              onClick={() =>
                props.urlEbook && window.open(props.urlEbook, '_blank')
              }
            >
              <ReportsIcon
                stroke1="#6AA353"
                width="35px"
                height="35px"
                transform="scaleY(-1)"
              />
            </TextureContentButton>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

const ArrowButton = (props: {
  onClick: () => void
  direction: 'left' | 'right'
}) => (
  <Flex
    onClick={props.onClick}
    _hover={{
      filter: 'brightness(0.8)'
    }}
    transition="all 0.2s ease-in-out"
    cursor="pointer"
    bg="gray.300"
    boxSize="77px"
    align="center"
    justify="center"
    w="100%"
  >
    <Arrow
      direction={props.direction}
      width="21px"
      height="30px"
      color="gray.100"
    />
  </Flex>
)

const TextureContentButton = (props: {
  title: string
  onClick: () => void
  children: ReactNode
}) => (
  <Flex
    direction={{ base: 'column-reverse', md: 'row' }}
    align="center"
    color="green.500"
    fontSize="20px"
    fontWeight="bold"
    letterSpacing="0px"
    gap="14px"
    cursor="pointer"
    onClick={props.onClick}
    transition="all 0.2s ease-in-out"
    _hover={{ filter: 'brightness(0.8)' }}
    textAlign="center"
  >
    {props.title}
    {props.children}
  </Flex>
)
