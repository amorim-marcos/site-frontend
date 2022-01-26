import { Heading, Flex, Box, Text, Center, Container, Button, ButtonProps } from "@chakra-ui/react"
import React from "react"

export type ContactChannelSelectButtonProps = ButtonProps & {
  name: string,
  service_code?: string
  setChannel?: Function
  unsetChannel?: Function
  onClick: (isActive:boolean) => void
  isActive: Boolean
}
export const ContactChannelSelectButton = ({ name, service_code, setChannel, unsetChannel, isActive, onClick, ...props }: ContactChannelSelectButtonProps) => {
  const handleOnClick = () => {
    onClick(isActive)
  }

  return (
    <Button onClick={handleOnClick} variant={"contact-channel" as any} backgroundColor={(isActive) ? "brown.200" : "brown.150"} color={(isActive) ? "white.100" : "grey.300"} {...props}>
      {name}
    </Button>
  )
}
