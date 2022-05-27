import { Box, Flex, Link, Text, Image, Button } from '@chakra-ui/react'
import Pagebar from '@components/Pagebar'
import PageSession from '@components/PageSession'
import FireAlert from '@components/FireAlert'
import CompletedTitle from '@components/CompletedTitle'
import PatternInfo from '@components/PatternInfo'
import { CertificationsIcon } from '@components/Icons'
import Infographic from '@components/Infographic'
import FeaturedBanner from '@components/FeaturedBanner'

import PatternCertification from '@components/PatternCertification'
import { useRouter } from 'next/router'
import Paragraph from '@components/Paragraph'
import { useTranslation } from 'react-i18next'
import HtmlTextParser from '@components/HtmlTextParser'

const dataPageSession = {
  imageUrl: 'url(/assets/imgs/Grupo_1872.png)',
  title: 'Divisão florestal',
  subtitle: ''
}

export type ForestsViewProps = {
  page_content: {
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
    value_chain_counties: number
    states: number
    pinus_cultivation: number
    planted_trees: number
    monitored_animals: number
    monitored_animals_and_farms_text: string
    monitored_farms: number
    page_title: string
    planted_forests: number
    preserved_native_forests: number
    header_text: string
    community_development: number
    forest_production_highlights: {
      highlight: string
      image: {
        url: string
      }
    }[]
    public_resume: {
      public_resume_name: string
      id: number
      public_resume_file: {
        url: string
      }
    }[]
  }
  fireWarningText: string
}

export const ForestsView = (props: ForestsViewProps) => {
  const router = useRouter()
  const forestView = useTranslation('forestsView')
  return (
    <Box>
      <Pagebar
        paths={[
          {
            title: props.page_content.page_title,
            url: 'divisao-florestal'
          }
        ]}
      />

      <FireAlert title={props.fireWarningText} />

      <PageSession
        data={{
          imageUrl: dataPageSession.imageUrl,
          title: dataPageSession.title,
          subtitle: dataPageSession.subtitle,
          text: props.page_content.header_text
        }}
        titleColor="white"
        subTitleColor="white"
      />

      {/* INICIO Colhemos o que plantamos */}
      <Flex
        maxWidth="1536px"
        marginX="auto"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        bg="white.100"
      >
        <Flex
          direction={{
            base: 'column'
          }}
          // bg='gray'
        >
          <Flex
            // bg='blue'
            direction={{ base: 'column', lg: 'row' }}
          >
            {/* BOX 1 */}
            <Box
              // bg='yellow.99'
              flex="1"
              margin={{
                base: '8% 7% 0% 5%',
                sm: '5% 5% 0% 5%',
                lg: '5% 5% 5% 5%',
                xl: '5% 5% 2% 5%'
              }}
            >
              <Text
                as="h3"
                variant={'h3' as any}
                color="green.550"
                marginBottom={{ base: '2%', sm: '2%', lg: '5%', xl: '2%' }}
              >
                {props.page_content.section1_title}
              </Text>

              <Text fontFamily="body">
                <HtmlTextParser>
                  {props.page_content.section1_text}
                </HtmlTextParser>
              </Text>
            </Box>
            {/* BOX 2 */}
            <Box
              // bg='gray.100'
              flex="1"
              margin={{
                base: '8% 0% 0% 0%',
                sm: '2% 5% 0% 5%',
                lg: '5% 5% 0% 5%',
                xl: '5% 5% 0% 5%'
              }}
            >
              <Flex
                // bg='blue'
                direction="column"
                alignItems="center"
                justifyContent={'center'}
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
                  margin={{
                    base: '3% 3% 0% 3%',
                    sm: '3% 3% 0% 3%',
                    lg: '5% 5% 0% 5%',
                    xl: '3% 3% 0% 3%'
                  }}
                >
                  {forestView.t('weCultivate.sloganPartOne')}
                </Text>
                <Text
                  as="h3"
                  variant={'h3' as any}
                  fontFamily="body"
                  color="green.800"
                  textAlign="center"
                  margin={{
                    base: '0% 3% 3% 3%',
                    sm: '0% 3% 3% 3%',
                    lg: '0% 5% 5% 5%',
                    xl: '0% 3% 5% 3%'
                  }}
                >
                  {forestView.t('weCultivate.sloganPartTwo')}
                </Text>

                <Button
                  onClick={() => router.push('/nosso-compromisso')}
                  w={{ base: '100%', sm: '70%', lg: '100%', xl: '80%' }}
                  h={{ base: '100%', sm: '70%', lg: '90%', xl: '90%' }}
                  padding={{ base: '4%', sm: '3%', lg: '5%', xl: '5%' }}
                >
                  <Text
                    as="h5"
                    variant={'h5' as any}
                    color="white"
                    textAlign="center"
                    fontWeight="bold"
                  >
                    {forestView.t(
                      'weCultivate.discoverOurEnvironmentalCommitmentBtn'
                    )}
                  </Text>
                </Button>
              </Flex>
            </Box>
          </Flex>
          {/* BOX 3 */}
          <Flex
            // bg='tomato'
            margin={{
              base: '8% 0% 5% 0%',
              sm: '5% 0% 5% 0%',
              lg: '5% 5% 2% 5%',
              xl: '5% 0% 5% 0%'
            }}
            flexWrap={'wrap'}
            justifyContent="center"
          >
            <Flex
              // bg="gray.100"
              width={{ base: '320px', sm: '250px', lg: '300px', xl: '30%' }}
              height={{ base: '130px', sm: '130px', lg: '150px', xl: '200px' }}
            >
              <Infographic
                content3Text={forestView.t(
                  'infoGraphicsForests.thousandHectares'
                )}
                content1DisplayIcon="yes"
                content1IconName="pinus"
                content2Text={props.page_content.pinus_cultivation.toString()}
                titleSubscript1Text={forestView.t(
                  'infoGraphicsForests.pineForestCultivation'
                )}
              />
            </Flex>
            <Flex
              // bg="yellow.100"
              width={{ base: '320px', sm: '250px', lg: '300px', xl: '30%' }}
              height={{ base: '130px', sm: '130px', lg: '150px', xl: '200px' }}
            >
              <Infographic
                content3Text={forestView.t(
                  'infoGraphicsForests.thousandHectares'
                )}
                content1DisplayIcon="yes"
                content1IconName="trees"
                content2Text={props.page_content.preserved_native_forests.toString()}
                titleSubscript1Text={forestView.t(
                  'infoGraphicsForests.effectivelyPlantedForests'
                )}
              />
            </Flex>
            <Flex
              // bg="orange.100"
              width={{ base: '320px', sm: '250px', lg: '300px', xl: '30%' }}
              height={{ base: '130px', sm: '130px', lg: '150px', xl: '200px' }}
            >
              <Infographic
                content3Text={forestView.t(
                  'infoGraphicsForests.thousandHectares'
                )}
                content1DisplayIcon="yes"
                content1IconName="forest"
                content2Text={props.page_content.planted_forests.toString()}
                titleSubscript1Text={forestView.t(
                  'infoGraphicsForests.preservationOfNaturalForests'
                )}
              />
            </Flex>
            <Flex
              // bg="red.100"
              width={{ base: '320px', sm: '250px', lg: '300px', xl: '30%' }}
              height={{ base: '130px', sm: '130px', lg: '150px', xl: '200px' }}
            >
              <Infographic
                content3Text={forestView.t(
                  'infoGraphicsForests.millionsPerYear'
                )}
                content1DisplayIcon="yes"
                content1IconName="mudas"
                content2Text={props.page_content.planted_trees.toString()}
                titleSubscript1Text={forestView.t(
                  'infoGraphicsForests.plantedTrees'
                )}
              />
            </Flex>
            <Flex
              // bg="blue.100"
              width={{ base: '320px', sm: '250px', lg: '300px', xl: '30%' }}
              height={{ base: '130px', sm: '130px', lg: '150px', xl: '200px' }}
            >
              <Infographic
                content3Text={forestView.t('infoGraphicsForests.states')}
                content1DisplayIcon="yes"
                content1IconName="map"
                content2Text={props.page_content.states.toString()}
                titleSubscript1Text={forestView.t(
                  'infoGraphicsForests.whichStates'
                )}
              />
            </Flex>
            <Flex
              // bg="purple.100"
              width={{ base: '320px', sm: '250px', lg: '300px', xl: '30%' }}
              height={{ base: '130px', sm: '130px', lg: '150px', xl: '200px' }}
            >
              <Infographic
                content3Text={forestView.t('infoGraphicsForests.counties')}
                content1DisplayIcon="yes"
                content1IconName="house"
                content2Text={props.page_content.value_chain_counties.toString()}
                titleSubscript1Text={forestView.t(
                  'infoGraphicsForests.supplyChain'
                )}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* FIM Colhemos o que plantamos */}

      {/* INICIO Manejo Florestal */}
      <Box bg="green.200">
        <Flex
          id="manejo"
          maxWidth="1536px"
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
            // bg='blue'
            direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row' }}
          >
            {/* BOX 1 */}
            <Box
              // bg='pink'
              flex="1"
              justifyItems={'center'}
              backgroundImage="/assets/imgs/iStock-621469294.png"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              // margin = {{ base: '5% 5% 5% 5%', sm: '5% 5% 5% 5%', lg: '5% 2% 5% 5%', xl: '5% 2% 5% 5%'}}
            >
              <Box
                margin={{
                  base: '30% 8% 5% 8%',
                  sm: '30% 8% 5% 8%',
                  lg: '80% 5% 8% 5%',
                  xl: '80% 8% 8% 8%'
                }}
                h="100%"
              >
                <PatternInfo
                  title={forestView.t('knowOurCertifications.know')}
                  description={forestView.t(
                    'knowOurCertifications.ourCertifications'
                  )}
                  onClick={() => router.push('/certificacoes')}
                  icon={
                    <CertificationsIcon
                      width={{
                        base: '40px',
                        xs: '50px',
                        sm: '58px',
                        lg: '70px',
                        xl: '80px'
                      }}
                      height={{
                        base: '40px',
                        xs: '50px',
                        sm: '58px',
                        lg: '70px',
                        xl: '80px'
                      }}
                    />
                  }
                />
              </Box>
            </Box>
            {/* BOX 2 */}
            <Box
              margin={{
                base: '8% 5% 10% 5%',
                sm: '5% 5% 8% 5%',
                lg: '5% 5% 5% 5%',
                xl: '5% 5% 5% 5%'
              }}
              // bg='yellow'
              flex="1"
            >
              <CompletedTitle
                titleString={props.page_content.section2_title}
                textAlign={{
                  base: 'center',
                  lg: 'left'
                }}
                alignSelf={{
                  base: 'center',
                  lg: 'flex-start'
                }}
              />
              <Text
                marginTop={{ base: '10%', sm: '4%', lg: '4%', xl: '4%' }}
                textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
              >
                <HtmlTextParser>
                  {props.page_content.section2_text}
                </HtmlTextParser>
              </Text>
              {/* <Text
              marginTop={'3%'}
              textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
            ></Text> */}
            </Box>
          </Flex>
        </Flex>
      </Box>
      {/* FIM Manejo Florestal */}

      {/* INICIO Preservação da biodiversidade */}
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
        >
          <Flex
            // bg='blue'
            direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row' }}
          >
            {/* BOX 1 */}
            <Box
              // bg='pink'
              flex="1"
              margin={{
                base: '0% 0% 5% 0%',
                sm: '5% 5% 5% 5%',
                lg: '5% 2% 5% 5%',
                xl: '5% 2% 5% 5%'
              }}
            >
              {/* INTERNAL FLEX */}
              <Flex
                // bg='gray'
                direction={{
                  base: 'column'
                }}
              >
                {/* INTERNAL FLEX - BOX 1 */}
                <Flex
                  bg="white.100"
                  flex={1}
                  marginLeft={{ base: '0%', sm: '10%', lg: '10%', xl: '10%' }}
                >
                  <Infographic
                    content1Text="+"
                    content2Text={props.page_content.monitored_animals.toString()}
                    titleSubscript1Text={forestView.t(
                      'infoGraphicBiodiversity.wildAnimalSpecies'
                    )}
                  />

                  <Infographic
                    content2Text={props.page_content.monitored_farms.toString()}
                    titleSubscript1Text={forestView.t(
                      'infoGraphicBiodiversity.monitoredFarms'
                    )}
                  />
                </Flex>
                {/* INTERNAL FLEX - BOX 2 */}
                <Flex
                  // bg='gray.400'
                  flex={1}
                  // direction = {{ base: 'column', sm: 'column', lg: 'row', xl: 'row'}}
                >
                  <Flex
                    // bg='gray.400'
                    flex={2}
                    // direction = {{ base: 'column', sm: 'column', lg: 'row', xl: 'row'}}
                  >
                    <Image src="/assets/imgs/tamandua.png" />
                  </Flex>
                  <Flex
                    // bg='gray.400'
                    flex={1}
                    // direction = {{ base: 'column', sm: 'column', lg: 'row', xl: 'row'}}
                  >
                    <Text
                      as="h5"
                      variant={'h5' as any}
                      padding={{ base: '5%', sm: '5%', lg: '10%', xl: '5%' }}
                      color={'brown.300'}
                      // textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left'}}
                    >
                      <HtmlTextParser>
                        {props.page_content.monitored_animals_and_farms_text}
                      </HtmlTextParser>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
            {/* BOX 2 */}
            <Box
              margin={{
                base: '0% 5% 10% 5%',
                sm: '0% 5% 5% 5%',
                lg: '5% 5% 5% 5%',
                xl: '5% 5% 5% 2%'
              }}
              // bg='yellow'
              alignSelf={'center'}
              flex="1"
            >
              <Text
                as="h3"
                variant={'h3' as any}
                textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
              >
                {props.page_content.section3_title}
              </Text>
              <Text marginTop={'2%'}>
                <HtmlTextParser>
                  {props.page_content.section3_text}
                </HtmlTextParser>
              </Text>
              {/* <Text
              marginTop={'3%'}
              // textAlign =  {{ base: 'left', sm: 'left', lg: 'left', xl: 'left'}}
            >

            </Text> */}
            </Box>
          </Flex>
        </Flex>
      </Box>
      {/* FIM Preservação da biodiversidade */}

      {/* INICIO Produção Florestal */}
      <Box bg="white.100">
        <Flex
          id="producao"
          maxWidth="1536px"
          marginX="auto"
          alignItems="center"
          justifyContent="center"
          position="relative"
          zIndex="base"
          overflowY="visible"
          overflowX="visible"
          bg="white.100"
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
                base: '8% 5% 5% 5%',
                sm: '8% 5% 8% 5%',
                lg: '5% 3% 8% 3%',
                xl: '5% 3% 3% 3%'
              }}
              // bg='yellow'
              flex="1"
              justifyItems={'flex-start'}
            >
              <CompletedTitle
                titleString={props.page_content.section4_title}
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
              <Text marginTop={{ base: '10%', sm: '5%', lg: '4%', xl: '4%' }}>
                <HtmlTextParser>
                  {props.page_content.section4_text}
                </HtmlTextParser>
              </Text>
            </Box>

            {/* BOX 2 */}
            <Box
              // bg='pink'
              flex="1"
              justifyItems={'center'}
              margin={{
                base: '0% 0% 0% 0%',
                sm: '0% 0% 0% 0%',
                lg: '5% 2% 5% 5%',
                xl: '8% 2% 5% 5%'
              }}
            >
              <Image src="/assets/imgs/IMG_0618.png" />
            </Box>
          </Flex>
          {/* MADEIRA FLYANTE */}
          <Flex
            marginX="auto"
            zIndex={10}
            overflowY="visible"
            overflowX="hidden"
            // bg='blue'
            justifyContent={'flex-end'}
            position={'absolute'}
            width={{
              base: '50%',
              md: '45%',
              lg: '30%',
              '2xl': '100%'
            }}
            bottom={{
              base: '-30px',
              md: '-30px',
              lg: '-30px'
            }}
            right={{
              base: 0
            }}
          >
            <Image src="/assets/imgs/madeiras.png" />
          </Flex>
          {/* MADEIRA FLYANTE */}
        </Flex>
      </Box>
      {/* FIM Produção Florestal */}

      {/* INICIO Do plantio à colheita */}
      <Box bg="brown.100">
        <Flex
          maxWidth="1536px"
          marginX="auto"
          alignItems="center"
          justifyContent="center"
          // position="relative"
          zIndex="base"
          overflowY="visible"
          overflowX="hidden"
          bg="brown.100"
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
                base: '5% 5% 5% 5%',
                sm: '5% 5% 5% 5%',
                lg: '5% 2% 5% 5%',
                xl: '5% 0% 5% 5%'
              }}
            >
              <Image src="/assets/imgs/5–8_MUDAS.png" />
            </Box>
            {/* BOX 2 */}
            <Box
              margin={{
                base: '0% 5% 8% 5%',
                sm: '0% 5% 8% 5%',
                lg: '3% 3% 3% 3%',
                xl: '3% 5% 3% 3%'
              }}
              // bg='yellow'
              flex="1"
              justifyItems={'flex-start'}
            >
              <Text
                as="h3"
                variant={'h3' as any}
                color={'green.800'}
                textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
              >
                {props.page_content.section5_title}
              </Text>
              <Text
                marginTop={{ base: '10px', sm: '10px', lg: '20px', xl: '20px' }}
              >
                <HtmlTextParser>
                  {props.page_content.section5_text}
                </HtmlTextParser>
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      {/* FIM Do plantio à colheita */}

      {/* INICIO Destaques da produção florestal */}
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
          backgroundImage="/assets/imgs/grafismo_fundo_forest3.svg"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        >
          <Flex
            // bg='blue'
            direction={{
              base: 'column'
            }}
            w="100%"
          >
            {/* BOX 1 */}
            <Box
              // bg='pink'
              flex={{ base: '1', sm: '1', lg: '1', xl: '1' }}
              margin={{
                base: '8% 5% 0% 5%',
                sm: '8% 5% 0% 5%',
                lg: '5% 2% 2% 5%',
                xl: '5% 2% 2% 5%'
              }}
            >
              <CompletedTitle
                titleString={forestView.t('forestProductionHighlights.title')}
                textAlign={{
                  base: 'center',
                  sm: 'center',
                  lg: 'center',
                  xl: 'center'
                }}
                alignSelf={{
                  base: 'center',
                  sm: 'center',
                  lg: 'center',
                  xl: 'center'
                }}
              />
            </Box>
            {/* BOX 2 */}
            <Flex
              margin={{
                base: '3% 0% 5% 0%',
                sm: '3% 0% 5% 0%',
                lg: '0% 0% 5% 0%'
              }}
              paddingX="4%"
              direction={{ base: 'column', lg: 'row' }}
              alignItems={'center'}
              // bg='tomato'
              // flex="1"
              w="100%"
            >
              <Flex
                w={{ base: '100%', lg: '50%' }}
                // bg="yellow"
                direction={{
                  base: 'column'
                }}
                alignItems="center"
              >
                {props.page_content.forest_production_highlights.map(
                  (item, i) => {
                    return i % 2 === 0 ? (
                      <FeaturedBanner
                        key={i}
                        title={item.highlight}
                        srcImage={item.image.url}
                      />
                    ) : (
                      ''
                    )
                  }
                )}
              </Flex>

              <Flex
                // flex="1"
                w={{ base: '100%', lg: '50%' }}
                // bg='blue'
                direction={{
                  base: 'column'
                }}
                alignItems="center"
              >
                {props.page_content.forest_production_highlights.map(
                  (item, i) => {
                    return i % 2 !== 0 ? (
                      <FeaturedBanner
                        key={i}
                        title={item.highlight}
                        srcImage={item.image.url}
                        invert
                      />
                    ) : (
                      ''
                    )
                  }
                )}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      {/* FIM Destaques da produção florestal */}

      {/* INICIO Fornecedor Florestal */}
      <Box bg="green.100">
        <Flex
          id="fornecedor"
          maxWidth="1536px"
          marginX="auto"
          alignItems="center"
          justifyContent="center"
          position="relative"
          zIndex="base"
          overflowY="hidden"
          overflowX="hidden"
          bg="green.100"
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
                titleString={props.page_content.section6_title}
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
              <Text
                marginTop={{ base: '10%', sm: '5%', lg: '4%', xl: '4%' }}
                color={'green.800'}
              >
                <HtmlTextParser>
                  {props.page_content.section6_text}
                </HtmlTextParser>
              </Text>
              {/* <Text
              marginTop={{ base: '2%', sm: '2%', lg: '3%', xl: '3%' }}
              color={'green.800'}
            >

            </Text> */}
            </Box>
            {/* BOX 2 */}
            <Flex
              margin={{
                base: '3% 0% 5% 0%',
                sm: '3% 0% 5% 0%',
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
              <Image src="/assets/imgs/fornecedor_florestal.png" />
              <Button
                onClick={() =>
                  router.push('/contact?channel=suprimentos-florestais')
                }
                w={{ base: '90%', sm: '70%', lg: '90%', xl: '70%' }}
                h={{ base: '100%', sm: '70%', lg: '15%', xl: '10%' }}
                padding={{ base: '4%', sm: '3%', lg: '5%', xl: '5%' }}
                marginTop={{
                  base: '-15px',
                  sm: '-20px',
                  lg: '-50px',
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
                  {forestView.t('forestSupplier.becomeAForestSupplierBtn')}
                </Text>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      {/* FIM Fornecedor Florestal */}

      {/* INICIO Resumo público de Manejo Florestal */}
      <Flex
        id="resumo-publico"
        maxWidth="1536px"
        marginX="auto"
        // alignItems='center'
        // justifyContent='center'
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        bg="white.100"
        backgroundImage="/img/grafismo_resumo_publico.svg"
        backgroundPosition="left top"
        backgroundBlendMode={'multiply'}
        backgroundSize={{ base: '100% auto', xl: '40% auto' }}
        backgroundRepeat="no-repeat"
      >
        <Flex
          // bg='blue'
          direction={{ base: 'column', xl: 'row' }}
          alignItems={'center'}
          justifyContent="space-between"
          w="100%"
          // alignItems={"center"}
        >
          {/* BOX 1 */}
          <Box
            // bg='pink'
            w={{ base: '70%', xl: '45%' }}
            // justifyItems={"center"}
            margin={{
              base: '8% 5% 3% 5%',
              sm: '8% 5% 3% 5%',
              lg: '5% 5% 5% 5%',
              xl: '5% 2% 5% 5%'
            }}
          >
            <CompletedTitle
              titleString={forestView.t(
                'publicSummaryOfForestManagement.title'
              )}
              textAlign={{
                base: 'center',
                sm: 'center',
                lg: 'center',
                xl: 'left'
              }}
              alignSelf={{
                base: 'center',
                sm: 'center',
                lg: 'center',
                xl: 'flex-start'
              }}
              titleLineHeight="1.3"
            />
            <Text
              marginTop={{ base: '10%', sm: '5%', lg: '4%', xl: '4%' }}
              color={'green.800'}
              textAlign={{ base: 'left', sm: 'left', lg: 'center', xl: 'left' }}
            >
              {forestView.t('publicSummaryOfForestManagement.description')}
            </Text>
          </Box>
          {/* BOX 2 */}

          <Flex
            margin={{
              base: '0% 5% 5% 5%',
              sm: '0% 5% 5% 5%',
              lg: '2% 2% 8% 0%',
              xl: '5% 5% 5% 0%'
            }}
            // padding={{ base: '10%', sm: '10%', lg: '10%', xl: '2%' }}
            padding="2%"
            // bg='blue'
            w={{ base: '90%', lg: '50%' }}
            position="relative"
            zIndex="base"
            overflowY="hidden"
            overflowX="hidden"
            backgroundImage="/img/fundo_resumo_publico.svg"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize={'cover'}
            alignItems="center"
            justifyContent="center"
            flexDirection={'column'}
          >
            {props.page_content.public_resume.map((item, i) => {
              return (
                <PatternCertification
                  onClick={() =>
                    window.open(item.public_resume_file.url, '_blank')
                  }
                  key={i}
                  title={item.public_resume_name}
                  titleInitialColor="green.800"
                  iconName="reports"
                  iconInitialColor1="#004934"
                  iconInitialColor2="#004934"
                />
              )
            })}
          </Flex>
        </Flex>
      </Flex>
      {/* FIM Resumo público de Manejo Florestal */}
    </Box>
  )
}
