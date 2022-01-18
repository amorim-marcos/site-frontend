import * as S from './styles'
import { Box, Image, Text, Flex, Container, Wrap, Heading, Spacer } from '@chakra-ui/react'

import GlobalContainer from '@components/GlobalContainer'
import Pagebar from '@components/Pagebar'
import PageSession from '@components/PageSession'
import HeaderTitle from '@components/HeaderTitle'
import Infographic from '@components/Infographic'
import TrajectoryCarousel, {mockCarouselObj } from '@components/TrajectoryCarousel'
import WhereWeAre, { mockPanelObj } from '@components/WhereWeAre'
import { SP } from 'next/dist/shared/lib/utils'

const dataPageSession = {
  imageUrl: 'url(/assets/imgs/capa_somos_berneck.png)',
  title: 'Quem somos',
  subtitle: 'Somos a marca da madeira',
  text: 'Somos uma grande floresta viva, cultivada há 3 gerações e nutrida por valores disseminados de pai para filho. Desde a nossa fundação em 1952, estamos envolvidos em toda a cadeia produtiva de painéis e serrados, do plantio e colheita de árvores à manufatura de produtos de madeira premium, que contribuem para o desenvolvimento social e econômico do Brasil e para o mundo.',
}

const dataRaizes = {
  title: 'Raízes firmes para crescer',
  text: 'A força da natureza nos faz crescer. Trabalhamos duro para que nossos produtos ajudem a melhorar a vida das pessoas, apoiando o mercado global e gerando um impacto positivo nas comunidades locais. Nossas parcerias são vigorosas e criam vínculos duradouros com nossos clientes, fornecedores e toda a sociedade. Buscamos e desenvolvemos soluções ágeis e flexíveis para atender aos mais diversos propósitos, e aos mais de 60 países em todos os continentes. Estar próximo, nos faz chegar mais longe.',
  imageSrc: '/assets/imgs/foto_fabrica.png'
}

const dataMundo = {
  title: 'Madeiras para o mundo',
  text: 'Somos uma das maiores exportadoras de painéis e serrados do Brasil. Nossos produtos atendem aos mais elevados padrões do mercado internacional, garantindo o fornecimento da melhor matéria-prima para indústrias dos mais diversos setores. Tudo isso alinhado às exigências de entrada nos países importadores, com a agilidade logística obtida através da localização estratégica de nossas fábricas e integrada à garantia de qualidade na entrega.',
  imageSrc: '/assets/imgs/foto_fabrica.png'
}

export const About = () => {
  return (
    <Box
      maxWidth="1920px"
      marginX="auto"
      bg='green.100'
    >

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
        titleColor = 'white'
        titleLineColor = 'red.100'
        subTitleColor = 'white'
      />

    

      {/* INICIO RAIZES FIRMES PARA CRESCER */}
      <Box
        bg= 'green.200' 
      >
        <Flex
          // bg='red'
          direction = {{ base: 'column', sm: 'row', lg: 'row', xl: 'row'}}
        >
          <Box
            // bg='pink'
            flex='1'
            margin = {{ base: '5%', sm: '35px', lg: '50px', xl: '60px'}}
            h='100%'
            alignSelf='center'
          >
           <Text
              fontFamily = 'body'
              fontWeight= 'extrabold'
              color = 'green.600'
              fontSize = {{ base: '18px', sm: '24px', lg: '27px', xl: '30px'}}
              // alignSelf='center'
            >{dataRaizes.title}</Text>
            
            <Text
              fontFamily = 'body'
              fontWeight= 'normal'
              color='green.900'
              fontSize = {{ base: '8px', sm: '12px', lg: '16px', xl: '20px'}}
              marginTop = {{ base: '8px', sm: '8px', lg: '10px', xl: '20px'}}
            >{dataRaizes.text}</Text>
          </Box>
          
          <Box
            // bg='yellow'
            flex='1'
            margin = {{ base: '20px', sm: '25px', lg: '50px', xl: '60px'}}
            alignSelf='center'
          >
            <Image 
              src={dataRaizes.imageSrc}
              w={{ base: '300px', sm: '400px', lg: '550px', xl: '500px'}}
              
            />
          </Box>

        </Flex>
      </Box>
      {/* FIM RAIZES FIRMES PARA CRESCER */}



      {/* INICIO PARA O MADEIRAS MUNDO */}
      <Box
        // bg= 'white'
      >
        <Flex
          bg='white'
          direction = {{ base: 'column', sm: 'column', lg: 'row', xl: 'row'}}
          backgroundImage='url(/assets/imgs/quem_somos_mapa.png)'
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          overflowY="hidden"
          overflowX="hidden"
        >

          <Box
            // bg='yellow'
            flex='1'
            margin = {{ base: '3% 10%', sm: '3%', lg: '0% -60%', xl: '60px -90px'}}
            marginLeft={{ base: '-10%', sm: '-10%', md: '-30%', lg: '-9%', xl: '-8%'}}
            alignSelf='center'
          >
            <Image 
              src='/assets/imgs/quem_somos_container.png'
              w = {{ base: '60%', sm: '50%', md: '55%', lg: '70%', xl: '90%'}}
            />
              <Box
                // bg='blue'
                position='absolute'
                margin = {{ base: '-25% 42%', xs: '-25% 42%', sm: '-25% 42%', md: '-25% 45%',  lg: '-14% 25%', xl: '-18% 27%' , '2xl': '-15% 30%'}}
              >
                <Infographic
                  titleSuperscript1Text = 'Volume de Exportação'
                  content1Text = '+'
                  content2Text = '3500'
                  content3Text = 'TEUs / mês'
                ></Infographic>
                
                <Infographic
                  titleSuperscript1Text = 'Relações Comerciais'
                  content1Text = '+'
                  content2Text = '60'
                  content3Text = 'países'
                ></Infographic>

              </Box>
          </Box>

            <Box
              // bg='pink'
              flex='1'
              alignSelf='center'
              marginTop = {{ base: '50px', sm: '4%', lg: '3%', xl: '2%'}}
              marginRight = {{ base: '5%', sm: '5%', lg: '5%', xl: '5%'}}
              marginLeft = {{ base: '5%', sm: '5%', lg: '70%', xl: '20%'}}
              marginBottom = {{ base: '5%', sm: '5%', lg: '3%', xl: '2%'}}
            >
              <Text
                fontFamily = 'body'
                fontWeight= 'bold'
                color = 'green.900'
                fontSize = {{ base: '18px', sm: '24px', lg: '27px', xl: '30px'}}
                // alignSelf='center'
              >{dataMundo.title}</Text>
              
              <Text
                fontFamily = 'body'
                fontWeight= 'medium'
                color='brown.350'
                fontSize = {{ base: '8px', sm: '12px', lg: '16px', xl: '20px'}}
                marginTop = {{ base: '8px', sm: '8px', lg: '10px', xl: '10px'}}
              >{dataMundo.text}</Text>
          
          </Box>

       </Flex>
     </Box>

      {/* FIM PARA O MADEIRAS MUNDO */}


      {/* INICIO TRAJETORIA CAROUSEL */}
      <Box
          bg= 'brown.100'
        >
        <Flex
          // bg='white'
          direction = {{ base: 'column', sm: 'column', lg: 'column', xl: 'column'}}
          alignItems='center'
        >
          
          <Flex
            direction = {{ base: 'column', sm: 'column', lg: 'column', xl: 'column'}}
            // bg='pink'
            flex='1'
            alignItems='center'
            margin={{ base: '5% 5%', sm: '5% 5%', lg: '5% 20%', xl: '5% 20%'}}
          >
            <Text
              fontFamily = 'body'
              fontWeight = 'bold'
              color = 'green.900'
              fontSize = {{ base: '18px', sm: '32px', lg: '40px', xl: '50px'}}
              textAlign = 'center'
            >Nossa Trajetória</Text>
            <Box 
              margin={{ base: '3px', sm: '8px', lg: '16px', xl: '25px'}}
              h="3px"
              w={{ base: '60px', sm: '70px', lg: '80px', xl: '90px'}}
              bg="green.600"
              borderRadius="20px"
              alignSelf="right"
            />
            <Text
              fontFamily = 'body'
              fontWeight= 'medium'
              color='brown.350'
              fontSize = {{ base: '8px', sm: '12px', lg: '16px', xl: '20px'}}
              marginTop = {{ base: '8px', sm: '8px', lg: '10px', xl: '10px'}}
              textAlign = 'center'
            >Do cultivo da nossa terra, cresceu um comprometimento com a gestão ambientalmente sustentável e socialmente responsável. São mais de 65 anos buscando e desenvolvendo novas aplicações com a nossa madeira de forma versátil e renovável, 100% provenientes de cultivos florestais.</Text>
        
          </Flex>
          <Flex justifyContent="center" alignItems="center" width="100%" margin={{ xs: "0", sm: "0", md: "0", lg: "20px", xl: "20px" }}>
            <TrajectoryCarousel {...mockCarouselObj}/>
          </Flex>
        </Flex>
      </Box>
      {/* FIM TRAJETORIA CAROUSEL */}
      

      {/* INICIO ONDE ESTAMOS */}
      <Flex
        // bg='pink'
      >
        
        <WhereWeAre {...mockPanelObj}/>
      </Flex>
      {/* FIM ONDE ESTAMOS */}




  {/* INICIO REVENDEDORES */}
  <Box
      bg= 'green.200' 
    >
      <Flex
        // bg='red'
        direction = {{ base: 'row', sm: 'row', lg: 'row', xl: 'row'}}
        h = {{ base: '100px', sm: '200px', lg: '300px', xl: '400px'}}
        alignContent='center'
      >
        <Box
          // bg='azure'
          flex='1'
          margin = {{ base: '5%', sm: '5%', lg: '5%', xl: '5%'}}
          alignSelf='center'
        >
          <Text
            fontFamily = 'body'
            fontWeight= 'extrabold'
            color = 'green.900'
            fontSize = {{ base: '18px', sm: '24px', lg: '27px', xl: '30px'}}
            // alignSelf='center'
          >Revendedores</Text>
          
          <Text
            fontFamily = 'body'
            fontWeight= 'normal'
            color='green.900'
            fontSize = {{ base: '8px', sm: '12px', lg: '16px', xl: '20px'}}
            marginTop = {{ base: '8px', sm: '8px', lg: '10px', xl: '12px'}}
          >Nossos produtos estão nos melhores móveis e revendas especializadas do Brasil e do mundo.</Text>
        </Box>
        
        <Box
          // bg='yellow'
          flex='1'
          margin = {{ base: '20px', sm: '25px', lg: '50px', xl: '60px'}}
          alignSelf='center'
        >
          <Image 
            src='/assets/imgs/onde_comprar.png'
            w={{ base: '300px', sm: '400px', lg: '550px', xl: '600px'}}
            
          />
        </Box>

      </Flex>
    </Box>
    {/* FIM REVENDEDORES */}




    {/* INICIO CERTIFICADOS */}
    <Flex
      bg='white'
      maxWidth="1920px"
      marginX="auto"
      h={{ base: '200px', sm: '280px', lg: '350px', xl: '500px'}}
      position='relative'
      zIndex='base'
      overflowY="hidden"
      overflowX="hidden"
    >
     {/* IMAGEM DE FUNDO   */}
      <Image
        // bg='pink'
        src='/assets/imgs/grafismo_fundo_cinza.png'
        marginLeft={{ base: '-20px', sm: '-20px', lg: '-30px', xl: '-250px'}}
        h='200%'
        
      />
      {/* CONTENT */}
      <Flex
        // bg = 'grey'
        position='absolute'
        zIndex='base'
        margin = {{ base: '5%', sm: '5%', lg: '5%', xl: '5%'}}
      >
      <Box
          flex='1'
          // bg='grey'
        >
        {/* COLUNA 1 FLEX */}
        <Flex
          direction={{ base: 'column', sm: 'column', lg: 'column', xl: 'column'}}
           w={{ base: '90%', sm: '90%', lg: '70%', xl: '70%'}}
        >
          <Box 
            w='100%'
            // bg='red'
            flexWrap='nowrap'
            flex='1'
            >
             <Text
              fontFamily = 'body'
              fontWeight= 'extrabold'
              color= 'green.900'
              fontSize = {{ base: '18px', sm: '32px', lg: '40px', xl: '50px'}}
            >Certificações</Text>
            <Box 
              marginTop={{ base: '3px', sm: '10px', lg: '20px', xl: '31px'}}
              h="3px"
              w={{ base: '60px', sm: '70px', lg: '80px', xl: '90px'}}
              bg="green.600"
              borderRadius="20px"
            />
          </Box>

          <Box
            margin={{ base: '3px 0px', sm: '5px 0px', lg: '10px 0px', xl: '15px 0px'}}
            // bg='green.200'
          > 
            <Text
              fontFamily = 'body'
              fontWeight= 'normal'
              color='green.900'
              fontSize = {{ base: '8px', sm: '14px', lg: '16px', xl: '20px'}}
            >Manejo florestal, qualidade produtiva, controle de fabricação. Para nós, qualidade e desenvolvimento responsável são mais do que objetivos a serem alcançados, são práticas incorporadas em nosso dia a dia.</Text>
          </Box>
        </Flex>   
        </Box>

        {/* IMAGEM LATERAL */}
        <Box
          flex='1'
          // bg='green'
          alignSelf='center'
        >
          <Image 
              src='/assets/imgs/img_nossas_certificacoes.png'
            />
        </Box>

      </Flex>
       


    
  </Flex>   
    {/* FIM CERTIFICADOS */}




    {/* </GlobalContainer> */}
    {/* <WhereWeAre /> */}
  </Box>
  )
}