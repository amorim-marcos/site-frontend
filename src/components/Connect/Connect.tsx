import Head from 'next/head'

import { ReactNode, useEffect, useState } from 'react'
import { Box, Button, Flex, Text, Link } from '@chakra-ui/react'

import { SocialIcon } from '@components/Icons'
import CompletedTitle from '@components/CompletedTitle'

import useFacebook from 'hooks/useFacebook'
import useMobile from 'hooks/useMobile'

export type ConnectProps = {
  title?: string
}

export default function Connect({ title = 'Conecte-se' }: ConnectProps) {
  const { isMobile, width } = useMobile(568)
  const [lastVideo, setLastVideo] = useState<string | null>()

  useFacebook()

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.YOUTUBE_CHANNEL_ID}&maxResults=1&order=date&type=video&key=${process.env.YOUTUBE_API_KEY}`
      )
      const data = await result.json()

      if (data.items?.length > 0) setLastVideo(data.items[0].id.videoId)
    }

    fetchData()
  }, [])

  return (
    <>
      <Head>
        <script async defer src="https://assets.pinterest.com/js/pinit.js" />
      </Head>

      <Flex bg={'white.200'} alignItems={'center'} flexDirection={'column'}>
        <Flex
          w="100%"
          maxWidth="1536px"
          marginX="auto"
          position="relative"
          pt={{ base: '54px', lg: '100px' }}
          px={{ base: '20px', lg: '5%', '2xl': '3%' }}
          align={{ base: 'center', lg: 'flex-start' }}
          justifyContent={{ base: 'center', lg: 'flex-start' }}
        >
          <CompletedTitle
            titleString={title}
            textAlign={{ base: 'center', sm: 'center', lg: 'left', xl: 'left' }}
            alignSelf={{
              base: 'center',
              sm: 'center',
              lg: 'flex-start',
              xl: 'flex-start'
            }}
          />
        </Flex>

        <Flex
          maxWidth="1536px"
          data-testid="connect"
          w="100%"
          gap="50px"
          pt="55px"
          pb="96px"
          justify="center"
          align={{ base: 'center', lg: 'flex-start' }}
          wrap={{ base: 'wrap', '2xl': 'nowrap' }}
          direction={{
            base: 'column',
            md: 'row'
          }}
        >
          <Flex gap="70px" direction="column">
            <SocialNetwork
              title="FACEBOOK"
              icon={
                <SocialIcon
                  media="facebook"
                  width="51px"
                  height="51px"
                  color="#59993F"
                />
              }
            >
              {width && (
                <Box
                  className="fb-page"
                  data-href="https://www.facebook.com/BerneckSA/"
                  data-width={isMobile ? '300px' : '420px'}
                  data-small-header="false"
                  data-adapt-container-width={true}
                  data-hide-cover="false"
                  data-show-facepile="false"
                />
              )}
            </SocialNetwork>

            <SocialNetwork
              title="INSTAGRAM"
              icon={
                <SocialIcon
                  media="instagram"
                  width="51px"
                  height="51px"
                  color="#59993F"
                />
              }
            >
              <Flex direction="column" gap="24px" align="center" w="100%">
                {width && (
                  <Flex
                    align="center"
                    justify="center"
                    h={isMobile ? '572px' : '640px'}
                    w="100%"
                    bgColor="green.200"
                  >
                    <Text
                      fontWeight="bold"
                      color="red"
                      px="25px"
                      textAlign="center"
                    >
                      Aguardando envio da chave do Instagram
                    </Text>
                  </Flex>
                )}

                <FollowButton
                  text="SIGA-NOS NO INSTAGRAM"
                  link="https://www.instagram.com/berneckoficial/"
                />
              </Flex>
            </SocialNetwork>
          </Flex>

          <SocialNetwork
            title="LINKEDIN"
            icon={
              <SocialIcon
                media="linkedin"
                width="51px"
                height="51px"
                color="#59993F"
              />
            }
          >
            <Flex w="100%" direction="column" gap="24px" align="center">
              {width && (
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:6868626499726012417"
                  height={isMobile ? '572px' : '920px'}
                  width="100%"
                />
              )}

              <FollowButton
                text="SIGA-NOS NO LINKEDIN"
                link="https://www.linkedin.com/company/berneck-s.a.-pain-is-e-serrados/"
              />
            </Flex>
          </SocialNetwork>

          <Flex gap="70px" direction="column">
            <Flex gap="32px" direction="column" align="center">
              <SocialNetwork
                title="YOUTUBE"
                icon={
                  <SocialIcon
                    media="youtube"
                    width="51px"
                    height="51px"
                    color="#59993F"
                  />
                }
              >
                {width && (
                  <iframe
                    width="100%"
                    height={isMobile ? '175px' : '180px'}
                    src={`https://www.youtube.com/embed/${lastVideo}`}
                    frameBorder="0"
                    allowFullScreen
                  />
                )}
              </SocialNetwork>

              <FollowButton
                text="INSCREVA-SE EM NOSSO CANAL"
                link="https://www.youtube.com/channel/UC-YLSfIYCSIyMHH_6I9G8cw"
              />
            </Flex>

            <SocialNetwork
              title="PINTEREST"
              icon={
                <SocialIcon
                  media="pinterest"
                  width="51px"
                  height="51px"
                  color="#59993F"
                />
              }
            >
              <a
                data-pin-do="embedUser"
                data-pin-lang="pt"
                data-pin-scale-height={isMobile ? '455px' : '470px'}
                data-pin-scale-width={isMobile ? '388px' : '399px'}
                href="https://br.pinterest.com/berneckoficial/"
              />
            </SocialNetwork>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

const SocialNetwork = (props: {
  children: ReactNode
  icon: ReactNode
  title: string
}) => (
  <Flex
    h="100%"
    w={{ base: '245px', xs: '290px', lg: '370px', '2xl': '450px' }}
    direction="column"
    gap="30px"
    align="flex-start"
    overflowX={{ base: 'scroll', md: 'hidden' }}
  >
    <Flex h="51px" gap="18px" alignSelf="space-between" align="center">
      {props.icon}

      <Text fontSize="23px" fontWeight={600} color="gray.250">
        {props.title}
      </Text>
    </Flex>

    {props.children}
  </Flex>
)

const FollowButton = (props: { text: string; link: string }) => (
  <Link href={props.link} target="_blank" w="100%">
    <Button
      _focus={{ outline: 'none' }}
      w="100%"
      h={{ base: '76px', lg: '78px' }}
      color="white"
      bg="green.600"
      borderRadius="17px"
      alignSelf="flex-end"
      fontSize={{ base: '15px', sm: '18px' }}
      fontWeight="bold"
      transition="all 0.2s easy-in-out"
      _hover={{ bg: 'green.700' }}
    >
      {props.text}
    </Button>
  </Link>
)
