import { useState } from 'react'
import { Flex, Image, Text, Box } from '@chakra-ui/react'

import HighlightBoxPanelFooter from './HighlightBoxPanelFooter'
import { useTranslation } from 'react-i18next'

export type HighlightBoxPanelProps = {
  title: string
  subtitle_key: string
  image: string
}

export const HighlightBoxPanel = (props: HighlightBoxPanelProps) => {
  const compromiseView = useTranslation('compromiseView')

  return (
    <Flex
      w={{ base: '95%', md: '80%', lg: '45%', xl: '30%' }}
      pos="relative"
      direction="column"
      userSelect="none"
      // bg="black"
      marginRight={'15px'}
    >
      <PanelImage image={props.image} />

      <HighlightBoxPanelFooter title={props.title} subtitle={compromiseView.t(props.subtitle_key)} />
    </Flex>
  )
}

const PanelImage = (props: { image: string }) => (
  <Flex
    h={'100%'}
    // w={"100%"}
    justifyContent="center"
    alignItems="center"
    pos="relative"
    // backgroundImage={props.image}
    // backgroundPosition="center"
    // backgroundRepeat="no-repeat"
    // backgroundSize={'cover'}
  >
    <Image
      h={'100%'}
      w={'100%'}
      src={props.image}
      objectFit="cover"
      userSelect="none"
      draggable="false"
    />
  </Flex>
)
