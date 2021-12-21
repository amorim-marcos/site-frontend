import { Text, Flex } from '@chakra-ui/react'

export const LanguageBtn = ({ title = 'Btn Title' }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="flex-start"
      height="45px"
      w="100%"
      bg="green.900"
      paddingLeft="20px"
      _hover={{ bg: 'green.600' }}
    >
      <Text color="white.100" variant="header-menu">
        {title}
      </Text>
    </Flex>
  )
}
