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
  page_content: {
    page_title: string
    header_text: string
    quality_norm_text: string
    quality_norms: {
      norm: string
    }[]
  }
}

export const Certification = (props: CertificationViewProps) => (
  <Box>
    <Pagebar
      paths={[
        {
          title: 'Certificações BERNECK®',
          url: 'certificacoes'
        }
      ]}
    />

    {/* Downloads Header */}
  <Flex
    bg="brown.150"
    justifyContent="center"
  >
    <Flex
        flexDir="column"
        width="100%"
        bg="brown.100"
        overflow="hidden"
        paddingX={{ base: '5%', '2xl': '3%' }}
        paddingY={{ base: '20px', md: '0' }}
        position="relative"
        justifyContent="center"
        alignItems={{ base: 'center', md: 'start' }}
        maxWidth={"1536px"}
        maxHeight="298px"
        height={{ base: 'auto', md: '25vw' }}
      >
        <Box 
          display={{ base: 'none', md: 'block' }}
        >
          <CompletedTitle
            titleString= {props.page_content.page_title}
            textAlign="left"
            alignSelf="left"
            zIndex="docked"
          />
        </Box>

        <Box display={{ base: 'block', md: 'none' }}>
          <CompletedTitle
            titleString= {props.page_content.page_title}
            textAlign="center"
            alignSelf="center"
            zIndex="docked"
          />
        </Box>
        <Text
          variant={'body' as any}
          w={{ base: '100%', md: '50%' }}
          marginTop={{ base: '1%', xl: '3%' }}
          color="brown.300"
        >
          {props.page_content.header_text}
        </Text>
        <Box
          h="100%"
          position={'absolute'}
          top="0"
          left={{ base: '55%', md: '60%' }}
          overflow="hidden"
          // bg="red"
        >
          <Box 
            w="100vw" 
            h="100%" 
            justifyContent="left"
          >
            <Image
              src="/img/banner_certificacoes.png"
              width={'auto'}
              height={'100%'}
              display={{ base: 'none', md: 'block' }}
            />
          </Box>
        </Box>
      </Flex>
    
    </Flex>
    {/* End Downloads Header */}


    {/* INICIO Florestas Certificadas */}
    <Flex
      maxWidth="1536px"
      marginX="auto"
      alignItems="center"
      justifyContent="center"
      position="relative"
      zIndex="base"
      overflowY="hidden"
      overflowX="hidden"
      // bg="red.100"
      bg="white.100"
    >
      <Flex
        // bg='blue'
        flex="1"
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
  <Box
     bg="green.170"
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
      bg="green.170"
    >
      <Flex
        flex="1"
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
              bg="green.100"
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
              // alignItems="center"
              // alignContent="center"
              // justifyContent="center"
              // justifyItems="center"
              padding={'5%'}
            >
              <Flex
                // bg='green'
                flex="1"
                direction={{ base: 'column', lg: 'row' }}
              >
                 <Flex
                  // bg='black'
                  flex="1"
                  
                >
                  <Text
                    as="h3"
                    variant={'h3' as any}
                    color="green.800"
                    textAlign={{
                      base: 'left',
                      sm: 'left',
                      lg: 'left',
                      xl: 'left'
                    }}
                  >
                    {item.certifier}
                  </Text>
                </Flex>
                <Flex
                  // bg='azure'
                  flex="2"
                >
                  <Text
                    color="brown.350"
                    fontWeight= 'medium'
                    textAlign={{
                      base: 'left',
                      sm: 'left',
                      lg: 'left',
                      xl: 'left'
                    }}
                    marginTop={{ base: '8px', sm: '8px', lg: '0px', xl: '0px' }}
                  >
                    {item.description}
                  </Text>
                </Flex>


              </Flex>
              <Flex
                // bg='red'
                flex="1"
              >
                <Flex
                  // bg='tomato'
                  flex="1"
                  justifyContent={'left'}
                  direction={{
                    base: 'column',
                    sm: 'column',
                    lg: 'column',
                    xl: 'row'
                  }}
                  
                  // alignItems="start"
                  // alignContent="end"
                  // justifyItems="start"
                >
                  {item.certificates.map((c, j) => {
                    return (
                      <Flex
                       
                        onClick={() =>
                          window.open(c.certificate_file.url, '_blank')
                        }
                        key={j}
                        backgroundColor="#EBDDC4"
                        // backgroundImage="/assets/imgs/fundo_relatorio.svg"
                        // backgroundPosition="left"
                        // backgroundRepeat="no-repeat"
                        // backgroundSize={'cover'}
                        margin={{ base: '2% 0%', lg: '0% 3% 1% 3%', xl: '1%' }}
                        padding={{ base: '5%' }}
                        minWidth={{ base: '100px', sm: '220px'}}
                        h={{ base: '100%', lg: '50%'}}
                      >
                        <PatternCertification
                          title={c.certificate_name}
                          titleInitialColor="green.700"
                          iconName="certification"
                          iconInitialColor1="#0A6C3B"
                          iconInitialColor2="#0A6C3B"
                        />
                      </Flex>
                    )
                  })}
                </Flex>
              </Flex>
            </Flex>
          )
        })}



        {/* BOX 5 - Normas da qualidade */}
        <Flex
          m={{ base: '5%', sm: '5%', lg: '5%', xl: '3% 5%' }}
          // bg="blue"
          bg="green.100"
          flex="1"
          direction={{
            base: 'column-reverse',
            sm: 'column-reverse',
            lg: 'column-reverse',
            xl: 'row'
          }}
          padding={"5%"}
          alignItems={{ xl: 'center'}}
          
        >
          
          {/* CONTROLE DO ICONE */}
          <Flex
            // bg="pink"
            flex="1"
            flexDirection={{ base: 'column' }}
            paddingRight={"2%"}
            m={{ base: '0%', sm: '2% 0%', lg: '2% 0%', xl: '0% 0%' }}
          >

            <Flex
                // bg="chocolate"
                bg="green.170"
                flex="1"
                justifyContent={"flex-end"}
                // alignContent={"flex-end"}
                // mt={{ base: '5%', sm: '5%', lg: '5%', xl: '5%' }}
                zIndex = '1700'
                paddingRight={{ base: '2%', sm: '2%', lg: '2%', xl: '2%' }}
                paddingTop={{ base: '4%', sm: '3%', lg: '3%', xl: '3%' }}
                
              >
                <CertificationsIcon
                  height={{ base: '55px', sm: '60px', lg: '70px', xl: '80px' }}
                  width={{ base: '55px', sm: '60px', lg: '70px', xl: '80px' }}
                  stroke1={"#004934"}
                  stroke2={"#6DB416"}
                />
            </Flex>

            <Flex
              bg="green.170"
              // bg="goldenrod"
              flex="3"
              direction={{ base: 'column', sm: 'row', lg: 'row', xl: 'row' }}
              p={{ base: '0% 5% 15% 5%', sm: '0% 5% 10% 5%', lg: '0% 10% 12% 10%', xl: '0% 10% 16% 10%' }}
              // mt={{ base: '5%', sm: '5%', lg: '5%', xl: '-5%' }}
              
            >

           
              <Flex
               // m={{ base: '5%', sm: '5%', lg: '5%', xl: '10%' }}
                // p={{ base: '15%', sm: '10%', lg: '5%', xl: '5%' }}
                // bg='azure'
                flex="1"
              >
                <List spacing={{ base: '2', sm: '3', lg: '5', xl: '5' }}>
                  {props.page_content.quality_norms.map((item, i) => {
                    return (
                      i <= props.page_content.quality_norms.length / 2 && (
                        <ListItem key={i}>
                          <ListIcon as={CheckIcon} color="green.500" />
                          <Text
                            as={'h5'}
                            variant={'h5' as any}
                            fontWeight={'bold'}
                            color= 'green.700'
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
                            {item.norm + "test"}
                          </Text>
                        </ListItem>
                      )
                    )
                  })}
                </List>
              </Flex>
              <Flex
                // bg='red'
                flex="1"
                mt={{ base: '3%', sm: '0' }}
              >
                <List spacing={{ base: '2', sm: '3', lg: '5', xl: '5' }}>
                  {props.page_content.quality_norms.map((item, i) => {
                    return (
                      i > props.page_content.quality_norms.length / 2 && (
                        <ListItem key={i}>
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
                            {item.norm}
                          </Text>
                        </ListItem>
                      )
                    )
                  })}
                </List>
             </Flex>

          </Flex>
        
        </Flex>
        {/* FIM CONTROLE ICONE */}

        {/* AREA TEXTO NORMAS */}
        <Flex
            mb={{ base: '4%', md: '0' }}
            // bg='yellowgreen'
            flex="1"
            direction={{ base: 'column' }}
          >
            <Text
              as="h3"
              variant={'h3' as any}
              color="green.800"
              textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
            >
              Normas de qualidade
            </Text>
            <Text
              color="green.900"
              textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
              marginTop={{ base: '8px', sm: '8px', lg: '10px', xl: '20px' }}
            >
              {props.page_content.quality_norm_text}
            </Text>
          </Flex>

          {/* FIM AREA TEXTO NORMAS */}
        
        </Flex>
        {/* FIM BOX 5 */}



      </Flex>
    </Flex>
    </Box>

  </Box>
)
