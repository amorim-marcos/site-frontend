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
 
 <Box
    bg="red"
 >
    <Flex
      padding="5%"
      flexDirection="column"
      maxWidth="1536px"
      bg={headerBgColor}
      align={{ base: 'center', sm: 'flex-start' }}
      paddingBottom={{ base: '30vh', sm: '5%' }}
    >
      <Flex
        width="fit-content"
        position="relative"
        align={{ base: 'center', sm: 'flex-start' }}
        justifyContent="flex-end"
        flexDirection={{ base: 'row-reverse', sm: 'row' }}
        textAlign="left"
      >
        {plusIndicator && (
          <Box
            position={'absolute'}
            top={{
              base: '30px',
              sm: '6px',
              md: '10px',
              lg: '14px',
              xl: '16px',
              '2xl': '20px'
            }}
            left={{
              base: '200px',
              sm: '102%'
            }}
          >
            <PlusIndicator
              width={{
                base: '80px',
                sm: '60px',
                md: '70px',
                lg: '80px',
                xl: '90px',
                '2xl': '100px'
              }}
            />
          </Box>
        )}
        <Text as={"h1"}
          variant={"h1"}
          zIndex="docked"
          color="white.100"
          width={plusIndicator ? { base: '68%', sm: 'auto' } : 'auto'}
        >
          {title}
        </Text>
      </Flex>

      <Box
        borderBottom="solid"
        borderBottomWidth={{ base: '2px', sm: '3px', lg: '4px' }}
        borderBottomColor="green.600"
        w="87px"
        marginTop={{
          base: '10px',
          sm: '12px',
          md: '14px',
          lg: '16px',
          xl: '18px'
        }}
        marginBottom="20px"
      />
      <Flex flexDirection="column">
        <Box>
         <Text as={"h2"}
            variant={"h2"}
            color="green.900"
            // zIndex="docked"
            marginBottom={{ base: '15px', sm: '0px' }}
          >
            {subtitle}
          </Text>
        </Box>
        <Text
          color="green.900"
          width={{ base: '100%', sm: '65%' }}
          // zIndex="docked"
        >
          {description}
        </Text>
      </Flex>
    </Flex>

  </Box>
  )
}
