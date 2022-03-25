import { Heading, Flex, Box, Text, Center, Container } from '@chakra-ui/react'
import ArrowIcon from '@components/Icons/ArrowIcon'

export type BannerCollectionsProps = {
  title: string
  titleColor: string
  imgSrc: string
  ArrowIconColor: string
  onClick?: () => void
}
export const BannerCollections = (props: BannerCollectionsProps) => {
  return (
    <Flex
      data-testid="pattern-info-box-photo"
      bg="white.100"
      cursor="pointer"
      pos="relative"
      zIndex="base"
      onClick={props.onClick}
      _hover={{
        filter: 'brightness(90%)'
      }}
      overflowY="hidden"
      overflowX="hidden"
      backgroundImage={props.imgSrc}
      backgroundPosition={{
        base: '30% center',
        sm: '40% center',
        xl: 'center'
      }}
      backgroundRepeat="no-repeat"
      // backgroundSize={"contain"}
      w="100%"
      // padding={{ base: '8%', sm: '8%', lg: '10%', xl: '8%'}}
      h="100%"
    >
      <Flex
        zIndex={10}
        // ml={{ base: '10%', sm: '2%', lg: '80%', xl: '13%'}}
        // bg="blue"
        flex="1"
        alignItems={'flex-end'}
        direction={{ base: 'row', sm: 'row', lg: 'row', xl: 'row' }}
      >
        <Flex
          // bg="pink"
          alignItems={'center'}
          flex="1"
          justifyContent={'flex-end'}
          m={{
            base: '0% 8% 7% 0%',
            sm: '0% 8% 7% 0%',
            lg: '0% 5% 10% 0%',
            xl: '0% 9% 5% 0%'
          }}
        >
          <Text
            as="h4"
            variant={'h4' as any}
            color={props.titleColor}
            fontWeight="medium"
          >
            {props.title}
          </Text>
          <Box
            padding={{ base: '1%', sm: '1%', lg: '1%', xl: '1%' }}
            // bg="red"
          >
            <ArrowIcon
              width={{ base: '10px', md: '10px', lg: '10px', xl: '12px' }}
              stroke={props.ArrowIconColor}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
