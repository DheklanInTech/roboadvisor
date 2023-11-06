"use client"

import React from 'react'

const SearchSection = () => {
  return (
  <div className='mt-8 flex items-center justify-between rounded-md  bg-gray-200 dark:bg-white py-1 px-1 w-full'>
    <input type="text" className='bg-gray-200 dark:bg-white text-sm text-dark-green border-none outline-none' placeholder='Enter your email' />
    <button className=' bg-lemon-green text-white py-2 px-4 text-sm rounded-sm'>Get Started</button>
  </div>
  )
}

export default SearchSection