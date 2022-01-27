import { Container, Flex, Image, Text, Box, Button} from "@chakra-ui/react"
import CompletedTitle from "@components/CompletedTitle"
import ContactChannelForm from "@components/ContactChannelForm"
import ContactChannelSelectButton from "@components/ContactChannelForm/ContactChannelSelectButton"
import { EarthIcon, BagIcon, BadgeIcon } from "@components/Icons"
import Pagebar from "@components/Pagebar"
import PatternInfo from "@components/PatternInfo"
import useMobile from "hooks/useMobile"
import React from "react"

export type ContactChannelData = {
  name: string,
  description: string,
  image: string,
  service_code: string,
  attention_required?: boolean
}

export type ContactViewProps = {
  contact_channels: Array<ContactChannelData>
}

export const Contact = ({ contact_channels }:ContactViewProps) => {
  const [contact_channel, setContactChannel] = React.useState<ContactChannelData | null>(null)
  const { isMobile } = useMobile(1024)
  const [showAllAreas, setShowAllAreas] = React.useState<Boolean>(true)
  const channelsParentRef = React.useRef(null)
  const [channelsParentHeight, setHeight] = React.useState<number>(0)
  const [channelsParentWidth, setWidth] = React.useState<number>(0)

  React.useEffect(() => {
    // @ts-ignore
    let h = channelsParentRef.current.clientHeight
    // @ts-ignore
    let w = channelsParentRef.current.clientWidth

    if(w && h){
      setHeight(w)
      setWidth(h)
    }
  })

  return (
    <>
      <Pagebar 
        paths={[
          {
              title: 'Fale Conosco',
              url: 'contact'
          }
        ]}
      />
      <Container backgroundColor="brown.100" maxW="1920px" paddingInline="0" paddingTop="30px">
        <Flex justifyContent="center">
          <CompletedTitle 
            titleString="Sobre o que você deseja falar?"
            textAlign="center"
          />
        </Flex>
        <Flex flexDirection="column" mt="55px" justifyContent="center" paddingBottom={{base: "40px", lg: "80px"}}>
          {
            (isMobile && !showAllAreas)
            ? 
              (
                <ContactChannelSelectButton 
                  alignSelf="center"
                  isActive={(contact_channel != null) ? true : false} 
                  onClick={(isActive) => { if(!isActive){ setContactChannel((contact_channel != null) ? contact_channel : contact_channels[0]); setShowAllAreas(false); } else{setContactChannel(null); setShowAllAreas(true)}}}
                  mr="20px" mb="15px" 
                  name={(contact_channel != null) ? contact_channel.name : contact_channels[0].name}  service_code={(contact_channel != null) ? contact_channel.service_code : contact_channels[0].service_code} 
                  attention_required={(contact_channel != null && contact_channel.attention_required) ? true : false}
                />
              )
            : (
              <Flex
                wrap="wrap"
                paddingLeft="100px"
                paddingRight="100px"
                justifyContent="center"
                alignItems="center"
                ref={channelsParentRef}
              >
                {
                  contact_channels.map(
                    (channel) => 
                      <ContactChannelSelectButton 
                        isActive={(contact_channel != null && contact_channel.service_code == channel.service_code) ? true : false} 
                        onClick={(isActive) => { if(!isActive){ setContactChannel(channel); setShowAllAreas(false)} else{setContactChannel(null); setShowAllAreas(true)}}} 
                        mr="20px" mb="15px" 
                        name={channel.name}  service_code={channel.service_code} attention_required={(channel.attention_required) ? true : false}
                      />)
                }
              </Flex>
            )          

          }
          {
            isMobile &&           
            <Flex mt="20px" justifyContent="center">
              <Button onClick={() => { setShowAllAreas(!showAllAreas) }} variant="link">{(showAllAreas) ? "esconder áreas" : "ver todas as áreas"}</Button>
            </Flex>
          }

        </Flex>
        { 
        contact_channel && 
        <Flex justifyContent="center" backgroundColor="white.100" minH="500px" paddingTop={{ base: "40px", lg:"80px"}} paddingBottom="60px">
            <Flex justifyContent="space-around" flexDirection={{ base: "column", lg: "row"}} paddingLeft={ { base: "40px", lg: "120px" }} paddingRight={ { base: "40px", lg: "120px" } }>
              <Flex flex="1" justifyContent="flex-start" direction="column">
                <Text as="h3" variant={"h3" as any} order="1">{contact_channel.name}</Text>
                <Text mt={{ base: "10px", lg: "40px"}} fontFamily='body'  variant={"body" as any} order={{ base: "3", lg: "2"}}>{contact_channel.description}</Text>
                <Image mt={{ base: "10px", lg: "30px"}} src={contact_channel.image} order={{ base: "2", lg: "3"}} />
              </Flex>
              <Flex flex="2">
                <ContactChannelForm channel_name={contact_channel.name} service_code={contact_channel.service_code} paddingLeft={{ base:0, lg:"80px"}} paddingRight={{ base:0, lg: "10px", xl: "30px"}}/>
              </Flex>
            </Flex>
        </Flex>        
        }
        <Flex backgroundColor="green.400" paddingTop={{base: "50px", lg:"100px"}} paddingBottom={{base: "50px", lg:"100px"}}>
          <Flex width="full" flexDirection={{base: "column", lg: "row"}} paddingLeft={{base: 0, lg: "80px"}} paddingRight={{base: 0, lg: "80px"}}>
            <Box flex="1" mr={{base: 0, lg: "45px"}}>
              <PatternInfo
                  title="DESCUBRA"
                  description="Onde Comprar"
                  onClick={() => alert('Vai para Onde Comprar')}
                  icon={
                    <EarthIcon
                      width={{ base: '30px', xs: '30px', sm: '58px', lg: '70px', xl: '80px' }}
                      height={{ base: '30px', xs: '30px', sm: '58px', lg: '70px', xl: '80px' }}
                    />
                  }
                />
            </Box>
            <Box flex="1" mr={{base: 0, lg: "45px"}} mt={{ base: "45px", lg: 0}}>
              <PatternInfo
                  title="Solicite Nosso"
                  description="Mostruário"
                  onClick={() => alert('Vai para Solicitar Mostruário')}
                  icon={
                    <BagIcon
                      width={{ base: '30px', xs: '30px', sm: '58px', lg: '70px', xl: '80px' }}
                      height={{ base: '30px', xs: '30px', sm: '58px', lg: '70px', xl: '80px' }}
                    />
                  }
                />
            </Box>
            <Box flex="1" mt={{ base: "45px", lg: 0}}>
              <PatternInfo
                  title="Confira Nossas"
                  description="Vagas abertas"
                  onClick={() => alert('Vai para Onde Comprar')}
                  icon={
                    <BadgeIcon
                      width={{ base: '30px', xs: '30px', sm: '58px', lg: '70px', xl: '80px' }}
                      height={{ base: '30px', xs: '30px', sm: '58px', lg: '70px', xl: '80px' }}
                    />
                  }
                />
            </Box>
          </Flex>
        </Flex>
      </Container>
    </>
  )
}
