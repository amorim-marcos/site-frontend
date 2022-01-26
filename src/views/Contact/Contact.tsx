import { Container, Flex } from "@chakra-ui/react"
import CompletedTitle from "@components/CompletedTitle"
import ContactChannelSelectButton from "@components/ContactChannelSelectButton"
import Pagebar from "@components/Pagebar"

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
      <Container backgroundColor="brown.100" maxW="1920px" paddingInline="0" paddingTop="30px" paddingBottom="300px">
        <Flex justifyContent="center">
          <CompletedTitle 
            titleString="Sobre o que você deseja falar?"
            textAlign="center"
          />
        </Flex>
        <Flex mt="60px" justifyContent="center">
          <Flex
            wrap="wrap"
            paddingLeft="100px"
            paddingRight="100px"
            justifyContent="center"
            alignItems="center"
          >
            {
              contact_channels.map((channel) => <ContactChannelSelectButton mr="20px" mb="15px" name={channel.name}  service_code={channel.service_code} />)
            }
          </Flex>

        </Flex>
      </Container>
    </>
  )
}
