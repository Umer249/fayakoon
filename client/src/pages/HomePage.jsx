import Hero from '../components/Hero'
import HomeValues from '../components/HomeValues'
import HomeAbout from '../components/HomeAbout'
import HomeServices from '../components/HomeServices'
import HomeStats from '../components/HomeStats'
import HomeCompanies from '../components/HomeCompanies'
import Projects from '../components/Projects'
import Clients from '../components/Clients'
import HomeCta from '../components/HomeCta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeValues />
      <HomeAbout />
      <HomeServices />
      <HomeStats />
      <HomeCompanies />
      <Projects />
      <Clients />
      <HomeCta />
    </>
  )
}
