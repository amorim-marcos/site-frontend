import * as S from './styles'
import { Box, Image, Text, Flex, Container, Wrap } from '@chakra-ui/react'

import GlobalContainer from '@components/GlobalContainer'
import Pagebar from '@components/Pagebar'
import PageSection from '@components/PageSection'
import HeaderTitle from '@components/HeaderTitle'
import Infografico from '@components/Infografico'

const data = {
  imageUrl: 'url(/assets/imgs/quem_somos_foto_capa.png)',
  title: 'Quem somos',
  subtitle: 'Somos a marca da madeira',
  text: 'Somos uma grande floresta viva, cultivada há 3 gerações e nutrida por valores disseminados de pai para filho. Desde a nossa fundação em 1952, estamos envolvidos em toda a cadeia produtiva de painéis e serrados, do plantio e colheita de árvores à manufatura de produtos de madeira premium, que contribuem para o desenvolvimento social e econômico do Brasil e para o mundo.',
}

export const About = () => {
  return (

      <GlobalContainer>
        <Pagebar title="Quem somos" />

        <PageSection 
          data={data}
          titleColor = 'red.100'
          titleLineColor = 'red.100'
          subTitleColor = 'green.200'
          
        />

      <S.SectionRaizes>

        <HeaderTitle
            HeadingColor='red.100'
            headerType='h4'
            LineDisplay='none'
          >Raizes firmes para crescer</HeaderTitle>
          <Text>A força da natureza nos faz crescer. Trabalhamos duro para que nossos produtos ajudem a melhorar a vida das pessoas, apoiando o mercado global e gerando um impacto positivo nas comunidades locais. Nossas parcerias são vigorosas e criam vínculos duradouros com nossos clientes, fornecedores e toda a sociedade. Buscamos e desenvolvemos soluções ágeis e flexíveis para atender aos mais diversos propósitos, e aos mais de 60 países em todos os continentes. Estar próximo, nos faz chegar mais longe.</Text>

      </S.SectionRaizes>


      <S.SectionParaMundo>

        <HeaderTitle
            HeadingColor='red.100'
            headerType='h4'
            LineDisplay='none'
          >Madeira para o mundo</HeaderTitle>
          <Text>Somos uma das maiores exportadoras de painéis e serrados do Brasil. Nossos produtos atendem aos mais elevados padrões do mercado internacional, garantindo o fornecimento da melhor matéria-prima para indústrias dos mais diversos setores. Tudo isso alinhado às exigências de entrada nos países importadores, com a agilidade logística obtida através da localização estratégica de nossas fábricas e integrada à garantia de qualidade na entrega.</Text>

          <Flex>
            <Image 
              src='/assets/imgs/foto_fabrica.png'
            />
          </Flex>

      </S.SectionParaMundo>

      <Infografico></Infografico>

      </GlobalContainer>
  )
}