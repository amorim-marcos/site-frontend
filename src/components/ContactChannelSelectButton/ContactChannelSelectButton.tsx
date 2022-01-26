import { Heading, Flex, Box, Text, Center, Container, Button } from "@chakra-ui/react"
import React from "react"

export type ContactChannelSelectButtonProps = {
  name: string,
  service_code?: string
}
export const ContactChannelSelectButton = ({ name, service_code }: ContactChannelSelectButtonProps) => {
  const [isActive, setIsActive] = React.useState(false)

  return (
    <Button variant={"contact-channel" as any} backgroundColor={(isActive) ? "brown.200" : "brown.150"} color={(isActive) ? "white.100" : "grey.300"}>
      {name}
    </Button>
  )
}
