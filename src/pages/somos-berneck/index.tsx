import About from 'views/About'
import { AboutPageContent } from 'views/About/About'
import { TrajectoryTab } from '@components/TrajectoryCarousel/TrajectoryCarousel'

export type AboutPageProps = {
  page_content: AboutPageContent
  our_trajectory_tabs: TrajectoryTab
}

export default function AboutPage({ page_content, our_trajectory_tabs }:any){
    return <About page_content={page_content} our_trajectory_tabs={our_trajectory_tabs}/>
}

export async function getStaticProps() {
    var res = await fetch(process.env.NEXT_PUBLIC_API_URL+'/who-we-are')
    const page_content = await res.json()

    res = await fetch(process.env.NEXT_PUBLIC_API_URL+'/our-trajectory')

    const our_trajectory = await res.json()

    const our_trajectory_tabs = our_trajectory.year.map((year:any) => {
      return ({
        name: year.year,
        content: {
          title: year.title,
          text: year.description,
          image: process.env.NEXT_PUBLIC_API_URL + year.image.url
        }
      })
    })

    return {
      props: {
        page_content,
        our_trajectory_tabs
      },
      revalidate: parseInt(process.env.NEXT_PUBLIC_PAGES_REVALITATION_TIME ?? "7200")
    }
  }