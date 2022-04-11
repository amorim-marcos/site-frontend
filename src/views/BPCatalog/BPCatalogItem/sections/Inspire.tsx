import { ReactNode, useState } from 'react'
import { useRouter } from 'next/router'

import { Box, Flex, Image, Link, Text, Button } from '@chakra-ui/react'

import { ReportsIcon, PlayIcon, Arrow } from '@components/Icons'
import useMobile from 'hooks/useMobile'

export interface InspireProps {
  textureName: string
  textureIcon: string
  textureDescription: string
  productPresentation: string
  urlVideo: string
  urlEbook: string
  combine_with: { name: string; href: string; img: string }[]
  in_ambients: { id: number; ambient_href: string; image_url: string }[]
}

export const Inspire = (props: InspireProps) => {
  const [curr, setCurr] = useState(0)
  const router = useRouter()
  const isMobile = useMobile(568)

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
        left={{ base: '0', lg: '5%', '2xl': '5%' }}
        top="-65px"
        w={{ base: '100%', md: '100%', '2xl': '30%' }}
        // bg="violet"
      >
        <Image
          src={props.textureIcon}
          borderRadius="100%"
          boxSize={{ base: '100px', '2xl': '130px' }}
          zIndex={10}
        />

        <Flex 
          flexDirection={'column'}
          // bg="pink"
        >
          <Text
            bg="green.650"
            w={{ base: '185px' }}
            h="40px"
            pt={{ base: '3px' }}
            borderTopRightRadius="22px"
            color="white"
            fontSize={{ base: '23px', '2xl': '26px' }}
            fontWeight="bold"
            letterSpacing="-0.26px"
            textAlign="center"
            marginTop="25px"
            marginLeft={{ base: '-30px' }}
          >
            {props.textureName}
          </Text>

          <Text as={'h4'}
            variant={'h4' as any}
            fontWeight="normal"
            color="gray.300"
            marginLeft={'10px'}
            whiteSpace={'pre-wrap'}
            marginTop="10px"
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
          w={{ base: '100%', '2xl': '100%' }}
          top={{ base: '0px', sm: '5%', '2xl': '-330px' }}
          alignItems={{ base: 'flex-start', '2xl': 'flex-end' }}
          padding={{ base: '0', lg: '0 5%', '2xl': '0 5%' }}
          zIndex="docked"
          // bg="blue"
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
                as={'h4'}
                variant={'h4' as any}
                fontWeight="medium"
                color="white"
                letterSpacing="-0.2px"
                _after={{ sm: ':>>>>>' }}
              >
                COMBINE COM:
              </Text>
            </Flex>

            <Flex 
              direction={{ base: 'column', sm: 'row' }}
              // bg="red"
              // left={{ '2xl': '52%' }}
            >
              {props.combine_with?.map((texture) => (
                <Flex
                  key={texture.name}
                  direction="column"
                  pos="relative"
                  gap={{ sm: '9px' }}
                  // bg="yellow"
                >
                  <Link href={texture.href}>
                    <Image
                      src={texture.img}
                      w={{ base: '100vw', sm: '214px' }}
                      h={{ base: '120px', sm: '350px' }}
                      objectFit="cover"
                    />
                  </Link>
                  <Text
                    as={'h5'}
                    variant={'h5' as any}
                    color={{ base: 'gray.400', sm: 'gray.300' }}
                    textAlign={{ base: 'center', lg: 'left' }}
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
          display={{ base: 'none', '2xl': 'block' }}
        />
      )}

      <Flex
        bg={{ base: '#D6DCD5', '2xl': 'none' }}
        pl={{ '2xl': '88px' }}
        pos="relative"
        mt={{
          base: props.combine_with.length > 0 ? '5%' : '0px',
          '2xl': '-550px'
        }}
        mb={{ base: '50px', '2xl': 'none' }}
        wrap={{ base: 'wrap', '2xl': 'nowrap' }}
        w={{
          base: '100%',
          '2xl': 'inherit'
        }}
        _before={{
          backgroundColor: { base: 'white.100', md: '#D6DCD5' },
          position: 'absolute',
          content: '""',
          right: 0,
          top: { base: '80px', '2xl': '135px' },
          h: { base: '490px', sm: '633px' },
          w: { base: '1440px', xl: '100%', '2xl': '1440px' },
          zIndex: '-1'
        }}
        justifyContent={'center'}
      >
        {props.in_ambients.length ? (
          <Flex
            data-testid="texture-examples"
            pt={{ base: '3%', '2xl': '208px' }}
            direction="column"
            // bg="cyan"
            marginLeft={{'2xl': '17%'}}
          >
            <Text
              as={'h2'}
              variant={'h2' as any}
              fontWeight={800}
              letterSpacing="-0.74px"
              color="green.700"
              pb="21px"
              alignSelf={{ base: 'center', lg: 'flex-start' }}
            >
              Inspire-se
            </Text>

            <Image
              onClick={() => router.push(props.in_ambients[curr].ambient_href)}
              cursor="pointer"
              src={props.in_ambients[curr].image_url}
              // h="100%"
              // w="100%"
              // objectFit={'cover'}
              w={{ base: '320px', xs: '100%', sm: '846px' , lg: '980px'}}
              h={{ base: '321px', sm: '562px', lg: '650px' }}
              // objectFit={{ base: 'scale-down', xs: 'cover' }}
            />

            <Flex
              data-testid="examples-control"
              alignSelf={{ base: 'center' }}
              // mr={{ base: '0', lg: '160px', xl: '270px', '2xl': '50px' }}
              // mt={{ base: '-5px', sm: '-38px' }}
              // w={{ base: '154px' }}
              // bg="tomato"
            >
                    <Button
                      onClick={() => switchTo('prev')}
                      variant="no-border"
                      background="gray.300"
                      color="gray.150"
                      w={{ base: '40px', sm: '45px', lg: '50px', xl: '55px' }}
                      h={{ base: '40px', sm: '45px', lg: '50px', xl: '55px' }}  
                      _hover={{
                        background: 'green.550',
                        color: 'white.100'
                      }}
                    >
                      {isMobile ? (
                        <Arrow width="5" height="5" direction="left" />
                      ) : (
                        <Arrow width="22" height="30" direction="left" />
                      )}
                    </Button>
                    <Button
                      onClick={() => switchTo('next')}
                      variant="no-border"
                      background="gray.300"
                      color="gray.150"
                      w={{ base: '40px', sm: '45px', lg: '50px', xl: '55px' }}
                      h={{ base: '40px', sm: '45px', lg: '50px', xl: '55px' }}
                      _hover={{
                        background: 'green.550',
                        color: 'white.100'
                      }}
                    >
                      {isMobile ? (
                        <Arrow width="5" height="5" direction="right" />
                      ) : (
                        <Arrow width="22" height="30" direction="right" />
                      )}
                    </Button>
            </Flex>
          </Flex>
        ) : (
          <Box
            mt={{ base: '5%', '2xl': '15%' }}
            w={{ base: '90%'}}
            maxHeight={'600px'}
            cursor="pointer"
            onClick={() => router.push('/products/bp-berneck/gallery')}
            // bg="violet"
            // marginLeft={{'2xl': '5%'}}
          >
            <Image
              // w="100%"
              h="100%"
              objectFit={'cover'}
              src="/img/conheca_galeria.jpg"
            />
          </Box>
        )}

        <Flex
          data-testid="texture-description"
          mt={{ base: '5%', '2xl': '18%' }}
          mb={{ base: '0', '2xl': '10%' }}
          mr={{ '2xl': '10%' }}
          padding={{ '2xl': '2%' }}
          w={{ base: '90%', '2xl': '70%' }}
          // h={{ '2xl': '633px' }}
          direction="column"
          // bg="purple"
        >
          <Text
            as={'h4'}
            variant={'h4' as any}
            fontWeight="normal"
            textAlign={{ base: 'center', xl: 'left' }}
            letterSpacing="0px"
            color="green.900"
          >
            {props.productPresentation}
          </Text>

          <Flex
            padding={{ base: '8%', xl: 'flex-start' }}
            gap="10%"
            zIndex={1000}
            justify={{ base: 'center', xl: 'flex-start' }}
          >
            {props.urlVideo ? (
              <TextureContentButton
                title="Assista ao vídeo"
                onClick={() =>
                  props.urlVideo && window.open(props.urlVideo, '_blank')
                }
              >
              <PlayIcon />
              </TextureContentButton>
            ):(<Box></Box>)}

            {props.urlEbook ? (   
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
           ):(<Box></Box>)}

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
    // fontSize="20px"
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
