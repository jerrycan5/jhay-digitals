import React from 'react'
import HeroSection from '../Component/HeroSection'
import Features from '../Component/Features'
import Statistics from '../Component/Statistics'
import Broad from '../Component/Broad'
import Footer from '../Component/Footer'

function Home() {
  return (
    <div>

        <HeroSection/>
        <Features/>
        <Statistics/>
        <Broad/>
        <Footer/>

    </div>
  )
}

export default Home