import React from "react"
import { Box, chakra, useTab, useStyles } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"

const StyledTab = chakra('button', { themeKey: 'Tabs.Tab' })

export const TrajectoryCarouselTab = React.forwardRef((props, ref) => {
  // 2. Reuse the `useTab` hook
  const tabProps = useTab({ ...props, ref })
  const isSelected = !!tabProps['aria-selected']

  return (
    <StyledTab 
      background={(isSelected) ? '#FFFFFF' : '#F1E0C4'} 
      {...tabProps}
    >
      <Text variant="body-bold">{tabProps.children}</Text>
    </StyledTab>
  )
})