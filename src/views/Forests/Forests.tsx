import { Container, Box, HStack, Spacer, Flex, Link, Text, Image, Button, Select, Input, Center, Checkbox, BoxProps, LinkProps} from "@chakra-ui/react"
import Pagebar from '@components/Pagebar'
import PageSession from '@components/PageSession'
import Firealert from '@components/Firealert'
import CompletedTitle from '@components/CompletedTitle'
import PatternInfo from '@components/PatternInfo'
import { CertificationsIcon, ReportsIcon } from '@components/Icons'
import Infographic from '@components/Infographic'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

const dataPageSession = {
  imageUrl: 'url(/assets/imgs/Grupo_1872.png)',
  title: 'Divisão florestal',
  subtitle: '',
  text: 'Somos a marca da madeira, por isso, nossa matéria-prima é tão importante para nós e cuidamos com responsabilidade de nossas florestas. Toda a nossa madeira é proveniente de florestas plantadas, preservando as florestas nativas e garantindo o emprego e a renda no campo para milhares de famílias. As práticas de manejo florestal adotadas em nossas florestas asseguram a utilização racional dos recursos naturais para a produção em escala e longo prazo da matéria-prima que abastece nossas fábricas.'
}

const dataValores = {
  title: 'Colhemos o que plantamos',
  text: 'Plantamos mais de 7 milhões de árvores por ano. Nossas florestas plantadas são importantes sob o aspecto econômico, social e trazem benefícios para o meio ambiente. Nossas áreas florestais são constituídas por plantações e áreas naturais que contribuem para a conservação dos ecossistemas, fundamentais à vida no planeta. Além disso, trabalhamos no mapeamento das comunidades afetadas pelas operações de manejo florestal para que possamos adotar resoluções para as interferências negativas, contribuindo ainda mais para a geração de uma cadeia de valor.'
}

const bannerIcendio = {
  title: "Em caso de incêndio em nossas florestas e entornos, ligue para 41 2109-3855 [PR] | 41 2109-3856 [PR] | 49 3245-9015 [SC] | 49 3245-9186 [SC]",
  display: "flex"
}

export const Forests = () => {
  return (
    <Box
      maxWidth="1920px"
      marginX="auto"
      bg='green.100'
    >

      <Pagebar
        paths={[
          {
            title: 'Divisão florestal',
            url: 'divisao-florestal'
          }
        ]}
      />

      <Firealert 
        title = {bannerIcendio.title}
        display={bannerIcendio.display}
      />

      <PageSession 
        data={dataPageSession}
        titleColor = 'white'
        subTitleColor = 'white'
      />

      {/* INICIO Colhemos o que plantamos */}
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
      >
        <Flex
          direction = {{ base: 'column', sm: 'column', lg: 'column', xl: 'column'}}
          // bg='grey'
        >

            <Flex
              // bg='blue'
              direction = {{ base: 'column', sm: 'column', lg: 'row', xl: 'row'}}
            >
              {/* BOX 1 */}
              <Box
                // bg='yellow'
                flex='1'
                margin = {{ base: '8% 7% 0% 5%', sm: '5% 5% 0% 5%', lg: '5% 5% 5% 5%', xl: '5% 5% 2% 5%'}}
              >
                  <Text as='h3'
                      variant = {"h3" as any}
                      color = 'green.550'
                      marginBottom={{ base: '2%', sm: '2%', lg: '5%', xl: '2%'}}
                  >{dataValores.title}</Text>
                  
                  <Text
                    fontFamily = 'body'
                  >{dataValores.text}</Text>
                  
              </Box>
              {/* BOX 2 */}
              <Box
                // bg='pink'
                flex='1'
                margin = {{ base: '8% 7% 0% 5%', sm: '5% 5% 0% 5%', lg: '5% 5% 0% 5%', xl: '5% 5% 0% 5%'}}
              >

                <Flex
                  // bg='blue'
                  direction='column'
                  alignItems="center"
                  padding={{ base: '3%', sm: '3%', lg: '5%', xl: '5%'}}
                  backgroundImage="/assets/imgs/fundo_madeira.svg"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"  
                >
                  <Text as='h3'
                      variant = {"h3" as any}
                      fontFamily = 'body'
                      color = 'green.800'
                      textAlign="center"
                      margin={{ base: '3% 3% 0% 3%', sm: '3% 3% 0% 3%', lg: '5% 5% 0% 5%', xl: '3% 3% 0% 3%'}}
                    >Cultivamos para colher,</Text>
                    <Text as='h3'
                      variant = {"h3" as any}
                      fontFamily = 'body'
                      color = 'green.800'
                      textAlign="center"
                      margin={{ base: '0% 3% 3% 3%', sm: '0% 3% 3% 3%', lg: '0% 5% 5% 5%', xl: '0% 3% 5% 3%'}}
                    >Conservamos para colher sempre!</Text>
                    
                    <Button 
                      onClick={() => alert('colorations')}
                      w={{ base: '70%', sm: '70%', lg: '90%', xl: '90%'}}
                      h={{ base: '70%', sm: '70%', lg: '90%', xl: '90%'}}
                      padding={{ base: '3%', sm: '3%', lg: '5%', xl: '5%'}}
                    >
                      <Text as="h5"
                        variant={"h5" as any}
                        fontFamily = 'body'
                        color='white'
                        textAlign="center"
                        fontWeight="bold"
                      >Conheça nosso compromisso ambiental</Text>
                    </Button>

                  </Flex>
              </Box>
            
            </Flex>

            <HStack
              // bg='tomato'
              // spacing='24px'
              // direction = {{ base: 'row', sm: 'row', lg: 'row', xl: 'row'}}
              margin = {{ base: '8% 7% 5% 5%', sm: '5% 5% 5% 5%', lg: '5% 5% 2% 5%', xl: '5% 5% 5% 5%'}}
              alignItems='center'
              justifyContent='space-evenly'
              // position='relative'
              // zIndex='base'
              flexWrap={'wrap'}
              // overflowY="hidden"
              // overflowX="hidden"
              // maxWidth="1500px"
              // marginX="auto"
            >
              
                  <Infographic
                    content3Text = 'mil hectares'
                    content1DisplayIcon = 'yes'
                    content1IconName = 'trees'
                    content2Text = '86'
                    titleSubscript1Text = 'Florestas Plantadas para Produção'
                  />
                  <Infographic
                    content3Text = 'mil hectares'
                    content1DisplayIcon = 'yes'
                    content1IconName = 'trees'
                    content2Text = '92'
                    titleSubscript1Text = 'Preservação de Florestas Nativas'
                  />
                  <Infographic
                    content3Text = 'municípios'
                    content1DisplayIcon = 'yes'
                    content1IconName = 'trees'
                    content2Text = '60'
                    titleSubscript1Text = 'Cadeia de Valor'
                  />
                  <Infographic
                    content3Text = 'mil hectares'
                    content1DisplayIcon = 'yes'
                    content1IconName = 'trees'
                    content2Text = '86'
                    titleSubscript1Text = 'Florestas Plantadas para Produção'
                  />
                  <Infographic
                    content3Text = 'mil hectares'
                    content1DisplayIcon = 'yes'
                    content1IconName = 'trees'
                    content2Text = '92'
                    titleSubscript1Text = 'Preservação de Florestas Nativas'
                  />
                  <Infographic
                    content3Text = 'municípios'
                    content1DisplayIcon = 'yes'
                    content1IconName = 'trees'
                    content2Text = '60'
                    titleSubscript1Text = 'Cadeia de Valor'
                  />


            
           </HStack>
        </Flex>

      </Flex>
      {/* FIM Colhemos o que plantamos */}



      {/* INICIO Manejo Florestal */}
      <Flex
        maxWidth="1920px"
        marginX="auto"
        alignItems='center'
        justifyContent='center'
        position='relative'
        zIndex='base'
        overflowY="hidden"
        overflowX="hidden"
        bg = 'green.200'
      >
        <Flex
          // bg='blue'
          direction = {{ base: 'column', sm: 'column', lg: 'row', xl: 'row'}}
        >
          {/* BOX 1 */}
           <Box
            // bg='pink'
            flex='1'
            justifyItem={"center"}
            backgroundImage="/assets/imgs/iStock-621469294.png"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"  
            // margin = {{ base: '5% 5% 5% 5%', sm: '5% 5% 5% 5%', lg: '5% 2% 5% 5%', xl: '5% 2% 5% 5%'}}
          >
            <Box
              margin={{ base: '30% 8% 5% 8%', sm: '30% 8% 5% 8%', lg: '65% 8% 5% 8%', xl: '70% 8% 5% 8%'}}
              h="100%"
            >
             <PatternInfo
                title="CONHEÇA"
                description="Nossas Certificações"
                onClick={() => alert('Vai para Nossas Certificações')}
                icon={
                  <CertificationsIcon
                    width={{ base: '30px', xs: '30px', sm: '58px', lg: '70px', xl: '80px' }}
                    height={{ base: '30px', xs: '30px', sm: '58px', lg: '70px', xl: '80px' }}
                  />
                }
              />
            </Box>
          </Box>
          {/* BOX 2 */}
          <Box
            margin = {{ base: '5% 5% 5% 5%', sm: '5% 5% 5% 5%', lg: '5% 5% 5% 5%', xl: '5% 5% 5% 5%'}}
            // bg='yellow'
            flex='1'
          >
                <CompletedTitle 
                  titleString = "Manejo Florestal"
                  textAlign =  {{ base: 'left', sm: 'left', lg: 'left', xl: 'left'}}
                  alignSelf = {{ base: 'flex-start', sm: 'flex-start', lg: 'flex-start', xl: 'flex-start'}} 
                />
                <Text
                  marginTop={"3%"}
                  textAlign =  {{ base: 'left', sm: 'left', lg: 'left', xl: 'left'}}
                >O principal objetivo do manejo florestal da BERNECK® é produzir madeira premium, de alta qualidade. Planejar e conduzir o desenvolvimento das áreas de produção através do uso de técnicas de manejo condizentes com as características de cada região é fundamental para o sucesso dos nossos resultados. Assim, é possível garantir a sustentabilidade do negócio e a produtividade da floresta em curto, médio e longo prazo. Foi assim que nos certificamos em Manejo Florestal pelo FSC , sistema de certificação internacional que reconhece florestas manejadas de forma ambientalmente responsável, socialmente benéfico e economicamente viável.
                </Text>
                <Text
                  marginTop={"3%"}
                  textAlign =  {{ base: 'left', sm: 'left', lg: 'left', xl: 'left'}}
                >Atualmente, são 170 mil hectares destinados ao cultivo florestal de Pinus no Paraná, em Santa Catarina e no Rio Grande do Sul. Deste total, 88 mil hectares são constituídos por áreas de reserva legal, preservação permanente e outros fragmentos de vegetação nativa. De Teca, são 8 mil hectares de terras dedicadas ao seu cultivo no Mato Grosso, sendo metade desta área destinada à preservação.
                </Text>
          </Box>
        
        </Flex> 

      </Flex> 
      {/* FIM Manejo Florestal */}


      {/* INICIO Preservação da biodiversidade */}
      <Flex
        maxWidth="1920px"
        marginX="auto"
        alignItems='center'
        justifyContent='center'
        position='relative'
        zIndex='base'
        overflowY="hidden"
        overflowX="hidden"
        bg = 'grey.100' 
      >
        <Flex
          // bg='blue'
          direction = {{ base: 'column', sm: 'column', lg: 'row', xl: 'row'}}
        >
          {/* BOX 1 */}
          <Box
            bg='pink'
            flex='1'
            margin = {{ base: '5% 5% 5% 5%', sm: '5% 5% 5% 5%', lg: '5% 2% 5% 5%', xl: '5% 2% 5% 5%'}}
          >
              <Text
              >Texto template</Text>
          </Box>
          {/* BOX 2 */}
          <Box
            margin = {{ base: '0% 5% 5% 5%', sm: '0% 5% 5% 5%', lg: '5% 5% 5% 5%', xl: '5% 5% 5% 2%'}}
            // bg='yellow'
            flex='1'
          >
              <Text as='h3'
                variant = {"h3" as any}
                textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left'}}
              >Preservação da biodiversidade</Text>
              <Text
                marginTop={"2%"}
              >Os estudos da biodiversidade são ferramentas importantes para a manutenção de um manejo florestal responsável. Nosso Programa Anual de Monitoramento de Fauna das Unidades Florestais da BERNECK® analisa os aspectos de evolução, recuperação de áreas degradadas, impacto ambiental, distribuição e composição da biodiversidade local. 
              </Text>
              <Text
                marginTop={"3%"}
                // textAlign =  {{ base: 'left', sm: 'left', lg: 'left', xl: 'left'}}
              >
              O plantio em mosaicos, a proteção de cursos d’água, prevenção de incêndios florestais e o uso racional dos recursos naturais podem contribuir – e muito – para a sustentabilidade do meio ambiente. Esse manejo florestal ajuda no estabelecimento de corredores ecológicos, que favorecem a circulação de mais de XXX espécies de animais silvestres, colaborando com a conservação da biodiversidade.
              </Text>
          </Box>
        
        </Flex> 

      </Flex> 
      {/* FIM Preservação da biodiversidade */}



      {/* INICIO Produção Florestal */}
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
          // bg='blue'
          direction = {{ base: 'column', sm: 'column', lg: 'row', xl: 'row'}}
          alignItems={"center"}
        >
          {/* BOX 1 */}
          <Box
            margin = {{ base: '5% 5% 5% 5%', sm: '5% 5% 8% 5%', lg: '3% 3% 3% 3%', xl: '3% 3% 3% 3%'}}
            // bg='yellow'
            flex='1'
            justifyItem={"flex-start"}
          >
                 <CompletedTitle 
                  titleString = "Produção Florestal"
                  textAlign =  {{ base: 'left', sm: 'left', lg: 'left', xl: 'left'}}
                  alignSelf = {{ base: 'flex-start', sm: 'flex-start', lg: 'flex-start', xl: 'flex-start'}} 
                />
                <Text
                  marginTop={{ base: '10px', sm: '10px', lg: '20px', xl: '20px'}}
                >Nossas árvores plantadas são utilizadas de maneira inteligente. O tronco é usado para a serraria, a parte mais fina da árvore para os painéis e a casca para produzir energia. Os galhos e raízes são deixados no campo e servem de nutrientes para o solo e as novas plantações. Desta maneira, aproveitamos tudo o que a floresta nos proporciona, sem desperdícios. Fazemos o Ciclo Completo da Floresta. Por trás de cada uma das etapas da produção florestal existem ações organizadas para garantir seu sucesso e produtividade. O Programa de Melhoramento Genético, por exemplo, envolve o desenvolvimento de matrizes de alta produtividade para coleta de sementes. Somado a isto, a BERNECK® conta com dois viveiros para produção de mudas, no Paraná e em Santa Catarina, com capacidade para expedir aproximadamente 8 milhões de mudas por ano.
                </Text>
          </Box>
        
          {/* BOX 2 */}
          <Box
            // bg='pink'
            flex='1'
            justifyItem={"center"}
            margin = {{ base: '0% 5% 5% 5%', sm: '0% 5% 5% 5%', lg: '5% 2% 5% 5%', xl: '5% 2% 5% 5%'}}
          >
             <Image 
              src="/assets/imgs/IMG_0618.png"
             />
          </Box>
        
        </Flex> 

      </Flex> 
      {/* FIM Produção Florestal */}




      {/* INICIO Do plantio à colheita */}
      <Flex
        maxWidth="1920px"
        marginX="auto"
        alignItems='center'
        justifyContent='center'
        position='relative'
        zIndex='base'
        overflowY="hidden"
        overflowX="hidden"
        bg = 'brown.100'
      >
        <Flex
          // bg='blue'
          direction = {{ base: 'column', sm: 'column', lg: 'row', xl: 'row'}}
          alignItems={"center"}
        >
          {/* BOX 1 */}
          <Box
            // bg='pink'
            flex='1'
            justifyItem={"center"}
            margin = {{ base: '5% 5% 5% 5%', sm: '5% 5% 5% 5%', lg: '5% 2% 5% 5%', xl: '5% 0% 5% 5%'}}
          >
             <Image 
              src="/assets/imgs/5–8_MUDAS.png"
             />
          </Box>
          {/* BOX 2 */}
          <Box
            margin = {{ base: '0% 5% 5% 5%', sm: '0% 5% 8% 5%', lg: '3% 3% 3% 3%', xl: '3% 5% 3% 3%'}}
            // bg='yellow'
            flex='1'
            justifyItem={"flex-start"}
          >
                <Text as='h3'
                  variant = {"h3" as any}
                  color={"green.800"}
                  textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left'}}
                >Do plantio à colheita</Text>
                <Text
                  marginTop={{ base: '10px', sm: '10px', lg: '20px', xl: '20px'}}
                >Os plantios das sementes são manuais e sua germinação ocorre entre 20 e 30 dias, mas é somente após uma permanência de, aproximadamente, 6 meses no viveiro que as mudas estão aptas a serem plantadas. Para o plantio das mudas é realizado o cultivo mínimo, sem nenhum manejo dos solos, ou seja, sem utilizar fogo, fertilizantes ou qualquer tipo de tratamento no preparo dos terrenos, para que não haja interferência negativa nas áreas do entorno e contribuindo para a manutenção da fertilidade dos solos. O mesmo acontece no sistema de colheita, em que o respeito ao relevo local é um importante fator que orienta as tomadas de decisão, bem como a intensidade da mecanização e a correta utilização de tecnologias. Adotamos o sistema de colheita Cut-to-lengh, que considera a topografia do terreno, a volumetria da floresta e o uso final da madeira na indústria para garantir uma alta produtividade em nossas operações florestais, com o menor impacto nos solos e a maior facilidade no manuseio da madeira. A Colheita Florestal abrange as etapas de derrubada e baldeio, em plantios entre 16 e 18 anos
                </Text>
          </Box>
        
        </Flex> 

      </Flex> 
      {/* FIM Do plantio à colheita */}



      {/* INICIO Destaques da produção florestal */}
      <Flex
        maxWidth="1920px"
        marginX="auto"
        alignItems='center'
        justifyContent='center'
        position='relative'
        zIndex='base'
        overflowY="hidden"
        overflowX="hidden"
        bg = 'grey.100'
        backgroundImage="/assets/imgs/grafismos_fundo2.png"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"  
      >
        <Flex
          // bg='blue'
          direction = {{ base: 'column', sm: 'column', lg: 'column', xl: 'column'}}
        >
          {/* BOX 1 */}
          <Box
            // bg='pink'
            flex={{ base: '1', sm: '1', lg: '2', xl: '1'}}
            margin = {{ base: '5% 5% 0% 5%', sm: '5% 5% 0% 5%', lg: '5% 2% 5% 5%', xl: '5% 2% 5% 5%'}}
          >
             <CompletedTitle 
                titleString = "Destaques da produção florestal"
                textAlign =  {{ base: 'center', sm: 'center', lg: 'center', xl: 'center'}}
                alignSelf = {{ base: 'center', sm: 'center', lg: 'center', xl: 'center'}} 
              />

          </Box>
          {/* BOX 2 */}
          <Flex
            margin = {{ base: '3% 5% 5% 5%', sm: '3% 5% 5% 5%', lg: '5% 5% 5% 5%', xl: '5% 5% 5% 2%'}}
            direction = {{ base: 'column', sm: 'column', lg: 'column', xl: 'column'}}
            alignItems={"center"}
            // bg='yellow'
            flex='1'
          >
             <Image 
                src="/assets/imgs/170130-Berneck-58.png"
             />
              <Button 
                onClick={() => alert('seja um fornecedor florestal')}
                w={{ base: '200px', sm: '350px', lg: '500px', xl: '60%'}}
                h={{ base: '50px', sm: '65px', lg: '80px', xl: '10%'}}
                padding={{ base: '3%', sm: '3%', lg: '5%', xl: '5%'}}
                marginTop={{ base: '-15px', sm: '-20px', lg: '-50px', xl: '-20px'}}
              >
                <Text as="h5"
                  variant={"h5" as any}
                  fontFamily = 'body'
                  color='white'
                  textAlign="center"
                  fontWeight="bold"
                >Seja um Fornecedor Florestal</Text>
              </Button>
          
          </Flex>
        
        </Flex> 

      </Flex> 
      {/* FIM Destaques da produção florestal */}



      {/* INICIO Fornecedor Florestal */}
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
      >
        <Flex
          // bg='blue'
          direction = {{ base: 'column', sm: 'column', lg: 'row', xl: 'row'}}
        >
          {/* BOX 1 */}
          <Box
            // bg='pink'
            flex={{ base: '1', sm: '1', lg: '2', xl: '1'}}
            margin = {{ base: '5% 5% 0% 5%', sm: '5% 5% 0% 5%', lg: '5% 2% 5% 5%', xl: '5% 2% 5% 5%'}}
          >
             <CompletedTitle 
                titleString = "Fornecedor Florestal"
                textAlign =  {{ base: 'left', sm: 'left', lg: 'left', xl: 'left'}}
                alignSelf = {{ base: 'flex-start', sm: 'flex-start', lg: 'flex-start', xl: 'flex-start'}} 
              />
              <Text
                marginTop = {{ base: '2%', sm: '2%', lg: '3%', xl: '3%'}}
                color={"green.800"}
              >Para atuar em equilíbrio com o meio ambiente, a BERNECK® utiliza toras e cavacos de madeiras com garantia de procedência. Por isso, trabalhamos em parceria com produtores selecionados, apoiando o desenvolvimento das suas atividades. É uma grande oportunidade de negócio para a família rural, pois proporciona uma alternativa de renda, valorização da propriedade, trabalho e melhoria da qualidade de vida com a produção de madeira.
              </Text>
              <Text
                marginTop = {{ base: '2%', sm: '2%', lg: '3%', xl: '3%'}}
                color={"green.800"}
              >Firmamos relacionamentos fundamentados em critérios de confiança e qualidade na entrega, respeito à legislação, adoção de medidas de proteção ao meio ambiente, aos direitos humanos e à sociedade. Os produtores rurais que plantam pinus e eucalipto em um raio de 300 km de distância das nossas unidades fabris podem se tornar nossos parceiros na atividade florestal. Entre em contato com nosso departamento Florestal e solicite uma avaliação.
              </Text>


          </Box>
          {/* BOX 2 */}
          <Flex
            margin = {{ base: '3% 5% 5% 5%', sm: '3% 5% 5% 5%', lg: '5% 5% 5% 5%', xl: '5% 5% 5% 2%'}}
            direction = {{ base: 'column', sm: 'column', lg: 'column', xl: 'column'}}
            alignItems={"center"}
            // bg='yellow'
            flex='1'
          >
             <Image 
                src="/assets/imgs/170130-Berneck-58.png"
             />
              <Button 
                onClick={() => alert('seja um fornecedor florestal')}
                w={{ base: '200px', sm: '350px', lg: '500px', xl: '60%'}}
                h={{ base: '50px', sm: '65px', lg: '80px', xl: '10%'}}
                padding={{ base: '3%', sm: '3%', lg: '5%', xl: '5%'}}
                marginTop={{ base: '-15px', sm: '-20px', lg: '-50px', xl: '-20px'}}
              >
                <Text as="h5"
                  variant={"h5" as any}
                  fontFamily = 'body'
                  color='white'
                  textAlign="center"
                  fontWeight="bold"
                >Seja um Fornecedor Florestal</Text>
              </Button>
          
          </Flex>
        
        </Flex> 

      </Flex> 
      {/* FIM Fornecedor Florestal */}







      {/* INICIO Resumo público de Manejo Florestal */}
      <Flex
        maxWidth="1920px"
        marginX="auto"
        alignItems='center'
        justifyContent='center'
        position='relative'
        zIndex='base'
        overflowY="hidden"
        overflowX="hidden"
        bg = 'green.100'
        backgroundImage="/assets/imgs/grafismos_fundo2.png"
        backgroundPosition="top"
        backgroundRepeat="no-repeat"  
      >
        <Flex
          // bg='blue'
          direction = {{ base: 'column', sm: 'column', lg: 'column', xl: 'row'}}
          // alignItems={"center"}
        >
          {/* BOX 1 */}
          <Box
            bg='pink'
            flex='2'
            // justifyItem={"center"}
            margin = {{ base: '5% 5% 3% 5%', sm: '5% 5% 3% 5%', lg: '8% 5% 5% 5%', xl: '5% % 5% 2%'}}
          >
             <CompletedTitle 
                titleString = "Resumo público de Manejo Florestal"
                textAlign =  {{ base: 'center', sm: 'center', lg: 'center', xl: 'left'}}
                alignSelf = {{ base: 'center', sm: 'center', lg: 'center', xl: 'flex-start'}} 
              />
              <Text
                marginTop = {{ base: '2%', sm: '2%', lg: '3%', xl: '3%'}}
                color={"green.800"}
                textAlign =  {{ base: 'center', sm: 'center', lg: 'center', xl: 'left'}}
              >Saiba mais sobre o manejo responsável das nossas florestas.
              </Text>
          </Box>
          {/* BOX 2 */}
          <Box
            margin = {{ base: '0% 5% 5% 5%', sm: '0% 5% 5% 5%', lg: '2% 2% 8% 0%', xl: '5% 5% 5% 2%'}}
            padding={{ base: '5% 10%', sm: '5% 10%', lg: '10% 10%', xl: '5% 10%'}}
            bg='blue'
            flex='1'
            backgroundImage="/assets/imgs/fundo_relatorio.svg"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"  
            position='relative'
            zIndex='base'
            overflowY="hidden"
            overflowX="hidden"
          >
              
              <List spacing={{ base: '5', sm: '5', lg: '5', xl: '5'}}>
              {/* {dataValores.list.map((item) => ( */}
                <ListItem>
                  <ReportsIcon 

                  />
                  <Text
                    fontFamily = 'body'
                    fontWeight= 'bold'
                    color={"green.800"}
                  >Resumo público de Manejo Florestal • PR</Text>
                </ListItem>
                <ListItem>
                <ReportsIcon 
                />
                  <Text
                    fontFamily = 'body'
                    fontWeight= 'bold'
                    color={"green.800"}
                  >Resumo público de Manejo Florestal • SC</Text>
                </ListItem>
                <ListItem>
                <ReportsIcon 
                />
                  <Text
                    fontFamily = 'body'
                    fontWeight= 'bold'
                    color={"green.800"}
                  >Resumo público de Manejo Florestal • RS</Text>
                </ListItem>
                <ListItem>
                <ReportsIcon 
                />
                  <Text
                    fontFamily = 'body'
                    fontWeight= 'bold'
                    color={"green.800"}
                  >Resumo público de Manejo Florestal • MT</Text>
                </ListItem>
              </List>

             
          </Box>
        
        </Flex> 

      </Flex> 
      {/* FIM Resumo público de Manejo Florestal */}



    </Box>
  )
}
