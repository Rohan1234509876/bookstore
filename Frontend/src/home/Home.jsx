import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
    <Banner />
    <div className="mt-20">
      <Freebook />
    <Footer />

    </div>
    </>
  )
}

export default Home