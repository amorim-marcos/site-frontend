import { Heading, Flex, Box, Text, LayoutProps, Button } from "@chakra-ui/react"
import { EarthIcon  } from '@components/Icons'
import CloseIcon from "@components/Icons/CloseIcon"

export type FireAlertProps = LayoutProps & {
  title?: string
  // display?: "flex"
}
export const FireAlert = ({ 
  title = "Em caso de incêndio em nossas florestas e entornos, ligue para 41 2109-3855 [PR] | 41 2109-3856 [PR] | 49 3245-9015 [SC] | 49 3245-9186 [SC]",
 }: FireAlertProps ) => {
  return (
    <Flex
      data-testid="fire-alert"
      maxWidth="1920px"
      marginX="auto"
      position='relative'
      zIndex='base'
      overflowY="hidden"
      overflowX="hidden"
      bg = 'brown.400'
      // display = {display}
    >
        <Flex
          direction = {{ base: 'column', sm: 'row', lg: 'row', xl: 'row'}}
          // bg='red'
          w={"100%"}
        >

            {/* BOX 1 */}
            <Flex
                // bg='yellow'
                flex = "1"
                margin = {{ base: '2%', sm: '2%', lg: '1%', xl: '1%'}}
                alignItems={'center'}
                justifyContent={'center'}
            >
              <EarthIcon
                width={{ base: '30px', xs: '36px', sm: '40px', lg: '35px', xl: '40px' }}
                height={{ base: '30px', xs: '36px', sm: '40px', lg: '35px', xl: '40px' }}
              />
            </Flex>
            {/* BOX 2 */}
            <Flex
                // bg='blue'
                flex = "15"
                alignSelf='center'
                margin = {{ base: '2%', sm: '2%', lg: '1%', xl: '1%'}}
                
            >
              <Text as='h4'
                  variant = {"h4" as any}
                  color={"white"}
                  textAlign={{ base: 'center', sm: 'left'}}
              >{title}</Text>

            </Flex>
            {/* BOX 3 */}
            <Flex
                // bg='green'
                flex = "1"
                margin = {{ base: '2%', sm: '2%', lg: '1%', xl: '1%'}}
                alignSelf='center'
            >
               <Button 
                onClick={() => alert('close')}
                bgColor={"brown.400"}
                w={{ base: '60%', sm: '60%', lg: '60%', xl: '60%'}}
                h={{ base: '10%', sm: '610%', lg: '10%', xl: '10%'}}
              >
                <CloseIcon
                  width={{ base: '16px', sm: '19px', lg: '20px', xl: '20px' }}
                  height={{ base: '16px', sm: '19px', lg: '20px', xl: '20px' }}
                  color={"white"}
                />
              </Button>
            </Flex>
      
        </Flex>

    </Flex>
  )
}
