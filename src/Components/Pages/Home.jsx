import React from 'react'
import HeroSection from '../HeroSection'
import HomeCard from '../HomeCard'
import JobListing from '../JobListing'
import ViewAllJobs from '../ViewAllJobs'
const Home = () => {
  return (
    <>
      <HeroSection/>
      <HomeCard/>
      <JobListing isHome={true}/>
      <ViewAllJobs/>
    </>
  )
}

export default Home
