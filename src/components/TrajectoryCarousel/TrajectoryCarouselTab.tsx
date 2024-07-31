import React from 'react'
import { chakra, Flex, useTab } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

const StyledTab = chakra('button')

const TrajectoryCarouselTab = React.forwardRef((props: any, ref: any) => {
  // 2. Reuse the `useTab` hook
  const tabProps = useTab({ ...props, ref })
  const isSelected = !!tabProps['aria-selected']

  const tabStyleIndex = props.tabStyleIndex ?? 0

  return (
    <StyledTab
      marginLeft="6px"
      backgroundColor={isSelected ? 'white.100' : 'brown.150'}
      backgroundImage={
        isSelected
          ? `url("/trajectory-tabs/selected-lines/${tabStyleIndex}.svg")`
          : `url("/trajectory-tabs/white-lines/${tabStyleIndex}.svg")`
      }
      _hover={{
        backgroundImage: `url("/trajectory-tabs/white-lines/${tabStyleIndex}.svg")`,
        backgroundColor: 'brown.200',
        color: 'green.600'
      }}
      width={{ base: '100px', sm: '100px', lg: '160px', xl: '210px' }}
      height={{ base: '35px', sm: '40px', lg: '60px', xl: '70px' }}
      {...tabProps}
    >
      <Text variant={'h4' as any} color="brown.300">
        {tabProps.children}
      </Text>
    </StyledTab>
  )
})

TrajectoryCarouselTab.displayName = 'TrajectoryCarouselTab'
export { TrajectoryCarouselTab }
