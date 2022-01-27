import { Textarea, TextareaProps } from "@chakra-ui/react"

export type FormTextAreaProps = TextareaProps

export const FormTextArea = (props: FormTextAreaProps) => {
  return (
    <Textarea
      backgroundColor="brown.100"
      border="0"
      color="brown.300"
      minH="250px"
      _placeholder={
        {
          color: "brown.300",
          fontSize: "18px"
        }
      }
      _focus={
        {
          border: '1px',
          borderColor: 'green.600',
          _placeholder: {
            color: 'transparent'
          }
        }
      }
      {...props}
    >
      {props.children}
    </Textarea>
  )
}
