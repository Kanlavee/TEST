import React from 'react'
import {FaDribbbleSquare,FaFacebookSquare,FaGithubSquare,FaInstagram,FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-black flex justify-center '>
        <div className='text-white grid md:grid-cols-2 lg:flex lg:justify-between  w-full py-8 px-8 mx-auto'>
            <div className='w-full'>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>APOLLO</h1>
                <p className='pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis mollitia laudantium expedita. Eius distinctio placeat quo voluptatem, consequatur possimus aspernatur, enim illum incidunt repudiandae repellendus ducimus fugit, similique voluptatum tenetur?</p>
                <div className='flex text-5xl mt-6 justify-between lg:w-[80%]'>
                    
                    <FaFacebookSquare className='cursor-pointer hover:scale-105 duration-400 hover:text-[#00df9a]'></FaFacebookSquare>
                    <FaGithubSquare className='cursor-pointer hover:scale-105 duration-400 hover:text-[#00df9a]'></FaGithubSquare>
                    <FaInstagram className='cursor-pointer hover:scale-105 duration-400 hover:text-[#00df9a]'></FaInstagram>
                    <FaTwitterSquare className='cursor-pointer hover:scale-105 duration-400 hover:text-[#00df9a]'></FaTwitterSquare>
                    <FaDribbbleSquare className='cursor-pointer hover:scale-105 duration-400 hover:text-[#00df9a]'></FaDribbbleSquare>
                </div>
            </div>

            <div className='flex pt-3 w-full mt-8 justify-between lg:ml-10 lg:w-[60%] left-1  md:ml-3 ' >
                <div className=''>
                    <p className='hover:scale-105 duration-300 hover:text-[#00df9a] cursor-pointer'>Solution</p>
                    <p className='pt-4 hover:scale-105 duration-300 hover:text-[#00df9a] cursor-pointer'>Analytics</p>
                    <p className='pt-4 hover:scale-105 duration-300 hover:text-[#00df9a] cursor-pointer'>Marketing</p>
                    <p className='pt-4 hover:scale-105 duration-300 hover:text-[#00df9a] cursor-pointer'>Commerce</p>
                    <p className='pt-4 hover:scale-105 duration-300 hover:text-[#00df9a] cursor-pointer'>Insights</p>
                </div>

                <div className=''>
                    <p className='hover:scale-105 duration-300 hover:text-[#00df9a] cursor-pointer'>Solution</p>
                    <p className='pt-4  hover:scale-105 duration-300 hover:text-[#00df9a] cursor-pointer'>Analytics</p>
                    <p className='pt-4  hover:scale-105 duration-300 hover:text-[#00df9a] cursor-pointer'>Marketing</p>
                    <p className='pt-4  hover:scale-105 duration-300 hover:text-[#00df9a] cursor-pointer'>Commerce</p>
                    <p className='pt-4  hover:scale-105 duration-300 hover:text-[#00df9a] cursor-pointer'>Insights</p>
                </div>

                <div className=''>
                    <p className='hover:scale-105 duration-300 hover:text-[#00df9a] cursor-pointer'>Solution</p> 
                    <p className='pt-4  hover:scale-105 duration-300 hover:text-[#00df9a] cursor-pointer'>Analytics</p>
                    <p className='pt-4  hover:scale-105 duration-300 hover:text-[#00df9a] cursor-pointer'>Marketing</p>
                    <p className='pt-4  hover:scale-105 duration-300 hover:text-[#00df9a] cursor-pointer'>Commerce</p>
                    <p className='pt-4  hover:scale-105 duration-300 hover:text-[#00df9a] cursor-pointer'>Insights</p>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Footer