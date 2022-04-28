import { Box, Flex, Image, Text } from '@chakra-ui/react'
import CompletedTitle from '@components/CompletedTitle'
import PaperIcon from '@components/Icons/PaperIcon'
import Pagebar from '@components/Pagebar'
import { useState } from 'react'
import { colors } from '../../theme/colors'
import parser from 'react-html-parser'
import { Wrapper } from './styles'
import { useTranslation } from 'react-i18next'

export const Privacy = (props: { terms: string }) => {
  const [showPrivacy, setShowPrivacy] = useState(false)
  const privacyViewLabels = useTranslation('privacyView')
  return (
    <Box>
      <Pagebar
        paths={[
          {
            title: privacyViewLabels.t('pagebar.privacy'),
            url: 'politica-de-privacidade'
          }
        ]}
      />
      <Flex
        position={'relative'}
        flexDirection={'column'}
        maxWidth="1536px"
        marginX="auto"
        w="100%"
      >
        <Flex
          padding={'5%'}
          w="100%"
          bg="green.400"
          position={'relative'}
          overflow="hidden"
        >
          <Box
            position={'absolute'}
            w="100%"
            h="100%"
            top="0"
            left="0"
            zIndex={'base'}
          >
            <Image
              src="/img/useTerms/grafidireita.svg"
              position={'absolute'}
              right={{ base: '-30%', sm: '0' }}
              bottom="0"
              maxWidth={'385px'}
              w={{ base: 'auto', sm: '20vw' }}
              h={{ base: '100%', sm: 'auto' }}
            />
            <Image
              src="/img/useTerms/grafiesquerda.svg"
              position={'absolute'}
              left={{ base: '-30%', sm: '0' }}
              top="0"
              maxWidth={'395px'}
              w={{ base: 'auto' }}
              h={{ base: '100%' }}
            />
          </Box>
          <Box
            zIndex={'dropdown'}
            w={{ md: '453px', lg: '566px', xl: '680px', '2xl': '850px' }}
            marginX="auto"
            justifyContent={'center'}
            alignItems="center"
            margin="auto"
          >
            <CompletedTitle
              textAlign={'center'}
              titleString={privacyViewLabels.t('headerBanner.title')}
              titleColor={'white.100'}
              zIndex={'dropdown'}
            />
          </Box>
        </Flex>

        {showPrivacy ? (
          <Flex flexDirection={'column'} w="100%" padding={'5%'}>
            <Wrapper>{parser(props.terms)}</Wrapper>
          </Flex>
        ) : (
          <>
            <Flex
              bg="#F5F6F4"
              justifyContent={'space-between'}
              padding={'5%'}
              w="100%"
              flexDirection={{ base: 'column', md: 'row' }}
            >
              <Flex
                flexDirection={'column'}
                w={{ base: '100%', md: '40%' }}
                alignItems={'center'}
              >
                <Text variant={'h3'} color="green.600" marginBottom={'20px'}>
                  {privacyViewLabels.t('useTermsAndPrivacy')}
                </Text>
                <Text variant={'body' as any}>
                  {privacyViewLabels.t('useTermsAndPrivacyDescription')}
                </Text>
              </Flex>
              <Flex
                w={{ base: '100%', md: '40%' }}
                alignItems={'center'}
                justifyContent="center"
              >
                <Flex
                  bg="green.600"
                  h={{
                    base: '80px',
                    md: '70px',
                    lg: '90px',
                    xl: '100px',
                    '2xl': '110px'
                  }}
                  justifyContent={'center'}
                  alignItems={'center'}
                  cursor="pointer"
                  _hover={{ opacity: '0.9' }}
                  w={{ base: '90%', md: '90%' }}
                  marginY={{ base: '40px', md: '0' }}
                  onClick={() => setShowPrivacy(true)}
                >
                  <PaperIcon
                    stroke="white.100"
                    width={{ base: '30px', md: '25px', lg: '40px' }}
                    hoverStroke="none"
                  />
                  <Text
                    marginLeft={'15px'}
                    variant={'body' as any}
                    fontWeight="bold"
                    color="white.100"
                    w={{ base: '60%', md: '50%' }}
                  >
                    {privacyViewLabels.t('knowOurPrivacyAndTerms')}
                  </Text>
                </Flex>
              </Flex>
            </Flex>

            <Flex
              flexDirection={{ base: 'column', md: 'row' }}
              w="100%"
              alignItems={'center'}
            >
              <Box w={{ base: '100%', md: '50%' }}>
                <Image
                  src="/img/useTerms/terms.png"
                  w="100%"
                  h="100%"
                  objectFit={'cover'}
                />
              </Box>
              <Flex
                w={{ base: '100%', md: '50%' }}
                padding={'5%'}
                flexDirection={'column'}
              >
                <Text variant={'h3'} color="green.800" marginBottom={'20px'}>
                  {privacyViewLabels.t('dataProtectionOfficer')}
                </Text>
                <Text variant={'body' as any}>
                  {privacyViewLabels.t('privacyMoreInformation')}
                  <strong style={{ color: colors.green[600] }}>
                    {' '}
                    dpo@berneck.com.br.
                  </strong>
                </Text>
              </Flex>
            </Flex>
          </>
        )}
      </Flex>
    </Box>
  )
}
