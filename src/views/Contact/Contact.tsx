/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { Container, Flex, Image, Text, Box, Button } from '@chakra-ui/react'

import ContactChannelSelectButton from '@components/ContactChannelForm/ContactChannelSelectButton'
import ContactChannelForm from '@components/ContactChannelForm'

import { EarthIcon, BagIcon, BadgeIcon } from '@components/Icons'
import Pagebar from '@components/Pagebar'
import FireAlert from '@components/FireAlert'
import CompletedTitle from '@components/CompletedTitle'
import PatternInfo from '@components/PatternInfo'

import { IContactChannel } from 'types/data/ContactChannel'

import { useBackgroundArray } from './useBackgroundArray'
import useMobile from 'hooks/useMobile'
import { useTranslation } from 'react-i18next'
import HtmlTextParser from '@components/HtmlTextParser'
import { showcaseChannelCode } from 'utils/utils'
import ConditionalLanguageRender from '@components/ConditionalLanguageRender/ConditionalLanguageRender'

export type ContactViewProps = {
  contact_channels: IContactChannel[]
  contact_channel: IContactChannel | null
  fireWarning: string
}

export const Contact = ({
  contact_channels,
  contact_channel,
  fireWarning
}: ContactViewProps) => {
  const { isMobile, width } = useMobile(1024)

  const { ref, onRender, bgArray } = useBackgroundArray({
    currentWidth: width,
    contact_channels
  })

  const [showAllAreas, setShowAllAreas] = useState<boolean>(true)

  const contactViewLabels = useTranslation('contactView')

  return (
    <>
      <Pagebar
        paths={[
          {
            title: contactViewLabels.t('pagebar.speakWithUs'),
            url: 'contact'
          }
        ]}
      />

      <FireAlert title={fireWarning} />

      <Box backgroundColor="green.400">
        {/* INICIO sobre o que deseja falar? */}
        <Box bg="brown.100">
          <Container
            backgroundColor="brown.100"
            maxW="1536px"
            paddingInline="0"
            paddingTop="30px"
          >
            <Flex justifyContent="center">
              <CompletedTitle
                titleString={contactViewLabels.t('headerBanner.title')}
                textAlign="center"
              />
            </Flex>

            <Flex
              flexDirection="column"
              mt="55px"
              justifyContent="center"
              paddingBottom={{ base: '40px', lg: '80px' }}
              ref={ref}
            >
              {isMobile && !showAllAreas ? (
                <ContactChannelSelectButton
                  alignSelf="center"
                  isActive={contact_channel !== null}
                  mr="20px"
                  mb="15px"
                  name={
                    contact_channel != null
                      ? contact_channel.name
                      : contact_channels[0].name
                  }
                  service_code={
                    contact_channel != null
                      ? contact_channel.service_code
                      : contact_channels[0].service_code
                  }
                  attention_required={
                    contact_channel != null &&
                    contact_channel.attention_required
                      ? true
                      : false
                  }
                />
              ) : (
                <Flex
                  wrap="wrap"
                  paddingLeft="100px"
                  paddingRight="100px"
                  justifyContent="center"
                  alignItems="center"
                >
                  {contact_channels.map((channel, index) => (
                    <ContactChannelSelectButton
                      key={index}
                      onFinishRender={(w, h) => onRender({ w, h, index })}
                      isActive={
                        contact_channel != null &&
                        contact_channel.id === channel.id
                      }
                      mr="20px"
                      mb="15px"
                      name={channel.name}
                      service_code={channel.service_code}
                      attention_required={
                        channel.attention_required ? true : false
                      }
                      bgX={
                        bgArray[index] && bgArray[index].x
                          ? bgArray[index].x
                          : 0
                      }
                      bgY={
                        bgArray[index] && bgArray[index].y
                          ? bgArray[index].y
                          : 0
                      }
                    />
                  ))}
                </Flex>
              )}
              {isMobile && (
                <Flex mt="20px" justifyContent="center">
                  <Button
                    onClick={() => {
                      setShowAllAreas(!showAllAreas)
                    }}
                    variant="link"
                  >
                    {showAllAreas ? 'esconder áreas' : 'ver todas as áreas'}
                  </Button>
                </Flex>
              )}
            </Flex>

            {contact_channel && (
              <ContactChannelSection channel={contact_channel} />
            )}
          </Container>
        </Box>
        {/* FIM sobre o que deseja falar? */}

        <Container backgroundColor="green.400" maxW="1536px">
          <ButtonsSection />
        </Container>
      </Box>
    </>
  )
}

const ContactChannelSection = ({ channel }: { channel: IContactChannel }) => (
  <Flex
    justifyContent="center"
    backgroundColor="white.100"
    minH="500px"
    paddingTop={{ base: '40px', lg: '80px' }}
    paddingBottom="60px"
  >
    <Flex
      justifyContent="space-around"
      flexDirection={{ base: 'column', lg: 'row' }}
      paddingLeft={{ base: '40px', lg: '120px' }}
      paddingRight={{ base: '40px', lg: '120px' }}
    >
      <Flex flex="1" justifyContent="flex-start" direction="column">
        <Text as="h3" variant="h3" order={1}>
          {channel.name}
        </Text>
        <Text
          mt={{ base: '10px', lg: '40px' }}
          fontFamily="body"
          variant="body"
          order={{ base: 3, lg: 2 }}
        >
          <HtmlTextParser>{channel.description}</HtmlTextParser>
        </Text>
        <Image
          mt={{ base: '10px', lg: '30px' }}
          src={channel.image}
          order={{ base: 2, lg: 3 }}
        />
      </Flex>
      <Flex flex="2">
        <ContactChannelForm
          channel_name={channel.name}
          contact_channel_id={channel.id}
          paddingLeft={{ base: 0, lg: '80px' }}
          paddingRight={{ base: 0, lg: '10px', xl: '30px' }}
        />
      </Flex>
    </Flex>
  </Flex>
)

const ButtonsSection = () => {
  const router = useRouter()

  const contactViewLabels = useTranslation('contactView')

  return (
    <Flex
      backgroundColor="green.400"
      padding={{ base: '2% 0%', lg: '4% 0%' }}
      flex="1"
      justify={'center'}
    >
      <Flex
        // backgroundColor="yellow"
        flexDirection={{ base: 'column', lg: 'row' }}
        paddingLeft={{ base: 0, lg: '80px' }}
        paddingRight={{ base: 0, lg: '80px' }}
        flex="1"
      >
        <ConditionalLanguageRender>
          <Box flex="1" mr={{ base: 0, lg: '45px' }}>
            <PatternInfo
              minH={{ base: '100px' }}
              maxH={{ base: '185px' }}
              title={contactViewLabels.t('discoverBanner.title')}
              description={contactViewLabels.t('discoverBanner.description')}
              onClick={() => router.push('/where-to-buy')}
              icon={
                <EarthIcon
                  width={{
                    base: '30px',
                    xs: '30px',
                    sm: '58px',
                    lg: '70px',
                    xl: '80px'
                  }}
                  height={{
                    base: '30px',
                    xs: '30px',
                    sm: '58px',
                    lg: '70px',
                    xl: '80px'
                  }}
                />
              }
            />
          </Box>
        </ConditionalLanguageRender>
        <Box flex="1" mr={{ base: 0, lg: '45px' }} mt={{ base: '45px', lg: 0 }}>
          <PatternInfo
            minH={{ base: '100px' }}
            maxH={{ base: '185px' }}
            title={contactViewLabels.t('showcaseBanner.title')}
            description={contactViewLabels.t('showcaseBanner.description')}
            onClick={() =>
              router.push(
                router.locale == 'pt-BR'
                  ? `/contact?channel=${showcaseChannelCode(
                      router.locale ?? 'pt-BR'
                    )}`
                  : `/${router.locale}/contact?channel=${showcaseChannelCode(
                      router.locale ?? 'pt-BR'
                    )}`
              )
            }
            icon={
              <BagIcon
                width={{
                  base: '30px',
                  xs: '30px',
                  sm: '58px',
                  lg: '70px',
                  xl: '80px'
                }}
                height={{
                  base: '30px',
                  xs: '30px',
                  sm: '58px',
                  lg: '70px',
                  xl: '80px'
                }}
              />
            }
          />
        </Box>
        <ConditionalLanguageRender>
          <Box flex="1" mt={{ base: '45px', lg: 0 }}>
            <PatternInfo
              minH={{ base: '100px' }}
              maxH={{ base: '185px' }}
              title={contactViewLabels.t('positionsBanner.title')}
              description={contactViewLabels.t('positionsBanner.description')}
              onClick={() =>
                window.open(
                  'https://platform.senior.com.br/hcmrs/hcm/curriculo/?tenant=berneck&tenantdomain=berneck.com.br#!/login/signup',
                  '_blank'
                )
              }
              icon={
                <BadgeIcon
                  width={{
                    base: '30px',
                    xs: '30px',
                    sm: '58px',
                    lg: '70px',
                    xl: '80px'
                  }}
                  height={{
                    base: '30px',
                    xs: '30px',
                    sm: '58px',
                    lg: '70px',
                    xl: '80px'
                  }}
                />
              }
            />
          </Box>
        </ConditionalLanguageRender>
      </Flex>
    </Flex>
  )
}
