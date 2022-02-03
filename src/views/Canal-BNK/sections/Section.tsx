import { Box, Flex, Text, FlexProps, Link } from '@chakra-ui/react'
import Arrow from '@components/Arrow'
import useMobile from 'hooks/useMobile'

interface SectionProps extends FlexProps {
  title?: string
  seeMore?: {
    text?: string
    link?: string
  }
}

export const Section = (props: SectionProps) => {
  const { title, seeMore, children, ...rest } = props
  const { isMobile } = useMobile(1024)

  return (
    <Flex direction="column" pb={{ base: '58px', lg: '0' }} {...rest}>
      <Flex
        align="center"
        justify={{ base: 'center', lg: 'space-between' }}
        pl={{ lg: '110px' }}
        pr={{ lg: '115px' }}
        w="100%"
      >
        {title ? (
          <Flex
            data-testid="section-title"
            gap="30px"
            direction="column"
            align={{ base: 'center', lg: 'flex-start' }}
          >
            <Text
              as="h2"
              fontWeight="bold"
              fontSize={{ base: '42px', lg: '50px' }}
              letterSpacing="-1px"
              color="green.800"
            >
              {title}
            </Text>

            <Box border="3px solid" borderColor="green.600" w="87px" />
          </Flex>
        ) : (
          <Box />
        )}

        {!isMobile && seeMore && <SeeMore {...seeMore} />}
      </Flex>

      {children}

      {isMobile && seeMore && (
        <Flex pt="19px" w="100%" justify="flex-end">
          <SeeMore {...seeMore} />
        </Flex>
      )}
    </Flex>
  )
}

const SeeMore = (props: { text?: string; link?: string }) => (
  <Flex alignSelf="flex-end" align="center" justify="center" gap="14px">
    <Link
      href={props?.link}
      letterSpacing="-0.4px"
      fontSize={{ base: '16px', lg: '20px' }}
      color="green.500"
    >
      {props?.text}
    </Link>
    <Arrow
      width={{ base: '8px', lg: '11px' }}
      height={{ base: '11px', lg: '16px' }}
      color="green.500"
    />
  </Flex>
)
