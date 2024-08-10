import logo from '../assets/logo2.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/Twitter.png';
import instagram from '../assets/Instagram.png';
import linkedin from '../assets/LinkedIn.png';
import youtube from '../assets/YouTube.png';



const Footer = () => {
  return (
    <div className="w-full h-[400px] bg-active " >
      <div className="w-full px-4 sm:px-6 md:px-10">
      <div className="w-full max-w-[1240px] mx-auto p-4 sm:p-6 md:p-8">
        <footer className='flex justify-between pt-[50px] ' >
            <div className='text-white flex flex-col gap-5' >
                <img src={logo} alt="logo" width={220}  />
                <p> Copyright © 2024 BRIX Templates <br /> | All Rights Reserved  </p>
            </div>
            <div className='text-white flex flex-col gap-5  ' >
                <h1 className='text-white font-bold text-xl pb-4  ' >Product</h1>
                <p>Features</p>
                <p>Pricing</p>
                <p>Case studies</p>
                <p>Reviews</p>
                <p>Updates</p>
            </div>
            <div className='text-white flex flex-col  gap-5' >
                <h1 className='text-white font-bold text-xl  pb-4' >Company</h1>
                <p>About</p>
                <p>Contact us</p>
                <p>Careers</p>
                <p>Culture</p>
                <p>Blog</p>
            </div>
            <div className='text-white flex flex-col gap-5  ' >
                <h1 className='text-white font-bold text-xl  pb-4' >Support</h1>
                <p>Getting started</p>
                <p>Help center</p>
                <p>Server status</p>
                <p>Report a bug</p>
                <p>Chat Support</p>
            </div>
            <div className='text-white flex flex-col gap-5 ' >
                <h1 className='text-white font-bold text-xl  pb-4' >Follow us</h1>
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
                <img src={linkedin} alt="" />
                <img src={youtube} alt="" />
            </div>
        </footer>
      </div>
      </div>
    </div>
  )
}

export default Footer
