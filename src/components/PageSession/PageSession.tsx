import React from 'react'
import { Box, Text, Flex } from '@chakra-ui/react'

import CompletedTitle from '@components/CompletedTitle'
import GrafismLeft from '@components/GrafismLeft'

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
  // Grafismo
  viewGrafismo?: string
  GrafismLeftStroke?: string
  GrafismLeftOpacity?: string
  // Data
  data: {
    imageUrl: string
    title: string
    subtitle: string
    text: string
  }
}
export const PageSession = ({
  // Heading1
  titleColor = 'white.100',
  titleType = 'h2',
  titleLineDisplay = 'flex',
  titleLineAlign = 'start',
  titleLineColor = 'blue.100',
  // Heading2
  subTitleColor = 'white.100',
  subTitleType = 'h3',
  subTitleLineDisplay = 'none',
  // Grafismo
  viewGrafismo = 'flex',
  GrafismLeftStroke = '#143127',
  GrafismLeftOpacity = '0.6',
  // Data
  data = {
    imageUrl: '',
    title: '',
    subtitle: '',
    text: ''
  }
}: PageSessionProps) => {
  return (
    <Flex
      maxWidth="1920px"
      marginX="auto"
      alignItems="center"
      justifyContent="center"
      position="relative"
      zIndex="base"
      overflowY="hidden"
      overflowX="hidden"
      backgroundImage={data.imageUrl}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize={'cover'}
      // bg='tomato'
    >
      {/* BOX 1 */}
      <Box
        // bg = 'red'
        flex="1"
        position="absolute"
        flexDirection={{ base: 'column', lg: 'row' }}
        display={viewGrafismo}
      >
        <Box
          ml={{ base: '-10%', sm: '-10%', lg: '-30%', xl: '-30%' }}
          mt={{ base: '-20%', sm: '0%' }}
        >
          <GrafismLeft
            stroke={GrafismLeftStroke}
            height={{ base: '300px', sm: '400px', lg: '500px', xl: '550px' }}
            width={{ base: '300px', sm: '400px', lg: '400px', xl: '414px' }}
            opacity="0.6"
          />
        </Box>

        <Box
          ml={{ base: '14%', sm: '20%', lg: '60%', xl: '70%' }}
          mt={{ base: '50%', sm: '0%' }}
        >
          <GrafismLeft
            stroke={GrafismLeftStroke}
            height={{ base: '300px', sm: '400px', lg: '500px', xl: '550px' }}
            width={{ base: '300px', sm: '400px', lg: '400px', xl: '414px' }}
            opacity="0.6"
            transform={'rotate(180deg)'}
          />
        </Box>
      </Box>

      {/* BOX 2 */}
      <Box
        // bg = 'gray'
        flex="1"
        zIndex={10}
        margin={{ base: '10% 5%', sm: '5%', lg: '5%', xl: '5%' }}
      >
        <Flex
          direction={{ base: 'column', sm: 'column', lg: 'row', xl: 'row' }}
          // bg='yellow'
        >
          <Box
            margin={{
              base: '30px 0px',
              sm: '30px 0px',
              lg: '10px 0px',
              xl: '15px 10px'
            }}
            // bg='red'
            flex="1"
          >
            <CompletedTitle
              titleColor={titleColor}
              titleString={data.title}
              alignSelf={{
                base: 'center',
                sm: 'center',
                lg: 'flex-start',
                xl: 'flex-start'
              }}
              textAlign={{
                base: 'center',
                sm: 'center',
                lg: 'left',
                xl: 'left'
              }}
            />
          </Box>
          <Box
            margin={{
              base: '0px',
              sm: '5px 0px',
              lg: '20px 0px',
              xl: '15px 10px'
            }}
            // bg='pink'
            flex="2"
          >
            <Text
              as="h3"
              variant={'h3' as any}
              fontFamily="body"
              color={subTitleColor}
              textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
            >
              {data.subtitle}
            </Text>
            <Text
              color={subTitleColor}
              textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
              marginTop={{
                base: '3%',
                sm: '5px 0px',
                lg: '10px 0px',
                xl: '15px 10px'
              }}
            >
              {data.text}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}
