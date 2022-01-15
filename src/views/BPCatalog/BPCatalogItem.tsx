import { useState } from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Image,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'
import { Link } from 'react-scroll'

import Arrow from '@components/Arrow'
import SearchIcon from '@components/SearchIcon'

export const BPCatalogItem = () => {
  return (
    <Box>
      <Intro
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
      <TextureProperties />
    </Box>
  )
}

const Intro = (props: { textureName: string; textureDescription: string }) => (
  <Flex
    h="797px"
    bgImg="/bps/patterns/cacau.jpg"
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
        <Link to="texture-props" smooth>
          <SearchIcon stroke="green.600" />
        </Link>
      </Box>
    </Flex>
  </Flex>
)

const Inspire = (props: {
  microDescription: string
  anotherTextures: {
    name: string
    img: string
  }[]
  patternDescription: string
}) => {
  const [curr, setCurr] = useState(0)

  const switchTo = (act: 'next' | 'prev') => {
    if (!props.children) return
    const childrenCount = props.children.length

    act === 'next'
      ? setCurr(curr < childrenCount - 1 ? curr + 1 : curr)
      : setCurr(curr > 0 ? curr - 1 : curr)
  }

  return (
    <Box pos="relative">
      <Flex data-testid="micro-texture" pos="absolute" left="140px" top="-65px">
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
        pos="absolute"
        right="86px"
        top="-175px"
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

      <Flex pl="88px" pos="relative" h="1080px">
        <Flex
          data-testid="texture-examples"
          pt="208px"
          zIndex={100}
          pos="absolute"
          direction="column"
        >
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

        <Flex
          data-testid="texture-description"
          bg="#D6DCD5"
          mt="165px"
          w="1440px"
          h="633px"
          padding="223px 183px 203px 596px"
          direction="column"
          pos="absolute"
          right="0"
        >
          <Text w="660px" fontSize="20px" letterSpacing="0px" color="green.900">
            {props.patternDescription}
          </Text>

          <Flex pt="52px" gap="116px">
            <Flex
              color="green.500"
              fontSize="20px"
              fontWeight="bold"
              letterSpacing="0px"
            >
              <Image src="" />
              Assista ao vídeo
            </Flex>

            <Flex
              color="green.500"
              fontSize="20px"
              fontWeight="bold"
              letterSpacing="0px"
            >
              <Image src="" />
              Confira o ebook
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

const TextureProperties = (props: any) => (
  <Flex>
    <Flex>
      <Flex data-testid="download-pattern">
        <Image src="" />
        <Flex>
          <Text>FAÇA O DOWNLOAD</Text>
          <Text>Padrão {props.textureName}</Text>
        </Flex>
      </Flex>

      <Flex>
        <Box data-testid="certificate-box">
          <Image src="" /> {/* Graphism */}
          <Image src="" /> {/* Certificate */}
          <Flex>
            <Text>check out</Text>
            <Text>Certificado de Qualidade</Text>
          </Flex>
        </Box>

        <Box data-testid="where-box">
          <Image src="" /> {/* Graphism */}
          <Image src="" /> {/* Where */}
          <Flex>
            <Text>DESCUBRA</Text>
            <Text>Onde Comprar</Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>

    <Flex id="texture-props">
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                DISPONÍVEL EM
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Table variant="simple">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
              </Tbody>
            </Table>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                SOBRE O BP BERNECK®
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                USOS E APLICAÇÕES
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
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
