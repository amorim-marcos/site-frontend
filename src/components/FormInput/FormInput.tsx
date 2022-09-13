import { Input, InputProps } from '@chakra-ui/react'

export type FormInputProps = InputProps

export const FormInput = (props: FormInputProps) => {
  return (
    <Input
      borderRadius="0"
      backgroundColor="brown.100"
      border="0"
      color="brown.400"
      paddingLeft="20px"
      paddingRight="20px"
      paddingTop="12px"
      paddingBottom="12px"
      h="38px"
      _placeholder={{
        color: 'brown.300',
        fontSize: '18px'
      }}
      _focus={{
        border: '1px',
        borderColor: 'green.600',
        _placeholder: {
          color: 'transparent'
        }
      }}
      {...props}
    />
  )
}
