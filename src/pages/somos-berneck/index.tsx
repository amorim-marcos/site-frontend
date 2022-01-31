import About from 'views/About'
import { AboutPageContent } from 'views/About/About'
import { TrajectoryTab } from '@components/TrajectoryCarousel/TrajectoryCarousel'
import { GetStaticProps } from 'next'

export type AboutPageProps = {
  page_content: AboutPageContent
  our_trajectory_tabs: TrajectoryTab
  context: any
}

export default function AboutPage({ page_content, our_trajectory_tabs, context }:any){
    return <About page_content={page_content} our_trajectory_tabs={our_trajectory_tabs}/>
}

export const getStaticProps: GetStaticProps = async (context) => {
    const locale = context.locale
    var page_content
    var our_trajectory

    try{
      var res = await fetch(process.env.NEXT_PUBLIC_API_URL+`/who-we-are?_locale=${locale}`)
      page_content = await res.json()
  
      res = await fetch(process.env.NEXT_PUBLIC_API_URL+`/our-trajectory?_locale=${locale}`)
  
      our_trajectory = await res.json()
    }catch(e){
      // if locale not working, get default
      var res = await fetch(process.env.NEXT_PUBLIC_API_URL+`/who-we-are`)
      page_content = await res.json()
  
      res = await fetch(process.env.NEXT_PUBLIC_API_URL+`/our-trajectory`)
  
      our_trajectory = await res.json()
    }


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
        our_trajectory_tabs,
        context
      },
      revalidate: parseInt(process.env.NEXT_PUBLIC_PAGES_REVALITATION_TIME ?? "7200")
    }
  }