import React from "react"
import { chakra, useTab } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"

const StyledTab = chakra('button')

export const TrajectoryCarouselTab = React.forwardRef((props:any, ref:any) => {
  // 2. Reuse the `useTab` hook
  const tabProps = useTab({ ...props, ref })
  const isSelected = !!tabProps['aria-selected']

  let styleIndex = props.styleIndex ?? 0

  return (
    <StyledTab 
      m={1}
      backgroundColor={(isSelected) ? 'white.100' : 'brown.150'} 
      backgroundImage={(isSelected) ? `url("/trajectory-tabs/selected-lines/${styleIndex}.svg")` : `url("/trajectory-tabs/white-lines/${styleIndex}.svg")`}
      _hover={{
          backgroundImage: `url("/trajectory-tabs/white-lines/${styleIndex}.svg")`,
          backgroundColor: "brown.200",
          color: "green.600",
      }}
      width="214px"
      height="69px"
      {...tabProps}
    >
      <Text variant="body-bold">{tabProps.children}</Text>
    </StyledTab>
  )
})