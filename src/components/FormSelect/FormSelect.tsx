import { Select, SelectProps } from '@chakra-ui/react'

export type FormSelectProps = SelectProps

export const FormSelect = (props: FormSelectProps) => {
  return (
    <Select
      borderRadius="0"
      backgroundColor="brown.100"
      border="0"
      color="brown.300"
      h="38px"
      _focus={{
        border: '1px',
        borderColor: 'green.600',
        _placeholder: {
          color: 'transparent'
        }
      }}
      {...props}
    >
      {props.children}
    </Select>
  )
}
