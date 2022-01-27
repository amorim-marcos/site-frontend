import { Heading, Flex, Box, Text, Image, useBoolean } from "@chakra-ui/react"
import { ResponsiveCss } from "types/responsive";

export type FeaturedBannerProps = {
  title?: string
  srcImage?:string
  invert?: boolean
}

function reverse(invert:boolean){
  if (invert) {
    return  { base: 'column', sm: 'column', lg: 'row-reverse', xl: 'row-reverse' };
  }
  return { base: 'column', sm: 'column', lg: 'row', xl: 'row' };
}

export const FeaturedBanner = ({ 
  title,
  srcImage,
  invert = false
}: FeaturedBannerProps) => {
  return (
    <Flex
        maxWidth="700px"
        marginX="auto"
        alignItems='center'
        justifyContent='center'
        position='relative'
        zIndex='base'
        overflowY="hidden"
        overflowX="hidden"
        bg = 'green.150'
        margin = {{ base: '5% 5% 5% 5%', sm: '5% 5% 5% 5%', lg: '3%', xl: '4%'}}
      >
    
        <Flex
          // bg='blue'
          direction = {reverse(invert) as any}
          alignItems={"center"}
        >
          {/* BOX 1 */}
          <Box
            // bg='pink'
            flex='1'
            justifyItem={"center"}
            // margin = {{ base: '5% 5% 5% 5%', sm: '5% 5% 5% 5%', lg: '5% 2% 5% 5%', xl: '5% 2% 5% 5%'}}
          >
             <Image 
                h={"100%"}
                w={"100%"}
              src={srcImage}
             />
          </Box>
          {/* BOX 2 */}
          <Box
            margin = {{ base: '5% 5% 5% 5%', sm: '5% 5% 5% 5%', lg: '5% 7% 5% 5%', xl: '5% 5% 5% 5%'}}
            // bg='yellow'
            flex='2'
            
          >
                <Text as='h4'
                  variant = {"h4" as any}
                  fontWeight= 'bold'
                  textAlign={{ base: 'left', sm: 'left', lg: 'left', xl: 'left'}}
                >{title}</Text>
          </Box>
        
        </Flex> 

      </Flex> 
  )
}
