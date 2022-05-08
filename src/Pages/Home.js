import React from 'react'
import Benifits from '../Components/Benifits'
import Download from '../Components/Download'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Mission from '../Components/Mission'

function Home() {
  return (
    <div>
      <Header/>
        <Hero/>
        <Benifits/>
        <Mission/>
        <Download/>
        <Footer/>
    </div>
  )
}

export default Home