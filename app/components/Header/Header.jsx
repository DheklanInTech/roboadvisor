"use client"

import {useTheme} from "next-themes";
import React,{useContext} from 'react'
import MoneyBag from '../icon/MoneyBag'
import StarOne from "../icon/StarOne";
import StarTwo from "../icon/StarTwo";
import Naira from "../icon/Naira";
import SearchSection from "../SelarchSection/SearchSection";
import { motion } from "framer-motion";
import AnimatedTextWord from "./AnimatedWord";
import AnimatedText2 from "./Animate2";

const Header = () => {
    const { theme } = useTheme()
   // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };



  return (

    <div className='bg-white dark:bg-dark-green h-[80vh] relative overflow-hidden'>
       
        <div className='absolute lg:right-[24rem] right-[5rem]' >
          <MoneyBag fill={theme === "light" ?"#263238": "#fff"}/>
        </div>
        <motion.div
           animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
         className='absolute bottom-[10rem] right-[10rem]' >
          <StarOne fill={theme === "light" ?"#263238": "#fff"}/>
        </motion.div>
        <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.1, 0.3, 0.5, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
        className='absolute top-[10rem] lg:left-[14rem] left-7' >
          <StarTwo fill={theme === "light" ?"#263238": "#fff"}/>
        </motion.div>
        <div className='absolute top-[10rem] right-[4rem]' >
          <Naira fill={theme === "light" ?"#263238": "#fff"}/>
        </div>









     <modiv className='flex flex-col justify-center items-center pt-40'>
      <AnimatedTextWord text="The easiest and fastest"/>
      <AnimatedText2 spantext="Invest" text2="in" text="way to"/>
      <AnimatedText2 spantext="" text="Stock-Markets" text2=""/>
        <p className=' mt-8 text-center md:text-base text-sm md:w-[50%] w-[80%] text-dark-green dark:text-white '>Even with the inevitable ups and downs of the market, our expert-built, globally-diversified Automated Investing Account makes it easy to start building long-term wealth by managing your risk, maximizing returns, and minimizing taxes </p>
        <div className="lg:w-[35%] w-full px-4">
        <SearchSection/>
        </div>
     </modiv>
    </div>
  )
}

export default Header