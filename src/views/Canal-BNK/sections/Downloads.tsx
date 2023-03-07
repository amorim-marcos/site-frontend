import { useContext } from 'react'

import { Flex, Link, FlexProps, Box, Image, Text } from '@chakra-ui/react'

import Carousel from '@components/Carousel'
import useMobile from 'hooks/useMobile'

import { Section } from './Section'
import { CategoryContext } from '..'
import { useTranslation } from 'react-i18next'

type DownloadsProps = {
  patterns_pack_url?: string | null
}

export const Downloads = ({ patterns_pack_url }: DownloadsProps) => {
  const { currentCategory } = useContext(CategoryContext)
  const { isMobile } = useMobile(1024)
  const channelBnkLabels = useTranslation('channelBnkView')

  const categoryOne = [
    <DownloadColorPanel
      key="Revista Inspirare BNK"
      title="Revista Inspirare BNK"
      colorPanel="brown"
      url="/channel-bnk/downloads#magazine-inspirare-bnk"
      img="/assets/imgs/canal-bnk/img_revista_inspirare.png"
      graphism="/assets/imgs/canal-bnk/grafismo_revista_inspirare.svg"
    />,

    <DownloadColorPanel
      key="Pack de Padrões BP BERNECK®"
      title="Pack de Padrões BP BERNECK®"
      colorPanel="brown"
      url={patterns_pack_url ? patterns_pack_url : '#'}
      img="/assets/imgs/canal-bnk/img_pack_padroes.png"
      graphism="/assets/imgs/canal-bnk/grafismos_pack_de_padroes.svg"
      download={true}
    />,

    <DownloadColorPanel
      key="Materiais de Divulgação"
      title="Materiais de Divulgação"
      colorPanel="brown"
      url="/channel-bnk/downloads#promotional-materials"
      img="/assets/imgs/canal-bnk/materiais_de_divulgacao.png"
      graphism="/assets/imgs/canal-bnk/grafismos_materiais_de_divulgação.svg"
    />
  ]

  const categoryTwo = [
    <DownloadColorPanel
      key="Materiais de Suporte"
      title="Materiais de Suporte"
      colorPanel="green"
      url="/channel-bnk/downloads#support-materials"
      img="/assets/imgs/canal-bnk/img_materiais_de_suporte.png"
      graphism="/assets/imgs/canal-bnk/grafismo_materiais_de_suporte.svg"
    />,

    <DownloadColorPanel
      key="Certificados de Produto"
      title="Certificados de Produto"
      colorPanel="green"
      url="/certifications#products-certificate"
      img="/assets/imgs/canal-bnk/img_certificados_de_produto.png"
      graphism="/assets/imgs/canal-bnk/grafismo_certificados_de_produto.svg"
    />
  ]

  const categoryThree = [
    <DownloadColorPanel
      key="Revista Opinus"
      title="Revista Opinus"
      colorPanel="gray"
      url="/channel-bnk/downloads#magazine-opinus"
      img="/assets/imgs/canal-bnk/img_revista_opinus.png"
      graphism="/assets/imgs/canal-bnk/grafismos_opinus.svg"
    />,

    <DownloadColorPanel
      key="Relatórios"
      title="Relatórios"
      colorPanel="gray"
      url="/channel-bnk/downloads#reports-and-docs"
      img="/assets/imgs/canal-bnk/img_relatorios.png"
      graphism="/assets/imgs/canal-bnk/grafismo_relatorios.svg"
    />,

    <DownloadColorPanel
      key="Certificados Florestais"
      title="Certificados Florestais"
      colorPanel="gray"
      url="/certifications#forest-certificates"
      img="/assets/imgs/canal-bnk/img_certificados_florestais.png"
      graphism="/assets/imgs/canal-bnk/grafismo_certificados_florestais.svg"
    />
  ]

  return (
    <Section
      title={channelBnkLabels.t('downloadsSection.title')}
      seeMore={{
        text: channelBnkLabels.t('downloadsSection.seeMore'),
        link: '/channel-bnk/downloads'
      }}
      py={{ base: '54px', lg: '100px' }}
      px={{ base: '20px', lg: '5%', '2xl': '1%' }}
      overflow="hidden"
      maxWidth={'1536px'}
    >
      {!isMobile &&
        (currentCategory === -1 ? (
          <Flex
            display={{ base: 'none', md: 'flex' }}
            data-testid="downloads"
            pt={{ base: '0', lg: '3%' }}
            gap="34px"
            direction="column"
          >
            <Flex w="100%" gap="34px" px={{ base: '0', lg: '3%', '2xl': '0' }}>
              <DownloadColorPanel
                title={channelBnkLabels.t(
                  'downloadsSection.inspirareBnkMagazine'
                )}
                colorPanel="brown"
                url="/channel-bnk/downloads#magazine-inspirare-bnk"
                img="/assets/imgs/canal-bnk/img_revista_inspirare.png"
                graphism="/assets/imgs/canal-bnk/grafismo_revista_inspirare.svg"
              />

              <DownloadColorPanel
                title={channelBnkLabels.t('downloadsSection.opinusMagazine')}
                colorPanel="gray"
                url="/channel-bnk/downloads#magazine-opinus"
                img="/assets/imgs/canal-bnk/img_revista_opinus.png"
                graphism="/assets/imgs/canal-bnk/grafismos_opinus.svg"
              />
            </Flex>

            <Flex w="100%" gap="34px" px={{ base: '0', lg: '3%', '2xl': '0' }}>
              <DownloadColorPanel
                title={channelBnkLabels.t('downloadsSection.reports')}
                colorPanel="gray"
                url="/channel-bnk/downloads#reports-and-docs"
                img="/assets/imgs/canal-bnk/img_relatorios.png"
                graphism="/assets/imgs/canal-bnk/grafismo_relatorios.svg"
              />

              <DownloadColorPanel
                flex={2}
                title={channelBnkLabels.t('downloadsSection.supportMaterials')}
                colorPanel="green"
                url="/channel-bnk/downloads#support-materials"
                img="/assets/imgs/canal-bnk/img_materiais_de_suporte.png"
                graphism="/assets/imgs/canal-bnk/grafismo_materiais_de_suporte.svg"
              />

              <DownloadColorPanel
                title={channelBnkLabels.t(
                  'downloadsSection.promotionalMaterials'
                )}
                colorPanel="brown"
                url="/channel-bnk/downloads#promotional-materials"
                img="/assets/imgs/canal-bnk/materiais_de_divulgacao.png"
                graphism="/assets/imgs/canal-bnk/grafismos_materiais_de_divulgação.svg"
              />
            </Flex>

            <Flex w="100%" gap="34px" px={{ base: '0', lg: '3%', '2xl': '0' }}>
              <DownloadColorPanel
                flex={2}
                title={channelBnkLabels.t('downloadsSection.patternPack')}
                colorPanel="brown"
                url={patterns_pack_url ? patterns_pack_url : '#'}
                img="/assets/imgs/canal-bnk/img_pack_padroes.png"
                graphism="/assets/imgs/canal-bnk/grafismos_pack_de_padroes.svg"
                download={true}
              />

              <DownloadColorPanel
                title={channelBnkLabels.t(
                  'downloadsSection.forestCertificates'
                )}
                colorPanel="gray"
                url="/certifications#forest-certificates"
                img="/assets/imgs/canal-bnk/img_certificados_florestais.png"
                graphism="/assets/imgs/canal-bnk/grafismo_certificados_florestais.svg"
              />

              <DownloadColorPanel
                title={channelBnkLabels.t(
                  'downloadsSection.productCertificates'
                )}
                colorPanel="green"
                url="/certifications#products-certificate"
                img="/assets/imgs/canal-bnk/img_certificados_de_produto.png"
                graphism="/assets/imgs/canal-bnk/grafismo_certificados_de_produto.svg"
              />
            </Flex>
          </Flex>
        ) : (
          <Flex data-testid="downloads" pt="65px" gap="34px" direction="column">
            <Flex
              w="100%"
              gap="34px"
              // px="88px"
              // bg="black"
            >
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
          display={{ base: 'flex', lg: 'none' }}
          data-testid="downloads"
          pt="65px"
          gap="34px"
          direction="column"
          align="center"
          justify="center"
          overflow="hidden"
          // bg="yellow"
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
          gap="30px"
          direction="column"
          // bg="violet"
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
  download?: boolean
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
      h={{ base: '200px', lg: '180px' }}
      w={{ base: '100vw', lg: '100%' }}
      pos="relative"
      flex={props.flex ?? 1}
      bg={`url(/assets/imgs/canal-bnk/bg_${props.colorPanel}.png)`}
      {...rest}
      // bg="red.100"
    >
      <Link
        h="100%"
        w="100%"
        pos="relative"
        href={url}
        _hover={{}}
        {...(props.download ?? 'download')}
      >
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
          as="h3"
          variant="h3"
          fontWeight="extrabold"
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
