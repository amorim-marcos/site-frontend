import Head from 'next/head'

import { ReactNode, useEffect, useRef } from 'react'
import { Box, Button, Flex, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

import Script from 'next/script'

import { SocialIcon } from '@components/Icons'
import CompletedTitle from '@components/CompletedTitle'

import useFacebook from 'hooks/useFacebook'
import useInstagram from 'hooks/useInstagram'
import useLinkedin from 'hooks/useLinkedin'

import useMobile from 'hooks/useMobile'
import { useTranslation } from 'react-i18next'

export default function Connect({
  youtubeLink = '',
  lastYoutubeVideo = 'PtRcMibSJgk'
}) {
  const { isMobile, width } = useMobile(568)
  const componentsLabels = useTranslation('components')
  const instagramIframeRef = useRef<HTMLIFrameElement>(null)
  const { linkedinLink } = useLinkedin()

  // const { Feed } = useInstagram()


  // These are hooks to ensure the loading of social networks widgets (Facebook, Pinterest, Linkedin) on the page.

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
        if ((window as any).FB) {
            (window as any).FB.XFBML.parse();
        }
    };

    return () => {
      if (document.body.contains(script)) {
          document.body.removeChild(script);
      }
    };
  
  }, []);

  


  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//assets.pinterest.com/js/pinit.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => {
      if ((window as any).PinUtils) {
        (window as any).PinUtils.build();
      }
    };
    

    return () => {
      if (document.body.contains(script)) {
          document.body.removeChild(script);
      }
    };
  
  }, []); 


  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://platform.linkedin.com/in.js";
    script.async = true;
    document.body.appendChild(script);

    // Note: LinkedIn might not require an onload re-initialization. This is just a pattern.
    script.onload = () => {
        if ((window as any).IN && (window as any).IN.parse) {
            (window as any).IN.parse();
        }
    };

    return () => {
      if (document.body.contains(script)) {
          document.body.removeChild(script);
      }
    };

  }, []);




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
          marginBottom="30px"
        >
          <SocialNetwork
            title="FACEBOOK"
            icon={
              <SocialIcon
                media="facebook"
                width="51px"
                height="51px"
                color="#59993F"
                href="https://www.facebook.com/BerneckSA"
              />
            }
          >
            <Flex w="100%" h="100%">
              <div
                className="fb-page"
                data-href="https://www.facebook.com/BerneckSA"
                data-show-posts="true" 
                data-width=""
                data-height="630"
                data-small-header="false"
                data-adapt-container-width="false"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/BerneckSA"
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/BerneckSA">Berneck</a>
                </blockquote>
              </div>
            </Flex>

            {/* {width && (
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
            )} */}
          </SocialNetwork>
          <SocialNetwork
            title="INSTAGRAM"
            icon={
                <SocialIcon
                  media="instagram"
                  width="51px"
                  height="51px"
                  color="#59993F"
                  href = "https://www.instagram.com/berneckoficial/"
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
                  // overflowY={'scroll'}
                  // overflow={'visible'}
                  overflow={'hidden'}
                  // border="3px solid red"
                  position="relative"
                  // border="2px solid red"
                >
                  <Flex
                    position={'absolute'}
                    left="0"
                    // top="-50px"
                    // h="calc(100% + 50px)"
                    h="100%"
                    w="100%"
                  >
                    <iframe
                      src="https://www.juicer.io/api/feeds/berneckoficial/iframe"
                      frameBorder="0"
                      width="100%"
                      height="100%"
                      style={{
                        display: 'block',
                        margin: '0 auto'
                      }}
                      ref={instagramIframeRef}
                      // style="display:block;margin:0 auto;"
                    ></iframe>

                    {/* <div className="juicer-feed" data-feed-id="berneckoficial">
                      <h1 className="referral">
                        <a href="https://www.juicer.io">Powered by Juicer.io</a>
                      </h1>
                    </div> */}
                  </Flex>
                  {/* <Feed /> */}
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
                  href = "https://www.linkedin.com/company/berneck-s.a.-pain-is-e-serrados/"
                />
            }
          >
            <Flex w="100%" direction="column" gap="24px" align="center">
              {width && (
                <iframe
                  src={linkedinLink}
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
            title="YOUTUBE"
            icon={
                <SocialIcon
                  media="youtube"
                  width="51px"
                  height="51px"
                  color="#59993F"
                  href = "https://www.youtube.com/@Berneckoficial"
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
                    height={'200px'}
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
                title="PINTEREST"
                icon={
                    <SocialIcon
                      media="pinterest"
                      width="51px"
                      height="51px"
                      color="#59993F"
                      href = "https://br.pinterest.com/berneckoficial/"
                    />
                }
              >
                <Flex
                  w="100%"
                  h="220px"
                  // border="1px solid red"
                >
                  <a
                    data-pin-do="embedUser"
                    data-pin-lang="pt"
                    // data-pin-scale-height={isMobile ? '455px' : '470px'}
                    data-pin-scale-height={'515px'}
                    data-pin-scale-width={isMobile ? '388px' : '220px'}
                    href="https://br.pinterest.com/berneckoficial/"
                  />

                  {/* <a
                  data-pin-do="embedBoard"
                  data-pin-board-width="400"
                  data-pin-scale-height="240"
                  data-pin-scale-width="80"
                  href="https://www.pinterest.com/pinterest/official-news/"
                ></a> */}
                </Flex>
              </SocialNetwork>
            </Flex>
          </SocialNetwork>
        </Flex>

        <Script async defer src="//assets.pinterest.com/js/pinit.js"></Script>
        <Script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0"
          nonce="epq7DT2K"
        ></Script>
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
