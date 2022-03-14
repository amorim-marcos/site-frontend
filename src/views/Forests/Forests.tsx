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

const dataPageSession = {
  imageUrl: 'url(/assets/imgs/Grupo_1872.png)',
  title: 'Divisão florestal',
  subtitle: ''
}

const bannerIcendio = {
  title:
    'Em caso de incêndio em nossas florestas e entornos, ligue para 41 2109-3855 [PR] | 41 2109-3856 [PR] | 49 3245-9015 [SC] | 49 3245-9186 [SC]',
  display: 'flex'
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
}

export const ForestsView = (props: ForestsViewProps) => {
  const router = useRouter()
  return (
    <Box maxWidth="1920px" marginX="auto" bg="green.100">
      <Pagebar
        paths={[
          {
            title: props.page_content.page_title,
            url: 'divisao-florestal'
          }
        ]}
      />

      <FireAlert title={bannerIcendio.title} display={bannerIcendio.display} />

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
        maxWidth="1920px"
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
            base: 'column',
            sm: 'column',
            lg: 'column',
            xl: 'column'
          }}
          // bg='gray'
        >
          <Flex
            // bg='blue'
            direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row' }}
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

              <Text fontFamily="body">{props.page_content.section1_text}</Text>
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
                  Cultivamos para colher,
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
                  Conservamos para colher sempre!
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
                    Conheça nosso compromisso ambiental
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
                content3Text="mil hectares"
                content1DisplayIcon="yes"
                content1IconName="pinus"
                content2Text={props.page_content.pinus_cultivation.toString()}
                titleSubscript1Text="Cultivo Florestal do Pinus"
              />
            </Flex>
            <Flex
              // bg="yellow.100"
              width={{ base: '320px', sm: '250px', lg: '300px', xl: '30%' }}
              height={{ base: '130px', sm: '130px', lg: '150px', xl: '200px' }}
            >
              <Infographic
                content3Text="mil hectares"
                content1DisplayIcon="yes"
                content1IconName="trees"
                content2Text={props.page_content.preserved_native_forests.toString()}
                titleSubscript1Text="Florestas Efetivamente Plantadas"
              />
            </Flex>
            <Flex
              // bg="orange.100"
              width={{ base: '320px', sm: '250px', lg: '300px', xl: '30%' }}
              height={{ base: '130px', sm: '130px', lg: '150px', xl: '200px' }}
            >
              <Infographic
                content3Text="mil hectares"
                content1DisplayIcon="yes"
                content1IconName="forest"
                content2Text={props.page_content.planted_forests.toString()}
                titleSubscript1Text="Preservação de Florestas Naturais"
              />
            </Flex>
            <Flex
              // bg="red.100"
              width={{ base: '320px', sm: '250px', lg: '300px', xl: '30%' }}
              height={{ base: '130px', sm: '130px', lg: '150px', xl: '200px' }}
            >
              <Infographic
                content3Text="milhões por ano"
                content1DisplayIcon="yes"
                content1IconName="mudas"
                content2Text={props.page_content.planted_trees.toString()}
                titleSubscript1Text="Árvores Plantadas"
              />
            </Flex>
            <Flex
              // bg="blue.100"
              width={{ base: '320px', sm: '250px', lg: '300px', xl: '30%' }}
              height={{ base: '130px', sm: '130px', lg: '150px', xl: '200px' }}
            >
              <Infographic
                content3Text="estados"
                content1DisplayIcon="yes"
                content1IconName="earth"
                content2Text={props.page_content.states.toString()}
                titleSubscript1Text="PR, SC, RS e SP"
              />
            </Flex>
            <Flex
              // bg="purple.100"
              width={{ base: '320px', sm: '250px', lg: '300px', xl: '30%' }}
              height={{ base: '130px', sm: '130px', lg: '150px', xl: '200px' }}
            >
              <Infographic
                content3Text="municípios"
                content1DisplayIcon="yes"
                content1IconName="house"
                content2Text={props.page_content.value_chain_counties.toString()}
                titleSubscript1Text="Cadeia de Suprimentos"
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* FIM Colhemos o que plantamos */}

      {/* INICIO Manejo Florestal */}
      <Flex
        id="manejo"
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
                title="CONHEÇA"
                description="Nossas Certificações"
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
              marginTop={{ base: '10%', sm: '4%', lg: '4%', xl: '4%' }}
              textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
            >
              {props.page_content.section2_text}
            </Text>
            {/* <Text
              marginTop={'3%'}
              textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
            ></Text> */}
          </Box>
        </Flex>
      </Flex>
      {/* FIM Manejo Florestal */}

      {/* INICIO Preservação da biodiversidade */}
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
                base: 'column',
                sm: 'column',
                lg: 'column',
                xl: 'column'
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
                  titleSubscript1Text="Espécies de Animais Silvestres"
                />

                <Infographic
                  content2Text={props.page_content.monitored_farms.toString()}
                  titleSubscript1Text="Fazendas Monitoradas"
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
                    {props.page_content.monitored_animals_and_farms_text}
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
            <Text marginTop={'2%'}>{props.page_content.section3_text}</Text>
            {/* <Text
              marginTop={'3%'}
              // textAlign =  {{ base: 'left', sm: 'left', lg: 'left', xl: 'left'}}
            >
             
            </Text> */}
          </Box>
        </Flex>
      </Flex>
      {/* FIM Preservação da biodiversidade */}

      {/* INICIO Produção Florestal */}
      <Flex
        id="producao"
        maxWidth="1920px"
        marginX="auto"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
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
              {props.page_content.section4_text}
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
      </Flex>
      {/* FIM Produção Florestal */}

      {/* MADEIRA FLYANTE */}
      <Flex
        marginX="auto"
        zIndex={10}
        overflowY="hidden"
        overflowX="hidden"
        // bg='blue'
        justifyContent={'flex-end'}
        position={'absolute'}
        margin={{
          base: '-30% 0% 0% 40%',
          sm: '-22% -0% 5% 55%',
          lg: '-22% 0% 5% 65%',
          xl: '-15% 0% 5% 70%'
        }}
      >
        <Image src="/assets/imgs/madeiras.png" />
      </Flex>
      {/* MADEIRA FLYANTE */}

      {/* INICIO Do plantio à colheita */}
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
              {props.page_content.section5_text}
            </Text>
          </Box>
        </Flex>
      </Flex>
      {/* FIM Do plantio à colheita */}

      {/* INICIO Destaques da produção florestal */}
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
        backgroundImage="/assets/imgs/grafismos_fundo2.png"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
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
            // bg='pink'
            flex={{ base: '1', sm: '1', lg: '1', xl: '1' }}
            margin={{
              base: '8% 5% 0% 5%',
              sm: '8% 5% 0% 5%',
              lg: '5% 2% 5% 5%',
              xl: '5% 2% 5% 5%'
            }}
          >
            <CompletedTitle
              titleString="Destaques da produção florestal"
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
              lg: '1% 5% 5% 5%',
              xl: '1% 0% 5% 0%'
            }}
            direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row' }}
            alignItems={'center'}
            // bg='tomato'
            flex="1"
          >
            <Flex
              flex="1"
              // bg='yellow'
              direction={{
                base: 'column',
                sm: 'column',
                lg: 'column',
                xl: 'column'
              }}
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
              flex="1"
              // bg='blue'
              direction={{
                base: 'column',
                sm: 'column',
                lg: 'column',
                xl: 'column'
              }}
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
      {/* FIM Destaques da produção florestal */}

      {/* INICIO Fornecedor Florestal */}
      <Flex
        id="fornecedor"
        maxWidth="1920px"
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
              {props.page_content.section6_text}
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
              base: 'column',
              sm: 'column',
              lg: 'column',
              xl: 'column'
            }}
            alignItems={'center'}
            // bg='yellow'
            flex="1"
          >
            <Image src="/assets/imgs/fornecedor_florestal.png" />
            <Button
              onClick={() => router.push('/contact')}
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
                Seja um Fornecedor Florestal
              </Text>
            </Button>
          </Flex>
        </Flex>
      </Flex>
      {/* FIM Fornecedor Florestal */}

      {/* INICIO Resumo público de Manejo Florestal */}
      <Flex
        id="resumo-publico"
        maxWidth="1920px"
        marginX="auto"
        // alignItems='center'
        // justifyContent='center'
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        bg="green.100"
        backgroundImage="/assets/imgs/grafismos_fundo2.png"
        backgroundPosition="top"
        backgroundRepeat="no-repeat"
      >
        <Flex
          // bg='blue'
          direction={{ base: 'column', sm: 'column', lg: 'column', xl: 'row' }}
          // alignItems={"center"}
        >
          {/* BOX 1 */}
          <Box
            // bg='pink'
            flex="1"
            // justifyItems={"center"}
            margin={{
              base: '8% 5% 3% 5%',
              sm: '8% 5% 3% 5%',
              lg: '5% 5% 5% 5%',
              xl: '5% 2% 5% 5%'
            }}
          >
            <CompletedTitle
              titleString="Resumo público de Manejo Florestal"
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
            />
            <Text
              marginTop={{ base: '10%', sm: '5%', lg: '4%', xl: '4%' }}
              color={'green.800'}
              textAlign={{ base: 'left', sm: 'left', lg: 'center', xl: 'left' }}
            >
              Saiba mais sobre o manejo responsável das nossas florestas.
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
            padding={{ base: '10%', sm: '10%', lg: '10%', xl: '2%' }}
            // bg='blue'
            flex="1"
            position="relative"
            zIndex="base"
            overflowY="hidden"
            overflowX="hidden"
            backgroundImage="/assets/imgs/fundo_relatorio.svg"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize={'cover'}
            alignItems='center'
            justifyContent='center'
          >
            {props.page_content.public_resume.map((item, i) => {
              return (
                <Link href={item.public_resume_file.url} key={i} isExternal>
                  <PatternCertification
                    title={item.public_resume_name}
                    titleInitialColor="green.800"
                    iconName="reports"
                    iconInitialColor1="#004934"
                    iconInitialColor2="#004934"
                  />
                </Link>
              )
            })}
          </Flex>
        </Flex>
      </Flex>
      {/* FIM Resumo público de Manejo Florestal */}
    </Box>
  )
}
