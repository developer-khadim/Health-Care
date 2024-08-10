
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Find from '../components/Find'
import Customer from '../components/Customer'
import Choose from '../components/Choose'
import Services from '../components/Services'
import Team from '../components/Team'
import Testimonial from '../components/Testimonial'
import Contribution from '../components/Contribution'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='w-full h-auto bg-[#ECECEC] ' >
        <Navbar/>
        <Hero/>
        <Find/>
        <Customer/>
        <Choose/>
        <Services/>
        <Team/>
        <Testimonial/>
        <Contribution/>
        <Footer/>
    </div>
  )
}

export default Home