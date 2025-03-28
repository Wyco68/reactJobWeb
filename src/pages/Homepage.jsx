import Hero from '../components/Hero'
import HomeCards from  '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAlljobs from '../components/ViewAlljobs'

const Homepage = () => {
  return (
    <>
    <Hero/>
    <HomeCards/>
    <JobListings isHome={true}/>
    <ViewAlljobs/>
    </>
  )
}

export default Homepage