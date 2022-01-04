import { Heading, Flex, Box, Text, Center, Container } from "@chakra-ui/react"


export type InfograficoProps = {
  title?: string
}
export const Infografico = ({ title }: InfograficoProps) => {
  return (

    <Container w='40%'>

      <Flex 
        direction="column" 
        flexWrap="nowrap"
        bg='yellow'
      >
        
        <Center 
          flex='1'
        >
          <Heading 
              variant='h1'
              color='green.600'
              fontSize='24px'
            >Volume de exportação</Heading>
        </Center>
        
        <Center>
          <Heading 
              variant='h4'
              color='green.900'
              fontSize='16px'
            >Co-geramos</Heading>
        </Center>

        <Box 
          flex='1'
        >
          
          <Flex 
            direction="row"
            bg='blue'
          >

            <Box 
              flex='1'
              bg='blue.100'
              display='flex' 
              alignItems='left'
              
            >
              <Heading 
                  variant='h4'
                  color='green.600'
                  fontSize='90px'
                >+</Heading>
            </Box>

            <Center 
              flex='1'
              bg='brown.100'
            >
              <Heading 
                  variant='h4'
                  color='green.900'
                  fontSize='80px'
                >3,500</Heading>
            </Center>

            <Box
              flex='1' 
              bg='red.100'
              display='flex' 
            >

              <Flex 
                direction="column" 
                alignContent="center" 
                bg='purple'
              >
                <Heading 
                    variant='h4'
                    color='green.900'
                    fontSize='18px'
                    display='flex'
                  >TEUs / mês</Heading>
                  <Heading 
                    variant='h4'
                    color='green.600'
                    fontSize='45px'
                  >%</Heading>
              </Flex>

            </Box>
          
          </Flex>
          
        </Box>
      
        <Center 
          flex='1'
        >   
          <Heading 
              variant='h1'
              color='green.600'
              fontSize='24px'
            >da Água Utilizada</Heading>
        </Center>
    </Flex>

  </Container>
  )
}
