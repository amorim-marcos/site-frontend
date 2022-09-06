import { Flex, Text, Image, Link } from '@chakra-ui/react'
import axios from 'axios'

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

  async function init() {
    let response = await axios.post('/api/instagram-profile')
    setUserData(response.data.data)

    response = await axios.post('/api/instagram-post')
    setPost(response.data.data)
  }

  useEffect(() => {
    process()
  })

  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    console.log('user', userData)
  }, [userData])

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
