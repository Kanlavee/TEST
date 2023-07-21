import React from 'react'
import Tom5 from './assets/2.jpg'
const News = () => { 
  return (
    <div className='w-full bg-black py-16 px-4  flex justify-center items-center '>
        <dir className='flex flex-col justify-between  md:flex-row md:w-[70%]  '>
            <div className='text-white md:w-[100%] p-0 ' >
                <h1 className='font-bold md-text-6xl sm:text-2xl text-xl pt-4'>Want trip & tricks to optimize your flow?</h1>
                <p className='pt-3'>Sigh up to our newsletter and stay up to date.</p>
            </div>
            <div>
                <div className='flex flex-col sm:flex-row sm:justify-between   items-center my-3 w-[400px] '>
                    <input className='rounded-md placeholder-gray-500 border p-[5px] py-[9px] w-full md:w-[250px] h-[40px] focus:scale-105 duration-200' placeholder="Enter your email "></input>
                    <button className='bg-[#00df9a] w-[130px] my-6 rounded-md font-medium  py-[9px] text-black  ml-3 hover:scale-105 duration-200' >Notify me</button>
                </div>
                <p className='text-white'>We care about the protection of your data. Read our</p>
                <p className='text-[#00df9a] underline'>Privacy Policy. </p>
            </div>      
        </dir>
    </div>
  )
}

export default News