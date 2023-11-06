"use client"

import Image from 'next/image'
import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";




const PathWay = () => {
    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className='bg-white  dark:bg-dark-green lg:px-52 md:px-12 px-4'>
       <div className='flex md:flex-row flex-col justify-center items-start gap-8'>
       <div className='md:w-[50%] w-full'>
            <div className='h-full sm:px-2'>
              <Image src="/Frame 22.svg" height={100} width={300} alt='image' className='w-full h-fit'/>
            </div>
        </div>
        <div className='md:w-[50%] w-full'>
        <h1  className=' lg:text-3xl md:text-xl text-base text-start font-semibold'>Your <span className=' text-lemon-green'>Pathway</span><br /> to Future Investments</h1>
        <p className='text-start mt-3 md:text-sm text-xs mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur </p>
        <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="What is RoboAdvisor">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="How safe is RoboAvisor">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="How do i gain from using RoboAdvisor ">
        {defaultContent}
      </AccordionItem>
    </Accordion>
        </div>
      
        </div> 
    </div>
  )
}

export default PathWay