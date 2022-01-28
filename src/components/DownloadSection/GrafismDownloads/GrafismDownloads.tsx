import {
  GrafismDownloads1,
  GrafismDownloadsProps as SubGrafismProps
} from './GrafismDownloads1/GrafismDownloads1'
import { GrafismDownloads2 } from './GrafismDownloads2/GrafismDownloads2'
import { GrafismDownloads3 } from './GrafismDownloads3/GrafismDownloads3'
import { Box } from '@chakra-ui/react'

export type GrafismDownloadsProps = {
  grafism: 'type1' | 'type2' | 'type3'
  grafismProps?: SubGrafismProps
}

export const GrafismDownloads = ({
  grafism,
  grafismProps
}: GrafismDownloadsProps) => {
  return grafism === 'type1' ? (
    <Box position="absolute" top={'0'} left={{ base: '0' }}>
      <GrafismDownloads1 width={'100px'} {...grafismProps} />
    </Box>
  ) : grafism === 'type2' ? (
    <Box position="absolute" top={'0'} left={{ base: '0' }} zIndex="base">
      <GrafismDownloads2 width={'100px'} {...grafismProps} />
    </Box>
  ) : (
    <Box position="absolute" top={'0'} left={{ base: '0' }} zIndex="base">
      <GrafismDownloads3 width={'100px'} {...grafismProps} />
    </Box>
  )
}
