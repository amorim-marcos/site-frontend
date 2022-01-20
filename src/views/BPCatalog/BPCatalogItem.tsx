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
        texture="/bps/patterns/cacau.jpg"
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
        patternName="MICRO"
        patternDescription="O padrão Solanum traz personalidade e um apelo estético único aos projetos de móveis e interiores. O novo padrão é inspirado no Cumaru, madeira proveniente da Amazônia, e valoriza a cultura brasileira. Lançamento da Coleção Nômade, ele chama a atenção pela tonalidade castanho-mel e pela facilidade de combinar com tudo, trazendo calor e beleza aos móveis e interiores."
      />
      <TextureProperties
        texture="/bps/patterns/cacau.jpg"
        textureName="Cacau"
        mdp={{ thickness: '12 / 15 / 18 / 25', size: '2,75 x 1,85' }}
        mdf={{ thickness: '6 / 9 / 15 / 18 / 25', size: '2,75 x 1,85' }}
      />

      <Flex
        w="100%"
        pt={{ base: '100px', '2xl': '254px' }}
        justify="space-between"
      >
        <Flex
          w={{ base: 'fit-content', sm: '296px' }}
          h={{ base: '90px', sm: '113px' }}
          padding={{ base: '15px', sm: '0px' }}
          gap="23px"
          align="center"
          justify="center"
          boxShadow="0px 0px 30px #00000029"
          borderTopRightRadius={{ base: '0', sm: '26px' }}
          cursor="pointer"
          onClick={() => alert(prevBp)}
          transition="all 0.2s ease-in-out"
          _hover={{ filter: 'brightness(0.8)' }}
        >
          <Arrow
            direction="left"
            width={{ base: '20px', sm: '30px' }}
            height={{ base: '30px', sm: '40px' }}
            color="green.200"
          />
          <Box>
            <Text
              fontSize={{ base: '20px', sm: '23px' }}
              fontWeight="bold"
              letterSpacing="-0.46px"
              color="grey.300"
            >
              Anterior
            </Text>

            <Text
              fontSize={{ base: '16px', sm: '18px' }}
              fontWeight="medium"
              letterSpacing="-0.36px"
              color="grey.300"
            >
              {prevBp}
            </Text>
          </Box>
        </Flex>

        <Flex
          w={{ base: 'fit-content', sm: '296px' }}
          h={{ base: '90px', sm: '113px' }}
          padding={{ base: '15px', sm: '0px' }}
          gap="23px"
          align="center"
          justify="center"
          boxShadow="0px 0px 30px #00000029"
          borderTopLeftRadius={{ base: '0', sm: '26px' }}
          cursor="pointer"
          onClick={() => alert(nextBp)}
          transition="all 0.2s ease-in-out"
          _hover={{ filter: 'brightness(0.8)' }}
        >
          <Flex direction="column" align="flex-end">
            <Text
              fontSize={{ base: '20px', sm: '23px' }}
              fontWeight="bold"
              letterSpacing="-0.46px"
              color="grey.300"
            >
              Próximo
            </Text>

            <Text
              fontSize={{ base: '16px', sm: '18px' }}
              fontWeight="medium"
              letterSpacing="-0.36px"
              color="grey.300"
            >
              {nextBp}
            </Text>
          </Flex>

          <Arrow
            direction="right"
            width={{ base: '20px', sm: '30px' }}
            height={{ base: '30px', sm: '40px' }}
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
    w="100%"
    h="797px"
    bgImg={props.texture}
    bgRepeat="repeat"
    pl={{ '2xl': '205px' }}
    align="center"
    justify={{ base: 'center', '2xl': 'inherit' }}
    pos="relative"
  >
    <Image
      src="/img/grafismo_com_imagem.png"
      pos="absolute"
      boxSize={['642px', '538px']}
      top="0"
      right="0"
    />

    <Flex
      data-testid="texture-attr"
      h={{ base: 'fit-content', '2xl': '476px' }}
      w={{ base: '100%', sm: '476px' }}
      direction="column"
      padding={{ base: '50px', sm: '78px 71px 60px 75px' }}
      bg="green.100"
      pos="relative"
    >
      <Text
        fontSize={{ base: '50px', '2xl': '53px' }}
        fontWeight={800}
        letterSpacing="-1.06px"
        color="green.900"
        pb="24px"
      >
        {props.textureName}
      </Text>

      <Text
        fontSize={{ base: '20px', '2xl': '23px' }}
        letterSpacing="-0.23px"
        color="grey.300"
        pb="22px"
      >
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
  patternName: string
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
        left={{ base: '15%', '2xl': '140px' }}
        top="-65px"
        w="fit-content"
      >
        <Image
          src="/bps/patterns/azul_vel.jpg"
          borderRadius="100%"
          boxSize={{ base: '100px', '2xl': '130px' }}
          zIndex={10}
        />

        <Flex>
          <Text
            bg="green.600"
            w={{ base: 'fit-content', sm: '185px' }}
            padding={{ base: '10px 20px', sm: 0 }}
            h="40px"
            pt={{ base: '3px' }}
            borderTopRightRadius="22px"
            color="white"
            fontSize={{ base: '23px', '2xl': '26px' }}
            fontWeight="bold"
            letterSpacing="-0.26px"
            textAlign="center"
            pos="absolute"
            top="25px"
            left={{ base: '90px', '2xl': '110px' }}
          >
            {props.patternName}
          </Text>

          <Text
            w={{ base: '80vw', lg: '532px', '2xl': '532px' }}
            pos="absolute"
            fontSize="18px"
            letterSpacing="0px"
            color="grey.300"
            top={{ base: '130px', lg: '75px' }}
            left={{ base: '-18%', lg: '110px', '2xl': '145px' }}
            textAlign={{ base: 'center', '2xl': 'left' }}
            whiteSpace={{ base: 'normal', '2xl': 'pre-wrap' }}
          >
            {props.microDescription}
          </Text>
        </Flex>
      </Flex>

      <Flex
        data-testid="combine-texture"
        direction="column"
        align={{ base: 'center', '2xl': 'inherit' }}
        pos="relative"
        left={{ '2xl': '52%' }}
        w={{ base: '100%', '2xl': 'fit-content' }}
        top={{ base: '80px', sm: '25px', '2xl': '-330px' }}
        zIndex={100}
      >
        <Box>
          <Flex
            bg="green.900"
            w={{ base: '100%', sm: '214px' }}
            h="44px"
            padding="10px 27px"
            borderTopRightRadius={{ base: 'none', sm: '26px' }}
            align="center"
            alignSelf="flex-start"
            justify="center"
          >
            <Text
              fontSize="20px"
              fontWeight="medium"
              color="white"
              letterSpacing="-0.2px"
              _after={{ sm: ':>>>>>' }}
            >
              COMBINE COM:
            </Text>
          </Flex>
          <Flex direction={{ base: 'column', sm: 'row' }}>
            {props.anotherTextures?.map((texture) => (
              <Flex
                key={texture.name}
                direction="column"
                pos="relative"
                gap={{ sm: '9px' }}
              >
                <Image
                  src={texture.img}
                  w={{ base: '100vw', sm: '211px' }}
                  h={{ base: '120px', sm: '350px' }}
                />
                <Text
                  fontSize="20px"
                  letterSpacing="0px"
                  color={{ base: 'grey.400', sm: 'grey.300' }}
                  textAlign={{ base: 'center', '2xl': 'left' }}
                  pos={{ base: 'absolute', sm: 'relative' }}
                  bg={{ base: 'rgba( 226, 226, 226, 0.55 )', sm: 'none' }}
                  backdropFilter={{ base: 'blur( 4px )', sm: 'none' }}
                  borderBottomRightRadius={{ base: '10px', sm: 'none' }}
                  border={{
                    base: '1px solid rgba( 255, 255, 255, 0.18 )',
                    sm: 'none'
                  }}
                  pr={{ base: '10px', sm: '0' }}
                >
                  {texture.name}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Box>
      </Flex>

      <Flex
        pl={{ '2xl': '88px' }}
        pos="relative"
        mt={{ '2xl': '-580px' }}
        wrap="wrap"
        w={{
          base: '100%',
          '2xl': 'inherit'
        }}
      >
        <Flex
          data-testid="texture-examples"
          pt={{ base: '110px', '2xl': '208px' }}
          direction="column"
          align={{ base: 'center', '2xl': 'inherit' }}
          w={{
            base: '100vw',
            '2xl': 'inherit'
          }}
        >
          <Text
            fontSize="37px"
            fontWeight={800}
            letterSpacing="-0.74px"
            color="green.700"
            pb="21px"
            alignSelf={{ base: 'center', '2xl': 'flex-start' }}
          >
            Inspire-se
          </Text>

          <Image
            src="/assets/imgs/foto_fabrica.png"
            w={{ base: '320px', xs: '100%', sm: '846px' }}
            h={{ base: '321px', sm: '562px' }}
            objectFit={{ base: 'scale-down', xs: 'cover' }}
          />

          <Flex
            data-testid="examples-control"
            alignSelf={{ base: 'flex-start', sm: 'center', lg: 'flex-end' }}
            mr={{ lg: '160px', xl: '270px', '2xl': '50px' }}
            mt={{ base: '-5px', sm: '-38px' }}
            w={{ base: '100%', lg: '154px' }}
          >
            <ArrowButton onClick={() => switchTo('prev')} direction="left" />
            <ArrowButton onClick={() => switchTo('next')} direction="right" />
          </Flex>
        </Flex>

        <Box
          bg="#D6DCD5"
          mt={{ base: '80px', '2xl': '165px' }}
          w={{ base: '1440px', xl: '100%', '2xl': '1440px' }}
          h={{ base: '490px', sm: '633px' }}
          pos="absolute"
          right="0"
          zIndex={-1}
        />

        <Flex
          data-testid="texture-description"
          mt={{ base: '50px', '2xl': '165px' }}
          w={{ base: '840px', xl: '100%', '2xl': '840px' }}
          h={{ '2xl': '633px' }}
          padding={{
            base: '40px 20px',
            xl: '40px 120px',
            '2xl': '223px 100px 203px 120px'
          }}
          direction="column"
          right="0"
        >
          <Text
            textAlign={{ base: 'center', '2xl': 'left' }}
            w={{ '2xl': '660px' }}
            fontSize="20px"
            letterSpacing="0px"
            color="green.900"
          >
            {props.patternDescription}
          </Text>

          <Flex
            pt="52px"
            gap="116px"
            zIndex={1000}
            justify={{ base: 'center', '2xl': 'flex-start' }}
          >
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
        onClick={() => alert('download')}
      >
        <Image
          src={props.texture}
          w={{ base: '128px', '2xl': '148px' }}
          h={{ base: '128px', '2xl': '148px' }}
          border="7px solid"
          borderRadius="100%"
          borderColor="grey.150"
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
            color="grey.300"
          >
            Padrão {props.textureName}
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
          onClick={() => alert('certificado')}
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
          onClick={() => alert('Local')}
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
            <Box pb="40px">
              <Text
                fonSize={{ base: '16px', '2xl': '19px' }}
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
                fonSize={{ base: '16px', '2xl': '19px' }}
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
            fontSize={{ base: '17px', '2xl': '20px' }}
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

          <Text
            fontSize={{ base: '17px', '2xl': '20px' }}
            letterSpacing="-0.4px"
            color="grey.300"
          >
            Os painéis possuem superfície fechada reduzindo a proliferação de
            micro organismos, ideal para ambientes que requeiram fácil
            higienização. As dimensões padronizadas, aliadas a praticidade de um
            painel acabado, permitem a simplificação do processo de produção de
            móveis.
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
            color="grey.250"
          >
            Todos os padrões possuem fitas de borda desenvolvidas em parceria
            com os melhores fornecedores do mercado. É importante que todas as
            bordas do painel estejam seladas, para garantir qualidade superior e
            durabilidade.
          </Text>
        </AccordionPanelBp>
      </AccordionItem>

      <AccordionItem>
        <AccordionButtonBp title="USOS E APLICAÇÕES" />
        <AccordionPanelBp
          fontSize={{ base: '17px', '2xl': '20px' }}
          letterSpacing="-0.4px"
          color="grey.300"
        >
          Para uso exclusivo interno, proporciona excelente resultado em móveis
          para cozinha, escritório, quarto, banheiro, estar, personalização de
          lojas, painéis para decoração em geral, além de divisórias, lambris,
          forros, gabinetes industriais, entre outros. Seu uso pode ser tanto
          residencial, quanto comercial e não requer trabalho adicional de
          acabamento.
        </AccordionPanelBp>
      </AccordionItem>
    </Accordion>
  </Flex>
)

const TextureContentButton = (props: {
  title: string
  onClick: () => void
  children: ReactNode
}) => (
  <Flex
    direction={{ base: 'column-reverse', md: 'row' }}
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
    textAlign="center"
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
    w="100%"
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
    color="grey.300"
    border="2px solid #F5F6F4"
    {...props}
  >
    {props.children}
  </Td>
)
