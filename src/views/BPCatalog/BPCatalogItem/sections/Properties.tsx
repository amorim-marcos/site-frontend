import { ReactNode } from 'react'
import { useRouter } from 'next/router'

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
      align="center"
      justify="center"
      gap={{ base: '60px', '2xl': '102px' }}
      wrap="wrap"
    >
      <Flex
        data-testid="texture-assets"
        direction="column"
        gap={{ base: '63px', '2xl': '93px' }}
        w={{ base: '100%', xl: '50%', '2xl': 'inherit' }}
        mt={{ '2xl': '54px' }}
        align={{ base: 'center', '2xl': 'flex-start' }}
        justify={{ base: 'center', '2xl': 'inherit' }}
      >
        <Flex
          data-testid="download-pattern"
          align="center"
          justify={{ base: 'center', sm: 'flex-start' }}
          gap="27px"
          cursor="pointer"
          wrap={{ base: 'wrap', sm: 'nowrap' }}
          onClick={props.handleDownload}
        >
          <Image
            src={props.textureImg}
            w={{ base: '128px', '2xl': '148px' }}
            h={{ base: '128px', '2xl': '148px' }}
            border="7px solid"
            borderRadius="100%"
            borderColor="gray.150"
          />

          <Flex direction="column">
            <Text
              fontSize={{ base: '20px', '2xl': '23px' }}
              fontWeight="medium"
              letterSpacing="-0.45px"
              color="green.200"
            >
              FAÇA O DOWNLOAD
            </Text>
            <Text
              fontSize={{ base: '31px', '2xl': '34px' }}
              fontWeight="bold"
              letterSpacing="-0.68px"
              color="gray.300"
            >
              Padrão {props.productName}
            </Text>
          </Flex>
        </Flex>

        <Flex
          data-testid="pattern-info"
          direction="column"
          gap="30px"
          w={{ base: '100%', '2xl': 'inherit' }}
          px="20px"
          align={{ base: 'center', '2xl': 'inherit' }}
          justify={{ base: 'center', '2xl': 'inherit' }}
        >
          <PatternInfo
            title="CONFIRA"
            description="Certificado de Qualidade"
            onClick={() => router.push('/certificacoes')}
            icon={
              <CertificationsIcon
                width={{ base: '31px', sm: '41px', '2xl': '61px' }}
                height={{ base: '56px', sm: '66px', '2xl': '86px' }}
              />
            }
            graphism={
              <Image
                src="/img/grafismo_button_left.svg"
                filter={'brightness(0.65)'}
                pos="absolute"
                left={0}
                objectFit="cover"
                h="100%"
              />
            }
          />

          <PatternInfo
            title="DESCUBRA"
            description="Onde Comprar"
            onClick={() => router.push('/onde-comprar')}
            icon={
              <EarthIcon
                width={{ base: '40px', sm: '58px', '2xl': '78px' }}
                height={{ base: '40px', sm: '58px', '2xl': '78px' }}
              />
            }
            graphism={
              <Image
                src="/img/grafismo_button_right.svg"
                filter={'brightness(0.65)'}
                pos="absolute"
                right={0}
                objectFit="cover"
                h="100%"
              />
            }
          />
        </Flex>
      </Flex>

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
  )
}

const PatternInfo = (props: {
  title: string
  description: string
  icon: ReactNode
  graphism: ReactNode
  onClick: () => void
}) => (
  <Flex
    data-testid="pattern-info-box"
    align="center"
    bg="green.900"
    w={{ base: '100%', sm: '85%', xl: '100%', '2xl': '798px' }}
    h={{ base: '120px', sm: '160px', '2xl': '173px' }}
    pl={{ base: '5px', sm: '20px', xl: '40px', '2xl': '84px' }}
    pr={{ base: '5px', sm: '20px', '2xl': '0' }}
    gap={{ base: '20px', sm: '25px', '2xl': '45px' }}
    cursor="pointer"
    pos="relative"
    onClick={props.onClick}
    _hover={{
      filter: 'brightness(1.2)'
    }}
  >
    <Box h="100%">{props.graphism}</Box>

    <Box zIndex={10}>{props.icon}</Box>

    <Box zIndex={10}>
      <Text
        fontSize={{ base: '14px', sm: '19px', '2xl': '23px' }}
        fontWeight="medium"
        letterSpacing="-0.45px"
        color="green.600"
      >
        {props.title}
      </Text>

      <Text
        fontSize={{ base: '22px', sm: '30px', '2xl': '34.2px' }}
        fontWeight="bold"
        letterSpacing="-0.68px"
        color="white"
      >
        {props.description}
      </Text>
    </Box>
  </Flex>
)

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
    fontSize={{ base: '17px', '2xl': '19px' }}
    letterSpacing="-0.37px"
    color="gray.300"
    border="2px solid #F5F6F4"
    {...props}
  >
    {props.children}
  </Td>
)
