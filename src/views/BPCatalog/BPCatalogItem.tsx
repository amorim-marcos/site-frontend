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
      <Inspire />
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
          <SearchIcon stroke="green.500" />
        </Link>
      </Box>
    </Flex>
  </Flex>
)

const Inspire = (props: any) => {
  const [curr, setCurr] = useState(0)

  const switchTo = (act: 'next' | 'prev') => {
    if (!props.children) return
    const childrenCount = props.children.length

    act === 'next'
      ? setCurr(curr < childrenCount - 1 ? curr + 1 : curr)
      : setCurr(curr > 0 ? curr - 1 : curr)
  }

  return (
    <Box>
      <Box data-testid="micro-texture">
        <Image src={''} />
        <Text>MICRO</Text>
        <Text>{props.description}</Text>
      </Box>

      <Box data-testid="combine-texture">
        <Text>COMBINE COM:</Text>
        <Box>
          {props.anotherTextures?.map((texture) => (
            <Flex key={texture.id}>
              <Image bg={texture.img} />
              <Text>{texture.name}</Text>
            </Flex>
          ))}
        </Box>
      </Box>

      <Box data-testid="texture-examples">
        <Text>Insipire-se</Text>
        <Image src="" />

        <Box data-testid="examples-control">
          <Box onClick={() => switchTo('prev')}>
            <Arrow width="20px" height="20px" direction="left" />
          </Box>

          <Box onClick={() => switchTo('next')}>
            <Arrow width="20px" height="20px" direction="right" />
          </Box>
        </Box>
      </Box>

      <Flex data-testid="texture-description">
        <Text>{props.patternDescription}</Text>

        <Flex>
          <Image src="" />
          Assista ao vídeo
        </Flex>

        <Flex>
          <Image src="" />
          Confira o ebook
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
