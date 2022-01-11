import { Heading, Flex, Box, Text } from '@chakra-ui/react'
import { PlusIndicator } from '../PlusIndicator/PlusIndicator'

export type ProductHeaderProps = {
  title?: string
  subtitle?: string
  description?: string
  headerBgColor?: string
  plusIndicator?: boolean
}

export const ProductHeader = ({
  description,
  title,
  subtitle,
  headerBgColor = '#E0CBA5',
  plusIndicator
}: ProductHeaderProps) => {
  return (
    <Flex
      padding="120px"
      flexDirection="column"
      maxWidth="1920px"
      h="430px"
      bg={headerBgColor}
    >
      {plusIndicator && (
        <Flex width="fit-content" position="relative">
          <Box position="absolute" top="20px" right="-110px">
            <PlusIndicator width="100px" />
          </Box>
          <Heading color="white.100" fontSize="50px">
            {title}
          </Heading>
        </Flex>
      )}
      <Box
        borderBottom="4px solid"
        borderBottomColor="green.600"
        w="87px"
        marginTop="20px"
        marginBottom="20px"
      />
      <Heading fontSize="30px" color="green.900">
        {subtitle}
      </Heading>
      <Text fontSize="20px" color="green.900" width="45%">
        {description}
      </Text>
    </Flex>
  )
}
