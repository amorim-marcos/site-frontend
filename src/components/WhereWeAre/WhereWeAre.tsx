import { Box, Flex, useMediaQuery } from '@chakra-ui/react'
import { breakpoints } from 'theme/breakpoints'

import { WhereWeArePanelProps } from '@components/WhereWeArePanel/WhereWeArePanel'
import WhereWeArePanel from '@components/WhereWeArePanel'
import Carousel from '@components/Carousel'

export type WhereWeAreProps = {
  panels?: WhereWeArePanelProps[]
}

export const WhereWeAre = ({ panels }: WhereWeAreProps) => {
  const [isMobile] = useMediaQuery(`(max-width: ${breakpoints.lg})`)

  return (
    <Box>
      {isMobile ? (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <Flex as={'carousel' as any} justify="center">
          <Carousel>
            {panels?.map((item, i) => (
              <WhereWeArePanel key={i} {...item} />
            ))}
          </Carousel>
        </Flex>
      ) : (
        <Flex w="100%" wrap="wrap" gap="54px" justify="center">
          {panels?.map((item, i) => (
            <WhereWeArePanel key={i} {...item} />
          ))}
        </Flex>
      )}
    </Box>
  )
}
