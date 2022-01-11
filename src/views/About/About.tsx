import * as S from './styles'
import { Box, Image, Text, Flex, Container, Wrap, Heading, Spacer } from '@chakra-ui/react'

import GlobalContainer from '@components/GlobalContainer'
import Pagebar from '@components/Pagebar'
import PageSession from '@components/PageSession'
import HeaderTitle from '@components/HeaderTitle'
import Infographic from '@components/Infographic'
import { SP } from 'next/dist/shared/lib/utils'

const data = {
  imageUrl: 'url(/assets/imgs/capa_somos_berneck.png)',
  title: 'Quem somos',
  subtitle: 'Somos a marca da madeira',
  text: 'Somos uma grande floresta viva, cultivada há 3 gerações e nutrida por valores disseminados de pai para filho. Desde a nossa fundação em 1952, estamos envolvidos em toda a cadeia produtiva de painéis e serrados, do plantio e colheita de árvores à manufatura de produtos de madeira premium, que contribuem para o desenvolvimento social e econômico do Brasil e para o mundo.',
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
        data={data}
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
            margin = {{ base: '20px', sm: '25px', lg: '50px', xl: '60px'}}
            h='100%'
            alignSelf='center'
          >
           <Text
              fontFamily = 'body'
              fontWeight= 'bold'
              color = 'green.600'
              fontSize = {{ base: '18px', sm: '18px', lg: '22px', xl: '24px'}}
              // alignSelf='center'
            >Raízes firmes para crescer</Text>
            
            <Text
              fontFamily = 'body'
              fontWeight= 'normal'
              color='green.900'
              fontSize = {{ base: '10px', sm: '10px', lg: '14px', xl: '16px'}}
              marginTop = {{ base: '8px', sm: '8px', lg: '10px', xl: '12px'}}
            >A força da natureza nos faz crescer. Trabalhamos duro para que nossos produtos ajudem a melhorar a vida das pessoas, apoiando o mercado global e gerando um impacto positivo nas comunidades locais. Nossas parcerias são vigorosas e criam vínculos duradouros com nossos clientes, fornecedores e toda a sociedade. Buscamos e desenvolvemos soluções ágeis e flexíveis para atender aos mais diversos propósitos, e aos mais de 60 países em todos os continentes. Estar próximo, nos faz chegar mais longe.</Text>
          </Box>
          
          <Box
            // bg='yellow'
            flex='1'
            margin = {{ base: '20px', sm: '25px', lg: '50px', xl: '60px'}}
            alignSelf='center'
          >
            <Image 
              src='/assets/imgs/foto_fabrica.png'
              w={{ base: '300px', sm: '400px', lg: '550px', xl: '500px'}}
              
            />
          </Box>

        </Flex>
      </Box>
      {/* FIM RAIZES FIRMES PARA CRESCER */}



      {/* INICIO PARA O MUNDO */}
      <Box
        // bg= 'white'
      >
        <Flex
          bg='white'
          direction = {{ base: 'row', sm: 'row', lg: 'row', xl: 'row'}}
          backgroundImage='url(/assets/imgs/quem_somos_mapa.png)'
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          overflowY="hidden"
          overflowX="hidden"
        >

          <Box
            bg='yellow'
            flex='1'
            margin = {{ base: '2%', sm: '25px -70px', lg: '50px -90px', xl: '60px -90px'}}
            alignSelf='center'
          >
            <Image 
              src='/assets/imgs/quem_somos_container.png'
              w = {{ base: 'auto', sm: '400px', lg: '550px', xl: '600px'}}
            />
              <Box
                bg='blue'
                position='absolute'
                margin = {{ base: '10% 20%', sm: '-20% 35%', lg: '-200px 380px', xl: '-220px 500px'}}
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
              bg='pink'
              flex='1'
              alignSelf='center'
              marginRight = {{ base: '5%', sm: '20px', lg: '80px', xl: '100px'}}
              marginLeft = {{ base: '5%', sm: '200px', lg: '300px', xl: '350px'}}
            >
              <Text
                fontFamily = 'body'
                fontWeight= 'bold'
                color = 'green.900'
                fontSize = {{ base: '18px', sm: '18px', lg: '22px', xl: '22px'}}
                // alignSelf='center'
              >Madeira para o mundo</Text>
              
              <Text
                fontFamily = 'body'
                fontWeight= 'normal'
                color='brown.350'
                fontSize = {{ base: '10px', sm: '10px', lg: '14px', xl: '14px'}}
                marginTop = {{ base: '8px', sm: '8px', lg: '10px', xl: '10px'}}
              >Somos uma das maiores exportadoras de painéis e serrados do Brasil. Nossos produtos atendem aos mais elevados padrões do mercado internacional, garantindo o fornecimento da melhor matéria-prima para indústrias dos mais diversos setores. Tudo isso alinhado às exigências de entrada nos países importadores, com a agilidade logística obtida através da localização estratégica de nossas fábricas e integrada à garantia de qualidade na entrega.</Text>
          
          </Box>

       </Flex>
     </Box>

      {/* FIM PARA O MUNDO */}



      

      

      <Infographic
        content2Text = '250'
        content1Text = '+'
        titleSubscript1Text = 'Espécies de Animais Silvestres'
      ></Infographic>

      <Infographic
        content2Text = '6'
        titleSubscript1Text = 'Fazendas monitoradas'
      ></Infographic>

      <Infographic
        titleSuperscript2Text = 'Reaproveitamos'
        content1DisplayIcon = 'yes'
        content1IconName = 'water'
        content2Text = '30'
        content4Text = '%'
        titleSubscript1Text = 'da Água Utilizada'
      ></Infographic>


      <Infographic
        titleSuperscript2Text = 'Co-geramos'
        content1DisplayIcon = 'yes'
        content1IconName = 'energy'
        content2Text = '60'
        content4Text = '%'
        titleSubscript1Text = 'da Energia Utilizada'
      ></Infographic>

      
      <Infographic
        content1Text = '+'
        content2Text = '7,5'
        content3Text = 'Mil'
        // content4Text = 'Colaboradores diretos e indiretos'
        titleSubscript1Text = 'Colaboradores diretos e indiretos'
      ></Infographic>


      <Infographic
        content1DisplayIcon = 'yes'
        content1IconName = 'trees'
        content2Text = '86'
        content3Text = 'Mil hectares'
        titleSubscript1Text = 'Florestas Plantadas para produção'
      ></Infographic>

      {/* </GlobalContainer> */}
      {/* <WhereWeAre /> */}
    </Box>
  )
}