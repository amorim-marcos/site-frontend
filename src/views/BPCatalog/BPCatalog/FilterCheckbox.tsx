/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'

import { Text, Image, Button, Checkbox, BoxProps } from '@chakra-ui/react'

export type FilterCheckBox = BoxProps & {
  title: string
  code: string
  background_image: string
  onCheck?: Function
  isChecked: boolean
}

export type FilterCheckBoxProps = FilterCheckBox

export const FilterCheckbox = ({
  title,
  code,
  background_image,
  onCheck,
  isChecked,
  ...props
}: FilterCheckBoxProps) => {
  const [checked, setChecked] = React.useState(false)
  const [value] = React.useState(code)

  React.useEffect(() => {
    setChecked(isChecked)
  }, [isChecked])

  return (
    <Button
      background="transparent"
      zIndex="3"
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onClick={() => {
        if (onCheck) onCheck(checked, value)
      }}
      position="relative"
      color="green.900"
      justifyContent="start"
      variant="link"
      borderRadius="5px"
      height="60px"
      minW="250px"
      {...props}
      padding="28px"
      overflow="hidden"
    >
      <Checkbox
        onClickCapture={(e) => {
          e.preventDefault()
          e.stopPropagation()
          if (onCheck) onCheck(checked, value)
        }}
        padding="0"
        iconColor="green.600"
        border="1px solid"
        borderColor="green.900"
        borderRadius="3px"
        colorScheme="white.100"
        isChecked={isChecked}
        zIndex="2"
        mr="5px"
      />
      <Text fontWeight="600" fontSize={{ base: '17px', md: '19px' }} zIndex="2">
        {title}
      </Text>
      <Image
        position="absolute"
        top="0"
        right="0"
        zIndex="1"
        src={background_image}
      ></Image>
    </Button>
  )
}
