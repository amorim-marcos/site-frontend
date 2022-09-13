import { Box, Text, Button, Link } from '@chakra-ui/react'
import CookieConsent from 'react-cookie-consent'
import { useTranslation } from 'react-i18next'

export const AppCookieConsent = () => {
  const componentsLabels = useTranslation('components')
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
          {componentsLabels.t('appCookieConsent.satisfactoryExperience')}
          <br />
          {componentsLabels.t('appCookieConsent.cookieCollect')}{' '}
          <Link
            color={'#ACCC9F'}
            _hover={{ color: '#59993F' }}
            textDecoration="underline"
            href="/politica-de-privacidade"
          >
            {componentsLabels.t('appCookieConsent.privacy')}
          </Link>
        </Text>
      </CookieConsent>
    </Box>
  )
}

const ConsentButton = (props: { onClick: () => void }) => {
  const componentsLabels = useTranslation('components')

  return (
    <Button
      onClick={props.onClick}
      bg="green.600"
      h={{ base: '60px', md: '55px', lg: '60px' }}
      marginY={{ md: '15px' }}
      marginBottom={{ base: '15px', md: '15px' }}
    >
      {componentsLabels.t('appCookieConsent.btn')}
    </Button>
  )
}
