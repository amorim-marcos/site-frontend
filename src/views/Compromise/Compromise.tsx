import { Box, Spacer, Flex, Text, Image, Button } from '@chakra-ui/react'
import Pagebar from '@components/Pagebar'
import PageSession from '@components/PageSession'
import CompletedTitle from '@components/CompletedTitle'
import PatternInfo from '@components/PatternInfo'
import { CertificationsIcon } from '@components/Icons'
import Infographic from '@components/Infographic'
import Infographic2 from '@components/Infographic2'
import { SynergyIcon } from '@components/Icons'
import SponsoredProjects from '@components/SponsoredProjects'
import { List, ListItem } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import HtmlTextParser from '@components/HtmlTextParser'
import { useTranslation } from 'react-i18next'
import ArrowIcon from '@components/Icons/ArrowIcon'
import PageHead from '@components/PageHead'

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
    section4_img: string
    section4_title: string
    section5_text: string
    section5_img: string
    section5_title: string
    section6_text: string
    section6_img: string
    section6_title: string
    section7_text: string
    section7_img: string
    section7_title: string
    // section8_text: string
    // section8_img: string
    // section8_title: string
    esg_img: string
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
  const compromiseView = useTranslation('compromiseView')
  return (
    <Box bg="white">
      <PageHead
        page_title={compromiseView.t('pageMetadata.pageTitle')}
        page_description={compromiseView.t('pageMetadata.pageDescription')}
      />
      <Pagebar
        paths={[
          {
            title: page_content.page_title,
            url: 'our-commitment'
          }
        ]}
      />

      <PageSession
        data={{
          imageUrl: dataPageSession.imageUrl,
          subtitle: dataPageSession.subtitle,
          text: page_content.header_text,
          title: page_content.page_title
        }}
        titleColor="white"
        subTitleColor="white"
      />

      {/* INICIO VALORES */}
      <Box bg="brown.100">
        <Flex
          maxWidth="1536px"
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
            direction={{ base: 'column', lg: 'row' }}
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
                  margin={{ base: '3%', lg: '5%' }}
                >
                  {compromiseView.t('ethicsCodeSection.title')}
                </Text>
                <Text fontFamily="body" color="green.900" textAlign="center">
                  {compromiseView.t('ethicsCodeSection.description')}
                </Text>
                <Text
                  fontFamily="body"
                  color="green.900"
                  textAlign="center"
                  fontWeight="bold"
                  margin={{ base: '3%', sm: '3%', lg: '5%', xl: '5%' }}
                >
                  {compromiseView.t('ethicsCodeSection.know')}
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
                    {compromiseView.t('ethicsCodeSection.btn')}
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
                {compromiseView.t('ourCorporativeValues.title')}
              </Text>

              <List spacing={{ base: '2', sm: '3', lg: '5', xl: '5' }}>
                {page_content.corporative_values &&
                  page_content.corporative_values.map((item, i) => {
                    return (
                      <ListItem key={i}>
                        <Flex
                          flexDirection={'row'}
                          // border="1px solid red"
                          padding={'5px'}
                          alignItems="flex-start"
                          justifyItems={'flex-start'}
                          // overflow="hidden"
                        >
                          <Box>
                            <ArrowIcon
                              stroke={'brown.250'}
                              marginTop={{
                                base: '4px',
                                md: '2px',
                                lg: '2px',
                                xl: '5px',
                                '2xl': '4px'
                              }}
                              marginRight={'5px'}
                              width={{ base: '7px', md: '10px' }}
                            />
                          </Box>
                          <Box
                            //  border="1px solid green"
                            width={'100%'}
                          >
                            <Text fontFamily="body">
                              <HtmlTextParser>{item.value}</HtmlTextParser>
                            </Text>
                          </Box>
                        </Flex>
                      </ListItem>
                    )
                  })}
              </List>
            </Box>
          </Flex>
        </Flex>
      </Box>
      {/* FIM VALORES */}

      {/* INICIO Cultivamos o meio ambiente */}
      <Flex
        id="environment"
        maxWidth="1536px"
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
          direction={{ base: 'column', lg: 'row' }}
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
                lg: 'left'
              }}
              alignSelf={{
                base: 'center',
                lg: 'flex-start'
              }}
            />
            <Text marginTop={{ base: '10%', sm: '8%', lg: '3%', xl: '3%' }}>
              <HtmlTextParser>{page_content.section1_text}</HtmlTextParser>
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
                base: 'column'
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
                      base: 'center'
                    }}
                  >
                    www.fsc.org
                  </Text>
                  <Text
                    textAlign={{
                      base: 'center'
                    }}
                  >
                    FSC® C003917
                  </Text>
                  <Text
                    textAlign={{
                      base: 'center'
                    }}
                  >
                    {compromiseView.t('fsc.description')}
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
                    base: 'column'
                  }}
                  justifyContent={'flex-end'}
                >
                  <PatternInfo
                    title={compromiseView.t('knowOurCertifications.know')}
                    description={compromiseView.t(
                      'knowOurCertifications.ourCertifications'
                    )}
                    onClick={() => router.push('/certifications')}
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
      <Box bg="green.900">
        <Flex
          maxWidth="1536px"
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
            direction={{ base: 'column', lg: 'row' }}
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
                  lg: 'column'
                }}
                alignItems={'center'}
                justifyItems={'center'}
              >
                <Infographic2
                  titleSuperscript1Text={compromiseView.t(
                    'infoGraphicAtmospheric.carbonSequestration'
                  )}
                  titleSuperscript1Color="green.400"
                  titleSuperscript2Text={compromiseView.t(
                    'infoGraphicAtmospheric.moreOf'
                  )}
                  titleSuperscript2Color="green.200"
                  content1Text={
                    page_content.carbon_sequestration
                      ? page_content.carbon_sequestration
                          .toLocaleString('en-US', { maximumFractionDigits: 1 })
                          .replace('.', ',')
                      : ''
                  }
                  content1Color="white"
                  content2Text={compromiseView.t(
                    'infoGraphicAtmospheric.millionCo2'
                  )}
                  content2Color="white"
                  iconName="CarbonIcon"
                />
                <Infographic2
                  titleSuperscript1Text={compromiseView.t(
                    'infoGraphicAtmospheric.AtmosphericEmissions'
                  )}
                  titleSuperscript1Color="green.400"
                  titleSuperscript2Text={compromiseView.t(
                    'infoGraphicAtmospheric.about'
                  )}
                  titleSuperscript2Color="green.200"
                  content1Text={
                    page_content.atmospheric_emissions
                      ? page_content.atmospheric_emissions
                          .toLocaleString('en-US', { maximumFractionDigits: 1 })
                          .replace('.', ',')
                      : ''
                  }
                  content1Color="white"
                  content2Text={compromiseView.t(
                    'infoGraphicAtmospheric.millionCo2'
                  )}
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
                  {compromiseView.t('infoGraphicAtmospheric.source')}
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
                <HtmlTextParser>{page_content.section2_text}</HtmlTextParser>
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      {/* FIM Compromisso com o planeta */}

      {/* INICIO Economia de recursos naturais*/}
      <Box bg="gray.100">
        <Flex
          maxWidth="1536px"
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
            direction={{ base: 'column', lg: 'row' }}
          >
            {/* BOX 1 */}
            <Flex
              // bg='tomato'
              flex="1"
              direction={{
                base: 'column'
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
                <HtmlTextParser>{page_content.section3_text}</HtmlTextParser>
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
                  base: 'column'
                }}
              >
                {/* LINHA 1 */}
                <Flex
                  // bg='blue'
                  alignItems={'start'}
                >
                  <Infographic
                    titleSuperscript2Text={compromiseView.t(
                      'infoGraphicSustainability.co-generate'
                    )}
                    content1DisplayIcon="yes"
                    content1IconName="energy"
                    content2Text={
                      page_content.cogenerated_energy
                        ? page_content.cogenerated_energy.toString()
                        : ''
                    }
                    content4Text="%"
                    titleSubscript1Text={compromiseView.t(
                      'infoGraphicSustainability.energyUsed'
                    )}
                  ></Infographic>
                  <Infographic
                    titleSuperscript2Text={compromiseView.t(
                      'infoGraphicSustainability.reuse'
                    )}
                    content1DisplayIcon="yes"
                    content1IconName="water"
                    content2Text={page_content.reused_water}
                    content4Text="%"
                    titleSubscript1Text={compromiseView.t(
                      'infoGraphicSustainability.waterUsed'
                    )}
                  ></Infographic>
                </Flex>
                <Spacer></Spacer>
                {/* LINHA 2 */}
                <Box
                  // bg='blue.100'
                  flex="1"
                  marginTop={{
                    base: '3%',
                    lg: '30%',
                    '2xl': '8%'
                  }}
                  alignItems={'center'}
                >
                  <Flex
                    // bg='blue'
                    direction="column"
                    alignItems="center"
                    padding={{ base: '5%' }}
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
      </Box>
      {/* FIM Economia de recursos naturais */}

      {/* INICIO Preservação da fauna e da flora */}
      <Box bg="brown.150">
        <Flex
          maxWidth="1536px"
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
            direction={{ base: 'column', lg: 'row' }}
            alignItems={'center'}
          >
            {/* BOX 1 */}
            <Box
              // bg='pink'
              flex="1"
              justifyItems={'center'}
              // margin = {{ base: '5% 5% 5% 5%', sm: '5% 5% 5% 5%', lg: '5% 2% 5% 5%', xl: '5% 2% 5% 5%'}}
            >
              <Image
                src={page_content.section4_img}
                maxW={{ base: '100vw', lg: '660px' }}
              />
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
                textAlign={{ base: 'left' }}
                marginTop={{ base: '5%' }}
              >
                {page_content.section4_title}
              </Text>
              <Text marginTop={{ base: '3%', lg: '5%' }}>
                <HtmlTextParser>{page_content.section4_text}</HtmlTextParser>
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      {/* FIM Preservação da fauna e da flora */}

      {/* INICIO Cultivamos nossa gente */}
      <Box bg="white">
        <Flex
          id="our-people"
          maxWidth="1536px"
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
            direction={{ base: 'column', lg: 'row' }}
          >
            {/* BOX 1 */}
            <Box
              // bg='pink'
              flex={{ base: '1', lg: '2', xl: '1' }}
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
                  lg: 'left'
                }}
                alignSelf={{
                  base: 'center',
                  lg: 'flex-start'
                }}
              />
              <Text marginTop={{ base: '10%', lg: '5%' }}>
                <HtmlTextParser>{page_content.section5_text}</HtmlTextParser>
              </Text>
              <Box
                // bg='blue'
                flex="1"
                margin={{ base: '5%' }}
                alignSelf={'center'}
              >
                <Infographic
                  content1Text="+"
                  content2Text={(page_content.collaborators_number / 1000)
                    .toLocaleString('en-US', { maximumFractionDigits: 1 })
                    .replace('.', ',')}
                  content3Text={compromiseView.t(
                    'infoGraphicContributors.measure'
                  )}
                  // content4Text = 'Colaboradores diretos e indiretos'
                  // fontSize = {{ base: '12px', sm: '16px', lg: '24px', xl: '18px'}}
                  titleSubscript1Text={compromiseView.t(
                    'infoGraphicContributors.description'
                  )}
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
                base: 'column'
              }}
              alignItems={'center'}
              // bg='yellow'
              flex="1"
            >
              <Box>
                <Image
                  src={page_content.section5_img}
                  maxW={{ base: '100vw', lg: '660px' }}
                />
              </Box>

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
                  {compromiseView.t('weCultivateOurPeople.bePartOfThisTeamBtn')}
                </Text>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      {/* FIM Cultivamos nossa gente */}

      {/* INICIO Compromisso com a sociedade */}
      <Box bg="green.1000">
        <Flex
          maxWidth="1536px"
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
            direction={{ base: 'column', lg: 'row' }}
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
              <Image
                src={page_content.section6_img}
                maxW={{ base: '100vw', lg: '660px' }}
              />
              {/* <Image src="/assets/imgs/img_criancas.png" /> */}
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
                textAlign={{ base: 'left' }}
                color={'#144835'}
              >
                {page_content.section6_title}
              </Text>
              <Text marginTop={{ base: '10px', lg: '20px' }} color={'#143127'}>
                <HtmlTextParser>{page_content.section6_text}</HtmlTextParser>
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      {/* FIM Compromisso com a sociedade */}

      {/* INICIO Confira alguns projetos patrocinados por nós */}

      {/* FIM Confira alguns projetos patrocinados por nós */}

      {/* INICIO Cultivamos nossos valores */}
      <Box bg="gray.450">
        <Flex
          id="our-values"
          maxWidth="1536px"
          marginX="auto"
          alignItems="center"
          justifyContent="center"
          position="relative"
          zIndex="base"
          overflowY="hidden"
          overflowX="hidden"
          bg="gray.450"
          backgroundImage="/assets/imgs/textura_madeira_esquerda.png"
          backgroundPosition="center top"
          backgroundRepeat="no-repeat"
        >
          <Flex
            // bg='blue'
            direction={{ base: 'column-reverse', lg: 'row' }}
            alignItems={'center'}
          >
            {/* BOX 1 */}

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
                textAlign={{ base: 'left' }}
                alignSelf={{
                  base: 'flex-start'
                }}
              />
              <Text marginTop={{ base: '8%', sm: '2%', lg: '3%', xl: '3%' }}>
                <HtmlTextParser>{page_content.section7_text}</HtmlTextParser>
              </Text>
            </Box>
            {/* BOX 2 */}
            <Box
              // bg='pink'
              flex="1"
              justifyItems={'center'}
              // margin = {{ base: '5% 5% 5% 5%', sm: '5% 5% 5% 5%', lg: '5% 2% 5% 5%', xl: '5% 2% 5% 5%'}}
            >
              <Image
                src={page_content.section7_img}
                maxW={{ base: '100vw', lg: '690px' }}
              />
              {/* <Image src="/assets/imgs/cultivamos_nossos_valores.png" /> */}
            </Box>
          </Flex>
        </Flex>
      </Box>
      {/* FIM Cultivamos nossos valores */}

      {/* INICIO Compromisso com a conduta corporativa */}
      {/* <Box bg="green.100">
        <Flex
          maxWidth="1536px"
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
          <Flex direction={{ base: 'column', lg: 'row' }} alignItems={'center'}>
            <Box
              margin={{
                base: '10% 5% 5% 5%',
                sm: '5% 5% 5% 5%',
                lg: '5% 2% 5% 5%',
                xl: '5% 2% 5% 5%'
              }}
              flex="1"
              justifyItems={'flex-start'}
            >
              <Text
                as="h3"
                variant={'h3' as any}
                textAlign={{ base: 'left' }}
                color="green.550"
              >
                {page_content.section8_title}
              </Text>
              <Text marginTop={{ base: '10px', lg: '20px' }}>
                <HtmlTextParser>{page_content.section8_text}</HtmlTextParser>
              </Text>
            </Box>

            <Box
              flex="1"
              justifyItems={'center'}
              margin={{
                base: '0% 0% 0% 0%',
                sm: '0% 5% 8% 5%',
                lg: '3% 3% 3% 3%',
                xl: '3% 3% 3% 3%'
              }}
            >
              <Image src={page_content.section8_img} maxW="668px" />
            </Box>
          </Flex>
        </Flex>
      </Box> */}
      {/* FIM Compromisso com a conduta corporativa */}

      {/* INICIO Ouvidoria */}
      {/* <Flex
        maxWidth="1536px"
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
      <Box bg="green.1000">
        <Flex
          id="report"
          maxWidth="1536px"
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
            direction={{ base: 'column', lg: 'row' }}
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
              <Image
                src={page_content.esg_img}
                maxW={{ base: '100vw', lg: '550px' }}
              />
              {/* <Image src="/assets/imgs/relatorio esg.png" /> */}
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
                  titleString={compromiseView.t('ESG.title')}
                  textAlign={{
                    base: 'left'
                  }}
                  alignSelf={{
                    base: 'flex-start'
                  }}
                />
                <Text marginTop={{ base: '5%', sm: '2%', lg: '3%', xl: '3%' }}>
                  <HtmlTextParser>
                    {page_content.esg_report_description}
                  </HtmlTextParser>
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
      </Box>
      {/* FIM Nossas práticas de ESG */}
    </Box>
  )
}
