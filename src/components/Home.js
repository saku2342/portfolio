import React from 'react'
import Navbar from './Navbar'
import Aboutpae from './Aboutpae'
import Experience from './Experience'
import Banner from './Banner'
import Work from './Work'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Aboutpae/>
        <Experience/>
        <Work/>
        <Footer/>
      
    </div>
  )
}

export default Home
