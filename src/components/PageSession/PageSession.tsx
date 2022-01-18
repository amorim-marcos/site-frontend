
import React, { ReactNode } from 'react'
import { Box, Image, Text, Flex, Container, Wrap, Heading, Spacer } from '@chakra-ui/react'
import { Wrapper } from '@components/LeafletMaps/styles'


export type PageSessionProps = {
  // Title
  titleColor?: string
  titleType?: string
  titleLineDisplay?: 'flex' | 'none'
  titleLineAlign?: 'start' | 'center'
  titleLineColor?: string
  // subTitle
  subTitleColor?: string
  subTitleType?: string
  subTitleLineDisplay?: 'flex' | 'none'
  // Data
  data : {
    imageUrl: string,
    title: string,
    subtitle: string,
    text: string
  }
}
export const PageSession = ({ 
  // Heading1
  titleColor = 'white.100',
  titleType = 'h2',
  titleLineDisplay = 'flex',
  titleLineAlign = "start",
  titleLineColor = 'blue.100',
  // Heading2
  subTitleColor = 'white.100',
  subTitleType = 'h3',
  subTitleLineDisplay = 'none',
  // Data
  data = {
    imageUrl: '',
    title: '',
    subtitle: '',
    text: '',
  }
}: PageSessionProps) => {
  return (

    <Flex
      maxWidth="1920px"
      marginX="auto"
      h={{ base: '200px', sm: '280px', lg: '500px', xl: '500px'}}
      backgroundImage={data.imageUrl}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"    
      alignItems='center'
      justifyContent='center'
      position='relative'
      zIndex='base'
      overflowY="hidden"
      overflowX="hidden"
    >
       
      <Image
        // bg='pink'
        src='/assets/imgs/grafismo_topo_esquerda.png'
        marginLeft={{ base: '-20px', sm: '-20px', lg: '-30px', xl: '-50px'}}
        h='100%'
        
      />
      <Spacer />
      <Image
        // bg='red'
        src='/assets/imgs/grafismo_topo_direita.png'
        marginTop={{ base: '150px', sm: '100px', lg: '150px', xl: '200px'}}
        marginRight={{ base: '-10px', sm: '-20px', lg: '-30px', xl: '-50px'}}
        h='100%'
      />

     
      <Box
        // bg = 'grey'
        position='absolute'
        zIndex='base'
        w={{ base: '80%', sm: '80%', lg: '80%', xl: '75%'}}
        marginLeft={{ base: '-10px', sm: '-20px', lg: '40px', xl: '95px'}}
      >

        <Flex
          direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row'}}
        >
        
          <Box 
            w='100%'
            // bg='red'
            flexWrap='nowrap'
            flex='1'
            margin={{ base: '0%', sm: '0%', lg: '2%', xl: '2%'}}
            >
             <Text
              fontFamily = 'body'
              fontWeight= 'extrabold'
              color={titleColor}
              fontSize = {{ base: '18px', sm: '32px', lg: '40px', xl: '50px'}}
            >{data.title}</Text>
            <Box 
              marginTop={{ base: '3px', sm: '10px', lg: '20px', xl: '31px'}}
              h="3px"
              w={{ base: '60px', sm: '70px', lg: '80px', xl: '90px'}}
              bg="green.600"
              borderRadius="20px"
            />
          </Box>

          <Box
            margin={{ base: '3px 0px', sm: '5px 0px', lg: '10px 0px', xl: '15px 0px'}}
            // bg='green.200'
            flex={{ base: 'column', sm: 'column', lg: '1.3', xl: '2'}}
          >
            <Text
              fontFamily = 'body'
              fontWeight= 'bold'
              color={subTitleColor}
              fontSize = {{ base: '10px', sm: '22px', lg: '24px', xl: '30px'}}
            >{data.subtitle}</Text>
            
            <Text
              fontFamily = 'body'
              fontWeight= 'normal'
              color={subTitleColor}
              fontSize = {{ base: '8px', sm: '14px', lg: '16px', xl: '20px'}}
            >{data.text}</Text>
          </Box>

        </Flex>   


      </Box>
       


    
  </Flex>   
  )
}
