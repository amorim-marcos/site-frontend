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
  bg={headerBgColor}
  flexDirection="column"
  flex="1"
  alignItems={"center"}
 >
  
    <Flex
      flexDirection="column"
      maxWidth="1536px"
      flex="1"
      w={"100%"}
      bg={headerBgColor}
      // bg="yellow"
      padding={{ base: '5% 0 10% 5%', '2xl': '5% 0 5% 3%' }}
    >

      {/* PRODUCT TITLE */}
      <Flex
        flexDirection={{ base: 'row' }}
        // textAlign="left"
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

      {/* PRODUCT SUBTITLE */}
      <Flex 
        flexDirection="column"
        // bg="yellowgreen"
      >
         <Text as={"h3"}
            variant={"h3"}
            color="green.900"
            fontWeight={'extrabold'}
          >
            {subtitle}
        </Text>
        <Text
          color="green.900"
          w={{ base: '70%', sm: '50%' }}
        >
          {description}
        </Text>
      </Flex>

    </Flex>

  </Flex>
  )
}
