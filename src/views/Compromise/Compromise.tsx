import {
  Container,
  Box,
  Grid,
  Spacer,
  Flex,
  Link,
  Text,
  Image,
  Button,
  Select,
  Input,
  Center,
  Checkbox,
  BoxProps,
  LinkProps
} from '@chakra-ui/react'
import Pagebar from '@components/Pagebar'
import PageSession from '@components/PageSession'
import Arrow from '@components/Arrow'
import CompletedTitle from '@components/CompletedTitle'
import PatternInfo from '@components/PatternInfo'
import { CertificationsIcon, ReportsIcon } from '@components/Icons'
import Infographic from '@components/Infographic'
import Infographic2 from '@components/Infographic2'
import { SynergyIcon } from '@components/Icons'
import SponsoredProjects from '@components/SponsoredProjects'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList
} from '@chakra-ui/react'
import PatternCertification from '@components/PatternCertification'

const dataPageSession = {
  imageUrl: 'url(/assets/imgs/nosso-compromisso-filtro-1x.jpg)',
  title: 'Nosso compromisso',
  subtitle: '',
  text: 'Nossa paixão pela madeira e busca incessante por soluções inovadoras firmam nosso compromisso com o desenvolvimento de produtos de madeira premium junto a máxima atenção para cada detalhe do processo produtivo. Fazemos isso adotando as melhores práticas ambientais, sociais e de governança. Em constante evolução para manter nossa operação sustentável nos aspectos econômicos e produtivos, com uma abordagem otimista na gestão de riscos, menores impactos no meio ambiente e direcionados à construir um mundo mais justo e responsável para as pessoas.'
}

const dataValores = {
  title: 'Nossos valores corporativos',
  list: {
    item1:
      'Estar atento às solicitações e às necessidades de nossos clientes e consumidores;',
    item2: 'Buscar excelência nos produtos que fabricamos;',
    item3: 'Promover responsabilidade social através de ações e atitudes;',
    item4: 'Promover a integração e o desenvolvimento do trabalho em equipe;',
    item5:
      'Buscar constantemente o desenvolvimento de nossos negócios e da valorização de nossa marca;',
    item6:
      'Respeitar a saúde e segurança dos colaboradores, com transparência nas relações, estimulando o desenvolvimento pessoal e profissional, a criatividade e a participação de todos;',
    item7: 'Liderar pelo exemplo.'
  }
}

const dataCultivamos = {
  imageUrl: 'url(/assets/imgs/fsc_c_pt.png)',
  title: 'Cultivamos o meio ambiente',
  subtitle: '',
  text: 'Somos pioneiros no Brasil em reflorestamento e responsabilidade ambiental. Fazemos manejo florestal sustentável, tratamento de efluentes, controle de poluição, gerenciamento de resíduos sólidos, líquidos e gasosos, campanhas permanentes de educação ambiental, cultivo mínimo nas florestas, entre outras tantas ações que a BERNECK® realiza em compromisso à preservação do meio ambiente. Plantamos mais de 7 milhões de árvores por ano. Toda a nossa madeira é proveniente de florestas plantadas, preservando as florestas nativas e garantindo o emprego e a renda no campo para milhares de famílias. Todos os processos dessa produção são acompanhados no detalhe, desde a escolha das sementes, plantio, cultivo, colheita, até a industrialização de nossos produtos. Foi assim que nos certificamos em Manejo Florestal pelo FSC®, sistema de certificação internacional que reconhece florestas manejadas de forma ambientalmente responsável, socialmente benéfico e economicamente viável.'
}

export const Compromise = () => {
  return (
    <Box maxWidth="1920px" marginX="auto" bg="green.100">
      <Pagebar
        paths={[
          {
            title: 'Nosso compromisso',
            url: 'nosso-compromisso'
          }
        ]}
      />

      <PageSession
        data={dataPageSession}
        titleColor="white"
        subTitleColor="white"
      />

      {/* INICIO VALORES */}
      <Flex
        maxWidth="1920px"
        marginX="auto"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        bg="brown.100"
      >
        <Flex
          // bg='red'
          direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row' }}
        >
          {/* BOX 1 */}
          <Box
            // bg='pink'
            flex="1"
            margin={{
              base: '0% 0% 2% 0%',
              sm: '5% 5% 2% 5%',
              lg: '5%',
              xl: '5%'
            }}
          >
            <Flex
              // bg='blue'
              direction="column"
              alignItems="center"
              padding={{ base: '6%', sm: '3%', lg: '5%', xl: '5%' }}
              backgroundImage="/assets/imgs/fundo_madeira.svg"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
            >
              <Text
                as="h3"
                variant={'h3' as any}
                fontFamily="body"
                color="green.800"
                textAlign="center"
                margin={{ base: '3%', sm: '3%', lg: '5%', xl: '5%' }}
              >
                Código de ética e conduta
              </Text>
              <Text fontFamily="body" color="green.900" textAlign="center">
                Nosso Código de Ética e Conduta apresenta os direitos e deveres
                que todos os nossos colaboradores e parceiros seguem à risca.
              </Text>
              <Text
                fontFamily="body"
                color="green.900"
                textAlign="center"
                fontWeight="bold"
                margin={{ base: '3%', sm: '3%', lg: '5%', xl: '5%' }}
              >
                Conheça:
              </Text>
              <Button
                onClick={() => alert('Etica')}
                w={{ base: '100%', sm: '70%', lg: '100%', xl: '80%' }}
                h={{ base: '100%', sm: '70%', lg: '90%', xl: '90%' }}
                padding={{ base: '5%', sm: '3%', lg: '5%', xl: '5%' }}
              >
                <Text
                  as="h5"
                  variant={'h5' as any}
                  color="white"
                  textAlign="center"
                  fontWeight="bold"
                >
                  Código de ética e conduta
                </Text>
              </Button>
            </Flex>
          </Box>

          {/* BOX 2 */}
          <Box
            // bg='yellow'
            flex="1"
            margin={{
              base: '8% 7% 8% 5%',
              sm: '5% 5% 8% 5%',
              lg: '5%',
              xl: '5%'
            }}
          >
            <Text
              as="h3"
              variant={'h3' as any}
              color="green.550"
              marginBottom={{ base: '5%', sm: '2%', lg: '5%', xl: '5%' }}
            >
              {dataValores.title}
            </Text>

            <List spacing={{ base: '2', sm: '3', lg: '5', xl: '5' }}>
              {/* {dataValores.list.map((item) => ( */}
              <ListItem>
                <Arrow
                  width={{ base: '7px', sm: '10px', lg: '10px', xl: '10px' }}
                  height={{ base: '15px', sm: '16px', lg: '20px', xl: '20px' }}
                  direction="right"
                  color="brown.250"
                />
                <Text
                  fontFamily="body"
                  marginTop={{
                    base: '-16px',
                    sm: '-16px',
                    lg: '-22px',
                    xl: '-27px'
                  }}
                  marginLeft={{
                    base: '12px',
                    sm: '16px',
                    lg: '18px',
                    xl: '20px'
                  }}
                >
                  {dataValores.list.item1}
                </Text>
              </ListItem>
              <ListItem>
                <Arrow
                  width={{ base: '7px', sm: '10px', lg: '10px', xl: '10px' }}
                  height={{ base: '15px', sm: '16px', lg: '20px', xl: '20px' }}
                  direction="right"
                  color="brown.250"
                />
                <Text
                  fontFamily="body"
                  marginTop={{
                    base: '-16px',
                    sm: '-16px',
                    lg: '-22px',
                    xl: '-27px'
                  }}
                  marginLeft={{
                    base: '12px',
                    sm: '16px',
                    lg: '18px',
                    xl: '20px'
                  }}
                >
                  {dataValores.list.item1}
                </Text>
              </ListItem>
              <ListItem>
                <Arrow
                  width={{ base: '7px', sm: '10px', lg: '10px', xl: '10px' }}
                  height={{ base: '15px', sm: '16px', lg: '20px', xl: '20px' }}
                  direction="right"
                  color="brown.250"
                />
                <Text
                  fontFamily="body"
                  marginTop={{
                    base: '-16px',
                    sm: '-16px',
                    lg: '-22px',
                    xl: '-27px'
                  }}
                  marginLeft={{
                    base: '12px',
                    sm: '16px',
                    lg: '18px',
                    xl: '20px'
                  }}
                >
                  {dataValores.list.item1}
                </Text>
              </ListItem>
              {/* ))} */}
            </List>
          </Box>
        </Flex>
      </Flex>
      {/* FIM VALORES */}

      {/* INICIO Cultivamos o meio ambiente */}
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
      >
        <Flex
          // bg='red'
          direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row' }}
        >
          {/* BOX 1 */}
          <Box
            // bg='pink'
            flex="1"
            margin={{
              base: '8% 5% 2% 5%',
              sm: '8% 5% 2% 5%',
              lg: '5% 2% 7% 5%',
              xl: '5% 2% 5% 5%'
            }}
          >
            <CompletedTitle
              titleString={dataCultivamos.title}
              textAlign={{
                base: 'center',
                sm: 'center',
                lg: 'left',
                xl: 'left'
              }}
              alignSelf={{
                base: 'center',
                sm: 'center',
                lg: 'flex-start',
                xl: 'flex-start'
              }}
            />
            <Text marginTop={{ base: '10%', sm: '8%', lg: '3%', xl: '3%' }}>
              {dataCultivamos.text}
            </Text>
          </Box>

          {/* BOX 2 */}
          <Box
            // bg='yellow'
            flex="1"
            margin={{
              base: '8% 5% 8% 5%',
              sm: '5% 5% 5% 5%',
              lg: '5% 2% 7% 5%',
              xl: '5% 2% 5% 5%'
            }}
          >
            {/* FLEX 2 */}
            <Flex
              // bg='black'
              direction={{
                base: 'column',
                sm: 'column',
                lg: 'column',
                xl: 'column'
              }}
              justifyContent={'flex-end'}
            >
              {/* COLUNA 1 */}
              <Box
                bg="gray.100"
                flex="2"
                marginBottom={{ base: '2%', sm: '2%', lg: '3%', xl: '5%' }}
              >
                <Box
                  // bg='red'
                  margin={{
                    base: '0% 5% 5% 5%',
                    sm: '0% 5% 5% 5%',
                    lg: '0% 5% 5% 5%',
                    xl: '0% 10% 5% 10%'
                  }}
                >
                  <Image
                    src="/assets/imgs/fsc_c_pt.png"
                    // w={{ base: '50%', sm: '50%', lg: '500px', xl: '500px'}}
                  />
                  <Text
                    textAlign={{
                      base: 'center',
                      sm: 'center',
                      lg: 'center',
                      xl: 'center'
                    }}
                  >
                    www.fsc.org
                  </Text>
                  <Text
                    textAlign={{
                      base: 'center',
                      sm: 'center',
                      lg: 'center',
                      xl: 'center'
                    }}
                  >
                    FSC® C115987 / C003917
                  </Text>
                  <Text
                    textAlign={{
                      base: 'center',
                      sm: 'center',
                      lg: 'center',
                      xl: 'center'
                    }}
                  >
                    Ao escolher produtos certificados pelo FSC®, você apoia o
                    manejo responsável das florestas do mundo.
                  </Text>
                </Box>
              </Box>

              {/* COLUNA 2 */}
              <Box
                // bg='blue'
                flex="1"
              >
                <Flex
                  direction={{
                    base: 'column',
                    sm: 'column',
                    lg: 'column',
                    xl: 'column'
                  }}
                  justifyContent={'flex-end'}
                >
                  <PatternInfo
                    title="CONHEÇA"
                    description="Nossas Certificações"
                    onClick={() => alert('Vai para Nossas Certificações')}
                    icon={
                      <CertificationsIcon
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
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      {/* FIM Cultivamos o meio ambiente */}

      {/* INICIO Compromisso com o planeta */}
      <Flex
        maxWidth="1920px"
        marginX="auto"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        bg="green.500"
        backgroundImage="/assets/imgs/img_floresta.png"
        backgroundPosition="left"
        backgroundRepeat="no-repeat"
        backgroundSize={'cover'}
      >
        <Flex
          // bg='pink'
          direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row' }}
          alignItems={'center'}
        >
          {/* BOX 1 */}
          <Box
            // bg='pink'
            flex="1"
            margin={{
              base: '5% 0% 5% 0%',
              sm: '5% 0% 5% 0%',
              lg: '8% 2% 8% 2%',
              xl: '5% 2% 5% 5%'
            }}
          >
            <Flex
              // bg='black'
              direction={{
                base: 'column',
                sm: 'row',
                lg: 'column',
                xl: 'column'
              }}
              alignItems={'center'}
              justifyItems={'center'}
            >
              <Infographic2
                titleSuperscript1Text="Sequestro de Carbono"
                titleSuperscript1Color="green.400"
                titleSuperscript2Text="mais de"
                titleSuperscript2Color="green.200"
                content1Text="3,2"
                content1Color="white"
                content2Text="milhões de tCO₂e"
                content2Color="white"
                iconName="CarbonIcon"
              />
              <Infographic2
                titleSuperscript1Text="Emissões Atmosféricas"
                titleSuperscript1Color="green.400"
                titleSuperscript2Text="Cerca de"
                titleSuperscript2Color="green.200"
                content1Text="81,5"
                content1Color="white"
                content2Text="milhões de tCO₂e"
                content2Color="white"
                iconName="EmissionIcon"
              />
            </Flex>
          </Box>
          {/* BOX 2 */}
          <Box
            margin={{
              base: '0% 8% 10% 5%',
              sm: '3% 5% 8% 5%',
              lg: '8% 7% 8% 0%',
              xl: '5% 5% 5% 2%'
            }}
            // bg='yellow'
            flex="1"
          >
            <Text
              as="h3"
              variant={'h3' as any}
              color="green.400"
              textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
            >
              Compromisso com o planeta
            </Text>
            <Text
              color="white.100"
              textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
              marginTop={{ base: '3%', sm: '2%', lg: '3%', xl: '3%' }}
            >
              Nossos programas florestais atuam na proteção dos mananciais, na
              restauração das matas ciliares e plantação de florestas junto às
              reservas nativas que mantemos. Eles contribuem para a regulação
              dos ciclos hidrológicos, controle de erosão e da qualidade dos
              solos, conservação da biodiversidade, captação ou sequestro de
              carbono e outras medidas fundamentais para reduzir os efeitos das
              mudanças climáticas no mundo. Como uma empresa ambientalmente
              responsável, calculamos as emissões atmosféricas em todas as
              operações executadas pela BERNECK®. Compilamos estas informações
              nos Inventários de Gases de Efeito Estufa - GEE que colaboram na
              elaboração de estratégias, planos e metas para a redução das
              emissões e intervenção positiva nas mudanças climáticas. Em
              contrapartida, nossos mais de 64,5 mil hectares de plantios
              florestais contribuem ativamente para a retirada de carbono do
              ambiente pelas árvores, superando – e muito – nossas emissões de
              CO₂.
            </Text>
          </Box>
        </Flex>
      </Flex>
      {/* FIM Compromisso com o planeta */}

      {/* INICIO Economia de recursos naturais*/}
      <Flex
        maxWidth="1920px"
        marginX="auto"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        bg="gray.100"
        backgroundImage="/assets/imgs/grafismos_completo.svg"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Flex
          // bg='blue'
          direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row' }}
        >
          {/* BOX 1 */}
          <Flex
            // bg='tomato'
            flex="1"
            direction={{
              base: 'column',
              sm: 'column',
              lg: 'column',
              xl: 'column'
            }}
            margin={{
              base: '5% 5% 0% 5%',
              sm: '5% 5% 0% 5%',
              lg: '5% 2% 5% 5%',
              xl: '5% 2% 5% 5%'
            }}
          >
            <Text
              as="h3"
              variant={'h3' as any}
              color="green.550"
              textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
            >
              Economia de recursos naturais
            </Text>
            <Text marginTop={{ base: '5%', sm: '5%', lg: '5%', xl: '5%' }}>
              Em nossas unidades industriais Araucária e Curitibanos, os
              resíduos do processo de produção – a casca do Pinus e o pó da
              madeira gerado nos processos de classificação, moagem e lixamento
              – que seriam descartadas no meio ambiente, são utilizados para a
              produção de calor e vapor através da queima de biomassa. Esta
              energia limpa e renovável corresponde a aproximadamente 60% da
              energia utilizada em nossos processos industriais, poupando
              recursos naturais e diminuindo os custos de produção. As unidades
              industriais foram inteiramente planejadas para realizar a captação
              e canalização da água da chuva, que é direcionada para nossas
              lagoas e reservatórios. Estas práticas somadas às estações de
              Tratamento de Efluentes e Tratamento de Produtos Químicos,
              neutralizam e permitem a reutilização de resíduos orgânicos
              líquidos e condensados de produto em diversos processos, que
              reduzem um total de 30% da água utilizada nas fábricas. Além da
              co-geração de energia e do reaproveitamento da água, todos os
              produtos sólidos descartáveis – como papéis, plásticos, ferrosos,
              não ferrosos, lâmpadas, baterias – têm coleta e armazenamento
              interno controlado, e são destinados a empresas cadastradas e
              licenciadas pelos órgãos ambientais para reciclar estes materiais.
            </Text>
          </Flex>
          {/* BOX 2 */}
          <Flex
            margin={{
              base: '5% 5% 5% 5%',
              sm: '5% 5% 5% 5%',
              lg: '5% 5% 5% 5%',
              xl: '5% 5% 5% 2%'
            }}
            // bg="pink.600"
            flex="1"
          >
            {/* FLEX 2 */}
            <Flex
              // bg='black'
              direction={{
                base: 'column',
                sm: 'column',
                lg: 'column',
                xl: 'column'
              }}
            >
              {/* LINHA 1 */}
              <Flex
              // bg='blue'
              // alignItems={"center"}
              >
                <Infographic
                  titleSuperscript2Text="Co-geramos"
                  content1DisplayIcon="yes"
                  content1IconName="energy"
                  content2Text="60"
                  content4Text="%"
                  titleSubscript1Text="da Energia Utilizada"
                ></Infographic>
                <Infographic
                  titleSuperscript2Text="Reaproveitamos"
                  content1DisplayIcon="yes"
                  content1IconName="water"
                  content2Text="30"
                  content4Text="%"
                  titleSubscript1Text="da Água Utilizada"
                ></Infographic>
              </Flex>
              <Spacer></Spacer>
              {/* LINHA 2 */}
              <Box
                // bg='blue.100'
                flex="1"
                marginTop={{
                  base: '3%',
                  sm: '3%',
                  lg: '30%',
                  xl: '30%',
                  '2xl': '8%'
                }}
                alignItems={'center'}
              >
                <Flex
                  // bg='blue'
                  direction="column"
                  alignItems="center"
                  padding={{ base: '5%', sm: '5%', lg: '5%', xl: '5%' }}
                  backgroundImage="/assets/imgs/fundo_relatorio.svg"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                >
                  <Text
                    fontFamily="body"
                    color="green.900"
                    textAlign="center"
                    margin={{ base: '5%', sm: '5%', lg: '10%', xl: '10%' }}
                  >
                    Conheça as iniciativas que compõem o Programa de Reciclagem
                    da BERNECK®:
                  </Text>
                  <Button
                    onClick={() => alert('Iniciativas')}
                    w={{ base: '100%', sm: '70%', lg: '100%', xl: '80%' }}
                    h={{ base: '100%', sm: '70%', lg: '90%', xl: '90%' }}
                    padding={{ base: '5%', sm: '3%', lg: '5%', xl: '5%' }}
                  >
                    <Text
                      as="h5"
                      variant={'h5' as any}
                      color="white"
                      textAlign="center"
                      fontWeight="bold"
                    >
                      Relatório de Sustentabilidade
                    </Text>
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* FIM Economia de recursos naturais */}

      {/* INICIO Preservação da fauna e da flora */}
      <Flex
        maxWidth="1920px"
        marginX="auto"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        bg="brown.150"
      >
        <Flex
          // bg='blue'
          direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row' }}
          alignItems={'center'}
        >
          {/* BOX 1 */}
          <Box
            // bg='pink'
            flex="1"
            justifyItems={'center'}
            // margin = {{ base: '5% 5% 5% 5%', sm: '5% 5% 5% 5%', lg: '5% 2% 5% 5%', xl: '5% 2% 5% 5%'}}
          >
            <Image src="/assets/imgs/img_passaro.png" />
          </Box>
          {/* BOX 2 */}
          <Box
            margin={{
              base: '5% 5% 10% 5%',
              sm: '5% 5% 8% 5%',
              lg: '5% 7% 5% 5%',
              xl: '5% 5% 5% 5%'
            }}
            // bg='yellow'
            flex="1"
          >
            <Text
              as="h3"
              variant={'h3' as any}
              textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
              marginTop={{ base: '5%', sm: '5%', lg: '5%', xl: '5%' }}
            >
              Preservação da fauna e da flora
            </Text>
            <Text marginTop={{ base: '3%', sm: '3%', lg: '5%', xl: '5%' }}>
              Nossas florestas plantadas são adjacentes às áreas de preservação
              florestal, onde há plena e completa preservação da Flora e Fauna.
              Por sermos uma empresa comprometida com o meio ambiente, atuamos
              na redução do uso de produtos químicos no processo produtivo,
              adoção do cultivo mínimo, sem utilizar o fogo, fertilizantes ou
              qualquer tipo de tratamento para o preparo dos terrenos,
              utilização de galhos e raízes descartados da indústria para
              reposição de nutrientes do solo, entre outras tantas ações que a
              BERNECK® executa em benefício da regeneração e manutenção das
              áreas de preservação. Atuamos no Controle de Processos Erosivos,
              Recuperação de Áreas Degradadas, Salvamento e Resgate de Fauna, e
              outros 14 programas ambientais executados conforme orienta os
              diplomas legais vigentes, respeitando e protegendo a Flora e a
              Fauna. Monitoramos mais de 250 espécies animais circulantes em
              nossas áreas plantadas e nativas no Paraná e Santa Catarina.
              Práticas que inibem a ocorrência de caça e pesca, e contribuem
              para a preservação de espécies raras ou ameaçadas de extinção.
            </Text>
          </Box>
        </Flex>
      </Flex>
      {/* FIM Preservação da fauna e da flora */}

      {/* INICIO Cultivamos nossa gente */}
      <Flex
        maxWidth="1920px"
        marginX="auto"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        // bg = 'red'
      >
        <Flex
          // bg='blue'
          direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row' }}
        >
          {/* BOX 1 */}
          <Box
            // bg='pink'
            flex={{ base: '1', sm: '1', lg: '2', xl: '1' }}
            margin={{
              base: '8% 5% 0% 5%',
              sm: '8% 5% 0% 5%',
              lg: '5% 2% 5% 5%',
              xl: '5% 2% 5% 5%'
            }}
          >
            <CompletedTitle
              titleString="Cultivamos nossa gente"
              textAlign={{
                base: 'center',
                sm: 'center',
                lg: 'left',
                xl: 'left'
              }}
              alignSelf={{
                base: 'center',
                sm: 'center',
                lg: 'flex-start',
                xl: 'flex-start'
              }}
            />
            <Text marginTop={{ base: '10%', sm: '10%', lg: '5%', xl: '5%' }}>
              Temos orgulho dos nossos mais de 7,5 mil colaboradores diretos e
              indiretos da BERNECK®. São inúmeras histórias de vida que tornam a
              nossa empresa comprometida com a sociedade de forma
              verdadeiramente responsável. Somos uma empresa familiar e, de
              família para família, acreditamos no desenvolvimento técnico e
              humano dos nossos colaboradores. São cerca de 3 mil funcionários
              diretos no Paraná, Santa Catarina e Mato Grosso que realizam
              treinamentos e capacitações por meios dos programas de trainee,
              desenvolvimento de lideranças e bolsa auxílio para financiamento
              de cursos técnicos, de graduação e de pós-graduação. Incentivamos
              o desenvolvimento constante dos nossos colaboradores e acreditamos
              que crescemos juntos, olhando para a mesma direção.
            </Text>
            <Box
              // bg='blue'
              flex="1"
              margin={{ base: '5%', sm: '5%', lg: '5%', xl: '5%' }}
              alignSelf={'center'}
            >
              <Infographic
                content1Text="+"
                content2Text="7,5"
                content3Text="Mil"
                // content4Text = 'Colaboradores diretos e indiretos'
                // fontSize = {{ base: '12px', sm: '16px', lg: '24px', xl: '18px'}}
                titleSubscript1Text="Colaboradores diretos e indiretos"
              />
            </Box>
          </Box>
          {/* BOX 2 */}
          <Flex
            margin={{
              base: '0% 5% 5% 5%',
              sm: '0% 5% 5% 5%',
              lg: '5% 5% 5% 5%',
              xl: '5% 5% 5% 2%'
            }}
            direction={{
              base: 'column',
              sm: 'column',
              lg: 'column',
              xl: 'column'
            }}
            alignItems={'center'}
            // bg='yellow'
            flex="1"
          >
            <Image src="/assets/imgs/170130-Berneck-58.png" />

            <Button
              onClick={() => alert('trabalhe conosco')}
              w={{ base: '90%', sm: '90%', lg: '90%', xl: '90%' }}
              h={{ base: '10%', sm: '10%', lg: '10%', xl: '10%' }}
              padding={{ base: '5%', sm: '5%', lg: '5%', xl: '5%' }}
              marginTop={{
                base: '-15px',
                sm: '-20px',
                lg: '-40px',
                xl: '-20px'
              }}
            >
              <Text
                as="h5"
                variant={'h5' as any}
                color="white"
                textAlign="center"
                fontWeight="bold"
              >
                Faça parte desse time
              </Text>
            </Button>
          </Flex>
        </Flex>
      </Flex>
      {/* FIM Cultivamos nossa gente */}

      {/* INICIO Compromisso com a sociedade */}
      <Flex
        maxWidth="1920px"
        marginX="auto"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        bg="green.150"
        backgroundImage="/assets/imgs/grafismos_fundo2.png"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Flex
          // bg='blue'
          direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row' }}
          alignItems={'center'}
        >
          {/* BOX 1 */}
          <Box
            // bg='pink'
            flex="1"
            justifyItems={'center'}
            margin={{
              base: '0% 0% 5% 0%',
              sm: '0% 0% 5% 0%',
              lg: '5% 2% 5% 5%',
              xl: '5% 2% 5% 5%'
            }}
          >
            <Image src="/assets/imgs/img_criancas.png" />
          </Box>
          {/* BOX 2 */}
          <Box
            margin={{
              base: '0% 5% 10% 5%',
              sm: '0% 5% 8% 5%',
              lg: '3% 3% 3% 3%',
              xl: '3% 3% 3% 3%'
            }}
            // bg='yellow'
            flex="1"
            justifyItems={'flex-start'}
          >
            <Text
              as="h3"
              variant={'h3' as any}
              textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
            >
              Compromisso com a sociedade
            </Text>
            <Text
              marginTop={{ base: '10px', sm: '10px', lg: '20px', xl: '20px' }}
            >
              Nossas florestas plantadas são adjacentes às áreas de preservação
              florestal, onde há plena e completa preservação da Flora e Fauna.
              Por sermos uma empresa comprometida com o meio ambiente, atuamos
              na redução do uso de produtos químicos no processo produtivo,
              adoção do cultivo mínimo, sem utilizar o fogo, fertilizantes ou
              qualquer tipo de tratamento para o preparo dos terrenos,
              utilização de galhos e raízes descartados da indústria para
              reposição de nutrientes do solo, entre outras tantas ações que a
              BERNECK® executa em benefício da regeneração e manutenção das
              áreas de preservação. Atuamos no Controle de Processos Erosivos,
              Recuperação de Áreas Degradadas, Salvamento e Resgate de Fauna, e
              outros 14 programas ambientais executados conforme orienta os
              diplomas legais vigentes, respeitando e protegendo a Flora e a
              Fauna. Monitoramos mais de 250 espécies animais circulantes em
              nossas áreas plantadas e nativas no Paraná e Santa Catarina.
              Práticas que inibem a ocorrência de caça e pesca, e contribuem
              para a preservação de espécies raras ou ameaçadas de extinção.
            </Text>
          </Box>
        </Flex>
      </Flex>
      {/* FIM Compromisso com a sociedade */}

      {/* INICIO Confira alguns projetos patrocinados por nós */}
      <Flex
        maxWidth="1920px"
        marginX="auto"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        bg="gray.100"
      >
        <Flex
          // bg='blue'
          direction={{
            base: 'column',
            sm: 'column',
            lg: 'column',
            xl: 'column'
          }}
        >
          {/* BOX 1 */}
          <Box
            bg="gray.150"
            flex="1"
            margin={{
              base: '3% 5% 0% 5%',
              sm: '5% 5% 0% 5%',
              lg: '5% 5% 0% 5%',
              xl: '5% 5% 0% 5%'
            }}
            padding={{ base: '5%', sm: '5%', lg: '3%', xl: '3%' }}
          >
            <Flex
              alignItems={'center'}
              // bg="pink.600"
              direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row' }}
            >
              <SynergyIcon
                stroke1="#59993f"
                stroke2="#143127"
                height={{ base: '60px', sm: '80px', lg: '100px', xl: '150px' }}
                width={{ base: '60px', sm: '80px', lg: '100px', xl: '150px' }}
              />
              <Text
                as="h4"
                variant={'h4' as any}
                fontWeight="semibold"
                color="green.900"
                textAlign={{
                  base: 'center',
                  sm: 'center',
                  lg: 'center',
                  xl: 'left'
                }}
                padding={{ base: '5%', sm: '5%', lg: '3%', xl: '3%' }}
              >
                Por meio das leis de incentivo, a BERNECK® apoia projetos que
                auxiliam o Estado a criar uma sinergia e impacto social
                positivo, levando estímulo aos jovens e à população em geral.
              </Text>
            </Flex>
          </Box>
          {/* BOX 2 */}
          <Box
            margin={{
              base: '2% 5% 5% 5%',
              sm: '2% 5% 5% 5%',
              lg: '2% 5% 5% 5%',
              xl: '2% 5% 5% 5%'
            }}
            // bg='yellow'
            flex="1"
          >
            <Text
              as="h3"
              variant={'h3' as any}
              textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
              margin={{
                base: '20px 0px',
                sm: '20px 0px',
                lg: '30px 0px',
                xl: '30px 0px'
              }}
              color="green.600"
            >
              Confira alguns projetos patrocinados por nós:
            </Text>
            <SponsoredProjects />
          </Box>
        </Flex>
      </Flex>
      {/* FIM Confira alguns projetos patrocinados por nós */}

      {/* INICIO Cultivamos nossos valores */}
      <Flex
        maxWidth="1920px"
        marginX="auto"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        bg="green.400"
        backgroundImage="/assets/imgs/textura_madeira_esquerda.png"
        backgroundPosition="center top"
        backgroundRepeat="no-repeat"
      >
        <Flex
          // bg='blue'
          direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row' }}
          alignItems={'center'}
        >
          {/* BOX 1 */}
          <Box
            // bg='pink'
            flex="1"
            justifyItems={'center'}
            // margin = {{ base: '5% 5% 5% 5%', sm: '5% 5% 5% 5%', lg: '5% 2% 5% 5%', xl: '5% 2% 5% 5%'}}
          >
            <Image src="/assets/imgs/cultivamos_nossos_valores.png" />
          </Box>
          {/* BOX 2 */}
          <Box
            margin={{
              base: '5% 5% 10% 5%',
              sm: '5% 5% 5% 5%',
              lg: '5% 7% 5% 5%',
              xl: '5% 5% 5% 5%'
            }}
            // bg='yellow'
            flex="1"
          >
            <CompletedTitle
              titleString="Cultivamos nossos valores"
              textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
              alignSelf={{
                base: 'flex-start',
                sm: 'flex-start',
                lg: 'flex-start',
                xl: 'flex-start'
              }}
            />
            <Text marginTop={{ base: '8%', sm: '2%', lg: '3%', xl: '3%' }}>
              E por valorizar as pessoas, a BERNECK® aposta também em um
              programa de Governança e Compliance. Somos uma empresa de alta
              performance, com uma gestão alinhada, competente e, sobretudo,
              transparente. Nossos valores familiares transcendem gerações e
              colaboradores, por acreditarmos na união, na clareza e na
              transparência em tudo o que fazemos. Nossas práticas
              socioambientais se baseiam em princípios éticos e de preocupação
              com o todo. Desde a semente plantada na terra, que quase duas
              décadas depois se transformará na matéria-prima para os painéis
              revestidos, todos os nossos processos são desenvolvidos para serem
              sustentáveis. Feitos para deixar o mínimo impacto ambiental e
              oferecer soluções inovadoras sempre. De família para família, da
              nossa casa para o seu ambiente.
            </Text>
          </Box>
        </Flex>
      </Flex>
      {/* FIM Cultivamos nossos valores */}

      {/* INICIO Compromisso com a conduta corporativa */}
      <Flex
        maxWidth="1920px"
        marginX="auto"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        bg="green.100"
        backgroundImage="/assets/imgs/grafismos_fundo2.png"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Flex
          // bg='blue'
          direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row' }}
          alignItems={'center'}
        >
          {/* BOX 1 */}
          <Box
            margin={{
              base: '10% 5% 5% 5%',
              sm: '5% 5% 5% 5%',
              lg: '5% 2% 5% 5%',
              xl: '5% 2% 5% 5%'
            }}
            // bg='yellow'
            flex="1"
            justifyItems={'flex-start'}
          >
            <Text
              as="h3"
              variant={'h3' as any}
              textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
              color="green.550"
            >
              Compromisso com a conduta corporativa
            </Text>
            <Text
              marginTop={{ base: '10px', sm: '10px', lg: '20px', xl: '20px' }}
            >
              De geração em geração, iniciamos um novo capítulo em direção ao
              futuro e à continuidade da BERNECK®. A terceira geração – atual
              liderança – é composta por um novo modelo de gestão compartilhado
              entre os três irmãos Daniel, Gloria e Graça Berneck, apoiados pelo
              Conselho da Família, Conselho de Sócios e Conselho Consultivo –
              constituído por três conselheiros e pelo presidente da segunda
              geração, Gilson Berneck. O processo de sucessão é favorecido pelo
              programa de Governança Familiar com seus protocolos e diretrizes,
              sempre com foco na continuidade do negócio. Nossa governança
              interna também conta com um sistema integrado de gestão
              empresarial. Todas as nossas unidades administrativas, industriais
              e florestais do Paraná e de Santa Catarina estão 100% incorporadas
              e online pelo programa. Através dele, gerenciamos tudo o que
              acontece nas fábricas, nas florestas e nos departamentos
              administrativos e comerciais, trazendo mais segurança e
              transparência para toda nossa cadeia de produção, elevando ainda
              mais nossa cultura organizacional.
            </Text>
          </Box>
          {/* BOX 2 */}
          <Box
            // bg='pink'
            flex="1"
            justifyItems={'center'}
            margin={{
              base: '0% 0% 0% 0%',
              sm: '0% 5% 8% 5%',
              lg: '3% 3% 3% 3%',
              xl: '3% 3% 3% 3%'
            }}
          >
            <Image src="/assets/imgs/170130-Berneck-48.png" />
          </Box>
        </Flex>
      </Flex>
      {/* FIM Compromisso com a conduta corporativa */}

      {/* INICIO Ouvidoria */}
      <Flex
        maxWidth="1920px"
        marginX="auto"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        bg="gray.200"
      >
        <Flex
          // bg='blue'
          direction={{
            base: 'column',
            sm: 'column',
            lg: 'column',
            xl: 'column'
          }}
          alignContent={'center'}
          alignItems={'center'}
          justifyItems={'center'}
          justifyContent={'center'}
        >
          {/* BOX 1 */}
          <Box
            margin={{
              base: '8% 5% 8% 5%',
              sm: '8% 5% 5% 5%',
              lg: '5% 5% 5% 5%',
              xl: '5% 10% 2% 10%'
            }}
            // bg='yellow'
            flex="1"
          >
            <Text
              as="h3"
              variant={'h3' as any}
              textAlign={{
                base: 'center',
                sm: 'center',
                lg: 'center',
                xl: 'center'
              }}
              color="green.900"
            >
              Canal de Ética e Ouvidoria
            </Text>
            <Text
              textAlign={{
                base: 'center',
                sm: 'center',
                lg: 'center',
                xl: 'center'
              }}
              marginTop={{ base: '10px', sm: '10px', lg: '20px', xl: '20px' }}
            >
              Disponível para qualquer pessoa, dentro ou fora da BERNECK®, nosso
              Canal de Ética e Ouvidoria permite a denúncia de casos de suspeita
              ou de má conduta ética praticados por nossos colaboradores,
              parceiros, indústrias e florestas. O canal é operado por uma
              empresa independente e especializada, que atenderá as denúncias
              com sigilo absoluto. O contato é anônimo e protegido de qualquer
              forma de intimidação, exposição ou desrespeito.
            </Text>
          </Box>
          {/* BOX 2 */}
          <Box
            margin={{
              base: '0% 5% 10% 5%',
              sm: '0% 5% 10% 5%',
              lg: '5% 5% 5% 5%',
              xl: '0% 5% 5% 2%'
            }}
            // bg='gray'
            flex="1"
          >
            <Button
              onClick={() => alert('Quero fazer uma denúncia anônima')}
              w={{ base: '100%', sm: '100%', lg: '100%', xl: '100%' }}
              h={{ base: '30%', sm: '30%', lg: '30%', xl: '40%' }}
              padding={{ base: '5%', sm: '5%', lg: '5%', xl: '5%' }}
            >
              <Text
                as="h5"
                variant={'h5' as any}
                color="white"
                textAlign="center"
                fontWeight="bold"
              >
                Quero fazer uma denúncia anônima
              </Text>
            </Button>
          </Box>
        </Flex>
      </Flex>
      {/* FIM Ouvidoria */}

      {/* INICIO Nossas práticas de ESG */}
      <Flex
        maxWidth="1920px"
        marginX="auto"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        bg="green.100"
        backgroundImage="/assets/imgs/grafismos_fundo2.png"
        backgroundPosition="-900px top"
        backgroundRepeat="no-repeat"
      >
        <Flex
          // bg='blue'
          direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row' }}
          alignItems={'center'}
        >
          {/* BOX 1 */}
          <Box
            // bg='pink'
            flex="1"
            justifyItems={'center'}
            margin={{
              base: '0% 0% 5% 0%',
              sm: '0% 0% 5% 0%',
              lg: '3% 3% 3% 3%',
              xl: '3% 3% 3% 3%'
            }}
          >
            <Image src="/assets/imgs/relatorio esg.png" />
          </Box>
          {/* BOX 2 */}
          <Box
            margin={{
              base: '5% 5% 5% 5%',
              sm: '0% 5% 5% 5%',
              lg: '5% 2% 5% 2%',
              xl: '5% 2% 5% 2%'
            }}
            // bg='blue'
            flex="1.5"
            // justifyItems={"center"}
          >
            {/* BOX 1 */}
            <Box flex="1">
              <CompletedTitle
                titleString="Relatório ESG – BERNECK®"
                textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
                alignSelf={{
                  base: 'flex-start',
                  sm: 'flex-start',
                  lg: 'flex-start',
                  xl: 'flex-start'
                }}
              />
              <Text marginTop={{ base: '5%', sm: '2%', lg: '3%', xl: '3%' }}>
                Nossas práticas de ESG – Environmental, Social and Governance
                (Ambiental, Social e Governança) incorporam questões destas três
                áreas, indo além das tradicionais métricas
                econômico-financeiras. O Relatório ESG marca nossa visão sobre o
                tema, iniciativas conectadas e indicadores que comprovam nossa
                atuação na conservação do meio ambiente, relação com a
                comunidade e conduta corporativa.
              </Text>
            </Box>
            {/* BOX 2 */}
            <Box
              margin={{
                base: '5% 0% 5% 0%',
                sm: '5% 0% 5% 0%',
                lg: '2% 2% 8% 0%',
                xl: '5% 0% 5% 0%'
              }}
              padding={{ base: '10%', sm: '10%', lg: '10%', xl: '5%' }}
              // bg='blue'
              flex="1"
              backgroundImage="/assets/imgs/fundo_relatorio.svg"
              backgroundPosition="left"
              backgroundRepeat="no-repeat"
              backgroundSize={'cover'}
              alignItems={'center'}
              alignContent={'center'}
              justifyContent={'center'}
              justifyItems={'center'}
            >
              <PatternCertification
                title="Relatório ESG"
                titleInitialColor="green.800"
                iconName="reports"
                iconInitialColor1="#004934"
                iconInitialColor2="#004934"
              />
            </Box>
          </Box>
        </Flex>
      </Flex>
      {/* FIM Nossas práticas de ESG */}
    </Box>
  )
}
