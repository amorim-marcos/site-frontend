import { Center, Text, Box, Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { LanguageBtn } from './LanguageBtn/LanguageBtn'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { LanguageIcon } from './LanguageIcon'
import { ArrowIcon } from './ArrowIcon'
import Cookies from 'js-cookie'

function getLocale(locale: string) {
  if (locale === 'en') return 'English'
  if (locale === 'es') return 'Español'
  if (locale === 'zh-CN') return '繁體中文'
  return 'Português'
}

export const LanguageSelector = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const header = useTranslation('header')

  useEffect(() => {
    const locale = Cookies.get('berneck_language')
    if (router && router.locale !== locale && typeof locale !== 'undefined') {
      router.push('/', '/', { locale })
    }
  }, [router])

  return (
    <Center
      cursor="pointer"
      position="relative"
      zIndex="skipLink"
      onClick={() => setOpen(!open)}
      transition="0.2s"
    >
      <Box marginRight="8%">
        <LanguageIcon
          width={{
            base: '12px',
            sm: '10px',
            md: '14px',
            lg: '18px',
            xl: '20px'
          }}
        />
      </Box>
      <Text
        color="#FFF"
        fontSize={{
          base: '11px',
          md: '10px',
          lg: '12px',
          xl: '14px'
        }}
      >
        {getLocale(router.locale || '')}
      </Text>

      <Box
        transition="0.3s"
        transform={open ? 'rotate(180deg)' : ''}
        marginLeft="8%"
      >
        <ArrowIcon width={{ base: '5px', md: '5px', lg: '7px' }} />
      </Box>

      {open && (
        <Flex
          width="115%"
          minW="130px"
          flexDir="column"
          position="absolute"
          top="calc(100%)"
          borderTop="2px solid"
          borderTopColor="green.600"
          // zIndex="skipLink"
        >
          {!(router.locale === 'pt-BR') && (
            <LanguageBtn title="Português" locale="pt-BR" />
          )}

          {!(router.locale === 'en') && (
            <LanguageBtn title="English" locale="en" />
          )}

          {!(router.locale === 'es') && (
            <LanguageBtn title="Español" locale="es" />
          )}

          {!(router.locale === 'zh-CN') && (
            <LanguageBtn title="繁體中文" locale="zh-CN" />
          )}
        </Flex>
      )}
    </Center>
  )
}
