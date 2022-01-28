import { ReactNode } from 'react'

import { Box, Button, Flex, Text } from '@chakra-ui/react'

import { SocialIcon } from '@components/Icons'

import { Section } from './Section'
import useFacebook from 'hooks/useFacebook'

export const Connect = () => {
  const { oEmbedRead } = useFacebook()

  // oEmbedRead()

  return (
    <Section title="Conecte-se" bg="green.100" pt="65px">
      <Flex
        data-testid="connect"
        h="1250px"
        w="100%"
        gap="52px"
        pt="55px"
        pb="96px"
        px="88px"
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
          <div
            className="fb-page"
            data-href="https://www.facebook.com/BerneckSA"
            data-tabs="timeline"
            data-width="397px"
            data-height="1007px"
            data-small-header="true"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          />
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
          <Flex direction="column" gap="24px">
            <Box h="920px" w="398px" bg="grey" />

            <FollowButton text="SIGA-NOS NO INSTAGRAM" link="/" />
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
          <Flex direction="column" gap="24px">
            <Flex direction="column" gap="30px">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:6888885113761873920"
                height="445px"
                width="398px"
              />

              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:6868626499726012417"
                height="445px"
                width="398px"
              />
            </Flex>

            <FollowButton text="SIGA-NOS NO LINKEDIN" link="/" />
          </Flex>
        </SocialNetwork>

        <Flex gap="70px" direction="column">
          <Flex gap="32px" direction="column">
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
              <iframe
                width="399px"
                height="224px"
                src="https://www.youtube.com/embed?listType=user_uploads&list=CienciaTodoDia" // Berneckoficial
                frameBorder="0"
                allowFullScreen
              />
            </SocialNetwork>

            <FollowButton text="INSCREVA-SE EM NOSSO CANAL" link="/" />
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
              data-pin-scale-height="473px"
              data-pin-scale-width="399px"
              href="https://br.pinterest.com/berneckoficial/_created/"
            />
          </SocialNetwork>
        </Flex>
      </Flex>
    </Section>
  )
}

const SocialNetwork = (props: {
  children: ReactNode
  icon: ReactNode
  title: string
}) => (
  <Flex w="397px" h="fit-content" direction="column" gap="31px">
    <Flex h="51px" gap="18px" align="center" justify="flex-start">
      {props.icon}

      <Text fontSize="23px" fontWeight={600} color="grey.250">
        {props.title}
      </Text>
    </Flex>

    {props.children}
  </Flex>
)

const FollowButton = (props: { text: string; link: string }) => (
  <Button
    bg="green.600"
    w="99%"
    borderRadius="17px"
    fontSize="18px"
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
