import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Find from '../components/Find'
import Customer from '../components/Customer'
import Choose from '../components/Choose'

const Home = () => {
  return (
    <div className='w-full h-auto bg-[#ECECEC] ' >
        <Navbar/>
        <Hero/>
        <Find/>
        <Customer/>
        <Choose/>
    </div>
  )
}

export default Home