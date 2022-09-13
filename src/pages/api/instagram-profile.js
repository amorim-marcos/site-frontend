export default async function handler(req, res) {
  const APP_ID = process.env.INSTAGRAM_APP
  const SECRET_KEY = process.env.INSTAGRAM_KEY
  const ACCOUNT = process.env.INSTAGRAM_PROFILE

  const URL = `https://graph.facebook.com/v11.0/instagram_oembed?url=${ACCOUNT}&access_token=${APP_ID}|${SECRET_KEY}`

  try {
    const dataJson = await fetch(URL)
    const data = await dataJson.json()

    return res.status(200).json({ data })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Internal error' })
  }
}
