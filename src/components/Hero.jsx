import React from 'react'
import hero from '../assets/hero.png';
import Button from './Button';
import play from '../assets/play.png';

const Hero = () => {
  return (
    <div className='px-4 md:px-10 py-8 md:py-16 md:max-w-[70vw] xl:w-[90vw] mx-auto flex justify-center items-center min-h-[94vh]'>
      <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-8'>
        <div className='w-full md:w-1/2 lg:w-[45%] space-y-4 md:space-y-6'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight'>
            Providing Quality <span className='text-active'>Healthcare</span> For A <span className='text-green'>Brighter</span> And <span className='text-green'>Healthy</span>
          </h1>
          <p className='text-sm sm:text-base md:text-lg text-gray-600'>
            Our hospital is committed to delivering exceptional medical care to our patients and their families. With a team of experienced medical professionals, cutting-edge technology, and a compassionate approach, we lead the way in the healthcare industry.
          </p>
          {/* Buttons */}
          <div className='flex flex-col sm:flex-row items-center gap-4'>
            <Button text="Schedule an Appointment" className="w-full sm:w-auto text-sm md:text-base" />
            <div className='flex items-center mt-4 sm:mt-0'>
              <img src={play} alt="Play" className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mr-2' />
              <Button white text="Discover More"  />
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-[55%] mb-6 md:mb-0'>
          <img src={hero} alt="Healthcare Hero" className='w-full h-auto object-cover rounded-lg' />
        </div>
      </div>
    </div>
  )
}

export default Hero