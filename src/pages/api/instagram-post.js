export default async function handler(req, res) {
  const APP_ID = process.env.INSTAGRAM_APP
  const SECRET_KEY = process.env.INSTAGRAM_KEY

  try {
    const postJson = await fetch(process.env.NEXT_PUBLIC_API_URL + '/connect')
    const post = await postJson.json()
    const POST = post.instagram_post_link

    const URL = `https://graph.facebook.com/instagram_oembed?url=${POST}&access_token=${APP_ID}|${SECRET_KEY}`

    const dataJson = await fetch(URL)
    const data = await dataJson.json()

    return res.status(200).json({ data })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Internal error' })
  }
}
