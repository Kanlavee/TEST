import React from 'react'
import Tom from './assets/2.jpg'



const Card = () => {
  return (
    <div className='w-full sm:pt-8 sm:pb-0 md:py-[10rem] pt-[10px] px-4 text-white  bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3  gap-8 text-black'>
            <div className='w-full shadow-xl flex flex-col my-4 p-4 rounded-lg hover:scale-105 duration-300 justify-center items-center'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white rounded-lg' src={Tom}></img>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-4xl font-bold text-center '>149$</p>
                <div className='my-8 text-xl text-center font-medium w-full'>
                    <p className='border-t border-b mx-8 py-2'>500 GB Storage</p>
                    <p className='border-b mx-8 py-2'>1 Granted User</p>
                    <p className='border-b mx-8 py-2'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[150px] my-3  rounded-md font-medium  py-[9px] text-black  hover:text-gray-200 duration-200' >Start Trial</button>
            </div>

            <div className='w-full shadow-xl flex flex-col my-4 p-4 rounded-lg hover:scale-105 duration-300 justify-center items-center bg-gray-200'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white rounded-lg' src={Tom}></img>
                <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
                <p className='text-4xl font-bold text-center '>199$</p>
                <div className='my-8 text-xl text-center font-medium w-full'>
                    <p className='border-gray-500 border-t border-b mx-8 py-2'>1 TB Storage</p>
                    <p className='border-gray-500 border-b mx-8 py-2'>3 User Allowed</p>
                    <p className='border-gray-500 border-b mx-8 py-2'>Send up to 10 GB</p>
                </div>
                <button className='bg-black w-[150px] my-3  rounded-md font-medium  py-[9px] text-[#00df9a]  hover:text-gray-200 duration-200 ' >Start Trial</button>
            </div>

            <div className='w-full shadow-xl flex flex-col my-4 p-4 rounded-lg hover:scale-105 duration-300 justify-center items-center'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white rounded-lg' src={Tom}></img>
                <h2 className='text-2xl font-bold text-center py-8'>Group Accout</h2>
                <p className='text-4xl font-bold text-center '>299$</p>
                <div className='my-8 text-xl text-center font-medium w-full'>
                    <p className='border-t border-b mx-8 py-2'>5 TB Storage</p>
                    <p className='border-b mx-8 py-2'>10 User Allowed</p>
                    <p className='border-b mx-8 py-2'>Send up to 20 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[150px] my-3  rounded-md font-medium  py-[9px] text-black  hover:text-gray-200 duration-200 ' >Start Trial</button>
            </div>
        </div>

    </div>
  )
}

export default Card