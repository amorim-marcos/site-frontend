import {
  Box,
  GridItem,
  Grid,
  Flex,
  Text,
  Wrap,
  Heading,
  Image
} from '@chakra-ui/react'
import PatternInfoPhoto from '@components/PatternInfoPhoto'
import Carousel from '@components/Carousel'
import CompletedTitle from '@components/CompletedTitle'  
import BannerProducts from '@components/BannerProducts'
import ArrowIcon from '@components/Icons/ArrowIcon'
import PatternInfo from '@components/PatternInfo'
import { EarthIcon } from '@components/Icons'
import Contactusicon from '@components/Icons/Contactusicon'

export type HomeProps = {
    name: string
    imageSrc: string
  }

export default function Home(props:HomeProps) {
  return (
    <Box 
        maxWidth="1920px" 
        marginX="auto" 
        bg="white.100"
    >
        
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
              
              <Carousel
                carouselType = "brown"
              >
                <PanelImage
                    imageSrc = "../img/banner_bp.png"
                />
                <PanelImage
                    imageSrc = "../img/Curitibanos.png"
                />
                <PanelImage
                    imageSrc = "../img/mdf_plus_bp.png"
                />
              </Carousel>
        </Flex>
        {/* FIM BANNER CAROUSEL */}


      {/* INICIO Nossos Produtos */}
      <Flex
        maxWidth="1920px"
        marginX="auto"
        position='relative'
        zIndex='base'
        overflowY="hidden"
        overflowX="hidden"
        bg = 'white'
        backgroundImage="/assets/imgs/grafismos_fundo2.png"
        backgroundPosition="center"
        backgroundRepeat="no-repeat" 
        direction={{ base: 'column', sm: 'column', lg: 'column', xl: 'column'}}
      >
            {/* TITULO */}
          <Flex
            // bg="grey"
            flex="1"
            m = {{ base: '5% 2% 0% 2%', sm: '5% 5% 2% 5%', lg: '5% 5% 2% 5%', xl: '5% 5% 2% 5%'}}
            direction={{ base: 'column', sm: 'row', lg: 'row', xl: 'row'}}
            
          >
            <CompletedTitle 
                titleString = "Nossos Produtos"
                textAlign =  {{ base: 'left', sm: 'left', lg: 'left', xl: 'left'}}
                alignSelf = {{ base: 'flex-start', sm: 'flex-start', lg: 'flex-start', xl: 'flex-start'}} 
            />
           
            {/* FRASE */}
            <Flex
                flex="1"
                // bg="tomato"
                alignItems={"center"}
                justifyContent={"flex-end"}
            > 
                {/* INICIO FLEX INTERNO */}
                <Flex
                    // bg="black"
                    // flex="20"
                    direction={{ base: 'column', sm: 'column', lg: 'column', xl: 'column'}}
                    alignItems={"flex-end"}
                >
                    <Text as='h4'
                        variant = {"h4" as any}
                        textAlign={{ base: 'right', sm: 'right', lg: 'right', xl: 'right'}}
                        fontWeight={"medium"}
                        color={"green.550"}
                    >Veja todos os produtos</Text>

                </Flex>
                <Flex
                    // bg="yellow"
                    // flex="1"
                    p={{ base: '5px', sm: '5px', lg: '5px', xl: '10px'}}
                    alignItems={"flex-end"}
                    direction={{ base: 'column', sm: 'column', lg: 'column', xl: 'column'}}
                >
                <ArrowIcon
                    width={{ base: '10px', md: '10px', lg: '12px', xl: '12px' }}
                    stroke= '#6DB416'
                />
                </Flex>
                {/* FIM FLEX INTERNO */}
            </Flex>
        </Flex>
        
    {/* INICIO GALERIA PRODUTOS */}
    <Flex
        // bg="green"
        flex="1"
        m = {{ base: '5% 2% 5% 2%', sm: '0% 5% 5% 5%', lg: '0% 5% 5% 5%', xl: '0% 5% 5% 5%'}}
        overflowY="hidden"
        overflowX="hidden"
      >
        <Flex
            // bg="black"
            flex="1"
            
        >
          {/* GALERIA // PAGINACAO */}
          <Box
              m={"10px"}
          >
          {/* INICIO BANNERS PRODUTOS */}
            <Grid
              h={{ base: '300px', sm: '350px', lg: '415px', xl: '615px'}}
              w={{ base: '100%', sm: '100%', lg: '100%', xl: '100%'}}
              // margin={{ base: '2% 0%', sm: '1% 0%', lg: '2% 0%', xl: '1% 0%'}}
              templateRows={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', lg: 'repeat(1, 1fr)', xl: 'repeat(1, 1fr)'}}
              templateColumns={{ base: 'repeat(7, 1fr)', sm: 'repeat(7, 1fr)', lg: 'repeat(7, 1fr)', xl: 'repeat(7, 1fr)'}}
              gap={{ base: '5', sm: '4', lg: '8', xl: '10'}}
            >
              <GridItem>
                  <BannerProducts 
                    title="BP BERNECK®"
                    titleColor="white"
                    subtitle = "Laminado Melamínico Decorativo"
                    subtitleColor = "brown.200"
                    bgColor="brown.300"
                    srcImg = "img/mdf.png"
                    srcMargin = {{ base: '5%', sm: '2%', lg: '0% -5% 0% 20%', xl: '0% 0% 20% 10%'}}
                    onClick={() => alert("Ir para BP")}
                    bannerSize = {{ base: '100px', sm: '150px', lg: '200px', xl: '300px'}}
                  />
              </GridItem>

              <GridItem>
                <BannerProducts 
                  title="PLUS BERNECK®"
                  titleColor="white"
                  subtitle = "Linha de Painéis com Resistência Extra à Umidade"
                  subtitleColor = "brown.350"
                  bgColor="green.400"
                  srcImg = "img/plus.png"
                  srcMargin = {{ base: '25%', sm: '0% 25% 30% 25%', lg: '0% 0% 60% 20%', xl: '0% 0% 30% 20%'}}
                  onClick={() => alert("Ir para Produto")}
                  bannerSize = {{ base: '100px', sm: '150px', lg: '200px', xl: '300px'}}
                />
              </GridItem>
              
              <GridItem>
                <BannerProducts 
                  title="HDF BERNECK®"
                  titleColor = "grey.400"
                  subtitle = "Painel de Fibra de Alta Densidade"
                  subtitleColor = "grey.400"
                  bgColor="brown.200"
                  srcImg = "img/hdf.png"
                  srcMargin = {{ base: '25%', sm: '0% 0% 30% 30%', lg: '0% 0% 70% 25%', xl: '0% 0% 40% 20%'}}
                  onClick={() => alert("Ir para Produto")}
                  bannerSize = {{ base: '100px', sm: '150px', lg: '200px', xl: '300px'}}
                />
              </GridItem>

              <GridItem>
                <BannerProducts 
                  title="MDF BERNECK®"
                  titleColor = "grey.400"
                  subtitle = "Painel de Fibra de Média Densidade"
                  subtitleColor = "grey.400"
                  bgColor="brown.200"
                  srcImg = "img/mdf.png"
                  srcMargin = {{ base: '25%', sm: '0% 0% 30% 20%', lg: '0% 0% 50% 10%', xl: '0% 0% 30% 20%'}}
                  onClick={() => alert("Ir para Produto")}
                  bannerSize = {{ base: '100px', sm: '150px', lg: '200px', xl: '300px'}}
                />
              </GridItem>
              <GridItem>
                <BannerProducts 
                  title="MDP BERNECK®"
                  titleColor = "grey.400"
                  subtitle = "Painel de Partículas de Média Densidade"
                  subtitleColor = "grey.400"
                  bgColor="brown.200"
                  srcImg = "img/mdp.png"
                  srcMargin = {{ base: '25%', sm: '0% 0% 30% 20%', lg: '0% 0% 50% 10%', xl: '0% 0% 30% 20%'}}
                  onClick={() => alert("Ir para Produto")}
                  bannerSize = {{ base: '100px', sm: '150px', lg: '200px', xl: '300px'}}
                />
              </GridItem>
              
              <GridItem>
                <BannerProducts 
                  title="BERNECK® TECA"
                  titleColor = "grey.400"
                  subtitle = "Madeira Serrada de Teca"
                  subtitleColor = "grey.400"
                  bgColor="brown.250"
                  srcImg = "img/teca.png"
                  srcMargin = {{ base: '25%', sm: '0% 0% 30% 20%', lg: '0% 0% 50% 10%', xl: '0% 0% 30% 20%'}}
                  onClick={() => alert("Ir para Produto")}
                  bannerSize = {{ base: '100px', sm: '150px', lg: '200px', xl: '300px'}}
                />
              </GridItem>

              <GridItem>
                  <BannerProducts 
                    title="BERNECK® PINUS"
                    titleColor = "green.900"
                    subtitle = "Madeira Serrada de Pinus"
                    subtitleColor = "grey.400"
                    bgColor="green.300"
                    srcImg = "img/pinus.png"
                    srcMargin = {{ base: '25%', sm: '0% 0% 30% 20%', lg: '-30% -25% 0% 20%', xl: '-10% -25% 0% 20%'}}
                    onClick={() => alert("Ir para Produto")}
                    bannerSize = {{ base: '5%', sm: '150px', lg: '200px', xl: '300px'}}
                  />
              </GridItem>

            </Grid>
            {/* FIM BANNERS PRODUTOS */}
          </Box>

      </Flex>
    </Flex>
    {/* FIM GALERIA PRODUTOS */}
    
    <Flex
        // bg="yellow"
        flex="1"
        m = {{ base: '0% 0% 5% 0%', sm: '0% 5% 2% 5%', lg: '0% 5% 5% 5%', xl: '0% 5% 5% 5%'}}
        direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row'}}
        
      >
        <Box
          flex="1"
          // bg="pink"
          m = {{ base: '0% 0% 2% 0%', sm: '0% 0% 5% 0%', lg: '0%', xl: '0%'}}
        >
          <PatternInfo
                title="DESCUBRA"
                description="Onde Comprar"
                onClick={() => alert('Onde Comprar')}
                icon={
                  <EarthIcon
                    width={{ base: '60px', xs: '30px', sm: '58px', lg: '70px', xl: '80px' }}
                    height={{ base: '60px', xs: '30px', sm: '58px', lg: '70px', xl: '80px' }}
                  />
                }
              />
        </Box>
        <Box
          flex="1"
          // bg="pink"
          m = {{ base: '0% 0% 2% 0%', sm: '0% 0% 5% 0%', lg: '0% 0% 0% 3%', xl: '0% 0% 0% 4%'}}
        >
          <PatternInfo
                title="ENTRE EM CONTATO"
                description="Fale Conosco"
                onClick={() => alert('Fale Conosco')}
                icon={
                  <Contactusicon
                    width={{ base: '60px', xs: '30px', sm: '58px', lg: '70px', xl: '80px' }}
                    height={{ base: '60px', xs: '30px', sm: '58px', lg: '70px', xl: '80px' }}
                  />
                }
              />
        </Box>
    </Flex>
  
</Flex>
{/* FIM Nossos Produtos */}




    {/* INICIO Banners */}
    <Flex
      maxWidth="1920px"
      marginX="auto"
      position='relative'
      zIndex='base'
      overflowY="hidden"
      overflowX="hidden"
      bg = 'green.250'
      direction={{ base: 'column', sm: 'column', lg: 'column', xl: 'column'}}
    >
      <Flex
        // bg="yellow"
        flex="1"
        m = {{ base: '5% 0% 5% 0%', sm: '5% 5% 2% 5%', lg: '5% 5% 5% 5%', xl: '5% 5% 5% 5%'}}
        direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row'}}
        
      >
        <Box
          flex="1"
          // bg="pink"
          m = {{ base: '0% 0% 2% 0%', sm: '0% 0% 5% 0%', lg: '0%', xl: '0%'}}
        >
          <PatternInfoPhoto 
                onClick={() => alert('Vai para Nossas Certificações')}
                imgSrc="/assets/imgs/cultivamos_nossos_valores.png"
                title = "CONHEÇA"
                description="Nossas certificações"
                titleColor = "green.900"
                descriptionColor='white'
             />
        </Box>
        <Box
          flex="1"
          // bg="pink"
          m = {{ base: '0% 0% 2% 0%', sm: '0% 0% 5% 0%', lg: '0% 0% 0% 3%', xl: '0% 0% 0% 4%'}}
        >
          <PatternInfo
                title="ENTRE EM CONTATO"
                description="Fale Conosco"
                onClick={() => alert('Fale Conosco')}
                icon={
                  <Contactusicon
                    width={{ base: '60px', xs: '30px', sm: '58px', lg: '70px', xl: '80px' }}
                    height={{ base: '60px', xs: '30px', sm: '58px', lg: '70px', xl: '80px' }}
                  />
                }
              />
        </Box>
    </Flex>
 </Flex>


{/* INICIO Redes Sociais */}
<Flex
        maxWidth="1920px"
        marginX="auto"
        position='relative'
        zIndex='base'
        overflowY="hidden"
        overflowX="hidden"
        bg = 'white'
        direction={{ base: 'column', sm: 'column', lg: 'column', xl: 'column'}}
      >
        {/* TITULO */}
        <Flex
          // bg="grey"
          m = {{ base: '5% 2% 0% 2%', sm: '5% 5% 2% 5%', lg: '5% 5% 2% 5%', xl: '5% 5% 2% 5%'}}
          direction={{ base: 'column', sm: 'row', lg: 'row', xl: 'row'}}
        >
          <CompletedTitle 
              titleString = "Conecte-se"
              textAlign =  {{ base: 'left', sm: 'left', lg: 'left', xl: 'left'}}
              alignSelf = {{ base: 'flex-start', sm: 'flex-start', lg: 'flex-start', xl: 'flex-start'}} 
          />
      </Flex>
       {/* REDES SOCIAIS */}
       <Flex
          bg="green"
          m = {{ base: '5% 2% 10% 2%', sm: '2% 5% 10% 5%', lg: '2% 5% 8% 5%', xl: '2% 5% 5% 5%'}}
          direction={{ base: 'column', sm: 'row', lg: 'row', xl: 'row'}}
        >
          <Image 
            src = "../img/Imagem67.png"
          />
      </Flex>


</Flex>       


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