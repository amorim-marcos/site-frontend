import { useRouter } from 'next/router'

import { Box, Flex, Text, useDisclosure } from '@chakra-ui/react'

import { Arrow } from '@components/Icons'
import Pagebar from '@components/Pagebar'

import { Intro, Inspire, Properties } from './sections'
import { DownloadModal } from './DownloadModal'
import { useEffect, useState } from 'react'

export interface BPCatalogItemProps {
  complete_name: string
  url_code: string
  name: string
  description: string
  bg_img: string
  pattern_image: string
  img: string
  assets: string
  presentation: string
  uses_and_applications: string
  video_url: string
  ebook_url: string
  texture: {
    name: string
    icon: string
    description: string
    top_menu_image: string
  }
  combine_with: {
    name: string
    href: string
    img: string
  }[]
  in_ambients: {
    id: number
    image_url: string
    ambient_href: string
  }[]
  available_at: {
    id: number
    panel_type: string
    thickness: string
    dimensions: string
  }[]
  next: {
    name: string
    url_code: string
  }
  prev: {
    name: string
    url_code: string
  }
}

export const BPCatalogItem = (props: BPCatalogItemProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box pos="relative" overflow={'hidden'}>
      <Pagebar
        paths={[
          {
            title: 'Produtos',
            url: '/products'
          },
          {
            title: 'BP BERNECK®',
            url: '/products/bp-berneck'
          },
          {
            title: 'Catálogo BP',
            url: '/products/bp-berneck/catalog'
          },
          {
            title: props.complete_name,
            url: `'/products/bp-berneck/catalog$${props.url_code}'`
          }
        ]}
      />
      <DownloadModal
        productName={props.complete_name}
        productImg={props.img}
        isOpen={isOpen}
        assetsUrl={props.assets}
        onClose={onClose}
      />
      <Intro
        productName={props.name}
        productImgBg={props.bg_img}
        productDescription={props.presentation}
        textureTopMenuImg={props.texture.top_menu_image}
        handleDownload={onOpen}
      />
      <Inspire
        textureName={props.texture.name.toUpperCase()}
        textureIcon={props.texture.icon}
        textureDescription={props.texture.description}
        productPresentation={props.description}
        urlVideo={props.video_url}
        urlEbook={props.ebook_url}
        combine_with={props.combine_with}
        in_ambients={props.in_ambients}
      />
      <Properties
        productName={props.complete_name}
        textureImg={props.img}
        uses_and_applications={props.uses_and_applications}
        available_at={props.available_at}
        handleDownload={onOpen}
      />

      <PageNavegation next={props.next} prev={props.prev} />
    </Box>
  )
}

const PageNavegation = (props: {
  next: {
    name: string
    url_code: string
  }
  prev: {
    name: string
    url_code: string
  }
}) => {
  const router = useRouter()

  const [fixed, setFixed] = useState(true)
  function handleScroll(value: any) {
    if (window) {
      let footerSize = 732

      if (window.innerWidth < 1536) {
        footerSize = 670
      }
      if (window.innerWidth < 1280) {
        footerSize = 600
      }
      if (window.innerWidth < 1024) {
        footerSize = 460
      }
      if (window.innerWidth < 768) {
        footerSize = 260
      }

      const scrollLimit =
        document.body.scrollHeight - window.innerHeight - footerSize
      if (window.pageYOffset >= scrollLimit) {
        setFixed(false)
      } else {
        setFixed(true)
      }
    }
  }

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', handleScroll, { passive: true })

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (

  <Flex
    // bg="purple"
    // w="100%"
    justify="center"
  >
    
    <Flex
      w="100%"
      // pt={{ base: '100px', '2xl': '140px' }}
      justify="space-between"
      maxWidth="1536px"
      position={fixed ? 'fixed' : 'absolute'}
      bottom={'0'}
      zIndex={'banner'}
      pointerEvents="none"
      // bg="red"
    >
      <Flex
        pointerEvents={'fill'}
        bg="white"
        w={{ base: 'fit-content' }}
        h={{ base: '90px', sm: '113px' }}
        padding={{ base: '5%' }}
        gap={{ base: '10px', lg: '23px' }}
        align="center"
        justify="flex-start"
        boxShadow="0px 0px 30px #00000029"
        borderTopRightRadius={{ base: '15px', sm: '26px' }}
        cursor="pointer"
        onClick={() =>
          router.push(`/products/bp-berneck/catalog/${props.prev.url_code}`)
        }
        transition="all 0.2s ease-in-out"
        _hover={{ filter: 'brightness(0.8)' }}
      >
        <Arrow
          direction="left"
          width={{ base: '15px', xs: '20px', md: '30px' }}
          // height={{ base: '30px', sm: '40px' }}
          color="green.200"
        />
        <Box>
          <Text
            // fontSize={{ base: '15px', sm: '20px', md: '23px' }}
            as={'h4'}
            variant={'h4' as any}
            fontWeight="bold"
            letterSpacing="-0.46px"
            color="gray.300"
          >
            Anterior
          </Text>

          <Text
            as={'h4'}
            variant={'h4' as any}
            fontWeight="medium"
            letterSpacing="-0.36px"
            color="gray.300"
          >
            {props.prev.name}
          </Text>
        </Box>
      </Flex>

      <Flex
        pointerEvents={'fill'}
        bg="white"
        w={{ base: 'fit-content' }}
        h={{ base: '90px', sm: '113px' }}
        padding={{ base: '5%' }}
        gap={{ base: '10px', lg: '23px' }}
        align="center"
        justify="flex-start"
        boxShadow="0px 0px 30px #00000029"
        borderTopLeftRadius={{ base: '15px', sm: '26px' }}
        cursor="pointer"
        onClick={() =>
          router.push(`/products/bp-berneck/catalog/${props.next.url_code}`)
        }
        transition="all 0.2s ease-in-out"
        _hover={{ filter: 'brightness(0.8)' }}
      >
        <Flex direction="column" align="flex-end">
          <Text
             as={'h4'}
             variant={'h4' as any}
            fontWeight="bold"
            letterSpacing="-0.46px"
            color="gray.300"
          >
            Próximo
          </Text>

          <Text
             as={'h4'}
             variant={'h4' as any}
            fontWeight="medium"
            letterSpacing="-0.36px"
            color="gray.300"
          >
            {props.next.name}
          </Text>
        </Flex>

        <Arrow
          direction="right"
          width={{ base: '15px', xs: '20px', md: '30px' }}
          // height={{ base: '30px', sm: '40px' }}
          color="green.200"
        />
      </Flex>
    </Flex>

</Flex>
  )
}
