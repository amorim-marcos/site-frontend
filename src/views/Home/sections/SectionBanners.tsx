import { Flex, Box } from '@chakra-ui/react'
import {
  PatternInfoPhoto,
  PatternInfoPhotoProps
} from '@components/PatternInfoPhoto/PatternInfoPhoto'
import { useState } from 'react'

export type SectionBannersProps = {
  banner1: PatternInfoPhotoProps
  banner2: PatternInfoPhotoProps
}
export const SectionBanners = ({ banner1, banner2 }: SectionBannersProps) => {
  return (
    <Flex
      justifyContent={'space-between'}
      maxWidth={'1920px'}
      marginX="auto"
      bg="green.250"
      padding="5%"
      flexDirection={{ base: 'column', lg: 'row' }}
    >
      <Box
        marginBottom={{ base: '5%', lg: '0' }}
        w={{ base: '100%', lg: '48%' }}
        position={'relative'}
      >
        <PatternInfoPhoto {...banner1} />
      </Box>

      <Box w={{ base: '100%', lg: '48%' }} position={'relative'}>
        <PatternInfoPhoto {...banner2} />
      </Box>
    </Flex>
  )
}
