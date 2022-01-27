import { Heading, Flex, Box, Text, Center, Container, Button, ButtonProps } from "@chakra-ui/react"
import { AttentionIcon } from "@components/Icons"
import AttentionIconStories from "@components/Icons/AttentionIcon/AttentionIcon.stories"
import React from "react"

export type ContactChannelSelectButtonProps = ButtonProps & {
  name: string,
  attention_required?: boolean,
  service_code?: string
  setChannel?: Function
  unsetChannel?: Function
  onClick?: (isActive:boolean) => void
  onFinishRender?: (width:number, height:number) => void
  isActive?: Boolean
}
export const ContactChannelSelectButton = ({ name, attention_required = false, service_code, setChannel, unsetChannel, isActive = false, onClick, onFinishRender = () => {}, ...props }: ContactChannelSelectButtonProps) => {
  const [height, setHeight] = React.useState<number|null>(0)
  const [width, setWidth] = React.useState<number|null>(0)
  const ref = React.useRef(null)

  const handleOnClick = () => {
    if(onClick) onClick(isActive)
  }

  React.useEffect(() => {
    // @ts-ignore
    let h = ref.current.clientHeight
    // @ts-ignore
    let w = ref.current.clientWidth

    if(w && h){
      setHeight(h)
      setWidth(w)
    }
  })

  React.useEffect(() => {
    if(width && height && width > 0 && height > 0) onFinishRender(width, height)
  }, [width, height])

  return (
    <>
    <Button 
      ref={ref} 
      onClick={handleOnClick} 
      variant={"contact-channel" as any} backgroundColor={(isActive) ? "brown.200" : "brown.150"} color={(isActive) ? "white.100" : "grey.300"} 
      {...props}
    >
      {name}
      {(attention_required) ? <AttentionIcon position="absolute" top="-11px" right="5px" /> : null}
    </Button>
    </>

  )
}
