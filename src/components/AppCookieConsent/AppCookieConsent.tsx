import { Box, Text, Button, Link } from '@chakra-ui/react'
import CookieConsent from 'react-cookie-consent'

export const AppCookieConsent = () => {
  return (
    <Box maxWidth={'1536px'} marginX="auto">
      <CookieConsent
        style={{
          background: '#595959',
          padding: '0 3%',
          fontSize: '90%',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: '1700'
        }}
        buttonStyle={{
          background: '#59993F',
          fontWeight: 'bold',
          color: '#FFF',
          borderRadius: '15px',
          width: '200px',
          height: '60px'
        }}
        buttonText="PROSSEGUIR"
        ButtonComponent={ConsentButton}
        cookieName="cookieAccepted"
        expires={30}
      >
        <Text variant={'body' as any} color="#FFFFFF">
          O site da Berneck S.A utiliza cookies para uma experiência mais
          satisfatória e personalizada.
          <br />
          Ao navegar neste ambiente digital você estará sujeito à coleta dos
          cookies descritos na{' '}
          <Link
            color={'#ACCC9F'}
            _hover={{ color: '#59993F' }}
            textDecoration="underline"
            href="/politica-de-privacidade"
          >
            Política de Privacidade.
          </Link>
        </Text>
      </CookieConsent>
    </Box>
  )
}

const ConsentButton = (props: { onClick: () => void }) => {
  return (
    <Button
      onClick={props.onClick}
      bg="green.600"
      h={{ base: '60px', md: '55px', lg: '60px' }}
      marginY={{ md: '15px' }}
      marginBottom={{ base: '15px', md: '15px' }}
    >
      PROSSEGUIR
    </Button>
  )
}
