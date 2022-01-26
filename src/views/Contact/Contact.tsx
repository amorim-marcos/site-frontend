import { Container, Flex, Image, Text, Box} from "@chakra-ui/react"
import CompletedTitle from "@components/CompletedTitle"
import ContactChannelForm from "@components/ContactChannelForm"
import ContactChannelSelectButton from "@components/ContactChannelSelectButton"
import { EarthIcon, BagIcon, BadgeIcon } from "@components/Icons"
import Pagebar from "@components/Pagebar"
import PatternInfo from "@components/PatternInfo"
import React from "react"

export type ContactChannelData = {
  name: string,
  description: string,
  image: string,
  service_code: string
}

export type ContactViewProps = {
  contact_channels: Array<ContactChannelData>
}

export const Contact = ({ contact_channels }:ContactViewProps) => {
  const [contact_channel, setContactChannel] = React.useState<ContactChannelData | null>(null)

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
        <Flex mt="60px" justifyContent="center" paddingBottom="80px">
          <Flex
            wrap="wrap"
            paddingLeft="100px"
            paddingRight="100px"
            justifyContent="center"
            alignItems="center"
          >
            {
              contact_channels.map((channel) => <ContactChannelSelectButton isActive={(contact_channel != null && contact_channel.service_code == channel.service_code) ? true : false} onClick={(isActive) => { if(!isActive){ setContactChannel(channel)} else{setContactChannel(null)}}} mr="20px" mb="15px" name={channel.name}  service_code={channel.service_code} />)
            }
          </Flex>
        </Flex>
        <Flex display={(contact_channel !== null) ? 'normal' : 'none' } backgroundColor="white.100" minH="500px" paddingTop="80px" paddingBottom="60px">
            <Flex justifyContent="space-around" flexDirection="row" paddingLeft="120px" paddingRight="120px">
              <Flex flex="1" justifyContent="flex-start" direction="column">
                <Text as="h3" variant={"h3" as any}>Assessoria de Imprensa</Text>
                <Text mt="40px" fontFamily='body'  variant={"body" as any}>Trabalha para um canal de comunicação e deseja saber mais sobre nós, nossos compromissos, florestas e produtos? Conte com nosso time de Comunicação Corporativa para enriquecer seu conhecimento sobre a BERNECK e encontrar comunicados, anúncios e informações elaboradas por nossa assessoria de imprensa.</Text>
                <Image mt="30px" src="/img/contact-channel.png" />
              </Flex>
              <Flex flex="2">
                <ContactChannelForm channel_name="Assessoria de Imprensa" service_code="AI"/>
              </Flex>
            </Flex>
        </Flex>
        <Flex backgroundColor="green.400" paddingTop="100px" paddingBottom="100px">
          <Flex width="full" flexDirection="row" paddingLeft="80px" paddingRight="80px">
            <Box flex="1" mr="45px">
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
            <Box flex="1" mr="45px">
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
            <Box flex="1">
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
