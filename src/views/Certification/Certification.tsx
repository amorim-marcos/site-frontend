import {
  Box,
  Image,
  Text,
  Flex,
  List,
  ListItem,
  ListIcon,
  Link
} from '@chakra-ui/react'
import Pagebar from '@components/Pagebar'
import PageSession from '@components/PageSession'
import CompletedTitle from '@components/CompletedTitle'
import { CertificationsIcon } from '@components/Icons'
import PatternCertification from '@components/PatternCertification'
import { CheckIcon } from '@chakra-ui/icons'
import parser from 'react-html-parser'

export type CertificationViewProps = {
  forestCertificate: {
    certifier: string
    description: string
    certificates: {
      certificate_name: string
      certificate_file: {
        url: string
      }
    }[]
  }
  productsCertificates: {
    certifier: string
    description: string
    certificates: {
      certificate_name: string
      certificate_file: {
        url: string
      }
    }[]
  }[]
}

export const Certification = (props: CertificationViewProps) => (
  <Box maxWidth="1920px" marginX="auto" bg="green.100">
    <Pagebar
      paths={[
        {
          title: 'Certificações BERNECK®',
          url: 'certificacoes'
        }
      ]}
    />

    <PageSession
      data={{
        imageUrl: 'url(/assets/imgs/escurecida.png)',
        title: 'Certificações',
        subtitle: '',
        text: 'Manejo florestal, qualidade produtiva, controle de fabricação. Para nós, qualidade e desenvolvimento responsável são mais do que objetivos a serem alcançados, são práticas incorporadas em nosso dia a dia.'
      }}
      titleColor="green.900"
      subTitleColor="brown.350"
      viewGrafismo="flex"
      GrafismLeftStroke="#E0CBA5"
      GrafismLeftOpacity="0.2"
    />

    {/* INICIO Florestas Certificadas */}
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
        // bg='blue'
        direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row' }}
      >
        {/* BOX 1 */}
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
            titleString="Florestas Certificadas"
            textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
            alignSelf={{
              base: 'flex-start',
              sm: 'flex-start',
              lg: 'flex-start',
              xl: 'flex-start'
            }}
          />
          <Text
            as="h3"
            variant={'h3' as any}
            marginTop={{ base: '5%', sm: '2%', lg: '3%', xl: '3%' }}
            color={'green.800'}
          >
            {props.forestCertificate.certifier}
          </Text>
          <Text
            marginTop={{ base: '5%', sm: '2%', lg: '3%', xl: '3%' }}
            color={'green.800'}
          >
            {parser(props.forestCertificate.description)}
          </Text>

          <Flex
            flex="1"
            backgroundImage="/assets/imgs/fundo_relatorio.svg"
            backgroundPosition="left"
            backgroundRepeat="no-repeat"
            backgroundSize={'cover'}
            marginTop={{ base: '5%', sm: '2%', lg: '3%', xl: '3%' }}
            padding={{ base: '3%', sm: '3%', lg: '1%', xl: '1%' }}
            direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row' }}
          >
            {props.forestCertificate.certificates.map((item, i) => {
              return (
                <PatternCertification
                  onClick={() =>
                    window.open(item.certificate_file.url, '_blank')
                  }
                  key={i}
                  title={item.certificate_name}
                  titleInitialColor="green.800"
                  iconName="certification"
                  iconInitialColor1="#004934"
                  iconInitialColor2="#004934"
                />
              )
            })}
          </Flex>
        </Box>
        {/* BOX 2 */}
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
              xl: '8% 8% 8% 8%'
            }}
            h="100%"
          >
            <Image
              src="/assets/imgs/fsc.png"
              w={{ base: '30%', sm: '18%', lg: '25%', xl: '25%' }}
              margin={{
                base: '50% 0% 0% 70%',
                sm: '50% 0% 0% 80%',
                lg: '100% 0% 0% 70%',
                xl: '95% 0% 0% 70%',
                '2xl': '60% 0% 0% 75%'
              }}
            />
          </Box>
        </Box>
      </Flex>
    </Flex>
    {/* FIM Florestas Certificadas*/}

    {/* INICIO Produtos altamente qualificados */}
    <Flex
      maxWidth="1920px"
      marginX="auto"
      // alignItems='center'
      // justifyContent='center'
      position="relative"
      zIndex="base"
      overflowY="hidden"
      overflowX="hidden"
      bg="green.100"
    >
      <Flex
        // bg='blue'
        direction={{ base: 'column', sm: 'column', lg: 'column', xl: 'column' }}
        // alignItems={"center"}
      >
        {/* BOX 1 */}
        <Box
          ml={{ base: '5%', sm: '5%', lg: '5%', xl: '5%' }}
          mt={{ base: '5%', sm: '5%', lg: '5%', xl: '5%' }}
          // bg='pink'
          flex="1"
          // justifyItems={"center"}
        >
          <CompletedTitle
            titleString="Produtos altamente qualificados"
            textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
            alignSelf={{
              base: 'flex-start',
              sm: 'flex-start',
              lg: 'flex-start',
              xl: 'flex-start'
            }}
          />
        </Box>

        {props.productsCertificates.map((item, i) => {
          return (
            <Flex
              key={i}
              m="5%"
              mb="0"
              bg="gray.100"
              flex="1"
              direction={
                i % 2 === 0
                  ? { base: 'column', lg: 'row' }
                  : {
                      base: 'column',
                      sm: 'column',
                      lg: 'row-reverse',
                      xl: 'row-reverse'
                    }
              }
              alignItems="center"
              alignContent="center"
              justifyContent="center"
              justifyItems="center"
              padding={'5%'}
            >
              <Box
                // bg='green'
                flex="1"
                w="50%"
              >
                <Text
                  as="h3"
                  variant={'h3' as any}
                  textAlign={{
                    base: 'left',
                    sm: 'left',
                    lg: 'left',
                    xl: 'left'
                  }}
                >
                  {item.certifier}
                </Text>
                <Text
                  color="green.900"
                  textAlign={{
                    base: 'left',
                    sm: 'left',
                    lg: 'left',
                    xl: 'left'
                  }}
                  marginTop={{ base: '8px', sm: '8px', lg: '10px', xl: '20px' }}
                >
                  {item.description}
                </Text>
              </Box>
              <Box
                // bg='red'
                w="50%"
              >
                <Flex
                  // bg='azure'
                  w="100%"
                  justifyContent={'center'}
                  direction={{
                    base: 'column',
                    sm: 'row',
                    lg: 'column',
                    xl: 'row'
                  }}
                >
                  {item.certificates.map((c, j) => {
                    return (
                      <Box
                        onClick={() =>
                          window.open(c.certificate_file.url, '_blank')
                        }
                        key={j}
                        backgroundColor="#EBDDC4"
                        backgroundImage="/assets/imgs/fundo_relatorio.svg"
                        backgroundPosition="left"
                        backgroundRepeat="no-repeat"
                        backgroundSize={'cover'}
                        margin={{ base: '1%', lg: '3%', xl: '1%' }}
                        padding={{ base: '1%' }}
                        minWidth="250px"
                      >
                        <PatternCertification
                          title={c.certificate_name}
                          titleInitialColor="green.800"
                          iconName="certification"
                          iconInitialColor1="#004934"
                          iconInitialColor2="#004934"
                        />
                      </Box>
                    )
                  })}
                </Flex>
              </Box>
            </Flex>
          )
        })}

        {/* BOX 5 */}
        <Flex
          ml={{ base: '5%', sm: '5%', lg: '5%', xl: '5%' }}
          mt={{ base: '5%', sm: '5%', lg: '5%', xl: '5%' }}
          mb={{ base: '5%', sm: '5%', lg: '5%', xl: '5%' }}
          mr={{ base: '5%', sm: '5%', lg: '5%', xl: '5%' }}
          bg="gray.100"
          flex="1"
          direction={{
            base: 'column',
            sm: 'column',
            lg: 'row-reverse',
            xl: 'row-reverse'
          }}
          alignItems="center"
          alignContent="center"
          justifyContent="center"
          justifyItems="center"
        >
          <Flex
            margin={{ base: '5%', sm: '5%', lg: '5%', xl: '5%' }}
            // bg='green'
            flex="1"
            direction={{
              base: 'column',
              sm: 'column',
              lg: 'column',
              xl: 'column'
            }}
          >
            <Text
              as="h3"
              variant={'h3' as any}
              textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
            >
              Normas de qualidade
            </Text>
            <Text
              color="green.900"
              textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
              marginTop={{ base: '8px', sm: '8px', lg: '10px', xl: '20px' }}
            >
              As certificações CARB2 (California Air Resources Board) e EPA
              (Environmental Protection Agency) fazem parte de um processo
              voluntário de certificação de produtos para o mercado norte
              americano. A BERNECK é certificada pela empresa Benchmark para os
              produtos MDP (PB), MDF e HDF (T-MDF).
            </Text>
          </Flex>
          <Flex
            m={{ base: '5%', sm: '5%', lg: '5%', xl: '5%' }}
            p={{ base: '15%', sm: '10%', lg: '5%', xl: '5%' }}
            bg="green.100"
            flex="1"
            direction={{ base: 'column', sm: 'row', lg: 'row', xl: 'row' }}
          >
            <Flex
              // bg='azure'
              flex="1"
              position={'absolute'}
              m={{
                base: '-16% 0% 0% 30%',
                sm: '-10% 0% 0% 40%',
                lg: '-6% 0% 0% 30%',
                xl: '-6% 0% 0% 30%'
              }}
            >
              <CertificationsIcon
                height={{ base: '55px', sm: '60px', lg: '70px', xl: '80px' }}
                width={{ base: '55px', sm: '60px', lg: '70px', xl: '80px' }}
                // stroke1={"#004934"}
                // stroke2={"#004934"}
              />
            </Flex>
            <Flex
              // bg='azure'
              flex="1"
            >
              <List spacing={{ base: '2', sm: '3', lg: '5', xl: '5' }}>
                {/* {dataValores.list.map((item) => ( */}
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.500" />
                  <Text
                    as={'h5'}
                    variant={'h5' as any}
                    fontWeight={'bold'}
                    marginTop={{
                      base: '-20px',
                      sm: '-20px',
                      lg: '-22px',
                      xl: '-25px'
                    }}
                    marginLeft={{
                      base: '25px',
                      sm: '25px',
                      lg: '25px',
                      xl: '25px'
                    }}
                  >
                    ABNT NBR 15.316
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.500" />
                  <Text
                    as={'h5'}
                    variant={'h5' as any}
                    fontWeight={'bold'}
                    marginTop={{
                      base: '-20px',
                      sm: '-20px',
                      lg: '-22px',
                      xl: '-25px'
                    }}
                    marginLeft={{
                      base: '25px',
                      sm: '25px',
                      lg: '25px',
                      xl: '25px'
                    }}
                  >
                    ABNT NBR 14.810
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.500" />
                  <Text
                    as={'h5'}
                    variant={'h5' as any}
                    fontWeight={'bold'}
                    marginTop={{
                      base: '-20px',
                      sm: '-20px',
                      lg: '-22px',
                      xl: '-25px'
                    }}
                    marginLeft={{
                      base: '25px',
                      sm: '25px',
                      lg: '25px',
                      xl: '25px'
                    }}
                  >
                    AS/NZD 1859.1
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.500" />
                  <Text
                    as={'h5'}
                    variant={'h5' as any}
                    fontWeight={'bold'}
                    marginTop={{
                      base: '-20px',
                      sm: '-20px',
                      lg: '-22px',
                      xl: '-25px'
                    }}
                    marginLeft={{
                      base: '25px',
                      sm: '25px',
                      lg: '25px',
                      xl: '25px'
                    }}
                  >
                    EN 13.986
                  </Text>
                </ListItem>
                {/* ))} */}
              </List>
            </Flex>
            <Flex
              // bg='red'
              flex="1"
              mt={{ base: '5%', sm: '0%' }}
              // ml={{ base: '0%', sm: '5%'}}
            >
              <List spacing={{ base: '2', sm: '3', lg: '5', xl: '5' }}>
                {/* {dataValores.list.map((item) => ( */}
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.500" />
                  <Text
                    as={'h5'}
                    variant={'h5' as any}
                    fontWeight={'bold'}
                    marginTop={{
                      base: '-20px',
                      sm: '-20px',
                      lg: '-22px',
                      xl: '-25px'
                    }}
                    marginLeft={{
                      base: '25px',
                      sm: '25px',
                      lg: '25px',
                      xl: '25px'
                    }}
                  >
                    ABNT NBR 15.316
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.500" />
                  <Text
                    as={'h5'}
                    variant={'h5' as any}
                    fontWeight={'bold'}
                    marginTop={{
                      base: '-20px',
                      sm: '-20px',
                      lg: '-22px',
                      xl: '-25px'
                    }}
                    marginLeft={{
                      base: '25px',
                      sm: '25px',
                      lg: '25px',
                      xl: '25px'
                    }}
                  >
                    ABNT NBR 14.810
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.500" />
                  <Text
                    as={'h5'}
                    variant={'h5' as any}
                    fontWeight={'bold'}
                    marginTop={{
                      base: '-20px',
                      sm: '-20px',
                      lg: '-22px',
                      xl: '-25px'
                    }}
                    marginLeft={{
                      base: '25px',
                      sm: '25px',
                      lg: '25px',
                      xl: '25px'
                    }}
                  >
                    AS/NZD 1859.1
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.500" />
                  <Text
                    as={'h5'}
                    variant={'h5' as any}
                    fontWeight={'bold'}
                    marginTop={{
                      base: '-20px',
                      sm: '-20px',
                      lg: '-22px',
                      xl: '-25px'
                    }}
                    marginLeft={{
                      base: '25px',
                      sm: '25px',
                      lg: '25px',
                      xl: '25px'
                    }}
                  >
                    EN 13.986
                  </Text>
                </ListItem>
                {/* ))} */}
              </List>
            </Flex>
          </Flex>
        </Flex>
        {/* FIM BOX 5 */}
      </Flex>
    </Flex>
  </Box>
)
