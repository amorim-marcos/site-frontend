import { useState } from 'react'
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

import { useContactChannels } from './useContactChannels'

export type ContactViewProps = {
  contact_channels: IContactChannel[]
  fireWarning: string
}

export const Contact = ({
  contact_channels,
  fireWarning
}: ContactViewProps) => {
  const { isMobile, channelsParentRef, bgArray, setBgArray, finalBgArray } =
    useContactChannels({
      contact_channels
    })

  const [showAllAreas, setShowAllAreas] = useState<boolean>(true)
  const [contact_channel, setContactChannel] = useState<IContactChannel | null>(
    null
  )

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

      <FireAlert title={fireWarning} />

      <Container
        backgroundColor="brown.100"
        maxW="1920px"
        paddingInline="0"
        paddingTop="30px"
      >
        <Flex justifyContent="center">
          <CompletedTitle
            titleString="Sobre o que você deseja falar?"
            textAlign="center"
          />
        </Flex>

        <Flex
          flexDirection="column"
          mt="55px"
          justifyContent="center"
          paddingBottom={{ base: '40px', lg: '80px' }}
          ref={channelsParentRef}
        >
          {isMobile && !showAllAreas ? (
            <ContactChannelSelectButton
              alignSelf="center"
              isActive={contact_channel != null ? true : false}
              onClick={(isActive) => {
                if (!isActive) {
                  setContactChannel(
                    contact_channel != null
                      ? contact_channel
                      : contact_channels[0]
                  )
                  setShowAllAreas(false)
                } else {
                  setContactChannel(null)
                  setShowAllAreas(true)
                }
              }}
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
                contact_channel != null && contact_channel.attention_required
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
                  onFinishRender={function (width, height) {
                    bgArray[index.toString()] = { width, height, x: 0, y: 0 }
                    setBgArray({ ...bgArray })
                  }}
                  isActive={
                    contact_channel != null &&
                    contact_channel.service_code == channel.service_code
                      ? true
                      : false
                  }
                  onClick={(isActive) => {
                    if (!isActive) {
                      setContactChannel(channel)
                      setShowAllAreas(false)
                    } else {
                      setContactChannel(null)
                      setShowAllAreas(true)
                    }
                  }}
                  mr="20px"
                  mb="15px"
                  name={channel.name}
                  service_code={channel.service_code}
                  attention_required={channel.attention_required ? true : false}
                  bgX={
                    finalBgArray[index.toString()] &&
                    finalBgArray[index.toString()].x
                      ? finalBgArray[index].x
                      : 0
                  }
                  bgY={
                    finalBgArray[index.toString()] &&
                    finalBgArray[index.toString()].y
                      ? finalBgArray[index].y
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

        {contact_channel && <ContactChannelSection channel={contact_channel} />}

        <ButtonsSection />
      </Container>
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
        <Text as="h3" variant="h3" order="1">
          {channel.name}
        </Text>
        <Text
          mt={{ base: '10px', lg: '40px' }}
          fontFamily="body"
          variant="body"
          order={{ base: '3', lg: '2' }}
        >
          {channel.description}
        </Text>
        <Image
          mt={{ base: '10px', lg: '30px' }}
          src={channel.image}
          order={{ base: '2', lg: '3' }}
        />
      </Flex>
      <Flex flex="2">
        <ContactChannelForm
          channel_name={channel.name}
          service_code={channel.service_code}
          paddingLeft={{ base: 0, lg: '80px' }}
          paddingRight={{ base: 0, lg: '10px', xl: '30px' }}
        />
      </Flex>
    </Flex>
  </Flex>
)

const ButtonsSection = () => {
  const router = useRouter()

  return (
    <Flex
      backgroundColor="green.400"
      paddingTop={{ base: '50px', lg: '100px' }}
      paddingBottom={{ base: '50px', lg: '100px' }}
    >
      <Flex
        width="full"
        flexDirection={{ base: 'column', lg: 'row' }}
        paddingLeft={{ base: 0, lg: '80px' }}
        paddingRight={{ base: 0, lg: '80px' }}
      >
        <Box flex="1" mr={{ base: 0, lg: '45px' }}>
          <PatternInfo
            minH={{ base: '185px' }}
            maxH={{ base: '185px' }}
            title="DESCUBRA"
            description="Onde Comprar"
            onClick={() => router.push('/onde-comprar')}
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
        <Box flex="1" mr={{ base: 0, lg: '45px' }} mt={{ base: '45px', lg: 0 }}>
          <PatternInfo
            minH={{ base: '185px' }}
            maxH={{ base: '185px' }}
            title="Solicite Nosso"
            description="Mostruário"
            onClick={() => router.push('/contact')}
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
        <Box flex="1" mt={{ base: '45px', lg: 0 }}>
          <PatternInfo
            minH={{ base: '185px' }}
            maxH={{ base: '185px' }}
            title="Confira Nossas"
            description="Vagas abertas"
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
      </Flex>
    </Flex>
  )
}
