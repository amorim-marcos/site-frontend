import React from "react"
import { chakra, useTab } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"

const StyledTab = chakra('button')

export const TrajectoryCarouselTab = React.forwardRef((props:any, ref:any) => {
  // 2. Reuse the `useTab` hook
  const tabProps = useTab({ ...props, ref })
  const isSelected = !!tabProps['aria-selected']

  return (
    <StyledTab 
      m={1}
      background={(isSelected) ? '#FFFFFF' : '#F1E0C4'} 
      width="214px"
      height="69px"
      {...tabProps}
    >
      <Text variant="body-bold">{tabProps.children}</Text>
    </StyledTab>
  )
})