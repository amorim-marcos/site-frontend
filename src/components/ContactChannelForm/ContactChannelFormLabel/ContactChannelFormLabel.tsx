import { FormLabel, FormLabelProps } from "@chakra-ui/react"

export type ContactChannelFormLabelProps = FormLabelProps
export const ContactChannelFormLabel = (props: ContactChannelFormLabelProps) => {
  return (
    <FormLabel
      fontSize="16px"
      color="green.600"
      mb="0"
      {...props}
    >
      {props.children}
    </FormLabel>
  )
}
