import { Flex, Text, Box, Image, Grid, GridItem } from '@chakra-ui/react'
import Pagebar from '@components/Pagebar'
import Carousel from '@components/Carousel'
import BannerProducts from '@components/BannerProducts'
import CompletedTitle from '@components/CompletedTitle'
import ArrowIcon from '@components/Icons/ArrowIcon'
import BannerGallery from '@components/BannerGallery'
import PatternInfoPhoto from '@components/PatternInfoPhoto'
import BannerCollections from '@components/BannerCollections'

export type BpBerneckViewProps = {
  name: string
  imageSrc: string
}

export default function BpBerneckView(props: BpBerneckViewProps) {
  return (
    <Box maxWidth="1920px" marginX="auto" bg="white.100">
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
        maxWidth="1920px"
        marginX="auto"
        // alignItems="center"
        // justifyContent="center"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        bg="white.100"
      >
        <Carousel carouselType="brown">
          <PanelImage imageSrc="../img/banner_bp.png" />
          <PanelImage imageSrc="../img/Curitibanos.png" />
          <PanelImage imageSrc="../img/mdf_plus_bp.png" />
        </Carousel>
      </Flex>
      {/* FIM BANNER CAROUSEL */}

      {/* INICIO BANNER COLECAO */}
      <Grid
        h={{ base: '600px', sm: '500px', lg: '600px', xl: '600px' }}
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
            onClick={() => alert('Ir para BP')}
          />
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={{ base: '1', sm: '1', lg: '1', xl: '1' } as any}
          bg="papayawhip"
        >
          <BannerCollections
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
            title="Conheça"
            titleColor="green.700"
            imgSrc="../img/banner_origens.png"
            ArrowIconColor="#0A6C3B"
          />
        </GridItem>
      </Grid>
      {/* FIM BANNER COLECAO */}

      {/* INICIO Galeria de Ambientes */}
      <Flex
        maxWidth="1920px"
        marginX="auto"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        bg="green.200"
        direction={{ base: 'column', sm: 'column', lg: 'column', xl: 'column' }}
      >
        {/* TITULO */}
        <Flex
          // bg="grey"
          flex="1"
          m={{
            base: '2% 2% 0% 2%',
            sm: '5% 5% 2% 5%',
            lg: '5% 5% 2% 5%',
            xl: '5% 5% 2% 5%'
          }}
          direction={{ base: 'column', sm: 'row', lg: 'row', xl: 'row' }}
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

          {/* FRASE */}
          <Flex
            flex="1"
            // bg="tomato"
            alignItems={'flex-end'}
          >
            {/* INICIO FLEX INTERNO */}
            <Flex
              // bg="black"
              flex="10"
              direction={{
                base: 'column',
                sm: 'column',
                lg: 'column',
                xl: 'column'
              }}
              alignItems={'flex-end'}
            >
              <Text
                as="h4"
                variant={'h4' as any}
                textAlign={{
                  base: 'right',
                  sm: 'right',
                  lg: 'right',
                  xl: 'right'
                }}
                fontWeight={'medium'}
              >
                Acesse a nossa
              </Text>

              <Text
                as="h4"
                variant={'h4' as any}
                textAlign={{
                  base: 'right',
                  sm: 'right',
                  lg: 'right',
                  xl: 'right'
                }}
              >
                Galeria de ambientes
              </Text>
            </Flex>
            <Flex
              // bg="yellow"
              flex="1"
              p={{ base: '5px', sm: '5px', lg: '5px', xl: '10px' }}
              alignItems={'flex-end'}
              direction={{
                base: 'column',
                sm: 'column',
                lg: 'column',
                xl: 'column'
              }}
            >
              <ArrowIcon
                width={{ base: '30px', md: '40px', lg: '32px', xl: '32px' }}
                stroke="#6DB416"
              />
            </Flex>
            {/* FIM FLEX INTERNO */}
          </Flex>
        </Flex>

        {/* INICIO GALERIA DE AMBIENTES FOTOS */}
        <Flex
          bg="green"
          flex="1"
          m={{
            base: '5% 2% 5% 2%',
            sm: '0% 5% 5% 5%',
            lg: '0% 5% 5% 5%',
            xl: '0% 5% 5% 5%'
          }}
          overflowY="hidden"
          overflowX="hidden"
        >
          <Flex
            // bg="black"
            flex="1"
          >
            {/* GALERIA // PAGINACAO */}
            <Box m={'10px'}>
              <BannerGallery
                title="Cozinhas"
                bgColor="green.250"
                backgroundImage="../img/Imagem70.png"
              />
            </Box>
            <Box m={'10px'}>
              <BannerGallery
                title="Salas de estar"
                bgColor="brown.300"
                backgroundImage="../img/Imagem67.png"
              />
            </Box>
            <Box m={'10px'}>
              <BannerGallery
                title="Quartos"
                bgColor="brown.200"
                backgroundImage="../img/Imagem70.png"
              />
            </Box>
            <Box m={'10px'}>
              <BannerGallery
                title="Banheiros"
                bgColor="brown.250"
                backgroundImage="../img/Imagem67.png"
              />
            </Box>
          </Flex>
        </Flex>
        {/* FIM GALERIA DE AMBIENTES FOTOS */}
      </Flex>
      {/* FIM Galeria de Ambientes */}

      <Box
        // bg="green"
        // flex="1"
        m={{
          base: '5% 0% 5% 0%',
          sm: '5% 0% 5% 0%',
          lg: '5% 5% 5% 5%',
          xl: '5% 5% 5% 5%'
        }}
      >
        <Grid
          h={{ base: '600px', sm: '600px', lg: '320px', xl: '423px' }}
          w={{ base: '100%', sm: '100%', lg: '100%', xl: '100%' }}
          // margin={{ base: '0%', sm: '0%', lg: '0%', xl: '3% 3%'}}
          templateRows={{
            base: 'repeat(3, 1fr)',
            sm: 'repeat(3, 1fr)',
            lg: 'repeat(1, 1fr)',
            xl: 'repeat(1, 1fr)'
          }}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(1, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(3, 1fr)'
          }}
          gap={{ base: '5', sm: '4', lg: '8', xl: '10' }}
        >
          <GridItem rowSpan={1} colSpan={1}>
            <PatternInfoPhoto
              onClick={() => alert('Vai para Nossas Certificações')}
              imgSrc="../img/Imagem71.png"
              title="FAÇA O DOWNLOAD"
              description="Pack de Padrões BP BERNECK"
              titleColor="brown.350"
              descriptionColor="green.900"
            />
          </GridItem>
          <GridItem colSpan={1}>
            <PatternInfoPhoto
              onClick={() => alert('Vai para Nossas Certificações')}
              imgSrc="../img/Imagem72.png"
              title="CONHEÇA MAIS"
              description="Revista Inspirare BNK"
              titleColor="white.100"
              descriptionColor="green.900"
            />
          </GridItem>
          <GridItem colSpan={1}>
            <PatternInfoPhoto
              onClick={() => alert('Vai para Nossas Certificações')}
              imgSrc="../img/Imagem73.png"
              title="CONHEÇA MAIS"
              description="Materiais de Suporte"
              titleColor="white.100"
              descriptionColor="green.900"
            />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}

const PanelImage = (props: { imageSrc: string }) => (
  <Flex h="100%" justifyContent="center" alignItems="center" pos="relative">
    <Image
      h="100%"
      src={props.imageSrc}
      cursor={{ md: 'pointer' }}
      objectFit="cover"
      userSelect="none"
      draggable="false"
    />
  </Flex>
)
