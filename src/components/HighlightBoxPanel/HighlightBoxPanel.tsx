import { useState } from 'react'
import { Flex, Image, Text, Box } from '@chakra-ui/react'

import HighlightBoxPanelFooter from './HighlightBoxPanelFooter'

export type HighlightBoxPanelProps = {
  title: string
  subtitle: string
  image: string
}

export const HighlightBoxPanel = ( props: HighlightBoxPanelProps ) => {
  return (
    <Flex
      w={{ base: '95%', md: '95%', lg: '95%', xl: '30%' }}
      pos="relative"
      direction="column"
      userSelect="none"
      // bg="black"
      marginRight={'15px'}
    >
      <PanelImage
        image={props.image}
      />

      <HighlightBoxPanelFooter
        title={props.title}
        subtitle={props.subtitle}
      />
    </Flex>
  )
}


const PanelImage = (props: { image: string }) => (
  <Flex 
    h={"100%"}
    justifyContent="center" 
    alignItems="center" 
    pos="relative"
  >
      <Image
        h={"100%"}
        src={props.image}
        objectFit="cover"
        userSelect="none"
        draggable="false"
      />
  </Flex>
)