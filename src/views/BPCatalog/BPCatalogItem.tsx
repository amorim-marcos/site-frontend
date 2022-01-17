import { ReactNode, useState } from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionButtonProps,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionPanelProps,
  Box,
  Flex,
  Image,
  Table,
  TableCellProps,
  Tbody,
  Td,
  Text,
  Tr
} from '@chakra-ui/react'
import { Link } from 'react-scroll'

import {
  ZoomInIcon,
  CertificationsIcon,
  ReportsIcon,
  PlayIcon,
  EarthIcon,
  TapIcon
} from '@components/Icons'
import Arrow from '@components/Arrow'

export type Wood = { thickness: string; size: string }

export const BPCatalogItem = () => {
  const prevBp = 'SOLANUM'
  const nextBp = 'VERTI'

  return (
    <Box pos="relative">
      <Intro
        texture="/bps/patterns/volakas.jpg"
        textureName="Terrazza"
        textureDescription="Com a proposta do granilite e um mix de tonalidades de cimento branco, areia e diferentes minerais, este BP BERNECK® é um ícone da arquitetura em seus projetos."
      />
      <Inspire
        microDescription="Textura contemporânea com agradável sensação ao toque."
        anotherTextures={[
          { name: 'Louro Preto', img: '/bps/patterns/amantea.jpg' },
          { name: 'Ceramik', img: '/bps/patterns/calcare.jpg' },
          { name: 'Millennial', img: '/bps/patterns/gengibre.jpg' },
          { name: 'Denim', img: '/bps/patterns/wengue_ravena.jpg' }
        ]}
        patternDescription="O padrão Solanum traz personalidade e um apelo estético único aos projetos de móveis e interiores. O novo padrão é inspirado no Cumaru, madeira proveniente da Amazônia, e valoriza a cultura brasileira. Lançamento da Coleção Nômade, ele chama a atenção pela tonalidade castanho-mel e pela facilidade de combinar com tudo, trazendo calor e beleza aos móveis e interiores."
      />
      <TextureProperties
        texture="/bps/patterns/volakas.jpg"
        textureName="Volakas"
        mdp={{ thickness: '12 / 15 / 18 / 25', size: '2,75 x 1,85' }}
        mdf={{ thickness: '6 / 9 / 15 / 18 / 25', size: '2,75 x 1,85' }}
      />

      <Flex w="100%" pt="254px" justify="space-between">
        <Flex
          w="296px"
          h="113px"
          gap="23px"
          align="center"
          justify="center"
          boxShadow="0px 0px 30px #00000029"
          borderTopRightRadius="26px"
          cursor="pointer"
          onClick={() => alert(prevBp)}
          transition="all 0.2s ease-in-out"
          _hover={{ filter: 'brightness(0.8)' }}
        >
          <Arrow
            direction="left"
            width="30px"
            height="40px"
            color="green.200"
          />
          <Box>
            <Text
              fontSize="23px"
              fontWeight="bold"
              letterSpacing="-0.46px"
              color="grey.300"
            >
              Anterior
            </Text>

            <Text
              fontSize="18px"
              fontWeight="medium"
              letterSpacing="-0.36px"
              color="grey.300"
            ></Text>
            {prevBp}
          </Box>
        </Flex>

        <Flex
          w="296px"
          h="113px"
          gap="23px"
          align="center"
          justify="center"
          boxShadow="0px 0px 30px #00000029"
          borderTopLeftRadius="26px"
          cursor="pointer"
          onClick={() => alert(nextBp)}
          transition="all 0.2s ease-in-out"
          _hover={{ filter: 'brightness(0.8)' }}
        >
          <Flex direction="column" align="flex-end">
            <Text
              fontSize="23px"
              fontWeight="bold"
              letterSpacing="-0.46px"
              color="grey.300"
            >
              Próximo
            </Text>

            <Text
              fontSize="18px"
              fontWeight="medium"
              letterSpacing="-0.36px"
              color="grey.300"
            ></Text>
            {nextBp}
          </Flex>

          <Arrow
            direction="right"
            width="30px"
            height="40px"
            color="green.200"
          />
        </Flex>
      </Flex>
    </Box>
  )
}

const Intro = (props: {
  texture: string
  textureName: string
  textureDescription: string
}) => (
  <Flex
    h="797px"
    bgImg={props.texture}
    bgRepeat="repeat"
    pl="205px"
    align="center"
    pos="relative"
  >
    <Image
      src="/img/grafismo_topo_direita.svg"
      pos="absolute"
      boxSize={['642px', '538px']}
      top="0"
      right="0"
    />

    <Flex
      data-testid="texture-attr"
      boxSize={['547px', '476px']}
      direction="column"
      padding="78px 71px 0 75px"
      bg="green.100"
      pos="relative"
    >
      <Text
        fontSize="53px"
        fontWeight={800}
        letterSpacing="-1.06px"
        color="green.900"
        pb="24px"
      >
        {props.textureName}
      </Text>
      <Text fontSize="23px" letterSpacing="-0.23px" color="grey.300" pb="22px">
        {props.textureDescription}
      </Text>

      <Box h="3px" w="87px" bg="green.600" />

      <Box cursor="pointer" pos="absolute" bottom="29px" right="29px">
        <Link to="texture-props" smooth offset={-80}>
          <ZoomInIcon />
        </Link>
      </Box>
    </Flex>
  </Flex>
)

const Inspire = (props: {
  microDescription: string
  anotherTextures: { name: string; img: string }[]
  patternDescription: string
}) => {
  const [curr, setCurr] = useState(0)

  const switchTo = (act: 'next' | 'prev') => {
    const count = props.anotherTextures.length

    act === 'next'
      ? setCurr(curr < count - 1 ? curr + 1 : curr)
      : setCurr(curr > 0 ? curr - 1 : curr)
  }

  return (
    <Box pos="relative">
      <Flex
        data-testid="micro-texture"
        pos="relative"
        left="140px"
        top="-65px"
        w="fit-content"
      >
        <Image
          src="/bps/patterns/azul_vel.jpg"
          borderRadius="100%"
          boxSize="129px"
          zIndex={10}
        />
        <Flex>
          <Text
            bg="green.600"
            w="185px"
            h="41px"
            borderTopRightRadius="22px"
            color="white"
            fontSize="26px"
            fontWeight="bold"
            letterSpacing="-0.26px"
            textAlign="center"
            pos="absolute"
            top="24px"
            left="110px"
          >
            MICRO
          </Text>
          <Text
            w="40vw"
            pos="absolute"
            fontSize="18px"
            letterSpacing="0px"
            color="grey.300"
            top="76px"
            left="145px"
          >
            {props.microDescription}
          </Text>
        </Flex>
      </Flex>

      <Box
        data-testid="combine-texture"
        pos="relative"
        left="52%"
        w="fit-content"
        top="-330px"
        zIndex={100}
      >
        <Flex
          bg="green.900"
          w="214px"
          h="44px"
          padding="10px 27px"
          borderTopRightRadius="26px"
          align="center"
          justify="center"
        >
          <Text
            fontSize="20px"
            fontWeight="medium"
            color="white"
            letterSpacing="-0.2px"
          >
            COMBINE COM:
          </Text>
        </Flex>
        <Flex>
          {props.anotherTextures?.map((texture) => (
            <Flex key={texture.name} direction="column">
              <Image src={texture.img} w="211px" h="350px" />
              <Text fontSize="20px" letterSpacing="0px" color="grey.300">
                {texture.name}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Box>

      <Flex pl="88px" pos="relative" mt="-580px" wrap="wrap">
        <Flex data-testid="texture-examples" pt="208px" direction="column">
          <Text
            fontSize="37px"
            fontWeight={800}
            letterSpacing="-0.74px"
            color="green.700"
            pb="21px"
          >
            Insipire-se
          </Text>

          <Image
            src="/assets/imgs/foto_fabrica.png"
            w="846px"
            h="562px"
            objectFit="cover"
          />

          <Flex
            data-testid="examples-control"
            alignSelf="flex-end"
            mr="40px"
            mt="-38px"
          >
            <ArrowButton onClick={() => switchTo('prev')} direction="left" />
            <ArrowButton onClick={() => switchTo('next')} direction="right" />
          </Flex>
        </Flex>

        <Box
          bg="#D6DCD5"
          mt="165px"
          w="1440px"
          h="633px"
          pos="absolute"
          right="0"
          zIndex={-1}
        />

        <Flex
          data-testid="texture-description"
          mt="165px"
          w="840px"
          h="633px"
          padding="223px 100px 203px 120px"
          direction="column"
          right="0"
        >
          <Text w="660px" fontSize="20px" letterSpacing="0px" color="green.900">
            {props.patternDescription}
          </Text>

          <Flex pt="52px" gap="116px" zIndex={1000}>
            <TextureContentButton
              title="Assista ao vídeo"
              onClick={() => alert('video')}
            >
              <PlayIcon />
            </TextureContentButton>

            <TextureContentButton
              title="Confira o ebook"
              onClick={() => alert('ebook')}
            >
              <ReportsIcon
                stroke1="#6AA353"
                width="35px"
                height="35px"
                transform="scaleY(-1)"
              />
            </TextureContentButton>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

const TextureProperties = (props: {
  texture: string
  textureName: string
  mdp: Wood
  mdf: Wood
}) => (
  <Flex align="center" justify="center" gap="102px" wrap="wrap">
    <Flex direction="column" gap="93px">
      <Flex
        data-testid="download-pattern"
        align="center"
        gap="27px"
        cursor="pointer"
        onClick={() => alert('download')}
      >
        <Image
          src={props.texture}
          w="148px"
          h="148px"
          border="7px solid"
          borderRadius="100%"
          borderColor="grey.150"
        />

        <Flex direction="column">
          <Text
            fontSize="23px"
            fontWeight="medium"
            letterSpacing="-0.45px"
            color="green.200"
          >
            FAÇA O DOWNLOAD
          </Text>
          <Text
            fontSize="34px"
            fontWeight="bold"
            letterSpacing="-0.68px"
            color="grey.300"
          >
            Padrão {props.textureName}
          </Text>
        </Flex>
      </Flex>

      <Flex data-testid="pattern-info" direction="column" gap="30px">
        <PatternInfo
          title="CONFIRA"
          description="Certificado de Qualidade"
          onClick={() => alert('certificado')}
          icon={<CertificationsIcon width="61px" height="86px" />}
          graphism={
            <Image
              src="/img/grafismo_button_left.svg"
              filter={'brightness(0.65)'}
              pos="absolute"
              left={0}
            />
          }
        />

        <PatternInfo
          title="DESCUBRA"
          description="Onde Comprar"
          onClick={() => alert('Local')}
          icon={<EarthIcon />}
          graphism={
            <Image
              src="/img/grafismo_button_right.svg"
              filter={'brightness(0.65)'}
              pos="absolute"
              right={0}
            />
          }
        />
      </Flex>
    </Flex>

    <Flex id="texture-props">
      <Accordion w="845px" defaultIndex={0}>
        <AccordionItem>
          <AccordionButtonBp title="DISPONÍVEL EM" />
          <AccordionPanelBp>
            <Flex direction="column">
              <Box pb="40px">
                <Text
                  fonSize="19px"
                  fontWeight="bold"
                  letterSpacing="-0.37px"
                  color="grey.300"
                >
                  MDP BERNECK®
                </Text>
                <Table variant="simple">
                  <Tbody>
                    <Tr>
                      <TdGreen>Espessuras (mm)</TdGreen>
                      <TdGreen>{props.mdp.thickness}</TdGreen>
                    </Tr>
                    <Tr>
                      <TdGreen>Dimensão (m)</TdGreen>
                      <TdGreen>{props.mdp.size}</TdGreen>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>

              <Box pb="13px">
                <Text
                  fonSize="19px"
                  fontWeight="bold"
                  letterSpacing="-0.37px"
                  color="grey.300"
                >
                  MDF BERNECK®
                </Text>
                <Table variant="simple">
                  <Tbody>
                    <Tr>
                      <TdGreen>Espessuras (mm)</TdGreen>
                      <TdGreen>{props.mdf.thickness}</TdGreen>
                    </Tr>
                    <Tr>
                      <TdGreen>Dimensão (m)</TdGreen>
                      <TdGreen>{props.mdf.size}</TdGreen>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>

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
              fontSize="20px"
              letterSpacing="-0.4px"
              color="grey.300"
              pb="14px"
            >
              Nossos <b>painéis BP BERNECK®</b> são revestidos com laminado
              melamínico decorativo – em uma ou duas faces – com ótimo efeito
              decorativo e excelente resistência superficial, a risco e abrasão.
              As cores e texturas foram desenvolvidas em sintonia com as
              tendências do design mundial, que proporcionam infinitas
              possibilidades de combinação.
            </Text>

            <Text fontSize="20px" letterSpacing="-0.4px" color="grey.300">
              Os painéis possuem superfície fechada reduzindo a proliferação de
              micro organismos, ideal para ambientes que requeiram fácil
              higienização. As dimensões padronizadas, aliadas a praticidade de
              um painel acabado, permitem a simplificação do processo de
              produção de móveis.
            </Text>

            <Flex align="center" padding="20px 0 10px" gap="12px">
              <TapIcon />
              <Text
                fontSize="20px"
                letterSpacing="-0.4px"
                fontWeight="600"
                color="#8a8a8a"
              >
                Fitas de borda
              </Text>
            </Flex>

            <Text fontSize="20px" letterSpacing="-0.4px" color="grey.250">
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
            fontSize="20px"
            letterSpacing="-0.4px"
            color="grey.300"
          >
            Para uso exclusivo interno, proporciona excelente resultado em
            móveis para cozinha, escritório, quarto, banheiro, estar,
            personalização de lojas, painéis para decoração em geral, além de
            divisórias, lambris, forros, gabinetes industriais, entre outros.
            Seu uso pode ser tanto residencial, quanto comercial e não requer
            trabalho adicional de acabamento.
          </AccordionPanelBp>
        </AccordionItem>
      </Accordion>
    </Flex>
  </Flex>
)

const TextureContentButton = (props: {
  title: string
  onClick: () => void
  children: ReactNode
}) => (
  <Flex
    align="center"
    color="green.500"
    fontSize="20px"
    fontWeight="bold"
    letterSpacing="0px"
    gap="14px"
    cursor="pointer"
    onClick={props.onClick}
    transition="all 0.2s ease-in-out"
    _hover={{ filter: 'brightness(0.8)' }}
  >
    {props.title}
    {props.children}
  </Flex>
)

const PatternInfo = (props: {
  title: string
  description: string
  icon: ReactNode
  graphism: ReactNode
  onClick: () => void
}) => (
  <Flex
    data-testid="certificate-box"
    align="center"
    bg="green.900"
    w="798px"
    h="173px"
    pl="84px"
    gap="45px"
    cursor="pointer"
    pos="relative"
    onClick={props.onClick}
    _hover={{
      filter: 'brightness(1.2)'
    }}
  >
    {props.graphism}
    {props.icon}

    <Box zIndex={10}>
      <Text
        fontSize="23px"
        fontWeight="medium"
        letterSpacing="-0.45px"
        color="green.600"
      >
        {props.title}
      </Text>

      <Text
        fontSize="34.2px"
        fontWeight="bold"
        letterSpacing="-0.68px"
        color="white"
      >
        {props.description}
      </Text>
    </Box>
  </Flex>
)

const ArrowButton = (props: {
  onClick: () => void
  direction: 'left' | 'right'
}) => (
  <Flex
    onClick={props.onClick}
    _hover={{
      filter: 'brightness(0.8)'
    }}
    transition="all 0.2s ease-in-out"
    cursor="pointer"
    bg="grey.300"
    boxSize="77px"
    align="center"
    justify="center"
  >
    <Arrow
      direction={props.direction}
      width="21px"
      height="30px"
      color="grey.100"
    />
  </Flex>
)

interface AccordionButtonBpProps extends AccordionButtonProps {
  title: string
}

const AccordionButtonBp = (props: AccordionButtonBpProps) => (
  <h2>
    <AccordionButton {...props} _focus={{ boxShadow: 'none' }}>
      <Box flex="1" textAlign="left" color="grey.300">
        {props.title}
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
)

const AccordionPanelBp = (props: AccordionPanelProps) => (
  <AccordionPanel {...props} padding="35px 65px 35px 46px" bg="green.100">
    {props.children}
  </AccordionPanel>
)

const TdGreen = (props: TableCellProps) => (
  <Td
    bg="#D7EABE"
    fontSize="19px"
    letterSpacing="-0.37px"
    color="grey.300"
    border="2px solid #F5F6F4"
    {...props}
  >
    {props.children}
  </Td>
)
