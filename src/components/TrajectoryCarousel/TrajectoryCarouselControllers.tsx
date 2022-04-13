import { Box, Flex, Text, Image, useMediaQuery, Button } from '@chakra-ui/react'
import Arrow from '@components/Arrow'
import { breakpoints } from 'theme/breakpoints'
import { MouseEvent } from 'react'

export type TrajectoryCarouselControllersProps = {
  nextTab: (event: MouseEvent) => void
  previousTab: (event: MouseEvent) => void
}

export const TrajectoryCarouselControllers = ({
  nextTab,
  previousTab
}: TrajectoryCarouselControllersProps) => {
  const [isMobile] = useMediaQuery(`(max-width: ${breakpoints.lg})`)

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      mt={{
        base: '0',
        md: '-50px'
      }}
    >
      <Button
        onClick={previousTab}
        variant="no-border"
        background="gray.300"
        color="gray.150"
        w={{ base: '40px', sm: '45px', lg: '50px', xl: '55px' }}
        h={{ base: '40px', sm: '45px', lg: '50px', xl: '55px' }}
        _hover={{
          background: 'green.550',
          color: 'white.100'
        }}
      >
        {isMobile ? (
          <Arrow width="5" height="5" direction="left" />
        ) : (
          <Arrow width="22" height="30" direction="left" />
        )}
      </Button>
      <Button
        onClick={nextTab}
        variant="no-border"
        background="gray.300"
        color="gray.150"
        w={{ base: '40px', sm: '45px', lg: '50px', xl: '55px' }}
        h={{ base: '40px', sm: '45px', lg: '50px', xl: '55px' }}
        _hover={{
          background: 'green.550',
          color: 'white.100'
        }}
      >
        {isMobile ? (
          <Arrow width="5" height="5" direction="right" />
        ) : (
          <Arrow width="22" height="30" direction="right" />
        )}
      </Button>
    </Flex>
  )
}
