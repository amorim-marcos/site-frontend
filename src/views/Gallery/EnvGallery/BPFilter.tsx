/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'

import { Box, Flex, Button, Text, ButtonProps } from '@chakra-ui/react'

export type BPFilterProps = ButtonProps & {
  name: string
  texture: string
  pattern_image: string
  isSelected?: boolean
  toggleSelect?: Function
}

export const BPFilter = ({
  name,
  texture,
  pattern_image,
  isSelected = false,
  toggleSelect,
  ...props
}: BPFilterProps) => {
  const [displayInfo, setDisplayInfo] = React.useState(false)
  const [selected, setSelected] = React.useState(false)

  React.useEffect(() => {
    setSelected(isSelected)
  }, [isSelected])

  return (
    <Button
      zIndex="5"
      onClick={() => toggleSelect && toggleSelect(selected)}
      onMouseEnter={() => setDisplayInfo(true)}
      onMouseLeave={() => setDisplayInfo(false)}
      height={{ base: '43px', md: '55px' }}
      _focus={{ outline: 'none' }}
      {...props}
    >
      <Box
        boxShadow={selected ? '0px 0px 3px green' : 'none'}
        position="absolute"
        top="0"
        left="0"
        zIndex="1"
        width="100%"
        height="100%"
        borderRadius="5px"
        padding="0"
        margin="0"
        backgroundImage={`url(${pattern_image})`}
        backgroundRepeat="repeat"
        backgroundSize="cover"
      ></Box>
      <Box
        display={!displayInfo && !selected ? 'none' : 'normal'}
        zIndex="2"
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
        backgroundColor="white.100"
        opacity="0.6"
      ></Box>
      <Box
        display={!displayInfo && !selected ? 'none' : 'normal'}
        zIndex="3"
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
      >
        <Flex
          direction="column"
          alignItems="flex-start"
          mt="5px"
          ml="5px"
          color="gray.400"
        >
          <Text
            fontSize={{ base: '11px', md: '16px' }}
            variant={'body-bold' as any}
          >
            {name}
          </Text>
          <Text
            display={{ base: 'none', xs: 'inherit' }}
            fontSize={{ base: '10px', md: '14px' }}
            color="gray.600"
          >
            {texture}
          </Text>
        </Flex>
      </Box>
    </Button>
  )
}
