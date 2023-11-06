"use client"

import Image from 'next/image'
import React from 'react'
import { how_data } from './howdata'

const HowCard = ({icon,title,description}) => {
    return(
        <div className='flex items-start gap-4 pt-6'>
           <div>
             <Image src={icon} height={30} width={50} alt='icon'/>
           </div>
           <div>
             <h1 className=' font-semibold md:text-base text-sm'>{title}</h1>
             <p className=' md:text-sm text-xs'>{description}</p>
           </div>
        </div>
        )
}

const HowItWorks = () => {
  return (
    <div className='bg-white py-32 dark:bg-dark-green lg:px-52 md:px-12 px-4'>
       <div className='flex md:flex-row flex-col-reverse justify-center items-start gap-8'>
        <div className='md:w-[50%] w-full'>
        <h1  className=' lg:text-3xl md:text-xl text-base text-start font-semibold'>How <span className=' text-lemon-green'>RoboAdvisor</span><br /> Works</h1>
        <p className='text-start mt-3 md:text-sm text-xs mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur </p>

        {how_data.map((item,idx) => (
           <HowCard key={idx} icon={item.icon} description={item.description} title={item.title}/>
        ))}
        </div>
        <div className='md:w-[50%] w-full'>
            <div className='h-full sm:px-2'>
              <Image src="/Frame2.svg" height={100} width={300} alt='image' className='w-full h-fit'/>
            </div>
        </div>
        </div> 
    </div>
  )
}

export default HowItWorks