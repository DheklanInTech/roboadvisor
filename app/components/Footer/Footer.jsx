"use client"

import React from 'react'
import SearchSection from '../SelarchSection/SearchSection'

const Footer = () => {
  return (
    <div className=' bg-slate-100 dark:bg-footer-grey lg:px-32 md:px-12 px-4 py-10'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  border-b-1 pb-8 border-slate-300 dark:border-slate-500'>
          <div>
            <h1 className=' font-semibold text-xl'>RoboAdvisor</h1>
            <p className='text-xs mt-1'>High level experience in web design and development knowledge, producing quality work.</p>
          </div>
          <div>
            <p className=' text-xs'>Subscribe to stay tuned for new web design and latest updates. Let&apos;s do it!</p>
            <SearchSection/>
          </div>
         <div>
            <div className='flex justify-start items-center gap-4'>
              
            </div>
            <p className=' text-xs'>Call us: +23481 651 13687</p>
         </div>
      </div>
      <div className='flex md:flex-row flex-col justify-between items-center pt-6'>
         <p className='text-xs'>Copyright 2023</p>
         <div className='flex items-center gap-4'>
           <p className='text-xs'>Privacy Policy</p>
           <p className='text-xs'>Term of use</p>
           <p className='text-xs'>Site map</p>
         </div>
      </div>
    </div>
  )
}

export default Footer