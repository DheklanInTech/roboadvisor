"use client"

import Image from 'next/image'
import React from 'react'

const CTA = () => {
  return (
    <div className='bg-white py-16  dark:bg-dark-green lg:px-52 md:px-12 px-4'>
         <div  className="bg-slate-100  dark:bg-footer-grey w-full rounded-md shadow-lg py-10 relative overflow-hidden">
        <div className='lg:block hidden  absolute top-0 left-[14rem] right-0'>
            <Image src="Group 2528.svg" height={100} width={500} alt='circle'/>
        </div>
             <h1 className="lg:text-3xl md:text-xl text-base text-center font-semibold z-10">Download <span className=" text-lemon-green">RoboAdvisor app</span> </h1>
             <h1 className='lg:text-3xl md:text-xl text-base text-center font-semibold z-10'>and invest in your future</h1>
             <div className='flex justify-center items-center gap-4 pt-4 z-10'>
                <button className=' cursor-pointer border-none outline-none'>
                    <Image src="/apple.svg" height={50} width={100} alt='image'/>
                </button>
                <button className=' cursor-pointer border-none outline-none'>
                    <Image src="/google.svg" height={50} width={100} alt='image'/>
                </button>
             </div>
         </div>

    </div>
  )
}

export default CTA