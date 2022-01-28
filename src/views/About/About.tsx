import {
  Box,
  Image,
  Text,
  Flex,
  Container,
  Wrap,
  Heading,
  Spacer
} from '@chakra-ui/react'
import Pagebar from '@components/Pagebar'
import PageSession from '@components/PageSession'
import Infographic from '@components/Infographic'
import TrajectoryCarousel, {
  mockCarouselObj
} from '@components/TrajectoryCarousel'
import WhereWeAre from '@components/WhereWeAre'
import CompletedTitle from '@components/CompletedTitle'
import { EarthIcon } from '@components/Icons'
import PatternInfo from '@components/PatternInfo'
import PatternInfoPhoto from '@components/PatternInfoPhoto'

const dataTrajetoria = {
  title: 'Nossa Trajetória',
  text: 'Do cultivo da nossa terra, cresceu um comprometimento com a gestão ambientalmente sustentável e socialmente responsável. São mais de 65 anos buscando e desenvolvendo novas aplicações com a nossa madeira de forma versátil e renovável, 100% provenientes de cultivos florestais.'
}

const dataOndeEstamos = {
  title: 'Onde Estamos',
  subtitle: 'Localização estratégica',
  text: 'Nossas plantas industriais estão estrategicamente localizadas próximas às áreas de cultivo florestal e às principais rodovias e portos do país, com fácil distribuição para todo o território nacional e exterior.'
}

const dataCertificacao = {
  title: 'Certificações',
  subtitle: '',
  text: 'Manejo florestal, qualidade produtiva, controle de fabricação. Para nós, qualidade e desenvolvimento responsável são mais do que objetivos a serem alcançados, são práticas incorporadas em nosso dia a dia.'
}

export type AboutPageContent = {
  header_title: string,
  header_text: string,
  section1_title: string,
  section1_text: string,
  section2_title: string,
  section2_text: string,
  exportation_volume: number,
  comercial_relationship: number,
}

export type AboutProps = {
  page_content: AboutPageContent
}

export const About = ({ page_content }:AboutProps) => {
  return (
    <Box maxWidth="1920px" marginX="auto" bg="green.100">
      <Pagebar
        paths={[
          {
            title: 'Somos BERNECK®',
            url: 'somos-berneck'
          }
        ]}
      />

      <PageSession
        data={{
          imageUrl: 'url(/assets/imgs/capa_somos_berneck.png)',
          title: 'Quem somos',
          subtitle: page_content.header_title,
          text: page_content.header_text
        }}
        titleColor="white"
        subTitleColor="white"
      />

      {/* INICIO RAIZES FIRMES PARA CRESCER */}
      <Flex
        maxWidth="1920px"
        marginX="auto"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        bg="green.200"
      >
        <Flex
          // bg='red'
          direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row' }}
        >
          <Box
            // bg='pink'
            flex="1"
            margin={{
              base: '8% 8% 2% 8%',
              sm: '8% 8% 2% 8%',
              lg: '5%',
              xl: '5%'
            }}
            alignSelf="center"
          >
                <Text as='h3'
                  variant = {"h3" as any}
                  color = 'green.550'
                  textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left'}}
                >{page_content.section1_title}</Text>
                <Text
                  color='green.900'
                  textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left'}}
                  marginTop = {{ base: '8px', sm: '8px', lg: '10px', xl: '20px'}}
                >{page_content.section1_text}</Text>

          </Box>
          <Box
            // bg='yellow'
            flex="1"
            margin={{
              base: '2% 8% 8% 8%',
              sm: '2% 8% 8% 8%',
              lg: '5%',
              xl: '5%'
            }}
          >
            <Image
              src={'/assets/imgs/foto_fabrica.png'}
              w={{ base: '100%', sm: '100%', lg: '500px', xl: '500px' }}
            />
          </Box>
        </Flex>
      </Flex>
      {/* FIM RAIZES FIRMES PARA CRESCER */}



      {/* INICIO PARA O MADEIRAS MUNDO */}
      <Flex
        maxWidth="1920px"
        marginX="auto"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        bg="white"
        backgroundImage="/assets/imgs/quem_somos_mapa.png"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Flex
          // bg='blue'
          direction={{
            base: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row'
          }}
        >
          {/* GLOBAL BOX 1 */}
          <Box
            // bg='pink'
            flex={{ base: '1', sm: '1', md: '1', lg: '2', xl: '2' }}
            margin={{
              base: '8% 0% 0% 0%',
              sm: '8% 0% 0% 0%',
              md: '8% 0% 0% 0%',
              lg: '8% 0% 8% 0%',
              xl: '8% 0% 8% 0%'
            }}
            backgroundImage={'/assets/imgs/quem_somos_container.png'}
            backgroundPosition="left"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
          >
            <Flex
              // bg='grey'
              direction={{
                base: 'row',
                sm: 'row',
                md: 'row',
                lg: 'row',
                xl: 'row'
              }}
              justifyItems="center"
              justifyContent="center"
            >
              {/* BOX 1 */}
              <Box
                flex={{ base: '1.2', sm: '1.2', md: '1.1', lg: '1', xl: '1' }}
                // bg='yellow'
              />
              {/* BOX 2 */}
              <Box
                // bg='red'
                flex={{ base: '1.2', sm: '1.2', md: '1.2', lg: '1.1', xl: '1' }}
              >
                <Infographic
                  titleSuperscript1Text="Volume de Exportação"
                  content1Text="+"
                  content2Text={page_content.exportation_volume}
                  content3Text="TEUs / mês"
                />
                <Infographic
                  titleSuperscript1Text="Relações Comerciais"
                  content1Text="+"
                  content2Text={page_content.comercial_relationship}
                  content3Text="países"
                />
              </Box>
            </Flex>
          </Box>

          {/* GLOBAL BOX 2 */}
          <Box
            // bg='grey'
            flex="1"
            margin={{
              base: '8% 10% 10% 10%',
              sm: '8% 10% 8% 10%',
              lg: '8% 5% 8% 0%',
              xl: '8% 8% 8% 5%'
            }}
            alignSelf="center"
          >
            <Text
              as="h3"
              variant={'h3' as any}
              fontFamily="body"
              color="green.900"
              textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
            >
              {page_content.section2_title}
            </Text>
            <Text
              fontFamily="body"
              color="green.900"
              textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
              marginTop={{ base: '8px', sm: '8px', lg: '10px', xl: '20px' }}
            >
              {page_content.section2_text}
            </Text>
          </Box>
        </Flex>
      </Flex>
      {/* FIM PARA O MADEIRAS MUNDO */}



      {/* INICIO TRAJETORIA CAROUSEL */}
      <Box bg="brown.100">
        <Flex
          // bg='yellow'
          direction={{
            base: 'column',
            sm: 'column',
            lg: 'column',
            xl: 'column'
          }}
          alignItems="center"
          padding={{ base: '5%', sm: '5%', lg: '5%', xl: '5%' }}
        >
          <Flex
            direction={{
              base: 'column',
              sm: 'column',
              lg: 'column',
              xl: 'column'
            }}
            // bg='pink'
            flex="1"
            alignItems="center"
            margin={{ base: '8% 5%', sm: '5% 5%', lg: '5% 20%', xl: '5% 20%' }}
          >
            <CompletedTitle
              titleString={dataTrajetoria.title}
              textAlign={{
                base: 'center',
                sm: 'center',
                lg: 'left',
                xl: 'left'
              }}
            />
            <Text
              fontFamily="body"
              color="brown.350"
              marginTop={{ base: '30px', sm: '8px', lg: '10px', xl: '20px' }}
              textAlign="center"
            >
              {dataTrajetoria.text}
            </Text>
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            width="100%"
            margin={{ xs: '0', sm: '0', md: '0', lg: '20px', xl: '20px' }}
          >
            <TrajectoryCarousel {...mockCarouselObj} />
          </Flex>
        </Flex>
      </Box>
      {/* FIM TRAJETORIA CAROUSEL */}



      {/* INICIO ONDE ESTAMOS */}
      <Flex
        maxWidth="1920px"
        marginX="auto"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        bg="white.100"
      >
        <Flex
          direction="column"
          // bg='pink'
          marginBottom={{ base: '5%', sm: '5%', lg: '5%', xl: '5%' }}
        >
          {/* FLEX 1 - BOX 1 */}
          <Flex
            direction={{
              base: 'column',
              sm: 'column',
              lg: 'column',
              xl: 'row'
            }}
            // bg='azure'
            flex="1"
            // alignItems='center'
            margin={{ base: '5%', sm: '5%', lg: '5%', xl: '5%' }}
          >
            <CompletedTitle 
              titleColor = 'green.900' 
              titleString = {dataOndeEstamos.title} 
              alignSelf = {{ base: 'center', sm: 'center', lg: 'center', xl: 'flex-start'}} 
              textAlign =  {{ base: 'center', sm: 'center', lg: 'center', xl: 'left'}}
            />

            <Box
              margin={{
                base: '25px 0px',
                sm: '25px 0px',
                lg: '25px 0px',
                xl: '15px 10px'
              }}
              // bg='pink'
              flex="2"
            >
              <Text
                as="h3"
                variant={'h3' as any}
                fontFamily="body"
                color="green.600"
                textAlign={{
                  base: 'left',
                  sm: 'left',
                  lg: 'left',
                  xl: 'left'
                }}
              >
                {dataOndeEstamos.subtitle}
              </Text>
              <Text
                fontFamily="body"
                textAlign={{
                  base: 'left',
                  sm: 'left',
                  lg: 'left',
                  xl: 'left'
                }}
              >
                {dataOndeEstamos.text}
              </Text>
            </Box>
          </Flex>
          {/* FLEX 1 - BOX 2 */}
          <Flex
            justifyContent="center"
            alignItems="center"
            width="100%"
            margin={{
              base: '0',
              xs: '0',
              sm: '0',
              md: '0',
              lg: '0',
              xl: '0 0 0 5%'
            }}
            color="red"
          >
            <WhereWeAre />
          </Flex>
        </Flex>
      </Flex>
      {/* FIM ONDE ESTAMOS */}





  {/* INICIO REVENDEDORES */}
  <Flex
        maxWidth="1920px"
        marginX="auto"
        // alignItems='center'
        // justifyContent='center'
        position='relative'
        zIndex='base'
        overflowY="hidden"
        overflowX="hidden"
        bg = 'green.200'
      >
        <Flex
          // bg='red'
          direction = {{ base: 'column', sm: 'column', lg: 'row', xl: 'row'}}
          width={"100%"}
        >
          <Box
            // bg='pink'
            flex='1'
            margin = {{ base: '8% 8% 2% 8%', sm: '8% 8% 2% 8%', lg: '5%', xl: '5%'}}
            // alignSelf='center'
          >
                <Text as='h3'
                  variant = {"h3" as any}
                  textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left'}}
                >Revendedores</Text>
                <Text
                  color='green.900'
                  textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left'}}
                  marginTop = {{ base: '8px', sm: '8px', lg: '10px', xl: '20px'}}
                >Nossos produtos estão nos melhores móveis e revendas especializadas do Brasil e do mundo.</Text>

          </Box>
          <Box
            bg='yellow'
            flex='1'
            margin = {{ base: '3% 0% 0% 0%', sm: '3% 0% 0% 0%', lg: '5%', xl: '5%'}}
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

        </Flex>

      </Flex>
    {/* FIM REVENDEDORES */}
      


    {/* INICIO CERTIFICADOS */}
     <Flex
        maxWidth="1920px"
        marginX="auto"
        alignItems='center'
        justifyContent='center'
        position='relative'
        zIndex='base'
        overflowY="hidden"
        overflowX="hidden"
        bg = 'white.100'
        backgroundImage="/assets/imgs/grafismos_fundo2.png"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"  
      >
        <Flex
          // bg='purple'
          direction = {{ base: 'column', sm: 'column', lg: 'row', xl: 'row'}}
          alignItems={"center"}
        >
          {/* BOX 1 */}
          <Box
            margin = {{ base: '10% 5% 5% 5%', sm: '5% 5% 5% 5%', lg: '5% 2% 5% 5%', xl: '5% 0% 5% 5%'}}
            // bg='blue'
            flex='1'
            justifyItem={"flex-start"}
          >
                <CompletedTitle 
                  titleString = "Certificações"
                  textAlign =  {{ base: 'center', sm: 'center', lg: 'left', xl: 'left'}}
                  alignSelf = {{ base: 'center', sm: 'center', lg: 'flex-start', xl: 'flex-start'}} 
                />
                <Text
                  marginTop={{ base: '25px', sm: '25px', lg: '20px', xl: '20px'}}
                >Manejo florestal, qualidade produtiva, controle de fabricação. Para nós, qualidade e desenvolvimento responsável são mais do que objetivos a serem alcançados, são práticas incorporadas em nosso dia a dia.
                </Text>
          </Box>
          {/* BOX 2 */}
          <Box
            // bg='yellow'
            flex='1'
            margin = {{ base: '2% 0% 5% 0%', sm: '2% 0% 5% 0%', lg: '5%', xl: '5%'}}
          >
             <PatternInfoPhoto 
                onClick={() => alert('Vai para Nossas Certificações')}
                imgSrc="/assets/imgs/banner_certificacoes.png"
             />
          </Box>
        
        </Flex> 

      </Flex> 
      {/* FIM CERTIFICADOS */}

  
</Box>
  )
}
