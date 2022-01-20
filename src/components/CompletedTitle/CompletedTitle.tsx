import { Heading, Flex, Box, Text, Center, Container } from "@chakra-ui/react"
import React, { ReactNode } from 'react'

export type CompletedTitleProps = {
  // Title
  titleColor?: string
  titleString?: string
  alignSelfLine?: 'center' | 'flex-start' | 'flex-end'
}
export const CompletedTitle = ({ 
  // Heading1
  titleColor = 'green.800',
  titleString = 'BERNECK',
  alignSelfLine = 'center'
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
                    variant='h1'
                    color={titleColor}
                    textAlign = {{ base: 'center', sm: 'center', lg: 'left', xl: 'left'}}
                >{titleString}</Text>
              </Box>
              
              <Box
                // bg='white'
                alignSelf={alignSelfLine}
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
