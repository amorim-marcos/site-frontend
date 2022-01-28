import About from 'views/About'

export default function AboutPage({ page_content }){
    return <About page_content={page_content} />
}

export async function getStaticProps() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL+'/who-we-are')
    const page_content = await res.json()

    return {
      props: {
        page_content
      },
      revalidate: process.env.NEXT_PUBLIC_PAGES_REVALITATION_TIME
    }
  }