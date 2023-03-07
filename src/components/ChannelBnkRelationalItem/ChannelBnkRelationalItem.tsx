import { useState } from 'react'
import { useRouter } from 'next/router'

import { Image, Flex, FlexProps, Box, Text } from '@chakra-ui/react'

import ArrowIcon from '@components/Icons/ArrowIcon'

import useWindowDimensions from 'hooks/useWindow'
import { smartString } from 'utils/utils'

function getBetterStrSize(
  tam: number | undefined,
  showInvert: boolean | undefined
) {
  if (tam) {
    if (tam < 568) return 150
    if (568 <= tam && tam < 1024) return 38
    if (1024 <= tam && tam < 1280) return 70
    if (1280 <= tam && tam < 1536) return showInvert ? 35 : 80
    if (1536 <= tam) return 35
  }

  return 10
}

function getPanelColor(i: number, currentCategory: number) {
  i = i - 1

  const colors = ['#F0E4D1', '#D6DCD5', '#89BA81']

  return currentCategory != -1 ? colors[i] : 'white'
}

function getAccentColor(i: number, currentCategory: number) {
  i = i - 1

  const colors = ['#E0CBA5', '#B9C3B8', '#429C2E']

  return currentCategory === -1 ? colors[i] : 'white'
}

export interface ChannelBnkRelationalItemProps extends FlexProps {
  categoryTitle: string
  categoryId: number
  url_code: string
  title: string
  urlImage: string
  showInvert?: boolean
  currentCategory?: number
}

export const ChannelBnkRelationalItem = ({
  categoryTitle,
  categoryId,
  url_code,
  urlImage,
  title,
  showInvert,
  currentCategory = -1,
  ...props
}: ChannelBnkRelationalItemProps) => {
  const router = useRouter()
  const [mouseDown, setMouseDown] = useState(false)
  const useWindowDimensionsLocal = useWindowDimensions()

  return (
    <Flex
      onMouseEnter={() => setMouseDown(true)}
      onMouseLeave={() => setMouseDown(false)}
      flexDirection={{ base: 'column', xl: showInvert ? 'row' : 'column' }}
      overflow="hidden"
      // h="370px"
      // w={{ base: '60vw', xl: showInvert ? '0' : '22%' }}
      minWidth={{
        base: '60vw',
        sm: '50vw',
        md: '0',
        xl: showInvert ? '100%' : '0'
      }}
      maxWidth={{ base: '270px', '2xl': '100%' }}
      {...props}
      cursor="pointer"
      onClick={() => router.push(`/channel-bnk/${categoryId}/${url_code}`)}
    >
      {/* {CARD CHANNEL  } */}
      <Box
        h={{
          base: '180px'
        }}
        w="100%"
      >
        {/* {IMAGEM CAPA CARD  } */}
        <Image h="100%" w="100%" objectFit="cover" src={urlImage} />
      </Box>

      {/* { CARD TEXT  } */}
      <Flex
        //  bg = "tomato"
        bg={getPanelColor(categoryId, currentCategory)}
        flexDirection={{ base: 'column', md: showInvert ? 'column' : 'column' }}
        // justifyContent="space-between"
        h={{ base: '50%', xl: showInvert ? '100%' : '50%' }}
        w="100%"
      >
        <Flex
          padding={{ base: '8%', xl: showInvert ? '5%' : '6%', '2xl': '6%' }}
          flexDirection={{
            base: 'column',
            md: showInvert ? 'column' : 'column'
          }}
          // bg= "violet"
          h={{ base: '100%', xl: showInvert ? '98%' : '96%' }}
        >
          <Flex
            alignItems="flex-start"
            justifyContent={'flex-start'}
            margin={{ base: '0', xl: showInvert ? '1% 0 0 0' : '0%' }}
          >
            <ArrowIcon
              stroke={getAccentColor(categoryId, currentCategory)}
              width={{
                base: '7px',
                md: '9px',
                lg: '10px',
                xl: '9px'
              }}
            />
            <Text
              as="h5"
              variant="h5"
              marginLeft="3%"
              color="gray.400"
              marginTop={{
                base: '-3.5px',
                md: '-3px',
                lg: '-2px',
                xl: '-3px'
              }}
              letterSpacing={{
                base: '2px',
                xl: '2px'
              }}
              fontSize={{ base: '11px', sm: '11px', lg: '11px', xl: '12px' }}
            >
              {categoryTitle}
            </Text>
          </Flex>

          <Text
            as="h4"
            variant="h4"
            marginTop={{
              base: '10px',
              sm: '15px',
              md: '10px',
              lg: '10px',
              xl: '10px'
            }}
            color="green.800"
            lineHeight={{
              base: '18px',
              sm: '18px',
              md: '20px',
              lg: '22px',
              xl: '28px'
            }}
          >
            {smartString(
              title,
              getBetterStrSize(useWindowDimensionsLocal.width, showInvert)
            )}
          </Text>
        </Flex>

        <Box
          transition={'0.5s'}
          width={mouseDown ? '80%' : '50%'}
          borderBottom="solid"
          borderBottomWidth={{
            base: '3px',
            sm: '4px',
            md: '3px',
            lg: '4px',
            xl: '5px',
            '2xl': '6px'
          }}
          borderBottomColor={getAccentColor(categoryId, currentCategory)}
          marginLeft="10%"
        />
      </Flex>
    </Flex>
  )
}
