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

const dataPageSession = {
  imageUrl: 'url(/assets/imgs/capa_somos_berneck.png)',
  title: 'Quem somos',
  subtitle: 'Somos a marca da madeira',
  text: 'Somos uma grande floresta viva, cultivada há 3 gerações e nutrida por valores disseminados de pai para filho. Desde a nossa fundação em 1952, estamos envolvidos em toda a cadeia produtiva de painéis e serrados, do plantio e colheita de árvores à manufatura de produtos de madeira premium, que contribuem para o desenvolvimento social e econômico do Brasil e para o mundo.'
}

const dataRaizes = {
  title: 'Raízes firmes para crescer',
  text: 'A força da natureza nos faz crescer. Trabalhamos duro para que nossos produtos ajudem a melhorar a vida das pessoas, apoiando o mercado global e gerando um impacto positivo nas comunidades locais. Nossas parcerias são vigorosas e criam vínculos duradouros com nossos clientes, fornecedores e toda a sociedade. Buscamos e desenvolvemos soluções ágeis e flexíveis para atender aos mais diversos propósitos, e aos mais de 60 países em todos os continentes. Estar próximo, nos faz chegar mais longe.',
  imageSrc: '/assets/imgs/foto_fabrica.png'
}

const dataMundo = {
  title: 'Madeiras para o mundo',
  text: 'Somos uma das maiores exportadoras de painéis e serrados do Brasil. Nossos produtos atendem aos mais elevados padrões do mercado internacional, garantindo o fornecimento da melhor matéria-prima para indústrias dos mais diversos setores. Tudo isso alinhado às exigências de entrada nos países importadores, com a agilidade logística obtida através da localização estratégica de nossas fábricas e integrada à garantia de qualidade na entrega.',
  imageSrc: '/assets/imgs/quem_somos_container.png'
}

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

export const About = () => {
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
        data={dataPageSession}
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
                  color = 'green.600'
                  textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left'}}
                >{dataRaizes.title}</Text>
                <Text
                  color='green.900'
                  textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left'}}
                  marginTop = {{ base: '8px', sm: '8px', lg: '10px', xl: '20px'}}
                >{dataRaizes.text}</Text>

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
              src={dataRaizes.imageSrc}
              w={{ base: '50%', sm: '50%', lg: '500px', xl: '500px' }}
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
            backgroundImage={dataMundo.imageSrc}
            backgroundPosition="left"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            h={{
              base: '300px',
              sm: '350px',
              md: '250px',
              lg: '230px',
              xl: '300px',
              '2xl': '350px'
            }}
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
                  content2Text="3500"
                  content3Text="TEUs / mês"
                />
                <Infographic
                  titleSuperscript1Text="Relações Comerciais"
                  content1Text="+"
                  content2Text="60"
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
              {dataMundo.title}
            </Text>
            <Text
              fontFamily="body"
              color="green.900"
              textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
              marginTop={{ base: '8px', sm: '8px', lg: '10px', xl: '20px' }}
            >
              {dataMundo.text}
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
            margin={{ base: '5% 5%', sm: '5% 5%', lg: '5% 20%', xl: '5% 20%' }}
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
              marginTop={{ base: '8px', sm: '8px', lg: '10px', xl: '20px' }}
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
                base: '3px 0px',
                sm: '5px 0px',
                lg: '5px 0px',
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
                  base: 'center',
                  sm: 'center',
                  lg: 'center',
                  xl: 'left'
                }}
              >
                {dataOndeEstamos.subtitle}
              </Text>
              <Text
                fontFamily="body"
                textAlign={{
                  base: 'center',
                  sm: 'center',
                  lg: 'center',
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
            // bg='yellow'
            flex='1'
            margin = {{ base: '2% 8% 8% 8%', sm: '2% 8% 8% 8%', lg: '5%', xl: '5%'}}
          >
              <PatternInfo
                title="DESCUBRA"
                description="Onde Comprar"
                onClick={() => alert('Onde Comprar')}
                icon={
                  <EarthIcon
                    width={{ base: '30px', xs: '30px', sm: '58px', lg: '70px', xl: '80px' }}
                    height={{ base: '30px', xs: '30px', sm: '58px', lg: '70px', xl: '80px' }}
                  />
                }
              />
          </Box>

        </Flex>

      </Flex>
    {/* FIM REVENDEDORES */}
        <Flex>
          <Box
            // bg='yellow'
            flex="1"
            margin={{ base: '20px', sm: '25px', lg: '50px', xl: '60px' }}
            alignSelf="center"
          >
            <PatternInfo
              title="DESCUBRA"
              description="Onde Comprar"
              onClick={() => alert('Vai para Onde Comprar')}
              icon={
                <EarthIcon
                  width={{
                    base: '30px',
                    xs: '30px',
                    sm: '58px',
                    lg: '70px',
                    xl: '80px'
                  }}
                  height={{
                    base: '30px',
                    xs: '30px',
                    sm: '58px',
                    lg: '70px',
                    xl: '80px'
                  }}
                />
              }
            />
          </Box>
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
            margin = {{ base: '5% 5% 5% 5%', sm: '5% 5% 5% 5%', lg: '5% 2% 5% 5%', xl: '5% 0% 5% 5%'}}
            // bg='blue'
            flex='1'
            justifyItem={"flex-start"}
          >
                <CompletedTitle 
                  titleString = "Certificações"
                  textAlign =  {{ base: 'left', sm: 'left', lg: 'left', xl: 'left'}}
                  alignSelf = {{ base: 'flex-start', sm: 'flex-start', lg: 'flex-start', xl: 'flex-start'}} 
                />
                <Text
                  marginTop={{ base: '10px', sm: '10px', lg: '20px', xl: '20px'}}
                >Manejo florestal, qualidade produtiva, controle de fabricação. Para nós, qualidade e desenvolvimento responsável são mais do que objetivos a serem alcançados, são práticas incorporadas em nosso dia a dia.
                </Text>
          </Box>
          {/* BOX 2 */}
          <Box
            bg='yellow'
            flex='1'
            margin = {{ base: '2% 8% 8% 8%', sm: '2% 8% 8% 8%', lg: '5%', xl: '5%'}}
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
