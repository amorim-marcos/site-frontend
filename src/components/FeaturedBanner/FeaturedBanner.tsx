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
      justifyContent={{ base: 'space-between', lg: 'center' }}
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
      h={{ base: '300px', sm: '400px', lg: '135px', xl: '200px' }}
      onMouseEnter={() => {
        setTimeout(() => setHover(true), 300)
      }}
      onMouseLeave={() => setHover(false)}
    >
      <Flex
        // bg='blue.100'
        direction={reverse(invert) as any}
        alignItems={'center'}
        justifyContent="space-between"
        w="100%"
        h={{ base: '100%', lg: '100%' }}
      >
        {/* BOX 1 */}
        <Flex
          height={{ base: '200px', lg: '100%' }}
          // bg='pink.100'
          // flex="1"
          overflow={'hidden'}
          h={{ base: '70%', sm: '85%', lg: '100%' }}
          w={{ base: '100%', lg: '40%' }}
          transition="0.3s"
          position={'relative'}

          // justifyItems={"center"}
          // margin = {{ base: '5% 5% 5% 5%', sm: '5% 5% 5% 5%', lg: '5% 2% 5% 5%', xl: '5% 2% 5% 5%'}}
        >
          <Image
            position={'absolute'}
            // marginLeft="auto"
            // marginRight="auto"
            margin="auto"
            textAlign={'center'}
            left="0px"
            right="0px"
            bottom={'0'}
            top="0"
            transition={'0.5s'}
            // w="110%"
            // height={'110%'}
            w={hover ? '110%' : '100%'}
            height={hover ? '110%' : '100%'}
            // backgroundImage={srcImage}
            src={srcImage}
            objectFit="cover"
            // backgroundSize={'cover'}
            // backgroundPosition="center center"
            // backgroundRepeat="no-repeat"
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
        </Flex>
        {/* BOX 2 */}
        <Box
          // margin={{
          //   base: '5% 5% 5% 5%',
          //   sm: '5% 5% 5% 5%',
          //   lg: '5% 7% 5% 5%',
          //   xl: '5% 5% 5% 5%'
          // }}
          // bg='tomato.100'
          // flex="1"
          // w="50%"
          // justifyItems={"center"}
          w={{ base: 'auto', lg: '50%' }}
          textAlign={{ base: 'center', lg: 'left' }}
          // marginLeft={invert ? '7%' : '0'}
          margin={{ base: 'auto auto', lg: '0 auto' }}
        >
          <Text
            as="h4"
            variant={'h4' as any}
            fontWeight="bold"
            textAlign={{ base: 'center', sm: 'left' }}
          >
            {title}
          </Text>
        </Box>
      </Flex>
    </Flex>
  )
}
