import Head from 'next/head'

import { ReactNode } from 'react'
import { Box, Button, Flex, Text, Link } from '@chakra-ui/react'

import { SocialIcon } from '@components/Icons'
import CompletedTitle from '@components/CompletedTitle'

import useFacebook from 'hooks/useFacebook'
import useInstagram from 'hooks/useInstagram'

import useMobile from 'hooks/useMobile'
import { useTranslation } from 'react-i18next'

export default function Connect({
  youtubeLink = '',
  lastYoutubeVideo = 'PtRcMibSJgk'
}) {
  const { isMobile, width } = useMobile(568)
  const componentsLabels = useTranslation('components')

  const { Feed } = useInstagram()

  useFacebook()

  return (
    <>
      <Head>
        <script async defer src="https://assets.pinterest.com/js/pinit.js" />
        <script src="https://apps.elfsight.com/p/platform.js" defer />
      </Head>

      <Flex bg={'white.200'} alignItems={'center'} flexDirection={'column'}>
        <Flex></Flex>

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
            titleString={componentsLabels.t('connect.title')}
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
          maxWidth={'1536px'}
          w="100%"
          // border="1px solid red"
          height={{ base: 'auto', lg: '1600px', xl: '800px' }}
          paddingTop="50px"
          paddingLeft={{ lg: '30px' }}
          justifyContent={'space-around'}
          flexWrap={{ base: 'wrap', xl: 'nowrap' }}
        >
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
                  align="start"
                  justify="start"
                  h={isMobile ? '572px' : '520px'}
                  w="100%"
                  direction="column"
                  overflowY={'scroll'}
                >
                  <Feed />
                </Flex>
              )}

              <FollowButton
                text="SIGA-NOS NO INSTAGRAM"
                link="https://www.instagram.com/berneckoficial/"
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
              {width && (
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:6868626499726012417"
                  // height={isMobile ? '572px' : '520px'}
                  height={'520px'}
                  width="100%"
                />
              )}

              <FollowButton
                text="SIGA-NOS NO LINKEDIN"
                link="https://www.linkedin.com/company/berneck-s.a.-pain-is-e-serrados/"
              />
            </Flex>
          </SocialNetwork>

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
              // data-pin-scale-height={isMobile ? '455px' : '470px'}
              data-pin-scale-height={'515px'}
              data-pin-scale-width={isMobile ? '388px' : '399px'}
              href="https://br.pinterest.com/berneckoficial/"
            />
          </SocialNetwork>

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
            <Flex
              gap="20px"
              flexDirection={'column'}
              justifyContent="center"
              alignItems={'center'}
              w="100%"
            >
              {width &&
                typeof youtubeLink.split === 'function' &&
                youtubeLink.split('=').length > 1 && (
                  <iframe
                    width="100%"
                    height={'280px'}
                    // height={isMobile ? '175px' : '510px'}
                    src={`https://www.youtube.com/embed/${
                      youtubeLink.split('=')[1].split('&')[0] ||
                      lastYoutubeVideo
                    }`}
                    frameBorder="0"
                    allowFullScreen
                  />
                )}

              <FollowButton
                text="INSCREVA-SE EM NOSSO CANAL"
                link="https://www.youtube.com/channel/UC-YLSfIYCSIyMHH_6I9G8cw"
              />

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
                    // data-width={isMobile ? '300px' : '500px'}
                    data-width={'500px'}
                    data-small-header="false"
                    data-adapt-container-width={true}
                    data-hide-cover="false"
                    data-show-facepile="false"
                  />
                )}
              </SocialNetwork>
            </Flex>
          </SocialNetwork>
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
    w={{
      base: '245px',
      xs: '290px',
      sm: '85%',
      md: '400px',
      lg: '450px',
      xl: '330px',
      '2xl': '350px'
    }}
    marginBottom={{ base: '50px', lg: '0' }}
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
      fontSize={{ base: '12px', sm: '15px' }}
      fontWeight="bold"
      transition="all 0.2s easy-in-out"
      _hover={{ bg: 'green.700' }}
    >
      {props.text}
    </Button>
  </Link>
)
