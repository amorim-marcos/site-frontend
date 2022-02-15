import { Heading, Flex, Box, Text, BoxProps, TextProps } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

export type CompletedTitleProps = BoxProps &
  TextProps & {
    // Title
    titleColor?: string
    titleString?: string
  }
export const CompletedTitle = ({
  // Heading1
  titleColor = 'green.800',
  titleString = 'BERNECK',
  alignSelf = 'center',
  textAlign = 'left'
}: CompletedTitleProps) => {
  return (
    <Box>
      <Box
        // bg='beige'
        flex="1.2"
      >
        <Flex
          // bg='red'
          direction={{
            base: 'column',
            sm: 'column',
            lg: 'column',
            xl: 'column'
          }}
          paddingRight={{ base: '0px', sm: '0px', lg: '22px', xl: '30px' }}
        >
          <Box
          // bg='orange'
          >
            <Text
              as="h1"
              variant={'h1' as any}
              color={titleColor}
              textAlign={textAlign}
            >
              {titleString}
            </Text>
          </Box>

          <Flex
            // bg='white'
            alignSelf={alignSelf}
          >
            <Box
              marginTop={{ base: '3px', sm: '10px', lg: '20px', xl: '20px' }}
              h="3px"
              w={{ base: '60px', sm: '70px', lg: '80px', xl: '90px' }}
              bg="green.600"
              borderRadius="20px"
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
