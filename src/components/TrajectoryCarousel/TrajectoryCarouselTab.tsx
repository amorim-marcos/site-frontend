import React from "react"
import { chakra, useTab } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"

const StyledTab = chakra('button')

export const TrajectoryCarouselTab = React.forwardRef((props:any, ref:any) => {
  // 2. Reuse the `useTab` hook
  const tabProps = useTab({ ...props, ref })
  const isSelected = !!tabProps['aria-selected']

  let tabStyleIndex = props.tabStyleIndex ?? 0

  return (
    <StyledTab 
      marginLeft="6px"
      backgroundColor={(isSelected) ? 'white.100' : 'brown.150'} 
      backgroundImage={(isSelected) ? `url("/trajectory-tabs/selected-lines/${tabStyleIndex}.svg")` : `url("/trajectory-tabs/white-lines/${tabStyleIndex}.svg")`}
      _hover={{
          backgroundImage: `url("/trajectory-tabs/white-lines/${tabStyleIndex}.svg")`,
          backgroundColor: "brown.200",
          color: "green.600",
      }}
      width="214px"
      height="69px"
      {...tabProps}
    >
      <Text variant={"body-bold" as any}>{tabProps.children}</Text>
    </StyledTab>
  )
})