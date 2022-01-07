import React, { ReactNode } from 'react'
import { Heading, Flex, Box, Text, Center, Container } from "@chakra-ui/react"

import CarbonIcon from '@components/Icons/CarbonIcon'


export type Infographic2Props = {

  iconName?: string

   // SUPERSCRITS TITLES
   titleSuperscript1Text?: ReactNode | string
   titleSuperscript1Display?: 'flex' | 'none'
   titleSuperscript1Color?: string

   titleSuperscript2Text?: ReactNode | string
  titleSuperscript2Display?: 'flex' | 'none'
  titleSuperscript2Color?: string

  content1Text?: ReactNode | string
  content1Display?: 'flex' | 'none'
  content1Color?: string

  content2Text?: ReactNode | string
  content2Display?: 'flex' | 'none'
  content2Color?: string
  
  
}
export const Infographic2 = ({ 

  iconName = 'CarbonIcon',

  // SUPERSCRITS TITLES
  titleSuperscript1Text = 'Sequestro de Carbono',
  titleSuperscript1Display = 'flex',
  titleSuperscript1Color = 'green.600',

  titleSuperscript2Text = 'mais de',
  titleSuperscript2Display = 'flex',
  titleSuperscript2Color = 'green.800',

  content1Text = '3,2',
  content1Display = 'flex',
  content1Color = 'green.600',

  content2Text = 'millhões de tCO2e',
  content2Display = 'flex',
  content2Color = 'green.600',

 }: Infographic2Props) => {
  return (
    <Container>
        <Flex direction='row'>

          {/* ICON AREA */}
          <Box 
            flex='1' 
            // bg='tomato'
            display='flex'
          >
            <Box display='flex' alignItems='center' margin = {{ base: '8px', sm: '10px', lg: '12px', xl: '14px'}}>
            {(iconName === 'CarbonIcon' &&
              <CarbonIcon 
                height = {{ base: '80px', sm: '120px', lg: '120px', xl: '140px'}}
                width = {{ base: '35px', sm: '90px', lg: '55px', xl: '60px'}}
              />
            )}
            </Box>
          </Box>


          {/* TEXT AREA */}
          <Box 
            flex='4' 
            // bg='pink'
          >
            <Flex direction='column'>

              {/* SUPERSCRIPT AREA */}
              <Box 
                flex='1' 
                // bg='blue' 
                display={titleSuperscript1Display}>
                  <Heading 
                    variant='h1'
                    color={titleSuperscript1Color}
                    letterSpacing = '-0.94px'
                    fontFamily = 'body'
                    fontWeight= 'bold'
                    // base to 320px | sm to 568px | lg to 1024 | xl to max
                    fontSize={{ base: '16px', sm: '24px', lg: '26px', xl: '30px'}}
                    textAlign='left'
                >{titleSuperscript1Text}</Heading>
              </Box>
              <Box 
                flex='1' 
                // bg='pink' 
                display={titleSuperscript2Display}>
                  <Heading 
                    variant = 'h4'
                    color = {titleSuperscript2Color}
                    fontSize = {{ base: '13px', sm: '18px', lg: '20px', xl: '22px'}}
                    textAlign = 'left'
                >{titleSuperscript2Text}</Heading>
              </Box>
              

              {/* NUMBER AREA */}
              <Box 
                display='flex' 
                flex='1' 
                // bg='yellow'
              >
                
                {/* NUMBER */}
                <Flex direction='row'>
                  
                  <Heading
                    variant='h1'
                    color={content1Color}
                    letterSpacing = '-0.94px'
                    fontFamily = 'body'
                    fontWeight= 'extrabold'
                    fontSize = {{ base: '50px', sm: '85px', lg: '90px', xl: '100px'}}
                    display={content1Display}
                  >{content1Text}</Heading>
                
                  {/* CONTENT 3 --> */}
                  <Box 
                    display={content2Display}
                    flexDirection='column'
                    // bg='yellow'
                    alignSelf='flex-start'
                    marginTop={{ base: '12px', sm: '15px', lg: '0px', xl: '0px'}}
                    marginLeft='5px'
                  >
                    <Heading 
                      variant='h4'
                      color={content2Color}
                      letterSpacing = '-0.76px'
                      fontWeight= 'bold'
                      fontSize= {{ base: '12px', sm: '16px', lg: '18px', xl: '20px'}}
                      maxWidth={{ base: '50px', sm: '90px', lg: '90px', xl: '100px'}}
                    >{content2Text}</Heading>
                  </Box>
              </Flex>

              </Box>
            </Flex>
          </Box>
      </Flex>
     
    </Container>
  )
}
