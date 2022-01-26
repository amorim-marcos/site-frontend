import { Container, Flex } from "@chakra-ui/react"
import CompletedTitle from "@components/CompletedTitle"
import ContactChannelSelectButton from "@components/ContactChannelSelectButton"
import Pagebar from "@components/Pagebar"

export const Contact = () => {
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
        <Flex>
          <ContactChannelSelectButton name="Assessoria de Imprensa"  service_code="AI" />
        </Flex>
      </Container>
    </>
  )
}
