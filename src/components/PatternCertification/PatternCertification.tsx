import { Heading, Flex, Box, Text, Center, Container } from '@chakra-ui/react'
import { CertificationsIcon, ReportsIcon } from '@components/Icons'
import { useState } from 'react'
import { colors } from 'theme/colors'

export type PatternCertificationProps = {
  title: string
  titleInitialColor?: string
  iconName: string
  iconInitialColor1: string
  iconInitialColor2?: string
  onClick?: () => void
}
export const PatternCertification = ({
  title,
  titleInitialColor,
  iconName,
  iconInitialColor1,
  iconInitialColor2,
  onClick
}: PatternCertificationProps) => {
  const [hover, setHover] = useState(false)
  return (
    <Flex
      onClick={onClick}
      bg="rgba(255,255,255, 0.1)"
      w={{ base: '90%' }}
      alignContent={'center'}
      alignItems={'center'}
      justifyContent={'center'}
      // _hover={{ filter: 'brightness(0.6)' }}
      cursor="pointer"
      // border="1px solid red"
      // margin={{ base: '2%', sm: '2%', lg: '2%', xl: '2%'}}
      // padding={{ base: '2%' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box
        // bg='red'
        alignContent={'center'}
        marginRight={{ base: '10px', sm: '0' }}
      >
        {(iconName === 'certification' && (
          <CertificationsIcon
            height={{ base: '30px', sm: '35px', lg: '35px', xl: '47px' }}
            width={{ base: '30px', sm: '35px', lg: '35px', xl: '47px' }}
            stroke1={hover ? 'green.600' : iconInitialColor1}
            stroke2={hover ? 'green.600' : iconInitialColor2}
          />
        )) ||
          (iconName === 'reports' && (
            <ReportsIcon
              height={{ base: '30px', sm: '30px', lg: '30px', xl: '40px' }}
              width={{ base: '30px', sm: '35px', lg: '30px', xl: '40px' }}
              stroke1={hover ? colors.green[600] : iconInitialColor1}
            />
          ))}
      </Box>
      <Box
        // bg='blue'
        margin={{ base: '2%', sm: '3%', lg: '4%' }}
      >
        <Text
          variant={'h4' as any}
          fontWeight="bold"
          color={hover ? 'green.600' : titleInitialColor}
        >
          {title}
        </Text>
      </Box>
    </Flex>
  )
}
