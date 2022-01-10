
import React, { ReactNode } from 'react'
import HeaderTitle from '@components/HeaderTitle'
import { Box, Image, Text, Flex, Container, Wrap } from '@chakra-ui/react'

export type PageSectionProps = {
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
export const PageSection = ({ 
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
}: PageSectionProps) => {
  return (
    <Wrap>
      <Box
        backgroundImage={data.imageUrl}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Flex direction="row">
          
          <HeaderTitle
                HeadingColor={titleColor}
                headerType={titleType}
                LineDisplay={titleLineDisplay}
                borderAlign={titleLineAlign}
                LineColor={titleLineColor}
              >{data.title}</HeaderTitle>

            <Flex direction="column">
              
              <HeaderTitle
                HeadingColor={subTitleColor}
                headerType={subTitleType}
                LineDisplay={subTitleLineDisplay}
              >{data.subtitle}</HeaderTitle>
              
              <Text>{data.text}</Text>
            </Flex>

        </Flex>
      </Box>
    </Wrap>
  )
}
