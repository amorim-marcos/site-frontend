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
      padding="5%"
      flexDirection="column"
      maxWidth="1920px"
      bg={headerBgColor}
      align={{ base: 'center', sm: 'flex-start' }}
      paddingBottom={{ base: '60px', sm: '5%' }}
    >
      <Flex
        width="fit-content"
        position="relative"
        align={{ base: 'center', sm: 'flex-start' }}
      >
        {plusIndicator && (
          <Box
            position="absolute"
            top={{
              base: '2px',
              sm: '6px',
              md: '10px',
              lg: '14px',
              xl: '16px',
              '2xl': '20px'
            }}
            right={{
              base: '-60px',
              sm: '-70px',
              md: '-80px',
              lg: '-90px',
              xl: '-100px',
              '2xl': '-110px'
            }}
          >
            <PlusIndicator
              width={{
                base: '50px',
                sm: '60px',
                md: '70px',
                lg: '80px',
                xl: '90px',
                '2xl': '100px'
              }}
            />
          </Box>
        )}
        <Heading
          color="white.100"
          fontSize={{
            base: '30px',
            sm: '25px',
            md: '30px',
            lg: '35px',
            xl: '40px',
            '2xl': '50px'
          }}
          zIndex="docked"
        >
          {title}
        </Heading>
      </Flex>

      <Box
        borderBottom="solid"
        borderBottomWidth={{ base: '2px', sm: '4px' }}
        borderBottomColor="green.600"
        w="87px"
        marginTop={{
          base: '10px',
          sm: '12px',
          md: '14px',
          lg: '16px',
          xl: '18px',
          '2xl': '20px'
        }}
        marginBottom="20px"
      />
      <Box>
        <Heading
          fontSize={{
            base: '15px',
            sm: '11px',
            md: '14px',
            lg: '18px',
            xl: '22px',
            '2xl': '30px'
          }}
          color="green.900"
          zIndex="docked"
        >
          {subtitle}
        </Heading>
      </Box>
      <Text
        fontSize={{
          base: '7px',
          sm: '8px',
          md: '11px',
          lg: '14px',
          xl: '17px',
          '2xl': '20px'
        }}
        color="green.900"
        width={{ base: '100%', sm: '45%' }}
        zIndex="docked"
      >
        {description}
      </Text>
    </Flex>
  )
}
