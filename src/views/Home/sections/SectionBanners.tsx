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

  <Box
    bg="green.300"
    w={'100%'}
  >
    <Flex
      justifyContent={'space-between'}
      maxWidth={'1536px'}
      marginX="auto"
      padding={{ base: '0%', sm: '5%', xl: '5%', '2xl': '3% 0%' }}
      // paddingTop = {{ base: '0%', sm: '5%', xl: '0%', '2xl': '0%' }}
      flexDirection={{ base: 'column', lg: 'row' }}
      
      
    >
      <Box
        marginBottom={{ base: '2%', lg: '0' }}
        w={{ base: '100%', lg: '48%' }}
        position={'relative'}
      >
        <PatternInfoPhoto {...banner1} />
      </Box>

      <Box w={{ base: '100%', lg: '48%' }} position={'relative'}>
        <PatternInfoPhoto {...banner2} />
      </Box>
    </Flex>
  
  </Box>
  )
}
