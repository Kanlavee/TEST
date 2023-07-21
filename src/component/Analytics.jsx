import React from 'react'
import Tom5 from './assets/2.jpg'

const Analytics = () => {                                                                                                
  return (                                                                                                                      
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 justify-center items-center '>             
            <img src={Tom5} alt='' className='w-[400px] h-[400px] object-cover mx-auto my-6 hover:scale-105 duration-200'></img>
            <div className='pl-2 flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold uppercase md-text-2xl sm:text-xl text-xl'>Data analytics dashboard </p>
                <h1 className='font-bold md-text-5xl sm:text-2xl text-xl pt-4'>Manage Data Analytics Centrally</h1>
                <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto id repellendus nemo blanditiis illum hic consequatur asperiores ea. Officia beatae, aspernatur tenetur ipsam molestias officiis deserunt quasi vitae totam error.</p>
                <button className='bg-black w-[200px] my-6 p-20px rounded-2xl font-medium mx-[30%] py-2 text-[#00df9a] hover:scale-105 duration-200  hover:text-gray-200' >Get Start</button>
            </div>                       
            
        </div>

    </div>
  )
}

export default Analytics