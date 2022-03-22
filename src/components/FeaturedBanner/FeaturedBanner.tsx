import { Heading, Flex, Box, Text, Image, useBoolean } from '@chakra-ui/react'
import { useState } from 'react'
import { ResponsiveCss } from 'types/responsive'

export type FeaturedBannerProps = {
  title?: string
  srcImage?: string
  invert?: boolean
}

function reverse(invert: boolean) {
  if (invert) {
    return {
      base: 'column',
      lg: 'row-reverse'
    }
  }
  return { base: 'column', lg: 'row' }
}

export const FeaturedBanner = ({
  title,
  srcImage,
  invert = false
}: FeaturedBannerProps) => {
  const [hover, setHover] = useState(false)
  return (
    <Flex
      // maxWidth={{ base: '320px', sm: '400px', lg: '700px', xl: '800px' }}
      w={{ base: '80%', sm: '60%', lg: '95%' }}
      marginX="auto"
      alignItems="center"
      justifyContent="center"
      position="relative"
      zIndex="base"
      overflowY="hidden"
      overflowX="hidden"
      bg="#EBEDE9"
      margin={{
        base: '3% 5% 3% 5%',
        sm: '5% 5% 5% 5%',
        lg: '3%',
        xl: '4% 4% 0 4%'
      }}
      h={{ base: '300px', sm: '400px', lg: '135px', xl: '260px' }}
      onMouseEnter={() => {
        setTimeout(() => setHover(true), 300)
      }}
      onMouseLeave={() => setHover(false)}
    >
      <Flex
        // bg='blue.100'
        direction={reverse(invert) as any}
        alignItems={'center'}
        w="100%"
        h="100%"
      >
        {/* BOX 1 */}
        <Box
          height={{ base: '90%', lg: '100%' }}
          // bg='pink.100'
          flex="1"
          overflow={'hidden'}
          h="100%"
          w={{ base: '100%', lg: '25%' }}
          transition="0.3s"
          position={'relative'}
          border="1px solid red"
          // justifyItems={"center"}
          // margin = {{ base: '5% 5% 5% 5%', sm: '5% 5% 5% 5%', lg: '5% 2% 5% 5%', xl: '5% 2% 5% 5%'}}
        >
          <Box
            position={'absolute'}
            marginLeft="auto"
            marginRight="auto"
            textAlign={'center'}
            left="0px"
            right="0px"
            transition={'0.3s'}
            w="110%"
            height={'110%'}
            // w={hover ? '105%' : '100%'}
            // height={hover ? '105%' : '100%'}
            backgroundImage={srcImage}
            backgroundSize={'cover'}
            backgroundPosition="center center"
            backgroundRepeat="no-repeat"
            // backgroundAttachment="fixed"
          />
          {/* <Image
            transformOrigin={'0.5s'}
            h={hover ? '120%' : '100%'}
            w={hover ? '120%' : '100%'}
            objectPosition="50% 50%"
            objectFit="cover"
            src={srcImage}
          /> */}
        </Box>
        {/* BOX 2 */}
        <Box
          margin={{
            base: '5% 5% 5% 5%',
            sm: '5% 5% 5% 5%',
            lg: '5% 7% 5% 5%',
            xl: '5% 5% 5% 5%'
          }}
          // bg='tomato.100'
          // flex="1"
          // w="50%"
          // justifyItems={"center"}
          w={{ base: 'auto', lg: '50%' }}
          textAlign={{ base: 'center', lg: 'left' }}
        >
          <Text
            as="h4"
            variant={'h4' as any}
            fontWeight="bold"
            textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left' }}
          >
            {title}
          </Text>
        </Box>
      </Flex>
    </Flex>
  )
}
