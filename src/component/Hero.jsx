import React from 'react'
import Typed from 'react-typed';
const Hero = () => {
  return (
    <div className='text-white mt-5'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2 md-text-5xl sm:text-2xl text-xl'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md-text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
            <div className=' flex justify-center items-center'>
                <p className='md:text-3xl sm:text-2xl text-xl font-bold'>Fast , flexible financing for</p>
                <Typed strings={['BTB','BTC','SASS']} typeSpeed={120} backSpeed={140} loop className=' pl-2 md:text-3xl sm:text-2xl text-xl font-bold text-gray-600' />
            </div>
            <p className='md:text-2xl sm:text-1xl text-xs font-bold text-gray-600'>Monitor your data ANALYTICS to increase revenue for BTB,BTC,&SASS </p>
            <button className='bg-[#00df9a] w-[200px] my-6 p-20px rounded-2xl font-medium mx-auto py-2 text-black hover:scale-105 duration-200 hover:text-gray-200' >Get Start</button>
        </div>
    </div>
  )
}

export default Hero