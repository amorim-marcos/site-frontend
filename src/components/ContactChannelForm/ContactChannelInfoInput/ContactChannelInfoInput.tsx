import { Input, InputProps } from "@chakra-ui/react"

export type ContactChannelInfoInputProps = InputProps

export const ContactChannelInfoInput = (props: ContactChannelInfoInputProps) => {
  return (
    <Input 
      fontWeight="semibold"
      borderRadius="0"
      backgroundColor="brown.200"
      border="0"
      color="white.100"
      paddingLeft="20px"
      paddingRight="20px"
      paddingTop="12px"
      paddingBottom="12px"
      h="50px"
      {...props}

      _focus={
        {
          border: '0'
        }
      }
      readonly
    />
  )
}
