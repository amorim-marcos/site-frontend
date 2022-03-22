import { Box, Spacer, Flex, Link, Text, Image, Button } from '@chakra-ui/react'
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
import { List, ListItem } from '@chakra-ui/react'
import PatternCertification from '@components/PatternCertification'
import { useRouter } from 'next/router'
import Paragraph from '@components/Paragraph'

const dataPageSession = {
  imageUrl: 'url(/assets/imgs/nosso-compromisso-filtro-1x.jpg)',
  title: 'Nosso compromisso',
  subtitle: ''
}

export type CompromiseViewProps = {
  page_content: {
    atmospheric_emissions: number
    carbon_sequestration: number
    cogenerated_energy: number
    collaborators_number: number
    esg_report_description: string
    header_text: string
    page_title: string
    reused_water: number
    section1_text: string
    section1_title: string
    section2_text: string
    section2_title: string
    section3_text: string
    section3_title: string
    section4_text: string
    section4_title: string
    section5_text: string
    section5_title: string
    section6_text: string
    section6_title: string
    section7_text: string
    section7_title: string
    section8_text: string
    section8_title: string
    sustainability_report: {
      url: string
    }
    ethical_code: {
      url: string
    }
    esg_report_file: {
      url: string
    }
    corporative_values: {
      id: number
      value: string
    }[]
  }
}

export const Compromise = ({ page_content }: CompromiseViewProps) => {
  const router = useRouter()
  return (
    <Box maxWidth="1920px" marginX="auto" bg="green.100">
      <Pagebar
        paths={[
          {
            title: page_content.page_title,
            url: 'nosso-compromisso'
          }
        ]}
      />

      <PageSession
        data={{
          imageUrl: dataPageSession.imageUrl,
          subtitle: dataPageSession.subtitle,
          text: page_content.header_text,
          title: dataPageSession.title
        }}
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
                onClick={() =>
                  window.open(page_content.ethical_code.url, '_blank')
                }
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
              Nossos valores corporativos
            </Text>

            <List spacing={{ base: '2', sm: '3', lg: '5', xl: '5' }}>
              {page_content.corporative_values.map((item, i) => {
                return (
                  <ListItem key={i}>
                    <Arrow
                      width={{
                        base: '7px',
                        sm: '10px',
                        lg: '10px',
                        xl: '10px'
                      }}
                      height={{
                        base: '15px',
                        sm: '16px',
                        lg: '20px',
                        xl: '20px'
                      }}
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
                      {item.value}
                    </Text>
                  </ListItem>
                )
              })}
            </List>
          </Box>
        </Flex>
      </Flex>
      {/* FIM VALORES */}

      {/* INICIO Cultivamos o meio ambiente */}
      <Flex
        id="meio-ambiente"
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
              titleString={page_content.section1_title}
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
              <Paragraph>{page_content.section1_text}</Paragraph>
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
                bg="green.100"
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
                    onClick={() => router.push('/certificacoes')}
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
          <Flex
            // bg='black'
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
                titleSuperscript2Text="Mais de"
                titleSuperscript2Color="green.200"
                content1Text={page_content.carbon_sequestration
                  .toLocaleString('en-US', { maximumFractionDigits: 1 })
                  .replace('.', ',')}
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
                content1Text={page_content.atmospheric_emissions
                  .toString()
                  .toLocaleString('en-US', { maximumFractionDigits: 1 })
                  .replace('.', ',')}
                content1Color="white"
                content2Text="milhões de tCO₂e"
                content2Color="white"
                iconName="EmissionIcon"
              />
              <Text
                pt="17.3px"
                color="green.250"
                fontSize="16px"
                fontWeight={500}
                letterSpacing="-0.32px"
              >
                (Dados do inventário de GEE de 2019)
              </Text>
            </Flex>
          </Flex>
          {/* BOX 2 */}
          <Box
            margin={{
              base: '0% 5% 10% 5%',
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
              {page_content.section2_title}
            </Text>
            <Text
              color="white.100"
              textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
              marginTop={{ base: '3%', sm: '2%', lg: '3%', xl: '3%' }}
            >
              <Paragraph>{page_content.section2_text}</Paragraph>
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
          alignItems={'center'}
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
              {page_content.section3_title}
            </Text>
            <Text marginTop={{ base: '5%', sm: '5%', lg: '5%', xl: '5%' }}>
              <Paragraph>{page_content.section3_text}</Paragraph>
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
                alignItems={'center'}
              >
                <Infographic
                  titleSuperscript2Text="Co-geramos"
                  content1DisplayIcon="yes"
                  content1IconName="energy"
                  content2Text={page_content.cogenerated_energy.toString()}
                  content4Text="%"
                  titleSubscript1Text="da Energia Utilizada"
                ></Infographic>
                <Infographic
                  titleSuperscript2Text="Reaproveitamos"
                  content1DisplayIcon="yes"
                  content1IconName="water"
                  content2Text={page_content.reused_water}
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
                  // backgroundImage="/assets/imgs/fundo_relatorio.svg"
                  // backgroundPosition="center"
                  // backgroundRepeat="no-repeat"
                >
                  {/* <Text
                    fontFamily="body"
                    color="green.900"
                    textAlign="center"
                    margin={{ base: '5%', sm: '5%', lg: '10%', xl: '10%' }}
                  >
                    Conheça as iniciativas que compõem o Programa de Reciclagem
                    da BERNECK®:
                  </Text>
                  <Button
                    onClick={() =>
                      window.open(
                        page_content.sustainability_report.url,
                        '_blank'
                      )
                    }
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
                  </Button> */}
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
              {page_content.section4_title}
            </Text>
            <Text marginTop={{ base: '3%', sm: '3%', lg: '5%', xl: '5%' }}>
              <Paragraph>{page_content.section4_text}</Paragraph>
            </Text>
          </Box>
        </Flex>
      </Flex>
      {/* FIM Preservação da fauna e da flora */}

      {/* INICIO Cultivamos nossa gente */}
      <Flex
        id="nossa-gente"
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
              titleString={page_content.section5_title}
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
              <Paragraph>{page_content.section5_text}</Paragraph>
            </Text>
            <Box
              // bg='blue'
              flex="1"
              margin={{ base: '5%', sm: '5%', lg: '5%', xl: '5%' }}
              alignSelf={'center'}
            >
              <Infographic
                content1Text="+"
                content2Text={(page_content.collaborators_number / 1000)
                  .toLocaleString('en-US', { maximumFractionDigits: 1 })
                  .replace('.', ',')}
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
              onClick={() =>
                window.open(
                  'https://platform.senior.com.br/hcmrs/hcm/curriculo/?tenant=berneck&tenantdomain=berneck.com.br#!/login/signup',
                  '_blank'
                )
              }
              w={{ base: '90%', sm: '70%', lg: '80%', xl: '90%' }}
              h={{ base: '10%', sm: '6%', lg: '10%', xl: '10%' }}
              padding={{ base: '5%', sm: '3%', lg: '5%', xl: '5%' }}
              marginTop={{
                base: '-15px',
                sm: '-20px',
                lg: '-20px',
                xl: '-20px'
              }}
              colorScheme={'#59993F'}
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
        bg="green.1000"
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
              color={'#144835'}
            >
              {page_content.section6_title}
            </Text>
            <Text
              marginTop={{ base: '10px', sm: '10px', lg: '20px', xl: '20px' }}
              color={'#143127'}
            >
              <Paragraph>{page_content.section6_text}</Paragraph>
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
        bg="gray.450"
      >
        <Flex
          // bg='blue'
          direction={{
            base: 'column',
            sm: 'column',
            lg: 'column',
            xl: 'column'
          }}
          // border="1px solid red"
        >
          {/* BOX 1 */}
          <Box
            bg="gray.500"
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
                fontSize={{ base: '14px', sm: '12px', lg: '16px', xl: '20px' }}
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
              base: '2% 5% 30% 5%',
              sm: '2% 5% 15% 5%',
              lg: '5% 5% 10% 5%',
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
        id="nossos-valores"
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
              titleString={page_content.section7_title}
              textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
              alignSelf={{
                base: 'flex-start',
                sm: 'flex-start',
                lg: 'flex-start',
                xl: 'flex-start'
              }}
            />
            <Text marginTop={{ base: '8%', sm: '2%', lg: '3%', xl: '3%' }}>
              <Paragraph>{page_content.section7_text}</Paragraph>
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
              {page_content.section8_title}
            </Text>
            <Text
              marginTop={{ base: '10px', sm: '10px', lg: '20px', xl: '20px' }}
            >
              <Paragraph>{page_content.section8_text}</Paragraph>
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
      {/* <Flex
        maxWidth="1920px"
        marginX="auto"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        bg="gray.150"
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

          <Box
            margin={{
              base: '0% 5% 10% 0%',
              sm: '0% 5% 10% 5%',
              lg: '0% 5% 5% 0%',
              xl: '0% 5% 5% 2%'
            }}
            // bg='gray'
            flex="1"
          >
            <Button
              onClick={() => router.push('/contact')}
              w={{ base: '110%', sm: '120%', lg: '130%', xl: '120%' }}
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
      </Flex> */}
      {/* FIM Ouvidoria */}

      {/* INICIO Nossas práticas de ESG */}
      <Flex
        id="relatorio"
        maxWidth="1920px"
        marginX="auto"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        bg="green.1000"
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
                titleString="ESG"
                textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
                alignSelf={{
                  base: 'flex-start',
                  sm: 'flex-start',
                  lg: 'flex-start',
                  xl: 'flex-start'
                }}
              />
              <Text marginTop={{ base: '5%', sm: '2%', lg: '3%', xl: '3%' }}>
                {page_content.esg_report_description}
              </Text>
            </Box>
            {/* BOX 2 */}
            {/* <Box
              margin={{
                base: '5% 0% 5% 0%',
                sm: '5% 0% 5% 0%',
                lg: '2% 2% 8% 0%',
                xl: '5% 0% 5% 0%'
              }}
              padding={{ base: '7%', sm: '7%', lg: '2%', xl: '2%' }}
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
              <Link href={page_content.esg_report_file.url} isExternal>
                <PatternCertification
                  title="Relatório ESG"
                  titleInitialColor="green.800"
                  iconName="reports"
                  iconInitialColor1="#004934"
                  iconInitialColor2="#004934"
                />
              </Link>
            </Box> */}
          </Box>
        </Flex>
      </Flex>
      {/* FIM Nossas práticas de ESG */}
    </Box>
  )
}
