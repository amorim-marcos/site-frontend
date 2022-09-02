import { Flex, Text, Image, Link } from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'

// Ad instgrm to window type
declare global {
  interface Window {
    instgrm: {
      Embeds: {
        process: () => void
      }
      isProcessed: boolean
    }
  }
}

export function useInstagramOembed() {
  const [loaded, setLoaded] = useState(false)

  const script = document.createElement('script')

  script.src = 'https://www.instagram.com/embed.js'
  script.async = true
  script.onload = () => setLoaded(true)

  document.body.appendChild(script)

  const process = useCallback(
    () => loaded && window.instgrm.Embeds.process(),
    [loaded]
  )

  useEffect(() => window.addEventListener('resize', process), [process])

  useEffect(() => {
    return () => {
      const embed = document.querySelector('.instagram-media')

      if (embed) {
        document.getElementById('instagram')?.removeChild(embed)
      }
    }
  }, [])

  return { process }
}

export default function useOembedPageInstagram() {
  const [userData, setUserData] = useState<any>()
  const [post, setPost] = useState<any>()

  const { process } = useInstagramOembed()

  useEffect(() => {
    process()
  })

  useEffect(() => {
    const APP_ID = '7948908401846796'
    const SECRET_KEY = '8da86289b34a339c4641c13f4e89e341'
    const ACCOUNT = 'https://www.instagram.com/berneckoficial/'

    const URL = `https://graph.facebook.com/v11.0/instagram_oembed?url=${ACCOUNT}&access_token=${APP_ID}|${SECRET_KEY}`

    fetch(URL)
      .then((res) => res.json())
      .then((data) => setUserData(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const POST = 'https://www.instagram.com/p/CXwjl8flrYf/'
    const APP_ID = '7948908401846796'
    const SECRET_KEY = '8da86289b34a339c4641c13f4e89e341'

    const URL = `https://graph.facebook.com/instagram_oembed?url=${POST}&access_token=${APP_ID}|${SECRET_KEY}`

    fetch(URL)
      .then((res) => res.json())
      .then((data) => setPost(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const Feed = () => {
    return (
      <div>
        <Link
          href={`https://instagram.com/${userData?.author_name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Flex align="center" gap="19px">
            <Image
              src={userData?.thumbnail_url}
              alt=""
              w="80px"
              h="80px"
              borderRadius="50%"
            />

            <Text
              fontSize="21px"
              fontFamily="Montserrat"
              fontWeight="bold"
              color="green.900"
            >
              {userData?.author_name}
            </Text>
          </Flex>
        </Link>

        {post && <div dangerouslySetInnerHTML={{ __html: post.html }} />}
      </div>
    )
  }

  return { Feed }
}
