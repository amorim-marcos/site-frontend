
import React, { ReactNode } from 'react'
import { Box, Image, Text, Flex, Container, Wrap, Heading, Spacer } from '@chakra-ui/react'
import { Wrapper } from '@components/LeafletMaps/styles'

import CompletedTitle from '@components/CompletedTitle'


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
      h={{ base: '250px', sm: '420px', lg: '500px', xl: '500px'}}
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
        w={{ base: '80%', sm: '80%', lg: '80%', xl: '80%'}}
      >
          <Flex
            direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row'}}
            // bg='yellow'
          >
                <CompletedTitle 
                  titleColor = 'white' 
                  titleString = {data.title} 
                  alignSelf = {{ base: 'center', sm: 'center', lg: 'flex-start', xl: 'flex-start'}}
                  textAlign =  {{ base: 'center', sm: 'center', lg: 'left', xl: 'left'}}
                />

                <Box
                  margin={{ base: '3px 0px', sm: '5px 0px', lg: '10px 0px', xl: '15px 10px'}}
                  // bg='pink'
                  flex = '2'
                >
                  <Text as='h3'
                    variant = {'h3' as any}
                    fontFamily = 'body'
                    color={subTitleColor}
                    textAlign = {{ base: 'center', sm: 'center', lg: 'left', xl: 'left'}}
                  >{data.subtitle}</Text>
                  <Text
                    color={subTitleColor}
                    textAlign = {{ base: 'center', sm: 'center', lg: 'left', xl: 'left'}}
                  >{data.text}</Text>
              
                </Box>

          </Flex>   

      </Box>
      
  </Flex>   
  )
}
