
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
      alignItems='center'
      justifyContent='center'
      position='relative'
      zIndex='base'
      overflowY="hidden"
      overflowX="hidden"
      backgroundImage={data.imageUrl}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"    
      backgroundSize={"cover"}
      // bg='tomato'
    >
      {/* BOX 1 */}
      <Box
        // bg = 'red'
        flex="1"
        position='absolute'
        direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row'}}
      >
         <Image
          // bg='pink'
          src='/assets/imgs/grafismo_topo_esquerda.png'
          // marginLeft={{ base: '-20px', sm: '-20px', lg: '-30px', xl: '-50px'}}
          // w={{ base: '0%', sm: '100%'}}
          
        />
        {/* <Spacer /> */}
        <Image
          // bg='red'
          src='/assets/imgs/grafismo_topo_direita.png'
          // w={{ base: '50%', sm: '100%'}}
        />

      </Box>
      
      {/* BOX 2 */}
      <Box
        // bg = 'grey'
        flex="1"
        zIndex={10}
        margin={{ base: '10% 5%', sm: '5%', lg: '5%', xl: '5%'}}
      >
         <Flex
            direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row'}}
            // bg='yellow'
          >
              <Box
                  margin={{ base: '30px 0px', sm: '30px 0px', lg: '10px 0px', xl: '15px 10px'}}
                  // bg='red'
                  flex = '1'
              >
                <CompletedTitle 
                  titleColor = 'white' 
                  titleString = {data.title} 
                  alignSelf = {{ base: 'center', sm: 'center', lg: 'flex-start', xl: 'flex-start'}}
                  textAlign =  {{ base: 'center', sm: 'center', lg: 'left', xl: 'left'}}
                />
              </Box>
              <Box
                margin={{ base: '0px', sm: '5px 0px', lg: '20px 0px', xl: '15px 10px'}}
                // bg='pink'
                flex = '2'
              >
                  <Text as='h3'
                    variant = {'h3' as any}
                    fontFamily = 'body'
                    color={subTitleColor}
                    textAlign = {{ base: 'left', sm: 'left', lg: 'left', xl: 'left'}}
                  >{data.subtitle}</Text>
                  <Text
                    color={subTitleColor}
                    textAlign = {{ base: 'left', sm: 'left', lg: 'left', xl: 'left'}}
                    marginTop={{ base: '3%', sm: '5px 0px', lg: '10px 0px', xl: '15px 10px'}}
                  >{data.text}</Text>
              
              </Box>

          </Flex>   

      </Box>
      
  </Flex>   
  )
}
