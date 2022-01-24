import React, { ReactNode } from 'react'
import { Heading, Flex, Box, Text, Center, Container, TextProps } from "@chakra-ui/react"

import { ResponsiveCss } from 'types/responsive'

import WaterIcon from '@components/Icons/WaterIcon'
import EnergyIcon from '@components/Icons/EnergyIcon'
import TreesIcon from '@components/Icons/TreesIcon'

export type InfographicProps = {
  // SUPERSCRITS TITLES
  titleSuperscript1Text?: ReactNode | string
  titleSuperscript1Display?: 'flex' | 'none'
  titleSuperscript1Color?: string

  titleSuperscript2Text?: ReactNode | string
  titleSuperscript2Display?: 'flex' | 'none'
  titleSuperscript2Color?: string

  // CONTENT
  content1Text?: ReactNode | string
  // ICON
  content1DisplayIcon?: 'yes' | 'none'
  content1IconName?: string

  content1Display?: 'flex' | 'none'
  content1Color?: string

  content2Text?: ReactNode | string
  content2Display?: 'flex' | 'none'
  content2Color?: string

  content3Text?: ReactNode | string
  content3Display?: 'flex' | 'none'
  content3Color?: string

  content4Text?: ReactNode | string
  content4Display?: 'flex' | 'none'
  content4Color?: string

  // SUBSCRIPT TITLE
  titleSubscript1Text?: ReactNode | string
  titleSubscript1Display?: 'flex' | 'none'
  titleSubscript1Color?: string
}
export const Infographic = ({ 

  // SUPERSCRITS TITLES
  titleSuperscript1Text = '',
  titleSuperscript1Display,
  titleSuperscript1Color = 'green.600',

  titleSuperscript2Text,
  titleSuperscript2Display,
  titleSuperscript2Color = 'green.800',

  // CONTENT
  content1Text,
  content1Display,
  content1Color = 'green.600',
  // ICON
  content1DisplayIcon = 'none',
  content1IconName,
  // TEXT
  content2Text,
  content2Display,
  content2Color,
  content3Text,
  content3Display,
  content3Color,
  content4Text,
  content4Display,
  content4Color = 'green.600',
  fontSize = { base: '20px', sm: '30px', lg: '40px', xl: '70px'},
  // SUBSCRIPT TITLE
  titleSubscript1Text,
  titleSubscript1Display,
  titleSubscript1Color = 'green.600',
}: InfographicProps & TextProps) => {
  return (

  <Container 
    display='flex'
    justifyContent='center'
    // bg="blackAlpha.600"
    margin='3%'
    maxWidth="400px"
    // maxHeight={"auto"}
  >
    <Box 
      display='flex'
      // bg='azure'
     
    >
      {/* WRAP MAIN  --> */}
      <Flex 
        direction='column' 
        wordBreak='keep-all'
      >


       {/* SUPERSCRIT TITLE 1 --> */}
        <Box 
          display={titleSuperscript1Display}
          justifyContent='center'
          // bg='black'
        >
          <Text
              variant={'h3' as any}
              color={titleSuperscript1Color}
              letterSpacing = '-0.94px'
            >{titleSuperscript1Text}</Text>
        </Box>
        
        {/* SUPERSCRIT TITLE 2 --> */}
        <Box 
          display={titleSuperscript2Display}
          // bg='greenyellow'
        >
          <Text 
              variant = {'h4' as any}
              color = {titleSuperscript2Color}
              textAlign = 'center'
            >{titleSuperscript2Text}</Text>
        </Box>



       {/* BOX CONTENT --> */}
       <Box 
          display='flex' 
          justifyContent='center'
        >
          <Box 
            display='flex'
            alignItems='center'
            // bg='aquamarine'
            maxH={{ base: '45px', sm: '50px', lg: '50px', xl: '70px'}}
          >

              {/* CONTENT 1 --> */}
              <Box 
                display={content1Display}
                // bg='bisque'
              >
                    {content1DisplayIcon=='none' &&
                      <Text 
                          variant={'h1' as any}
                          color={content1Color}
                          fontFamily = 'body'
                          fontSize = {{ base: '40px', sm: '48px', lg: '50px', xl: '90px'}}
                        >{content1Text}</Text>
                    }
                    
                    {content1DisplayIcon=='yes' &&
                      <Box marginRight='5px'>
                        {(content1IconName === 'energy' &&
                          <EnergyIcon 
                            height = {{ base: '40px', sm: '40px', lg: '50px', xl: '55px'}}
                            width = {{ base: '30px', sm: '30px', lg: '40px', xl: '60px'}}
                          />)
                          || (content1IconName === 'water' &&
                          <WaterIcon 
                            height = {{ base: '25px', sm: '35px', lg: '45px', xl: '48px'}}
                            width = {{ base: '25px', sm: '30px', lg: '40px', xl: '60px'}}
                          />)
                          || (content1IconName === 'trees' &&
                          <TreesIcon 
                            height = {{ base: '80px', sm: '100px', lg: '120px', xl: '140px'}}
                            width = {{ base: '35px', sm: '40px', lg: '55px', xl: '60px'}}
                          />)}

                      </Box>  
                    }
                </Box>

                {/* CONTENT 2 NUMBER --> */}
                  <Text
                    variant={'h1' as any}
                    color={content2Color}
                    letterSpacing = '-0.94px'
                    fontFamily = 'body'
                    fontSize = {{ base: '40px', sm: '48px', lg: '50px', xl: '90px'}}
                    display={content2Display}
                  >{content2Text}</Text>
              
                {/* CONTENT 3 SUPERSCRIPT --> */}
                  <Flex 
                    display={content3Display}
                    flexDirection='column'
                    // bg='yellow'
                    alignSelf='flex-start'
                    marginTop={{ base: '5px', sm: '10px', lg: '5px', xl: '0px'}}
                    marginLeft='5px'
                    // wordBreak='keep-all'
                    // overflow="hidden"
                    // whiteSpace={'nowrap'}
                    // word-wrap={"normal"}
                  >
                      <Text 
                        variant={'h4' as any}
                        color={content3Color}
                        letterSpacing = '-0.76px'
                        // bg='red'
                        maxWidth={{ base: '50px', sm: '80px', lg: '80px', xl: '120px'}}
                      >{content3Text}</Text>
                  </Flex>


              {/* CONTENT 4 --> */}
              <Box 
                display={content4Display}
                // bg='blue.300'
                flexDirection='column'
                alignSelf='flex-end'
              >
                <Text 
                    variant={'h1' as any}
                    color={content4Color}
                    // bg='pink'
                    // fontSize={{ base: '20px', sm: '30px', lg: '40px', xl: '70px'}}
                    fontSize = {fontSize}
                    marginBottom={{ base: '10px', sm: '5px', lg: '-10px', xl: '-16px'}}
                  >{content4Text}</Text>
              </Box>

          </Box>

        </Box>


        {/* SUBSCRIPT TITLE --> */}
        <Box 
          display={titleSubscript1Display}
          justifyContent='center'
          // bg='pink.400'
          marginTop = {{ base: '0px', sm: '5px', lg: '5px', xl: '5px'}}
        >
          <Text 
              variant={'h3' as any}
              color={titleSubscript1Color}
              letterSpacing = '-0.94px'
              textAlign='center'
              maxWidth={{ base: '150px', sm: '200px', lg: '250px', xl: '300px'}}
              fontSize={{ base: '10px', sm: '16px', lg: '18px', xl: '30px'}}
            >{titleSubscript1Text}</Text>
        </Box>
        {/* SUBSCRIPT TITLE --> */}

      </Flex>
    </Box>
  </Container>
  )
}
