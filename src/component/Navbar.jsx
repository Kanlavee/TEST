import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const[nav,setNav]=useState(false)
    const handleNav = () =>{
      setNav(!nav)
    }

  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4' >
        <h1 className='mx-5 md:mx-0 text-3xl font-bold text-[#00df9a] duration-300 hover:text-white cursor-pointer '>APOLLO</h1>
        <ul className='hidden md:flex cursor-pointer '>
            <li className='p-4 hover:scale-105 duration-300 hover:text-[#00df9a] '>Home</li>
            <li className='p-4 hover:scale-105 duration-300 hover:text-[#00df9a] '>Company</li>
            <li className='p-4 hover:scale-105 duration-300 hover:text-[#00df9a] '>Resources</li>
            <li className='p-4 hover:scale-105 duration-300 hover:text-[#00df9a] '>About</li>
            <li className='p-4 hover:scale-105 duration-300 hover:text-[#00df9a] '>contact</li>
         </ul>
        <div onClick={handleNav} className='text-gray-500 right-10 top-8 fixed cursor-pointer block md:hidden hover:scale-105 hover:text-[#00df9a] duration-300 z-50 '>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={30}/>}
        </div>
        <div className='md:hidden'>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] b ease-in-out duration-500 ':'fixed left-[-100%] '}>
              <h1 className='w-full text-3xl font-bold text-[#00df9a] ml-4 mt-8'>APOLLO</h1>
              
              <ul className='p-4 uppercase  '>
                <li className='p-4 border-b border-b-gray-600 hover:text-2xl hover:text-[#00df9a] duration-500 cursor-pointer '>Home</li>
                <li className='p-4 border-b border-b-gray-600 hover:text-2xl hover:text-[#00df9a] duration-500 cursor-pointer'>Company</li>
                <li className='p-4 border-b border-b-gray-600 hover:text-2xl hover:text-[#00df9a] duration-500 cursor-pointer '>Resources</li>
                <li className='p-4 border-b border-b-gray-600 hover:text-2xl hover:text-[#00df9a] duration-500 cursor-pointer'>About</li>
                <li className='p-4 border-b border-b-gray-600 hover:text-2xl hover:text-[#00df9a] duration-500 cursor-pointer'>contact</li>
              </ul>
            </div> 
        </div>  
    </div>
  )
}

export default Navbar