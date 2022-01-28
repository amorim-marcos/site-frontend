import { Flex, Link, FlexProps, Box, Image, Text } from '@chakra-ui/react'
import { Section } from './Section'

export const Downloads = () => {
  return (
    <Section
      title="Downloads"
      seeMore={{
        text: 'Veja mais downloads',
        link: '/canal-bnk/downloads'
      }}
      py="100px"
    >
      <Flex data-testid="downloads" pt="65px" gap="34px" direction="column">
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
            colorPanel="grey"
            url="/"
            img="/assets/imgs/canal-bnk/img_revista_opinus.png"
            graphism="/assets/imgs/canal-bnk/grafismos_opinus.svg"
          />
        </Flex>

        <Flex w="100%" gap="34px" px="88px">
          <DownloadColorPanel
            title="Relatórios"
            colorPanel="grey"
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
            colorPanel="grey"
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
    </Section>
  )
}

interface DownloadColorPanelProps {
  flex?: number
  title: string
  url: string
  img: string
  graphism: string
  colorPanel: 'grey' | 'green' | 'brown'
}

const DownloadColorPanel = (props: DownloadColorPanelProps) => (
  <DownloadButton
    flex={props.flex ?? 1}
    bg={`url(/assets/imgs/canal-bnk/bg_${props.colorPanel}.png)`}
    titlePanel={{
      text: props.title,
      color: props.colorPanel === 'brown' ? 'white' : 'green.800'
    }}
    url={props.url}
    img={props.img}
    graphism={props.graphism}
    gradientColor={props.colorPanel === 'brown' ? '#987765' : '#C8C9C1'}
  />
)

interface DownloadButtonProps extends FlexProps {
  titlePanel: {
    text: string
    color: string
  }
  url: string
  img: string
  graphism: string
  gradientColor: string
}

const DownloadButton = (props: DownloadButtonProps) => {
  const { titlePanel, url, img, graphism, gradientColor, ...rest } = props
  return (
    <Flex h="220px" pos="relative" {...rest}>
      <Link h="100%" w="100%" pos="relative" href={url} _hover={{}} download>
        <Image src={graphism} h="100%" pos="absolute" />
        <Image src={img} right={0} h="100%" pos="absolute" />

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
          fontSize="34px"
          letterSpacing="-0.68px"
          color={titlePanel.color}
          zIndex={10}
          pos="absolute"
          bottom="29px"
          left="37px"
        >
          {titlePanel.text}
        </Text>
      </Link>
    </Flex>
  )
}

const hexColorToRgb = (hex: string) => {
  const red = parseInt(hex.slice(1, 3), 16)
  const green = parseInt(hex.slice(3, 5), 16)
  const blue = parseInt(hex.slice(5, 7), 16)

  return `${red}, ${green}, ${blue}`
}
