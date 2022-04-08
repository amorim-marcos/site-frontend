import { ReactNode, useEffect, useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Text,
  useMediaQuery,
  ButtonProps
} from '@chakra-ui/react'

import { SocialIcon } from '@components/Icons'
import CompletedTitle from '@components/CompletedTitle'
import useFacebook from 'hooks/useFacebook'
import useMobile from 'hooks/useMobile'
import { breakpoints } from 'theme/breakpoints'

interface IVideo {
  id: {
    kind: string
  }
}

export default function Connect() {
  const { isMobile, width } = useMobile(568)
  const [lastVideo, setLastVideo] = useState<IVideo>()

  const [bpXs, bpLg, bp2xl] = useMediaQuery([
    `(max-width: ${breakpoints.xs})`,
    `(max-width: ${breakpoints.lg})`,
    `(max-width: ${breakpoints['2xl']})`
  ])

  const getWidth = () => {
    return bpXs ? '300px' : bpLg ? '310px' : bp2xl ? '300px' : '397px'
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.YOUTUBE_CHANNEL_ID}&maxResults=1&order=date&type=video&key=${process.env.YOUTUBE_API_KEY}`
      )
      const data = await result.json()

      if (data.items.length > 0) setLastVideo(data.items[0].id.videoId)
    }

    fetchData()
  }, [])

  useFacebook()

  return (
    <Flex
      bg={'white.200'}
      flex="1"
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Flex
        // bg="gray"
        w="100%"
        flex="1"
        maxWidth="1536px"
        marginX="auto"
        position="relative"
        //padding={{ base: '5% 0%', sm: '5%', xl: '5%', '2xl': '3% 3%' }}
        py={{ base: '54px', lg: '100px' }}
<<<<<<< HEAD:src/components/Connect/Connect.tsx
        px={{ base: '20px', lg: '5%', '2xl':'3%' }}
=======
        px={{ base: '20px', lg: '5%', '2xl': '2%' }}
>>>>>>> 3c0010f9f2d05c4e8e329634ce901e23c8b53f1e:src/views/Canal-BNK/sections/Connect.tsx
        align={{ base: 'center', lg: 'flex-start' }}
        justifyContent={{ base: 'center', lg: 'flex-start' }}
      >
        <CompletedTitle
          titleString="Conecte-se"
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
        flex="1"
        // bg="red"
        maxWidth="1536px"
        data-testid="connect"
        h={{ base: 'fit-content' }}
        w="100%"
        gap="50px"
        pt="55px"
        pb="96px"
        px={{ sm: '20px', lg: '88px' }}
        justify="center"
        align={{ base: 'center', lg: 'flex-start' }}
        wrap={{ base: 'wrap', '2xl': 'nowrap' }}
        direction={{
          base: 'column',
          lg: 'row'
        }}
      >
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
              data-href="https://www.facebook.com/BerneckSA"
              data-tabs="timeline"
              data-width={getWidth()}
              data-height={isMobile ? '867px' : '1007px'}
              data-adapt-container-width={true}
              data-lazy={true}
              data-small-header="true"
              data-hide-cover="false"
              data-show-facepile="true"
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
          <Flex direction="column" gap="24px" align="center">
            {width && (
              <Box
                className="fb-page"
                data-href="https://www.facebook.com/BerneckSA"
                data-tabs="timeline"
                data-width={getWidth()}
                data-height={isMobile ? '572px' : '920px'}
                data-adapt-container-width={true}
                data-lazy={true}
                data-small-header="true"
                data-hide-cover="false"
                data-show-facepile="true"
              />
            )}

            <FollowButton
              text="SIGA-NOS NO INSTAGRAM"
              link="/"
              w={getWidth()}
            />
          </Flex>
        </SocialNetwork>

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
            <Flex w="100%" direction="column" gap="30px">
              {width && (
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:6868626499726012417"
                  height={isMobile ? '572px' : '920px'}
                  width={getWidth()}
                />
              )}
            </Flex>

            <FollowButton w={getWidth()} text="SIGA-NOS NO LINKEDIN" link="/" />
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
                <Box
                  as="iframe"
                  width={getWidth()}
                  height={isMobile ? '218px' : '224px'}
                  src={`https://www.youtube.com/embed/${lastVideo}`}
                  frameBorder="0"
                  allowFullScreen
                />
              )}
            </SocialNetwork>

            <FollowButton
              w={getWidth()}
              text="INSCREVA-SE EM NOSSO CANAL"
              link="/"
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
              data-pin-board-width="400"
              data-pin-scale-height={isMobile ? '455px' : '430px'}
              data-pin-scale-width={isMobile ? '388px' : '399px'}
              href="https://br.pinterest.com/berneckoficial/_created/"
            />
          </SocialNetwork>
        </Flex>
      </Flex>
    </Flex>
  )
}

const SocialNetwork = (props: {
  children: ReactNode
  icon: ReactNode
  title: string
}) => (
  <Flex
    h="fit-content"
    direction="column"
    gap="30px"
    align="center"
    overflowX={{ base: 'scroll', md: 'hidden' }}
  >
    <Flex
      h="51px"
      gap="18px"
      alignSelf="flex-start"
      align="center"
      justify="flex-start"
    >
      {props.icon}

      <Text fontSize="23px" fontWeight={600} color="gray.250">
        {props.title}
      </Text>
    </Flex>

    {props.children}
  </Flex>
)

const FollowButton = (props: {
  text: string
  link: string
  w: ButtonProps['w']
}) => (
  <Button
    bg="green.600"
    w="100%"
    h={{ base: '76px', lg: '78px' }}
    borderRadius="17px"
    fontSize={{ base: '15px', sm: '18px' }}
    fontWeight="bold"
    color="white"
    transition="all 0.2s easy-in-out"
    _hover={{
      bg: 'green.700'
    }}
    onClick={() => alert(props.link)}
  >
    {props.text}
  </Button>
)
