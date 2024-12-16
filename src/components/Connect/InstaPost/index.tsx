interface InstaPostProps {
  postLink: string
}
const InstaPost = ({ postLink }: InstaPostProps) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: `
                          <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${postLink}" style="width: 100%; max-width: 540px; margin: 0 auto;">
                          </blockquote>
                         
                        `
        }}
      ></div>
    </>
  )
}

export default InstaPost
