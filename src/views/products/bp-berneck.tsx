import { useRouter } from 'next/router'

import {
  Flex,
  Text,
  Box,
  Image,
  Grid,
  GridItem,
  FlexProps,
  useInterval,
  Link
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
import { BPPageBanner } from 'pages/products/bp-berneck'
import { useTranslation } from 'react-i18next'
import ConditionalLanguageRender from '@components/ConditionalLanguageRender/ConditionalLanguageRender'
import PageHead from '@components/PageHead'

export type BpBerneckViewProps = {
  galleries?: Gallery[]
  banners: BPPageBanner[]
}

export default function BpBerneckView(props: BpBerneckViewProps) {
  const { isMobile } = useMobile(768)
  const router = useRouter()
  const productsViewLabels = useTranslation('productsView')

  return (
    <Box>
      <PageHead
        page_title={productsViewLabels.t('bpBerneck.pageMetadata.pageTitle')}
        page_description={productsViewLabels.t(
          'bpBerneck.pageMetadata.pageDescription'
        )}
      />
      <Pagebar
        paths={[
          {
            title: productsViewLabels.t('bpBerneck.title'),
            url: 'bp-berneck'
          }
        ]}
      />

      {/* INICIO BANNER CAROUSEL */}
      {props.banners && props.banners.length > 0 && (
        <Box bg="brown.300">
          <Flex
            maxWidth="1536px"
            marginX="auto"
            position="relative"
            zIndex="base"
            overflowY="hidden"
            overflowX="hidden"
            // bg="blue"
          >
            <CarrouselBP banners={props.banners} />
          </Flex>
        </Box>
      )}
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
          h={{ base: '700px', sm: '500px', lg: '400px', xl: '500px' }}
          w={{ base: '100%', xl: '100%' }}
          margin={{ base: '5% 0', sm: '3% 1%', lg: '3% 3%', xl: '3% 2%' }}
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
              title={productsViewLabels.t('bpBerneck.bannerProducts.title')}
              titleColor="white"
              subtitle={productsViewLabels.t(
                'bpBerneck.bannerProducts.subtitle'
              )}
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
                router.push(
                  `/${router.locale}/products/bp-berneck/catalog?collection=horizontes`
                )
              }
              title={productsViewLabels.t('bpBerneck.bannerCollections.title')}
              titleColor="brown.300"
              imgSrc="../img/horizontes_banner.jpg"
              ArrowIconColor="#74675D"
              bgColor="rgb(228, 230, 222)"
            />
          </GridItem>
          <GridItem
            rowSpan={1}
            colSpan={{ base: '1', sm: '1', lg: '1', xl: '1' } as any}
            // bg="blue"
          >
            <BannerCollections
              onClick={() =>
                router.push(
                  `/${router.locale}/products/bp-berneck/catalog?collection=sentido`
                )
              }
              title={productsViewLabels.t('bpBerneck.bannerCollections.title')}
              titleColor="brown.300"
              imgSrc="../img/sentido_banner.jpg"
              ArrowIconColor="#74675D"
              bgColor="brown.100"
            />
          </GridItem>
        </Grid>
      </Flex>
      {/* FIM BANNER COLECAO */}

      {/* INICIO Galeria de Ambientes */}
      {props.galleries && props.galleries.length > 0 && (
        <Box bg="green.1000">
          <Flex
            flexDirection={'column'}
            bg="green.1000"
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
                titleString={productsViewLabels.t(
                  'bpBerneck.inspireSection.title'
                )}
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
                <Flex
                  wrap={'nowrap'}
                  direction={'column'}
                  alignItems={'flex-end'}
                >
                  <Text
                    as="h4"
                    variant={'h4' as any}
                    textAlign={'right'}
                    fontWeight={'medium'}
                  >
                    {productsViewLabels.t(
                      'bpBerneck.inspireSection.accessOurs'
                    )}
                  </Text>

                  <Text
                    as="h4"
                    whiteSpace={'nowrap'}
                    variant={'h4' as any}
                    textAlign={'right'}
                    fontWeight="bold"
                  >
                    {' '}
                    {productsViewLabels.t(
                      'bpBerneck.inspireSection.envGallery'
                    )}
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
              <CarouselMultiElements
                numberOfEvidenceElements={isMobile ? 1 : 4}
              >
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
        </Box>
      )}

      {/* FIM Galeria de Ambientes */}

      {/* INICIO banners */}
      <ConditionalLanguageRender>
        <Flex justifyContent={{ base: 'center', '2xl': 'center' }}>
          <Flex
            maxWidth={'1536px'}
            marginX="auto"
            bg="white.100"
            margin={{
              base: '5% 0',
              sm: '3% 1%',
              lg: '3% 3%',
              xl: '3% 2%',
              '2xl': '5% 0 5% 0'
            }}
            justifyContent={{ base: 'space-between', '2xl': 'center' }}
            gap={{ base: '2%', sm: '3%', lg: '3%', xl: '3%' }}
            flexDirection={{ base: 'column', sm: 'row' }}
            // bg="violet"
            flex="1"
          >
            {[
              {
                srcImg: '/assets/imgs/pagina_capa_bp/pack_padroes_bp.png',
                id: 1,
                title: productsViewLabels.t(
                  'bpBerneck.linkBanners.packPatterns.title'
                ),
                subtTitle: productsViewLabels.t(
                  'bpBerneck.linkBanners.packPatterns.subtitle'
                ),
                anchorId: 'pack-bp-downloads',
                subTitleColor: 'gray.400'
              },
              {
                srcImg: '/assets/imgs/pagina_capa_bp/revista_inspirare.png',
                id: 2,
                title: productsViewLabels.t(
                  'bpBerneck.linkBanners.inspireMagazine.title'
                ),
                subtTitle: productsViewLabels.t(
                  'bpBerneck.linkBanners.inspireMagazine.subtitle'
                ),
                anchorId: 'revista-inspirare-bnk ',
                subTitleColor: 'white.100'
              },
              {
                srcImg: '/assets/imgs/pagina_capa_bp/materiais_suporte.png',
                id: 3,
                title: productsViewLabels.t(
                  'bpBerneck.linkBanners.supportMaterials.title'
                ),
                subtTitle: productsViewLabels.t(
                  'bpBerneck.linkBanners.supportMaterials.subtitle'
                ),
                anchorId: 'materiais-de-suporte',
                subTitleColor: 'white.100'
              }
            ].map((i) => {
              return (
                <Flex
                  onClick={() =>
                    (window.location.href = `/bnk-channel/downloads/#${i.anchorId}`)
                  }
                  w={{ base: '100%', md: '30%' }}
                  h={{
                    base: '50vw',
                    sm: '50vw',
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
                    variant={'h5' as any}
                    fontWeight={'normal'}
                  >
                    {i.subtTitle}
                  </Text>
                  <Text
                    zIndex={'docked'}
                    as="h4"
                    variant={'h4' as any}
                    fontWeight={'bold'}
                  >
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
        </Flex>
      </ConditionalLanguageRender>
      {/* FIM banners */}
    </Box>
  )
}

// const PanelImage = (props: { imageSrc: string }) => (
//   <Flex w="100vw" h={{ base: '100%' }}>
//     <Image
//       h="100%"
//       w="100%"
//       src={props.imageSrc}
//       cursor={{ md: 'pointer' }}
//       objectFit="cover"
//       userSelect="none"
//       draggable="false"
//     />
//   </Flex>
// )

interface CarrouselBPProps extends FlexProps {
  banners: BPPageBanner[]
}

const CarrouselBP = ({ banners }: CarrouselBPProps) => {
  const [currentBanner, setCurrentBanner] = useState(0)
  const [imageVisibility, setImageVisibility] = useState(true)
  const [runningNext, setRunningNext] = useState(false)

  function next() {
    if (!runningNext) {
      setRunningNext(true)
      setImageVisibility(false)
      setTimeout(() => {
        if (currentBanner === banners.length - 1) {
          setCurrentBanner(0)
        } else {
          setCurrentBanner((v) => v + 1)
        }
        setRunningNext(false)
      }, 300)
    }
  }

  useEffect(() => {
    setTimeout(() => setImageVisibility(true), 300)
  }, [currentBanner])

  useInterval(next, 5000)
  return (
    <Flex
      maxWidth="1536px"
      marginX="auto"
      position="relative"
      zIndex="base"
      overflowY="hidden"
      overflowX="hidden"
      // h={{
      //   base: '130vw',
      //   md: '405px',
      //   lg: '506px',
      //   xl: '608px',
      //   '2xl': '760px'
      // }}
      // bg="green.100"
    >
      <Link
        href={
          banners[currentBanner] && banners[currentBanner].link
            ? banners[currentBanner].link
            : '#'
        }
      >
        <Flex
        // w="100%"
        // h="100%"
        >
          <Image
            opacity={imageVisibility ? '1' : '0'}
            transition={'0.3s'}
            w="100%"
            h="100%"
            // objectFit={'cover'}
            src={banners.length > 0 ? banners[currentBanner].banner_image : ''}
          />
        </Flex>
      </Link>
      <Flex
        position={'absolute'}
        bottom="10%"
        left="10%"
        gap={{ base: '4px', md: '10px' }}
      >
        {banners.map((_item, i) => {
          return (
            <Box
              key={i}
              bg={i === currentBanner ? 'brown.300' : 'brown.200'}
              w={{ base: '15px', md: '25px' }}
              h={{ base: '15px', md: '25px' }}
              _hover={{
                bg: 'brown.400'
              }}
              cursor="pointer"
              onClick={next}
              border={i === currentBanner ? '1px solid' : ''}
              borderColor={i === currentBanner ? 'brown.300' : ''}
            />
          )
        })}
      </Flex>
    </Flex>
  )
}
