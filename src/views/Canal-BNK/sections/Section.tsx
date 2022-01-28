import { Box, Flex, Text, FlexProps, Link } from '@chakra-ui/react'
import Arrow from '@components/Arrow'

interface SectionProps extends FlexProps {
  title: string
  seeMore?: {
    text?: string
    link?: string
  }
}

export const Section = (props: SectionProps) => {
  const { title, seeMore, children, ...rest } = props

  return (
    <Flex direction="column" {...rest}>
      <Flex
        align="center"
        justify="space-between"
        pl="110px"
        pr="115px"
        w="100%"
      >
        <Flex data-testid="section-title" gap="30px" direction="column">
          <Text
            as={'h2' as any}
            fontWeight="bold"
            fontSize="50px"
            letterSpacing="-1px"
            color="green.800"
          >
            {title}
          </Text>

          <Box border="3px solid" borderColor="green.600" w="87px" />
        </Flex>
        {seeMore && (
          <Flex align="center" justify="center" gap="14px">
            <Link
              href={seeMore?.link}
              letterSpacing="-0.4px"
              fontSize="20px"
              color="green.500"
            >
              {seeMore?.text}
            </Link>
            <Arrow width="11px" height="16px" color="green.500" />
          </Flex>
        )}
      </Flex>
      {children}
    </Flex>
  )
}
