import { Flex, Text, Image, Box, Button } from '@chakra-ui/react'
import CompletedTitle from '@components/CompletedTitle'
import DownloadSection from '@components/DownloadSection'
import { SectionPackBpDownloads } from '@components/SectionPackBpDownloads/SectionPackBpDownloads'
import useMobile from 'hooks/useMobile'

export const DownlodasView = () => {
  const { isMobile, width } = useMobile(568)
  return (
    <Flex flexDir="column" maxWidth="1920px" marginX="auto">
      {/* Downloads Header */}
      <Flex
        flexDir="column"
        width="100%"
        bg="brown.100"
        paddingX="5%"
        paddingY={{ base: '20px', sm: '0' }}
        height={{ base: 'auto', sm: '35vw', md: '25vw' }}
        maxHeight="298px"
        position="relative"
        justifyContent="center"
        overflow="hidden"
      >
        <CompletedTitle
          titleString="Downloads"
          textAlign="left"
          alignSelf="left"
          zIndex="docked"
        />
        <Text
          variant={'body' as any}
          w={{ base: '70%', sm: '50%' }}
          marginTop={{ base: '1%', xl: '3%' }}
          color="brown.300"
        >
          Encontre materiais de divulgação da BERNECK® e de nossos produtos,
          além de revistas, informativos, fichas técnicas, pack de padrões BP
          BERNECK® e muito mais em um só lugar.
        </Text>
        <Image
          src="/img/downloads_header_img.png"
          position={'absolute'}
          top="0"
          left={{ base: '55%', sm: '47%' }}
          height={{ base: '100%', sm: '35vw', md: '25vw' }}
          maxHeight="298px"
          objectFit="cover"
        />
      </Flex>
      {/* End Downloads Header */}
      {/* Start Downloads sections */}
      <Flex p="5%" w="100%" bg="white.100" flexDir="column">
        <DownloadSection
          items={[
            {
              title: '1 Portfólio Melamina BP',
              urlImage:
                'https://olymp-arts.world/wp-content/uploads/xvision.jpg.pagespeed.ic.-m9gbjOpCf.jpg'
            },
            {
              title: '2 Portfólio Melamina BP',
              urlImage:
                'https://m.media-amazon.com/images/I/817Q3VCabwL._SY355_.jpg'
            },
            {
              title: '3 Portfólio Melamina BP',
              urlImage:
                'https://olymp-arts.world/wp-content/uploads/xvision.jpg.pagespeed.ic.-m9gbjOpCf.jpg'
            },
            {
              title: '4 Portfólio Melamina BP',
              urlImage:
                'https://olymp-arts.world/wp-content/uploads/xvision.jpg.pagespeed.ic.-m9gbjOpCf.jpg'
            },
            {
              title: '5 Portfólio Melamina BP',
              urlImage:
                'https://m.media-amazon.com/images/I/817Q3VCabwL._SY355_.jpg'
            },
            {
              title: '6 Portfólio Melamina BP',
              urlImage:
                'https://olymp-arts.world/wp-content/uploads/xvision.jpg.pagespeed.ic.-m9gbjOpCf.jpg'
            },
            {
              title: '7 Portfólio Melamina BP',
              urlImage:
                'https://olymp-arts.world/wp-content/uploads/xvision.jpg.pagespeed.ic.-m9gbjOpCf.jpg'
            },
            {
              title: '8 Portfólio Melamina BP',
              urlImage:
                'https://m.media-amazon.com/images/I/817Q3VCabwL._SY355_.jpg'
            },
            {
              title: '9 Portfólio Melamina BP',
              urlImage:
                'https://olymp-arts.world/wp-content/uploads/xvision.jpg.pagespeed.ic.-m9gbjOpCf.jpg'
            }
          ]}
          key={0}
          grafism="type1"
        />

        <DownloadSection
          items={[
            {
              title: '1 Portfólio Melamina BP',
              urlImage:
                'https://olymp-arts.world/wp-content/uploads/xvision.jpg.pagespeed.ic.-m9gbjOpCf.jpg'
            },
            {
              title: '2 Portfólio Melamina BP',
              urlImage:
                'https://m.media-amazon.com/images/I/817Q3VCabwL._SY355_.jpg'
            },
            {
              title: '3 Portfólio Melamina BP',
              urlImage:
                'https://olymp-arts.world/wp-content/uploads/xvision.jpg.pagespeed.ic.-m9gbjOpCf.jpg'
            },
            {
              title: '4 Portfólio Melamina BP',
              urlImage:
                'https://olymp-arts.world/wp-content/uploads/xvision.jpg.pagespeed.ic.-m9gbjOpCf.jpg'
            },
            {
              title: '5 Portfólio Melamina BP',
              urlImage:
                'https://olymp-arts.world/wp-content/uploads/xvision.jpg.pagespeed.ic.-m9gbjOpCf.jpg'
            }
          ]}
          key={1}
          grafism="type2"
        />
        <SectionPackBpDownloads />
        <DownloadSection
          items={[
            {
              title: '1 Portfólio Melamina BP',
              urlImage:
                'https://olymp-arts.world/wp-content/uploads/xvision.jpg.pagespeed.ic.-m9gbjOpCf.jpg'
            },
            {
              title: '2 Portfólio Melamina BP',
              urlImage:
                'https://m.media-amazon.com/images/I/817Q3VCabwL._SY355_.jpg'
            },
            {
              title: '3 Portfólio Melamina BP',
              urlImage:
                'https://olymp-arts.world/wp-content/uploads/xvision.jpg.pagespeed.ic.-m9gbjOpCf.jpg'
            },
            {
              title: '4 Portfólio Melamina BP',
              urlImage:
                'https://olymp-arts.world/wp-content/uploads/xvision.jpg.pagespeed.ic.-m9gbjOpCf.jpg'
            },
            {
              title: '5 Portfólio Melamina BP',
              urlImage:
                'https://olymp-arts.world/wp-content/uploads/xvision.jpg.pagespeed.ic.-m9gbjOpCf.jpg'
            }
          ]}
          key={1}
          grafism="type3"
        />

        <DownloadSection
          items={[
            {
              title: '1 Portfólio Melamina BP',
              urlImage:
                'https://olymp-arts.world/wp-content/uploads/xvision.jpg.pagespeed.ic.-m9gbjOpCf.jpg'
            },
            {
              title: '2 Portfólio Melamina BP',
              urlImage:
                'https://m.media-amazon.com/images/I/817Q3VCabwL._SY355_.jpg'
            },
            {
              title: '3 Portfólio Melamina BP',
              urlImage:
                'https://olymp-arts.world/wp-content/uploads/xvision.jpg.pagespeed.ic.-m9gbjOpCf.jpg'
            },
            {
              title: '4 Portfólio Melamina BP',
              urlImage:
                'https://olymp-arts.world/wp-content/uploads/xvision.jpg.pagespeed.ic.-m9gbjOpCf.jpg'
            },
            {
              title: '5 Portfólio Melamina BP',
              urlImage:
                'https://olymp-arts.world/wp-content/uploads/xvision.jpg.pagespeed.ic.-m9gbjOpCf.jpg'
            }
          ]}
          key={1}
          grafism="type3"
        />
      </Flex>
    </Flex>
  )
}
