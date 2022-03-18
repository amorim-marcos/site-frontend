import { useContext } from 'react'

import { Flex, Link, FlexProps, Box, Image, Text } from '@chakra-ui/react'

import Carousel from '@components/Carousel'
import useMobile from 'hooks/useMobile'

import { Section } from './Section'
import { CategoryContext } from '..'

export const Downloads = () => {
  const { currentCategory } = useContext(CategoryContext)
  const { isMobile } = useMobile(1024)

  return (
    <Section
      title="Downloads"
      seeMore={{
        text: 'Veja mais downloads',
        link: '/canal-bnk/downloads'
      }}
      py={{ base: '54px', lg: '100px' }}
      overflow="hidden"
    >
      {!isMobile &&
        (currentCategory === -1 ? (
          <Flex
            display={{ base: 'none', md: 'flex' }}
            data-testid="downloads"
            pt="65px"
            gap="34px"
            direction="column"
          >
            <Flex w="100%" gap="34px" px="88px">
              <DownloadColorPanel
                title="Revista Inspirare BNK"
                colorPanel="brown"
                url="/"
                img="/assets/imgs/canal-bnk/img_revista_inspirare.png"
                graphism="/assets/imgs/canal-bnk/grafismo_revista_inspirare.svg"
              />

              <DownloadColorPanel
                title="Revista Opinus"
                colorPanel="gray"
                url="/"
                img="/assets/imgs/canal-bnk/img_revista_opinus.png"
                graphism="/assets/imgs/canal-bnk/grafismos_opinus.svg"
              />
            </Flex>

            <Flex w="100%" gap="34px" px="88px">
              <DownloadColorPanel
                title="Relatórios"
                colorPanel="gray"
                url="/"
                img="/assets/imgs/canal-bnk/img_relatorios.png"
                graphism="/assets/imgs/canal-bnk/grafismo_relatorios.svg"
              />

              <DownloadColorPanel
                flex={2}
                title="Materiais de Suporte"
                colorPanel="green"
                url="/"
                img="/assets/imgs/canal-bnk/img_materiais_de_suporte.png"
                graphism="/assets/imgs/canal-bnk/grafismo_materiais_de_suporte.svg"
              />

              <DownloadColorPanel
                title="Materiais de Divulgação"
                colorPanel="brown"
                url="/"
                img="/assets/imgs/canal-bnk/materiais_de_divulgacao.png"
                graphism="/assets/imgs/canal-bnk/grafismos_materiais_de_divulgação.svg"
              />
            </Flex>

            <Flex w="100%" gap="34px" px="88px">
              <DownloadColorPanel
                flex={2}
                title="Pack de Padrões BP BERNECK®"
                colorPanel="brown"
                url="/"
                img="/assets/imgs/canal-bnk/img_pack_padroes.png"
                graphism="/assets/imgs/canal-bnk/grafismos_pack_de_padroes.svg"
              />

              <DownloadColorPanel
                title="Certificados Florestais"
                colorPanel="gray"
                url="/"
                img="/assets/imgs/canal-bnk/img_certificados_florestais.png"
                graphism="/assets/imgs/canal-bnk/grafismo_certificados_florestais.svg"
              />

              <DownloadColorPanel
                title="Certificados de Produto"
                colorPanel="green"
                url="/"
                img="/assets/imgs/canal-bnk/img_certificados_de_produto.png"
                graphism="/assets/imgs/canal-bnk/grafismo_certificados_de_produto.svg"
              />
            </Flex>
          </Flex>
        ) : (
          <Flex data-testid="downloads" pt="65px" gap="34px" direction="column">
            <Flex w="100%" gap="34px" px="88px">
              {currentCategory === 0
                ? categoryOne
                : currentCategory === 1
                ? categoryTwo
                : currentCategory === 2
                ? categoryThree
                : null}
            </Flex>
          </Flex>
        ))}

      {currentCategory === -1 ? (
        <Flex
          display={{ base: 'flex', md: 'none' }}
          data-testid="downloads"
          pt="65px"
          gap="34px"
          direction="column"
          align="center"
          justify="center"
          overflow="hidden"
        >
          <Carousel>{categoryOne}</Carousel>

          <Carousel>{categoryTwo}</Carousel>

          <Carousel>{categoryThree}</Carousel>
        </Flex>
      ) : (
        <Flex
          display={{ base: 'flex', md: 'none' }}
          data-testid="downloads"
          pt="65px"
          gap="34px"
          direction="column"
        >
          <Flex gap="34px">
            <Carousel>
              {currentCategory === 0
                ? categoryOne
                : currentCategory === 1
                ? categoryTwo
                : categoryThree}
            </Carousel>
          </Flex>
        </Flex>
      )}
    </Section>
  )
}

interface DownloadColorPanelProps extends FlexProps {
  flex?: FlexProps['flex']
  title: string
  url: string
  img: string
  graphism: string
  colorPanel: 'gray' | 'green' | 'brown'
}

const DownloadColorPanel = (props: DownloadColorPanelProps) => {
  const { title, url, img, graphism, colorPanel, ...rest } = props
  const gradientColor = props.colorPanel === 'brown' ? '#987765' : '#C8C9C1'

  const hexColorToRgb = (hex: string) => {
    const red = parseInt(hex.slice(1, 3), 16)
    const green = parseInt(hex.slice(3, 5), 16)
    const blue = parseInt(hex.slice(5, 7), 16)

    return `${red}, ${green}, ${blue}`
  }

  return (
    <Flex
      h="220px"
      w={{ base: '100vw', lg: '100%' }}
      pos="relative"
      flex={props.flex ?? 1}
      bg={`url(/assets/imgs/canal-bnk/bg_${props.colorPanel}.png)`}
      {...rest}
    >
      <Link h="100%" w="100%" pos="relative" href={url} _hover={{}} download>
        <Image src={graphism} h="100%" pos="absolute" objectFit="cover" />
        <Image src={img} right={0} h="100%" pos="absolute" objectFit="cover" />

        <Box
          bg={`linear-gradient(0deg,
            rgba(${hexColorToRgb(gradientColor)}, 0.9) 0%,
            rgba(${hexColorToRgb(gradientColor)}, 0.18) 28%)`}
          h="100%"
          w="100%"
          position="absolute"
          _hover={{
            bg: `linear-gradient(0deg,
              rgba(172,204,159,0.9) 0%,
              rgba(172,204,159,0.18) 28%,
              transparent 100%)`
          }}
        />

        <Text
          fontWeight="bold"
          fontSize={{ base: '33px', lg: '28px', '2xl': '36px' }}
          letterSpacing="-0.68px"
          color={colorPanel === 'brown' ? 'white' : 'green.800'}
          zIndex={10}
          pos="absolute"
          bottom="29px"
          left="37px"
        >
          {title}
        </Text>
      </Link>
    </Flex>
  )
}

const categoryOne = [
  <DownloadColorPanel
    key="Revista Inspirare BNK"
    title="Revista Inspirare BNK"
    colorPanel="brown"
    url="/"
    img="/assets/imgs/canal-bnk/img_revista_inspirare.png"
    graphism="/assets/imgs/canal-bnk/grafismo_revista_inspirare.svg"
  />,

  <DownloadColorPanel
    key="Pack de Padrões BP BERNECK®"
    title="Pack de Padrões BP BERNECK®"
    colorPanel="brown"
    url="/"
    img="/assets/imgs/canal-bnk/img_pack_padroes.png"
    graphism="/assets/imgs/canal-bnk/grafismos_pack_de_padroes.svg"
  />,

  <DownloadColorPanel
    key="Materiais de Divulgação"
    title="Materiais de Divulgação"
    colorPanel="brown"
    url="/"
    img="/assets/imgs/canal-bnk/materiais_de_divulgacao.png"
    graphism="/assets/imgs/canal-bnk/grafismos_materiais_de_divulgação.svg"
  />
]

const categoryTwo = [
  <DownloadColorPanel
    key="Materiais de Suporte"
    title="Materiais de Suporte"
    colorPanel="green"
    url="/"
    img="/assets/imgs/canal-bnk/img_materiais_de_suporte.png"
    graphism="/assets/imgs/canal-bnk/grafismo_materiais_de_suporte.svg"
  />,

  <DownloadColorPanel
    key="Certificados de Produto"
    title="Certificados de Produto"
    colorPanel="green"
    url="/"
    img="/assets/imgs/canal-bnk/img_certificados_de_produto.png"
    graphism="/assets/imgs/canal-bnk/grafismo_certificados_de_produto.svg"
  />
]

const categoryThree = [
  <DownloadColorPanel
    key="Revista Opinus"
    title="Revista Opinus"
    colorPanel="gray"
    url="/"
    img="/assets/imgs/canal-bnk/img_revista_opinus.png"
    graphism="/assets/imgs/canal-bnk/grafismos_opinus.svg"
  />,

  <DownloadColorPanel
    key="Relatórios"
    title="Relatórios"
    colorPanel="gray"
    url="/"
    img="/assets/imgs/canal-bnk/img_relatorios.png"
    graphism="/assets/imgs/canal-bnk/grafismo_relatorios.svg"
  />,

  <DownloadColorPanel
    key="Certificados Florestais"
    title="Certificados Florestais"
    colorPanel="gray"
    url="/"
    img="/assets/imgs/canal-bnk/img_certificados_florestais.png"
    graphism="/assets/imgs/canal-bnk/grafismo_certificados_florestais.svg"
  />
]
