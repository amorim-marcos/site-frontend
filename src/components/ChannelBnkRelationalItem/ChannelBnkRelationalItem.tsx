import { Image, Flex, FlexProps, Box, Text } from '@chakra-ui/react'
import ArrowIcon from '@components/Icons/ArrowIcon'
import { useState } from 'react'

export interface ChannelBnkRelationalItemProps extends FlexProps {
  category: string
  title: string
  color: string
  urlImage: string
}
export const ChannelBnkRelationalItem = ({
  category,
  urlImage,
  title,
  color,
  ...props
}: ChannelBnkRelationalItemProps) => {
  const [mouseDown, setMouseDown] = useState(false)
  return (
    <Flex
      onMouseEnter={() => setMouseDown(true)}
      onMouseLeave={() => setMouseDown(false)}
      flexDirection="column"
      marginRight={{ base: '40px', md: '0' }}
      w={{ base: '60vw', md: '22%' }}
      minWidth={{ base: '60vw', sm: '50vw', md: '0' }}
      {...props}
      cursor="pointer"
    >
      <Box h="50%" w="100%">
        <Image h="100%" w="100%" objectFit="cover" src={urlImage} />
      </Box>
      <Flex
        w="100%"
        bg="white.100"
        flexDirection="column"
        justifyContent="space-between"
        h="50%"
      >
        <Flex padding="8%" flexDirection="column">
          <Flex alignItems="center">
            <ArrowIcon stroke={color} width="5%" />
            <Text marginLeft="3%" color="gray.400">
              {category}
            </Text>
          </Flex>
          <Text
            marginTop="8%"
            variant={'breadcrumbs-selected' as any}
            color="green.800"
          >
            {title}
          </Text>
        </Flex>
        <Box
          transition={'0.5s'}
          width={mouseDown ? '80%' : '50%'}
          borderBottom="solid"
          borderBottomWidth={{
            base: '1px',
            sm: '2px',
            md: '3px',
            lg: '4px',
            xl: '5px',
            '2xl': '6px'
          }}
          borderBottomColor={color}
          marginLeft="10%"
        />
      </Flex>
    </Flex>
  )
}
