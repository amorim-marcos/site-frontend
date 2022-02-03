import { Heading, Flex, Box, Text, Center, Container } from "@chakra-ui/react"
import { CertificationsIcon, ReportsIcon } from "@components/Icons"

export type PatternCertificationProps = {
  title: string
  titleInitialColor?: string
  iconName: string
  iconInitialColor1: string
  iconInitialColor2?: string
}
export const PatternCertification = ({ 
  title,
  titleInitialColor,
  iconName,
  iconInitialColor1,
  iconInitialColor2,
 }: PatternCertificationProps) => {
  return (
    <Flex
      flex='1' 
      bg='rgba(255,255,255, 0.1)'
      w={"90%"}
      alignContent={"center"}
      alignItems={"center"}
      justifyContent={"flex-start"}
      _hover={{ filter: 'brightness(0.6)' }}
      cursor="pointer"
      // margin={{ base: '2%', sm: '2%', lg: '2%', xl: '2%'}}
      padding={{ base: '2%', sm: '2%', lg: '2%', xl: '2%'}}
    >
      <Box
        // bg='red'
        alignContent={"center"}
      >
        
        {(iconName === 'certification' &&
          <CertificationsIcon
            height={{ base: '30px', sm: '35px', lg: '35px', xl: '47px'}}
            width={{ base: '30px', sm: '35px', lg: '35px', xl: '47px'}}
            stroke1={iconInitialColor1}
            stroke2={iconInitialColor2}
          />)
          || (iconName === 'reports' &&
          <ReportsIcon 
            height = {{ base: '30px', sm: '30px', lg: '30px', xl: '40px'}}
            width = {{ base: '30px', sm: '35px', lg: '30px', xl: '40px'}}
            stroke1={iconInitialColor1}
          />)
        }
      
      </Box>
      <Box
        // bg='blue'
        margin={{ base: '2%', sm: '3%', lg: '5%', xl: '5%'}}
      >
        <Text
          variant = {"h5" as any}
          fontWeight= 'bold'
          color={titleInitialColor}
        >{title}</Text>
      </Box>

    </Flex>
  )
}
