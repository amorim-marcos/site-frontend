import { Heading, Flex, Box, Text, Center, Container, Button, ButtonProps } from "@chakra-ui/react"
import React from "react"

export type ContactChannelSelectButtonProps = ButtonProps & {
  name: string,
  service_code?: string
  setChannel?: Function
  unsetChannel?: Function
  onClick?: (isActive:boolean) => void
  isActive?: Boolean
}
export const ContactChannelSelectButton = ({ name, service_code, setChannel, unsetChannel, isActive = false, onClick, ...props }: ContactChannelSelectButtonProps) => {
  const [height, setHeight] = React.useState<number|null>(0)
  const [width, setWidth] = React.useState<number|null>(0)
  const ref = React.useRef(null)

  React.useEffect(() => {
    // @ts-ignore
    let w = ref.current.clientHeight
    // @ts-ignore
    let h = ref.current.clientWidth

    if(w && h){
      setHeight(w)
      setWidth(h)
    }
  })

  const handleOnClick = () => {
    if(onClick) onClick(isActive)
  }

  return (
    <>
    <Button ref={ref} onClick={handleOnClick} variant={"contact-channel" as any} backgroundColor={(isActive) ? "brown.200" : "brown.150"} color={(isActive) ? "white.100" : "grey.300"} {...props}>
      {name}
    </Button>
    </>

  )
}
