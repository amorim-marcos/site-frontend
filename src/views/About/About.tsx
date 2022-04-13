import { Box, Image, Text, Flex } from '@chakra-ui/react'
import Pagebar from '@components/Pagebar'
import PageSession from '@components/PageSession'
import Infographic from '@components/Infographic'
import TrajectoryCarousel from '@components/TrajectoryCarousel'
import { WhereWeAre } from '@components/WhereWeAre/WhereWeAre'
import { WhereWeArePanelProps } from '@components/WhereWeArePanel/WhereWeArePanel'
import CompletedTitle from '@components/CompletedTitle'
import { EarthIcon } from '@components/Icons'
import PatternInfo from '@components/PatternInfo'
import PatternInfoPhoto from '@components/PatternInfoPhoto'
import { TrajectoryTab } from '@components/TrajectoryCarousel/TrajectoryCarousel'
import { useRouter } from 'next/router'

export type AboutPageContent = {
  header_title: string
  header_text: string
  section1_title: string
  section1_text: string
  section2_title: string
  section2_text: string
  exportation_volume: number
  comercial_relationship: number
  our_trajectory_title: string
  our_trajectory_description: string
  where_we_are_title: string
  where_we_are_subtitle: string
  where_we_are_description: string
  resellers_description: string
  certifications_description: string
}

export type AboutProps = {
  page_content: AboutPageContent
  our_trajectory_tabs: Array<TrajectoryTab>
  panels: WhereWeArePanelProps[]
}

export const About = ({
  page_content,
  our_trajectory_tabs,
  panels
}: AboutProps) => {
  const router = useRouter()

  return (
    <Box>
      <Pagebar
        paths={[
          {
            title: 'Somos BERNECK®',
            url: 'somos-berneck'
          }
        ]}
      />

      <Box id="quem-somos">
        <PageSession
          data={{
            imageUrl: 'url(/assets/imgs/capa_somos_berneck.png)',
            title: 'Quem somos',
            subtitle: page_content.header_title,
            text: page_content.header_text
          }}
          titleColor="white"
          subTitleColor="white"
        />
      </Box>

    {/* INICIO RAIZES FIRMES PARA CRESCER */}
    <Box
      bg="green.150"
    >
      
      <Flex
        maxWidth="1536px"
        marginX="auto"
        position="relative"
        zIndex="base"
        overflow="hidden"
        bg="green.150"
      >
        <Flex direction={{ base: 'column', lg: 'row' }}>
          <Box
            margin={{
              base: '8% 8% 2% 5%',
              lg: '5%'
            }}
            alignSelf="center"
          >
            <Text
              as="h3"
              variant={'h3' as any}
              color="green.550"
              textAlign={{ base: 'left' }}
            >
              {page_content.section1_title}
            </Text>
            <Text
              color="green.900"
              textAlign={{ base: 'left' }}
              marginTop={{ base: '8px', lg: '10px', xl: '20px' }}
            >
              {page_content.section1_text}
            </Text>
          </Box>
          <Box
            margin={{
              base: '5% 8% 10% 5%',
              sm: '2% 8% 8% 5%',
              lg: '5%'
            }}
          >
            <Image
              src={'/assets/imgs/foto_fabrica.png'}
              w={{ base: '200px', sm: '300px', lg: '2000px', xl: '2000px' }}
            />
          </Box>
        </Flex>
      </Flex>

    </Box>
    {/* FIM RAIZES FIRMES PARA CRESCER */}

      {/* INICIO PARA O MADEIRAS MUNDO */}
      <Flex
        maxWidth="1536px"
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
          direction={{
            base: 'column',
            lg: 'row'
          }}
        >
          {/* GLOBAL BOX 1 */}
          <Box
            flex={{ base: '1', sm: '1', md: '1', lg: '1', xl: '1' }}
            margin={{
              base: '10% 0% 0% 0%',
              lg: '8% 0% 8% 0%'
            }}
          >
            <Flex
              // bg='gray'
              direction={{
                base: 'column',
                sm: 'row'
              }}
              justifyItems="center"
              justifyContent={{
                base: 'center',
                sm: 'center',
                lg: 'flex-end',
                xl: 'flex-end'
              }}
            >
              {/* BOX 1 */}
              <Box w={{ base: '80%', sm: '40%', lg: '100%' }}>
                <Image
                  src="/assets/imgs/quem_somos_container.png"
                  w={{ base: '55%', lg: '60%' }}
                  opacity={{ base: '0.5', lg: '1' }}
                />
              </Box>
              {/* BOX 2 */}
              <Box
                // bg='red.100'
                flex={{ base: '2', xl: '1' }}
                position={'absolute'}
                alignSelf={'center'}
                margin={{
                  base: '30px 0% 0px 0%',
                  sm: '0% 0%'
                }}
              >
                <Infographic
                  titleSuperscript1Text="Volume de Exportação"
                  content1Text="+"
                  content2Text={page_content.exportation_volume}
                  content3Text="TEUs / mês"
                />
                <Infographic
                  titleSuperscript1Text="Relações Comerciais"
                  content1Text="+"
                  content2Text={page_content.comercial_relationship}
                  content3Text="países"
                />
              </Box>
            </Flex>
          </Box>

          {/* GLOBAL BOX 2 */}
          <Box
            // bg='gray'
            flex="1"
            margin={{
              base: '30% 10% 10% 5%',
              sm: '8% 10% 8% 5%',
              lg: '8% 5% 8% 3%',
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
              {page_content.section2_title}
            </Text>
            <Text
              fontFamily="body"
              color="green.900"
              textAlign={{ base: 'left' }}
              marginTop={{ base: '8px', lg: '10px', xl: '20px' }}
            >
              {page_content.section2_text}
            </Text>
          </Box>
        </Flex>
      </Flex>
      {/* FIM PARA O MADEIRAS MUNDO */}


      {/* INICIO TRAJETORIA CAROUSEL */}
      <Box 
        bg="brown.100" 
        id="trajetoria"
        
      >
        <Flex
          maxWidth="1536px"
          marginX="auto"
          alignItems="center"
          justifyContent="center"
          position="relative"
          zIndex="base"
          overflowY="hidden"
          overflowX="hidden"
          direction={{ base: 'column' }}
          // bg='blue'
          padding={{ base: '3%', sm: '2%', lg: '2%', xl: '1%' }}
        >
          <Flex
            direction={{ base: 'column' }}
            // bg='pink'
            flex="1"
            alignItems="center"
            margin={{ base: '8% 5%', sm: '5% 5%', lg: '5% 10%', xl: '5% 10%' }}
          >
            <CompletedTitle
              titleString={page_content.our_trajectory_title}
              textAlign={{
                base: 'center',
                lg: 'left'
              }}
            />
            <Text
              fontFamily="body"
              color="brown.350"
              marginTop={'30px'}
              textAlign="center"
            >
              {page_content.our_trajectory_description}
            </Text>
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            width="90%"
            margin={{ xs: '0', lg: '20px' }}
            // bg='red'
          >
            <TrajectoryCarousel tabs={our_trajectory_tabs} />
          </Flex>
        </Flex>
      </Box>
      {/* FIM TRAJETORIA CAROUSEL */}

      {/* INICIO ONDE ESTAMOS */}
      <Flex
        id="onde-estamos"
        maxWidth="1536px"
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
          marginBottom={{ base: '50%', sm: '35%', lg: '25%', xl: '5%' }}
          padding="5%"
        >
          {/* FLEX 1 - BOX 1 */}
          <Flex
            direction={{
              base: 'column',
              xl: 'row'
            }}
            // margin={{ base: '5%' }}
            justifyContent={'space-between'}
            marginBottom="5%"
          >
            <CompletedTitle
              titleColor="green.900"
              titleString={page_content.where_we_are_title}
              alignSelf={{
                base: 'center',
                xl: 'flex-start'
              }}
              textAlign={{
                base: 'center',
                xl: 'left'
              }}
            />

            <Box
              margin={{
                base: '25px 0px',
                xl: '15px 10px'
              }}
              marginLeft={'10%'}
              w="70%"
            >
              <Text
                as="h3"
                variant={'h3' as any}
                fontFamily="body"
                color="green.600"
                textAlign={{
                  base: 'left'
                }}
              >
                {page_content.where_we_are_subtitle}
              </Text>
              <Text
                fontFamily="body"
                textAlign={{
                  base: 'left'
                }}
              >
                {page_content.where_we_are_description}
              </Text>
            </Box>
          </Flex>
          {/* FLEX 1 - BOX 2 */}
          <Flex justifyContent="center" alignItems="center" width="100%">
            <WhereWeAre panels={panels} />
          </Flex>
        </Flex>
      </Flex>
      {/* FIM ONDE ESTAMOS */}

    
    {/* INICIO REVENDEDORES */}
    <Box
      bg="green.200"
    >

      <Flex
        maxWidth="1536px"
        marginX="auto"
        // alignItems='center'
        // justifyContent='center'
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        bg="green.200"
      >
        <Flex
          // bg='red'
          direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row' }}
          width={'100%'}
        >
          <Box
            // bg='pink'
            flex="1"
            margin={{
              base: '8% 8% 5% 5%',
              sm: '8% 8% 2% 5%',
              lg: '5%',
              xl: '5%'
            }}
            // alignSelf='center'
          >
            <Text
              as="h3"
              variant={'h3' as any}
              textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
            >
              Revendedores
            </Text>
            <Text
              color="green.900"
              textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
              marginTop={{ base: '8px', sm: '8px', lg: '10px', xl: '20px' }}
            >
              {page_content.resellers_description}
            </Text>
          </Box>
          <Box
            // bg="yellow"
            flex="1"
            margin={{
              base: '3% 0% 0% 0%',
              sm: '3% 0% 0% 0%',
              lg: '5%',
              xl: '5%'
            }}
          >
            <PatternInfo
              title="DESCUBRA"
              description="Onde Comprar"
              onClick={() => router.push('/onde-comprar')}
              icon={
                <EarthIcon
                  width={{
                    base: '60px',
                    xs: '30px',
                    sm: '58px',
                    lg: '70px',
                    xl: '80px'
                  }}
                  height={{
                    base: '60px',
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
      </Flex>
    
    </Box>
    {/* FIM REVENDEDORES */}

      {/* INICIO CERTIFICADOS */}
      <Flex
        maxWidth="1536px"
        marginX="auto"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        bg="white.100"
      >
        <Flex direction={{ base: 'column', lg: 'row' }} width={'100%'}>
          <Box
            flex="1"
            margin={{
              base: '8% 8% 5% 5%',
              sm: '8% 8% 2% 5%',
              lg: '5%',
              xl: '5%'
            }}
          >
            <CompletedTitle
              titleString="Certificações"
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
              marginTop={{ base: '25px', sm: '25px', lg: '20px', xl: '20px' }}
            >
              {page_content.certifications_description}
            </Text>
          </Box>
          <Box
            // bg="yellow"
            flex="1"
            margin={{
              base: '3% 0% 0% 0%',
              sm: '3% 0% 0% 0%',
              lg: '5%',
              xl: '5%'
            }}
          >
            <PatternInfoPhoto
              onClick={() => router.push('/certificacoes')}
              imgSrc="/img/banner_certificacoes_about.png"
              title="CONHEÇA"
              description="Nossas certificações"
              titleColor="green.900"
              descriptionColor="white"
              grafism={false}
            />
          </Box>
        </Flex>
      </Flex>
      {/* FIM CERTIFICADOS */}
    </Box>
  )
}
