import React, { ReactNode } from 'react'
import { Heading, Flex, Box, Text, Center, Container } from "@chakra-ui/react"

import CarbonIcon from '@components/Icons/CarbonIcon'
import EmissionIcon from '@components/Icons/EmissionIcon'


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
  titleSuperscript1Text = 'superscript text',
  titleSuperscript1Display = 'flex',
  titleSuperscript1Color = 'green.600',

  titleSuperscript2Text = 'superscript',
  titleSuperscript2Display = 'flex',
  titleSuperscript2Color = 'green.800',

  content1Text = '1',
  content1Display = 'flex',
  content1Color = 'green.600',

  content2Text = 'texto content 2',
  content2Display = 'flex',
  content2Color = 'green.600',

 }: Infographic2Props) => {
  return (
    <Container 
      display='flex'
      justifyContent='center'
    >
        <Flex 
          direction='row'
          margin='3%'
          // bg='tomato'
        >

          {/* BOX 1 */}
          <Box 
            flex='1' 
            // bg='red'
            display='flex'
          >
            <Box 
              display='flex' 
              alignItems='center' 
              margin = {{ base: '2px 10px 2px 2px', sm: '7px 10px 7px 7px', lg: '7px', xl: '20px'}}
            >
            {(iconName === 'CarbonIcon' &&
                <CarbonIcon 
                  height = {{ base: '80px', sm: '80px', lg: '100px', xl: '90px'}}
                  width = {{ base: '35px', sm: '45px', lg: '55px', xl: '80px'}}
                  stroke1 = {"#fff"}
                  stroke2 = {"#ACCC9F"}
                />)
                || (iconName === 'EmissionIcon' &&
                <EmissionIcon 
                  height = {{ base: '80px', sm: '80px', lg: '100px', xl: '90px'}}
                  width = {{ base: '35px', sm: '45px', lg: '55px', xl: '80px'}}
                  stroke2 = {"#fff"}
                  stroke1 = {"#ACCC9F"}
              />)}
            </Box>
          </Box>


          {/* BOX 2 */}
          <Box 
            flex='3' 
            // bg='pink'
          >

            <Flex 
              direction='column'
              // bg="beige"
            >

              {/* BOX 1 - internal */}
              <Box 
                flex='1' 
                // bg='white' 
                display={titleSuperscript1Display}>
                  <Text
                    variant={'h3' as any}
                    color={titleSuperscript1Color}
                    letterSpacing = '-0.94px'
                    fontSize = {{ base: '11px', sm: '12px', lg: '18px', xl: '30px'}}
                  >{titleSuperscript1Text}</Text>
              </Box>
              {/* BOX 2 - internal */}
              <Box 
                flex='1' 
                // bg='green' 
                display={titleSuperscript2Display}>
                  <Text
                    variant={'h4' as any}
                    color={titleSuperscript2Color}
                    letterSpacing = '-0.19px'
                    fontWeight = 'bold'
                  >{titleSuperscript2Text}</Text>
              </Box>
              {/* BOX 3 - internal */}
              <Box 
                display='flex' 
                flex='1' 
                // bg='yellow'
                maxH={{ base: '45px', sm: '50px', lg: '70px', xl: '90px'}}
                overflowY="hidden"
                overflowX="hidden"
                alignItems={"center"}
              >
                
                {/* NUMBER */}
                <Flex 
                  direction='row'
                > 
                  <Text
                      variant={'h1' as any}
                      color={content2Color}
                      letterSpacing = '-0.94px'
                      fontSize = {{ base: '40px', sm: '48px', lg: '50px', xl: '90px'}}
                      display={content1Display}
                  >{content1Text}</Text>
                
                  {/* CONTENT 3 --> */}
                  <Box 
                    display={content2Display}
                    flexDirection='column'
                    // bg='blue'
                    alignSelf='flex-start'
                    marginTop={{ base: '12px', sm: '15px', lg: '10px', xl: '26px'}}
                    marginLeft='5px'
                  >
                    <Text 
                        variant={'h4' as any}
                        color={content2Color}
                        letterSpacing = '-0.76px'
                        // bg='red'
                        maxWidth={{ base: '50px', sm: '80px', lg: '80px', xl: '100px'}}
                    >{content2Text}</Text>
                  </Box>
              </Flex>

              </Box>
            </Flex>
          </Box>
      </Flex>
     
    </Container>
  )
}
