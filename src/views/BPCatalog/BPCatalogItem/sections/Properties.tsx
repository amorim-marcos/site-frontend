import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import PatternInfo from '@components/PatternInfo'
import {
  Box,
  Flex,
  Image,
  Text,
  Accordion,
  AccordionButton,
  AccordionButtonProps,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionPanelProps,
  Table,
  TableCellProps,
  Tbody,
  Td,
  Tr
} from '@chakra-ui/react'

import { CertificationsIcon, EarthIcon, TapIcon } from '@components/Icons'

export interface PropertiesProps {
  productName: string
  textureImg: string
  uses_and_applications: string
  available_at: {
    id: number
    panel_type: string
    thickness: string
    dimensions: string
  }[]
  handleDownload: () => void
}

export const Properties = (props: PropertiesProps) => {
  const router = useRouter()

  return (
  
  <Flex
    // bg="red"
    //  align="center"
    justify="center"
    flex="1"
    >

    <Flex
      flex="1"
      direction={{ base: 'column', 'lg': 'row' }}
      // justify="center"
      gap={{ base: '5%', '2xl': '5%' }}
      // wrap="wrap"
      margin={{ base: '0 0 30% 0', md: '0 0 20% 0 ', xl: '0 5% 12% 5%', '2xl': '0 0 12% 0' }}
      // bg="purple"
      maxWidth="1536px"
    >

      {/* NIVEL 1 */}
      <Flex
        data-testid="texture-assets"
        direction="column"
        gap={{ base: '2%', '2xl': '3%' }}
        // w={{ base: '100%', xl: '50%', '2xl': 'inherit' }}
        // mt={{ '2xl': '54px' }}
        // align={{ base: 'center' }}
        // justify={{ base: 'center', '2xl': 'inherit' }}
        // bg="yellow"
        flex="1"
        // w={"90%"}
      >

         {/* NIVEL 2 */}
        <Flex
          data-testid="download-pattern"
          align="center"
          justify={{ base: 'center', sm: 'flex-start' }}
          wrap={{ base: 'wrap', sm: 'nowrap' }}
          gap={{ base: '27px', sm: '3%' }} 
          padding={{ base: '3%', sm: '3%' }} 
          cursor="pointer"
          onClick={props.handleDownload}
          // bg="blue"
          flex="1"
        >
          <Image
            src={props.textureImg}
            w={{ base: '128px', '2xl': '148px' }}
            h={{ base: '128px', '2xl': '148px' }}
            border="7px solid"
            borderRadius="100%"
            borderColor="gray.150"
          />

          <Flex 
            w={{ base: '80%', sm: 'auto' }} 
            direction="column"
            align={{ base: 'center', sm: 'flex-start' }}
          >
            <Text
              as={'h4'}
              variant={'h4' as any}
              fontWeight="medium"
              letterSpacing="-0.45px"
              color="green.200"
            >
              FAÇA O DOWNLOAD
            </Text>
            <Text
              as={'h2'}
              variant={'h2' as any}
              fontWeight={800}
              letterSpacing="-1.06px"
              pb="24px"
              color="gray.300"
            >
              Padrão {props.productName}
            </Text>
          </Flex>
        </Flex>


        {/* NIVEL 2 */}
        <Flex
          direction="column"
          // gap="2%"
          flex="2"
          gap={{ base: '2%', '2xl': '3%' }}
          // bg="blue.300"
        >
          <PatternInfo
              title="CONHEÇA"
              description="Nossas Certificações"
              onClick={() => router.push('/certificacoes')}
              icon={
              <CertificationsIcon
                width={{
                  base: '50px',
                  lg: '70px',
                  xl: '80px'
                }}
                height={{
                  base: '50px',
                  lg: '70px',
                  xl: '80px'
                }}
              />
            }
          />

          <PatternInfo
            title="DESCUBRA"
            description="Onde Comprar"
            onClick={() => router.push('/onde-comprar')}
            icon={
              <EarthIcon
                width={{
                  base: '30px',
                  lg: '50px',
                  xl: '60px'
                }}
                height={{
                  base: '30px',
                  lg: '50px',
                  xl: '60px'
                }}
              />
            }
          />
        </Flex>


      </Flex>
    
    {/* NIVEL 1 */}
    <Flex
      // bg="yellowegreen"
      margin={{ base: '0', md: '0 2% 0 2% ', lg: '0 2% 0 2%', '2xl': '0' }}
      flex="1"
    >
      <Accordion
        id="texture-props"
        w={{ base: '90%', xl: '580px', '2xl': '845px' }}
        defaultIndex={0}
      >
        <AccordionItem>
          <AccordionButtonBp title="DISPONÍVEL EM" />
          <AccordionPanelBp>
            <Flex direction="column">
              {props.available_at.map((item) => (
                <Box pb="40px" key={item.id}>
                  <Text
                    fontSize={{ base: '16px', '2xl': '19px' }}
                    fontWeight="bold"
                    letterSpacing="-0.37px"
                    color="gray.300"
                  >
                    {item.panel_type}
                  </Text>
                  <Table variant="simple">
                    <Tbody>
                      <Tr>
                        <TdGreen>Espessuras (mm)</TdGreen>
                        <TdGreen>{item.thickness}</TdGreen>
                      </Tr>
                      <Tr>
                        <TdGreen>Dimensão (m)</TdGreen>
                        <TdGreen>{item.dimensions}</TdGreen>
                      </Tr>
                    </Tbody>
                  </Table>
                </Box>
              ))}

              <Text
                fontSize="16px"
                fontWeight="medium"
                letterSpacing="-0.32px"
                color="green.200"
              >
                *Outras dimensões sob consulta
              </Text>
            </Flex>
          </AccordionPanelBp>
        </AccordionItem>

        <AccordionItem>
          <AccordionButtonBp title="SOBRE O BP BERNECK®" />
          <AccordionPanelBp>
            <Text
              fontSize={{ base: '17px', '2xl': '20px' }}
              letterSpacing="-0.4px"
              color="gray.300"
              pb="14px"
            >
              Nossos <b>painéis BP BERNECK®</b> são revestidos com laminado
              melamínico decorativo – em uma ou duas faces – com ótimo efeito
              decorativo e excelente resistência superficial, a risco e abrasão.
              As cores e texturas foram desenvolvidas em sintonia com as
              tendências do design mundial, que proporcionam infinitas
              possibilidades de combinação.
            </Text>

            <Text
              fontSize={{ base: '17px', '2xl': '20px' }}
              letterSpacing="-0.4px"
              color="gray.300"
            >
              Os painéis possuem superfície fechada reduzindo a proliferação de
              micro organismos, ideal para ambientes que requeiram fácil
              higienização. As dimensões padronizadas, aliadas a praticidade de
              um painel acabado, permitem a simplificação do processo de
              produção de móveis.
            </Text>

            <Flex align="center" padding="20px 0 10px" gap="12px">
              <TapIcon />
              <Text
                fontSize={{ base: '17px', '2xl': '20px' }}
                letterSpacing="-0.4px"
                fontWeight="600"
                color="#8a8a8a"
              >
                Fitas de borda
              </Text>
            </Flex>

            <Text
              fontSize={{ base: '17px', '2xl': '20px' }}
              letterSpacing="-0.4px"
              color="gray.250"
            >
              Todos os padrões possuem fitas de borda desenvolvidas em parceria
              com os melhores fornecedores do mercado. É importante que todas as
              bordas do painel estejam seladas, para garantir qualidade superior
              e durabilidade.
            </Text>
          </AccordionPanelBp>
        </AccordionItem>

        <AccordionItem>
          <AccordionButtonBp title="USOS E APLICAÇÕES" />
          <AccordionPanelBp
            fontSize={{ base: '17px', '2xl': '20px' }}
            letterSpacing="-0.4px"
            color="gray.300"
          >
            {props.uses_and_applications}
          </AccordionPanelBp>
        </AccordionItem>
      </Accordion>
    
    </Flex>

    </Flex>

  </Flex>
  )
}

interface AccordionButtonBpProps extends AccordionButtonProps {
  title: string
}

const AccordionButtonBp = (props: AccordionButtonBpProps) => (
  <h2>
    <AccordionButton {...props} _focus={{ boxShadow: 'none' }}>
      <Box flex="1" textAlign="left" color="gray.300">
        {props.title}
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
)

const AccordionPanelBp = (props: AccordionPanelProps) => (
  <AccordionPanel
    {...props}
    padding={{ '2xl': '35px 65px 35px 46px' }}
    bg="green.100"
  >
    {props.children}
  </AccordionPanel>
)

const TdGreen = (props: TableCellProps) => (
  <Td
    bg="#D7EABE"
    fontSize={{  base: '14px',
                  md: '16px',
                  lg: '18px',
                  xl: '17px',
                  '2xl': '19px' }}
    letterSpacing="-0.37px"
    color="gray.300"
    border="2px solid #F5F6F4"
    {...props}
  >
    {props.children}
  </Td>
)
