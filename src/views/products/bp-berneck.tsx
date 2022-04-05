import { useRouter } from 'next/router'

import {
  Flex,
  Text,
  Box,
  Image,
  Grid,
  GridItem,
  FlexProps,
  useInterval
} from '@chakra-ui/react'
import useMobile from 'hooks/useMobile'
import { Arrow } from '@components/Icons'
import Pagebar from '@components/Pagebar'
import CarouselMultiElements from '@components/CarouselMultiElements'

import BannerGallery from '@components/BannerGallery'
import CompletedTitle from '@components/CompletedTitle'
import BannerProducts from '@components/BannerProducts'
import BannerCollections from '@components/BannerCollections'

import type { Gallery } from 'types/data'
import { useState, useEffect } from 'react'

export type BpBerneckViewProps = {
  galleries?: Gallery[]
  carrouselImages: string[]
}

export default function BpBerneckView(props: BpBerneckViewProps) {
  const { isMobile } = useMobile(768)
  const router = useRouter()

  return (
    <Box>
      <Pagebar
        paths={[
          {
            title: 'BP BERNECK®',
            url: 'bp-berneck'
          }
        ]}
      />

    {/* INICIO BANNER CAROUSEL */}
    <Flex
        maxWidth="1536px"
        marginX="auto"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        // bg="blue"
      >
      <CarrouselBP images={props.carrouselImages} />
    </Flex>
    {/* FIM BANNER CAROUSEL */}

    {/* INICIO BANNER COLECAO */}
    <Flex
      maxWidth="1536px"
      marginX="auto"
      position="relative"
      zIndex="base"
      overflowY="hidden"
      overflowX="hidden"
      // bg="red"
    >
      <Grid
        h={{ base: '900px', sm: '500px', lg: '600px', xl: '600px' }}
        w={{ base: '90%', sm: '93%', lg: '93%', xl: '93%' }}
        margin={{ base: '5%', sm: '3% 3%', lg: '3% 3%', xl: '3% 3%' }}
        templateRows={{
          base: 'repeat(4, 1fr)',
          sm: 'repeat(3, 1fr)',
          lg: 'repeat(2, 1fr)',
          xl: 'repeat(2, 1fr)'
        }}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(3, 1fr)'
        }}
        gap={{ base: '5', sm: '4', lg: '5', xl: '5' }}
      >
        <GridItem
          colSpan={{ base: '1', sm: '2', lg: '2', xl: '2' } as any}
          rowSpan={{ base: '2', sm: '2', lg: '2', xl: '2' } as any}
        >
          <BannerProducts
            title="Conheça os padrões BP BERNECK®"
            titleColor="white"
            subtitle="Laminado Melamínico Decorativo"
            subtitleColor="brown.200"
            bgColor="brown.300"
            srcImg="../img/BPS.png"
            onClick={() => router.push('/products/bp-berneck/catalog')}
            sizeType="rectangle-horizontal"
          />
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={{ base: '1', sm: '1', lg: '1', xl: '1' } as any}
          bg="papayawhip"
        >
          <BannerCollections
            onClick={() =>
              (window.location.href = `/products/bp-berneck/catalog?collection=nomade`)
            }
            title="Conheça"
            titleColor="brown.300"
            imgSrc="../img/banner_nomade.png"
            ArrowIconColor="#74675D"
          />
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={{ base: '1', sm: '1', lg: '1', xl: '1' } as any}
          bg="blue"
        >
          <BannerCollections
            onClick={() =>
              (window.location.href = `/products/bp-berneck/catalog?collection=origens`)
            }
            title="Conheça"
            titleColor="green.700"
            imgSrc="../img/banner_origens.png"
            ArrowIconColor="#0A6C3B"
          />
        </GridItem>
      </Grid>
    </Flex>
      {/* FIM BANNER COLECAO */}

      {/* INICIO Galeria de Ambientes */}

      <Flex
        flexDirection={'column'}
        bg="green.200"
        maxWidth={'1536px'}
        marginX="auto"
        paddingTop={'5%'}
      >
        <Flex
          paddingX={'5%'}
          w="100%"
          alignItems={'center'}
          flexDirection={{ base: 'column', xs: 'row' }}
          justifyContent={'space-between'}
        >
          <CompletedTitle
            titleString="Inspire-se"
            textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
            alignSelf={{
              base: 'flex-start',
              sm: 'flex-start',
              lg: 'flex-start',
              xl: 'flex-start'
            }}
          />

          <Flex
            marginY={{ base: '30px', xs: '0' }}
            cursor={'pointer'}
            _hover={{ opacity: '0.7' }}
            alignItems={'center'}
            onClick={() => router.push('/products/bp-berneck/gallery')}
          >
            <Flex wrap={'nowrap'} direction={'column'} alignItems={'flex-end'}>
              <Text
                as="h4"
                variant={'h4' as any}
                textAlign={'right'}
                fontWeight={'medium'}
              >
                Acesse a nossa
              </Text>

              <Text
                as="h4"
                whiteSpace={'nowrap'}
                variant={'h4' as any}
                textAlign={'right'}
                fontWeight="bold"
              >
                Galeria de ambientes
              </Text>
            </Flex>
            <Flex
              p={{ base: '5px', xl: '10px' }}
              alignItems={'flex-end'}
              direction={'column'}
            >
              <Arrow
                width={{ base: '20px', md: '40px', lg: '32px' }}
                color="green.700"
              />
            </Flex>
          </Flex>
        </Flex>

        {props.galleries && props.galleries.length > 0 && (
          <CarouselMultiElements numberOfEvidenceElements={isMobile ? 1 : 4}>
            {props.galleries?.map((i) => {
              return (
                <Box
                  key={i.id}
                  w="100%"
                  h={{
                    base: '100vw',

                    md: '325px',
                    lg: '406px',
                    xl: '488px',
                    '2xl': '610px'
                  }}
                  onClick={() =>
                    router.push(
                      `/products/bp-berneck/gallery?ambients=${i.ambientType.code}`
                    )
                  }
                >
                  <BannerGallery
                    title={i.title}
                    bgColor={i.bgColor}
                    backgroundImage={i.backgroundImage}
                  />
                </Box>
              )
            })}
          </CarouselMultiElements>
        )}
      </Flex>

      {/* FIM Galeria de Ambientes */}
      <Flex
        maxWidth={'1536px'}
        marginX="auto"
        bg="white.100"
        padding="5%"
        justifyContent={'space-between'}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        {[
          {
            srcImg: '/assets/imgs/pagina_capa_bp/pack_padroes_bp.png',
            id: 1,
            title: 'Pack de Padrões BP BERNECK',
            anchorId: 'pack-bp-downloads',
            subtTitle: 'FAÇA O DOWNLOAD',
            subTitleColor: 'green.800'
          },
          {
            srcImg: '/assets/imgs/pagina_capa_bp/revista_inspirare.png',
            id: 2,
            title: 'Revista Inspirare BNK',
            anchorId: 'revista-inspirare-bnk',
            subtTitle: 'CONHEÇA MAIS',
            subTitleColor: 'white.100'
          },
          {
            srcImg: '/assets/imgs/pagina_capa_bp/materiais_suporte.png',
            id: 3,
            title: 'Materiais de Suporte',
            anchorId: 'materiais-de-suporte',
            subtTitle: 'CONHEÇA MAIS',
            subTitleColor: 'white.100'
          }
        ].map((i) => {
          return (
            <Flex
              onClick={() =>
                (window.location.href = `/canal-bnk/downloads/#${i.anchorId}`)
              }
              w={{ base: '100%', md: '30%' }}
              h={{
                base: '100vw',
                md: '225px',
                lg: '282px',
                xl: '338px',
                '2xl': '423px'
              }}
              key={i.id}
              flexDirection={'column'}
              justifyContent={'flex-end'}
              padding="2%"
              background={`url(${i.srcImg})`}
              backgroundSize={'cover'}
              cursor={'pointer'}
              position={'relative'}
              marginY={{ base: '5%', md: '0' }}
            >
              <Text
                zIndex={'docked'}
                color={i.subTitleColor}
                variant={'larger-body' as any}
              >
                {i.subtTitle}
              </Text>
              <Text zIndex={'docked'} as="h3" variant={'h3' as any}>
                {i.title}
              </Text>
              <Box
                position={'absolute'}
                top="0"
                left="0"
                w="100%"
                h="100%"
                transition={'0.5s'}
                zIndex={'base'}
                _hover={{
                  bg: 'linear-gradient(180deg, rgba(255,255,255,0) 48%, rgba(172,204,159,0.7959558823529411) 100%)'
                }}
              />
            </Flex>
          )
        })}
      </Flex>
    </Box>
  )
}

const PanelImage = (props: { imageSrc: string }) => (
  <Flex w="100vw" h={{ base: '100%' }}>
    <Image
      h="100%"
      w="100%"
      src={props.imageSrc}
      cursor={{ md: 'pointer' }}
      objectFit="cover"
      userSelect="none"
      draggable="false"
    />
  </Flex>
)

interface CarrouselBPProps extends FlexProps {
  images: string[]
}

const CarrouselBP = ({ images }: CarrouselBPProps) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [imageVisibility, setImageVisibility] = useState(true)

  function next() {
    setImageVisibility(false)
    setTimeout(() => {
      if (currentImage === images.length - 1) {
        setCurrentImage(0)
      } else {
        setCurrentImage((v) => v + 1)
      }
    }, 300)
  }

  useEffect(() => {
    setTimeout(() => setImageVisibility(true), 100)
  }, [currentImage])

  useInterval(next, 5000)
  return (
    <Flex
      maxWidth="1536px"
      marginX="auto"
      position="relative"
      zIndex="base"
      overflowY="hidden"
      overflowX="hidden"
      h={{
        base: '130vw',
        md: '405px',
        lg: '506px',
        xl: '608px',
        '2xl': '760px'
      }}
      bg="brown.100"
    >
      <Flex w="100%" h="100%">
        <Image
          opacity={imageVisibility ? '1' : '0'}
          transition={'0.3s'}
          w="100%"
          h="100%"
          objectFit={'cover'}
          src={images.length > 0 ? images[currentImage] : ''}
        />
      </Flex>
      <Flex
        position={'absolute'}
        bottom="10%"
        left="10%"
        gap={{ base: '4px', md: '10px' }}
      >
        {images.map((_item, i) => {
          return (
            <Box
              key={i}
              bg={i === currentImage ? 'brown.300' : 'brown.200'}
              w={{ base: '15px', md: '25px' }}
              h={{ base: '15px', md: '25px' }}
              _hover={{
                bg: 'brown.400'
              }}
              cursor="pointer"
              onClick={next}
              border={i === currentImage ? '1px solid' : ''}
              borderColor={i === currentImage ? 'brown.300' : ''}
            />
          )
        })}
      </Flex>
    </Flex>
  )
}
