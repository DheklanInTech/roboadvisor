"use client"

import {useTheme} from "next-themes";
import React,{useContext} from 'react'
import MoneyBag from '../icon/MoneyBag'
import StarOne from "../icon/StarOne";
import StarTwo from "../icon/StarTwo";
import Naira from "../icon/Naira";
import SearchSection from "../SelarchSection/SearchSection";

const Header = () => {
    const { theme } = useTheme()
  return (
    <div className='bg-white dark:bg-dark-green h-[80vh] relative overflow-hidden'>
       
        <div className='absolute lg:right-[24rem] right-[5rem]' >
          <MoneyBag fill={theme === "light" ?"#263238": "#fff"}/>
        </div>
        <div className='absolute bottom-[10rem] right-[10rem]' >
          <StarOne fill={theme === "light" ?"#263238": "#fff"}/>
        </div>
        <div className='absolute top-[10rem] lg:left-[14rem] left-7' >
          <StarTwo fill={theme === "light" ?"#263238": "#fff"}/>
        </div>
        <div className='absolute top-[10rem] right-[4rem]' >
          <Naira fill={theme === "light" ?"#263238": "#fff"}/>
        </div>









     <div className='flex flex-col justify-center items-center pt-20'>
        <h1 className=' text-center lg:text-5xl md:text-2xl text-2xl font-semibold'>The easiest and fastest</h1>
        <h1 className='text-center  lg:text-5xl md:text-2xl text-2xl font-semibold mt-1'>way to <span className=' text-lemon-green'>Invest</span> in</h1>
        <h1 className='text-center  lg:text-5xl md:text-2xl text-2xl font-semibold mt-1'>Stock-Markets</h1>
        <p className=' mt-8 text-center md:text-base text-sm md:w-[50%] w-[80%] text-dark-green dark:text-white '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur </p>
        <div className="lg:w-[35%] w-full px-4">
        <SearchSection/>
        </div>
     </div>
    </div>
  )
}

export default Header