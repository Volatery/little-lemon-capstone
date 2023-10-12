import React from 'react'
import HeroImage from "../assets/restaurantfood.jpg"
const Hero = () => {
  return (
    <>
      <section>
        <div className='bg-[#495d57] flex flex-col lg:flex-row w-full lg:items-start items-center h-[650px] lg:h-[400px] justify-between px-12 lg:px-24 xl:px-32 2xl:px-80 py-12'>
          <div className='font-semibold text-white'>
            <h1 className='text-6xl text-yellow-400 mb-2'>Little Lemon</h1>
            <h2 className='text-4xl mb-6'>Chicago</h2>
            <p className='text-2xl w-96 mb-4'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          </div>
          <div>
            <img className='h-[400px] w-[400px] rounded-3xl' src={HeroImage} alt='Hero Image'></img>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero