/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'

import { Checkbox, Button, Text, BoxProps } from '@chakra-ui/react'

export type FilterCheckBoxProps = BoxProps & {
  title: string
  code: string
  isChecked?: boolean
  onCheck?: Function
}

export const FilterCheckbox = ({
  title,
  code,
  isChecked = false,
  onCheck,
  ...props
}: FilterCheckBoxProps) => {
  const [checked, setChecked] = React.useState(isChecked)

  React.useEffect(() => {
    setChecked(isChecked)
  }, [isChecked])

  return (
    <Button
      background={checked ? 'green.400' : 'green.300'}
      _hover={{}}
      _focus={{ outline: 'none' }}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onClick={() => onCheck && onCheck(checked, code)}
      position="relative"
      color="green.900"
      justifyContent="start"
      variant="link"
      borderRadius="5px"
      height={{ base: '38px', md: '60px' }}
      minW={{ base: 'auto', md: '250px' }}
      {...props}
      padding={{ base: '5px', md: '28px' }}
      overflow="hidden"
    >
      <Checkbox
        display={{ base: 'none', md: 'inherit' }}
        onClickCapture={(e) => {
          e.preventDefault()
          e.stopPropagation()
          if (onCheck) onCheck(checked, code)
        }}
        padding="0"
        iconColor="green.600"
        border="1px solid"
        borderColor="green.900"
        borderRadius="3px"
        colorScheme="white.100"
        isChecked={checked}
        zIndex="2"
        mr="5px"
      />
      <Text
        fontWeight="600"
        fontSize={{ base: '15px', md: '19px' }}
        color="green.900"
        zIndex="2"
      >
        {title}
      </Text>
    </Button>
  )
}
