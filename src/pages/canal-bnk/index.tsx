import { GetServerSideProps, GetStaticProps } from 'next'
import { Post } from 'types/data'
import CanalBNK from 'views/Canal-BNK'
import DOMPurify from 'isomorphic-dompurify'
import { CanalBNKProps } from '../../views/Canal-BNK/index'
import { nameSpaces, ni18nConfig } from '../../../ni18n.config'
import { loadTranslations } from 'ni18n'

export default function CanalBnk(props: CanalBNKProps) {
  return (
    <CanalBNK
      posts={props.posts}
      categories={props.categories}
      patterns_pack_url={props.patterns_pack_url}
      defaultCategory={-1}
      youtubeDownloadLink={props.youtubeDownloadLink}
      youtubeVideos={props.youtubeVideos}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const locale = context.locale
  let page_content
  let categories
  let downloads_page
  let youtubeDownloadLink
  let youtubeVideos

  let res

  try {
    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/posts?_locale=${locale}`
    )
    page_content = await res.json()

    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/categories?_locale=${locale}`
    )
    categories = await res.json()

    res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/downloads-page?_locale=${locale}`
    )

    downloads_page = await res.json()

    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/connect`)
    youtubeDownloadLink = await res.json()
    youtubeDownloadLink = youtubeDownloadLink.youtube_video_link

    res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${
        process.env.YOUTUBE_CHANNEL_ID
      }&maxResults=${4}&order=date&type=video&key=${
        process.env.YOUTUBE_API_KEY
      }`
    )

    youtubeVideos = (await res.json()).items
  } catch (e) {
    // if locale not working, get default
    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/posts`)
    page_content = await res.json()

    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/categories`)

    categories = await res.json()

    res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/downloads-page`)

    downloads_page = await res.json()
  }

  const data: Post[] = page_content
    ? page_content.map(
        (item: {
          cover: {
            url: string
          }
          category: {
            name: string
            id: number
            description: string
            color: string
          }
          content: string
          tags: {
            tag: string
          }[]
          title: string
          published_at: string
          url_code: string
        }) => {
          const post: Post = {
            category: {
              name: item.category.name,
              id: item.category.id,
              description: item.category.description,
              color: item.category.color
            },
            content: DOMPurify.sanitize(item.content),
            cover: process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL + item.cover.url,
            tags: item.tags
              ? item.tags.map((j) => ({
                  Tag: j.tag
                }))
              : [],
            title: item.title,
            date: item.published_at,
            url_code: item.url_code
          }
          return post
        }
      )
    : []

  categories = categories.sort((a: { name: string }, b: { name: string }) => {
    if (a.name < b.name) {
      return -1
    }
    if (b.name < a.name) {
      return 1
    }
    return 0
  })

  const patterns_pack_url = downloads_page.patterns_pack_file
    ? process.env.NEXT_PUBLIC_UPLOADS_ROOT_URL +
      downloads_page.patterns_pack_file.url
    : null

  return {
    props: {
      posts: data,
      categories,
      youtubeDownloadLink,
      patterns_pack_url,
      youtubeVideos,
      ...(await loadTranslations(ni18nConfig, locale, nameSpaces))
    }
  }
}
