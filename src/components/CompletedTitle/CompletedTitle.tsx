import { Heading, Flex, Box, Text, Center, Container } from "@chakra-ui/react"
import React, { ReactNode } from 'react'

export type CompletedTitleProps = {
  // Title
  titleColor?: string
  titleString?: string
  alignLine?: 'center' | 'flex-start' | 'flex-end'
  textAlignH1?: 'center' | 'left' | 'right'
}
export const CompletedTitle = ({ 
  // Heading1
  titleColor = 'green.800',
  titleString = 'BERNECK',
  alignLine = 'center',
  textAlignH1 = 'center'
}: CompletedTitleProps) => {
  return (
    <Box>
      <Box
            // bg='beige'
            flex='1.2'
          >
            <Flex 
              // bg='red'
              direction={{ base: 'column', sm: 'column', lg: 'column', xl: 'column'}}
              paddingRight = {{ base: '0px', sm: '0px', lg: '22px', xl: '30px'}}
            >
              <Box
                // bg='orange'
              >
                <Text as='h1'
                    variant={'h1' as any}
                    color={titleColor}
                    textAlign={textAlignH1}
                >{titleString}</Text>
              </Box>
              
              <Box
                // bg='white'
                alignSelf={alignLine}
              >
                <Box 
                  marginTop={{ base: '3px', sm: '10px', lg: '20px', xl: '20px'}}
                  h="3px"
                  w={{ base: '60px', sm: '70px', lg: '80px', xl: '90px'}}
                  bg="green.600"
                  borderRadius="20px"
                />
              </Box>
              
            </Flex>

          </Box>
    </Box>
  )
}
