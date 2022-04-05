import { Image, Flex, FlexProps, Box, Text } from '@chakra-ui/react'
import ArrowIcon from '@components/Icons/ArrowIcon'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { smartString } from 'utils/utils'
import useWindowDimensions from 'hooks/useWindow'

export interface ChannelBnkRelationalItemProps extends FlexProps {
  categoryTitle: string
  categoryId: number
  url_code: string
  title: string
  color: string
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
  color,
  showInvert,
  currentCategory = -1,
  ...props
}: ChannelBnkRelationalItemProps) => {
  const [mouseDown, setMouseDown] = useState(false)
  const router = useRouter()
  const useWindowDimensionsLocal = useWindowDimensions()

  function navigateToThePost() {
    router.push(`/canal-bnk/${categoryId}/${url_code}`)
  }

  function getBetterStrSize(tam: number | undefined, showInvert: boolean | undefined) {
    
    // alert("tam-"+tam)
    if(tam){
      switch (true) {
        case (0 < tam && tam < 320): 
          return 150; break;
        case (320 <= tam && tam < 568):
          return 150; break;
        case (568 <= tam && tam < 768):
          return 38; break;
        case (768 <= tam && tam < 1024):
          return 38; break;
        case (1024 <= tam && tam < 1280):
            return 70; break;
        case (1280 <= tam && tam < 1536):
            return (showInvert)? 70: 80; break;
        case (1536 <= tam):
          return 70;break;
      }
    }else{
      return 10;
    }
      

    return 30;
  }

  function getPanelColor(i: number, currentCategory: number) {
    
    i = i - 1;

    if (i === 0 && currentCategory != -1) {
      return '#F0E4D1'
    }
  
    if (i === 1 && currentCategory != -1) {
      return '#D6DCD5'
    }

    if (i === 2 && currentCategory != -1) {
      return '#89BA81'
    }
  
    return 'white'
  }

  function getAccentColor(i: number, currentCategory: number) {
  
    i = i - 1;

    if (i === 0 && currentCategory === -1) {
      return '#E0CBA5'
    }
  
    if (i === 1 && currentCategory === -1) {
      return '#B9C3B8'
    }

    if (i === 2 && currentCategory === -1) {
      return '#429C2E'
    }
  
    return 'white'
  }

  return (
    <Flex
      onMouseEnter={() => setMouseDown(true)}
      onMouseLeave={() => setMouseDown(false)}
      flexDirection={{ base: 'column', xl: (showInvert) ? 'row' : 'column' }}
      // marginRight={{ base: '10px', md: (showInvert) ? '0px' : '0px' }}
      w={{ base: '60vw', xl: (showInvert) ? '0' : '22%' }}
      minWidth={{ base: '60vw', sm: '50vw', md: '0', xl: (showInvert) ? '100%' : '0' }}
      maxWidth={{ base: "270px", '2xl': "100%" }}
      {...props}
      cursor="pointer"
      onClick={navigateToThePost}
      // bg="azure"
    >

      {/* {CARD CHANNEL  } */}
      <Box
        h={{
          base: '200px',
          // sm: '250px',
          // md: '150px',
          // lg: '200px'
        }}
        w="100%"
        // bg="azure"
      >
          {/* {IMAGEM CAPA CARD  } */}
          <Image 
            h="100%" 
            w="100%"
            objectFit="cover" 
            src={urlImage} />
      </Box>
      
      
      {/* { CARD TEXT  } */}
      <Flex
        bg={getPanelColor(categoryId, currentCategory)}
        flexDirection={{ base: 'column', md: (showInvert) ? 'column' : 'column' }}
        justifyContent="space-between"
        h={{ base: '50%', xl: (showInvert) ? '100%' : '50%' }}
        w="100%"
        // bg = "blueviolet"
      >
        <Flex 
          padding={{ base: '8%', xl: (showInvert) ? '3%' : '5%' , '2xl': '2%'}}
          flexDirection={{ base: 'column', md: (showInvert) ? 'column' : 'column' }}
          // bg = "blue"
        >
          <Flex
            alignItems="flex-start"
            justifyContent={'flex-start'}
            // bg = "red"
            margin={{ base: '0', xl: (showInvert) ? '12px 0 0 0' : '0%' }}
            // padding={{ base: '0', xl: (showInvert) ? '2%' : '0%', '2xl': '0' }}
          >
            <ArrowIcon
              stroke={getAccentColor(categoryId, currentCategory)}
              width = {{
                base: '7px',
                md: '9px',
                lg: '10px',
                xl: '9px'
              }}
            />
            <Text
              as="h5"
              variant={'h5' as any}
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
              fontSize= {{ base: '11px', sm: '11px', lg: '11px', xl: '12px' }}
            >
              {categoryTitle}
            </Text>
          </Flex>
          <Text as="h4"
            variant = {"h4" as any}
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
            {smartString( title, getBetterStrSize(useWindowDimensionsLocal.width, showInvert )) }
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
