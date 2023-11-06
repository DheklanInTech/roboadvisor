"use client"

import React from 'react'
import {useTheme} from "next-themes";
import MarketIcon from '../icon/MarketIcon'
import ForbesIcon from '../icon/ForbesIcon'
import BusinessIcon from '../icon/BusinessIcon'
import FidelityIcon from '../icon/FidelityIcon'


const Companies = () => {
    const { theme } = useTheme()

  return (
    <div className="lg:px-52 md:px-12 px-2 bg-white dark:bg-dark-green">
      <div
       className="lg:pb-4 md:pb-0 flex flex-wrap justify-around items-center gap-4">
        <MarketIcon className="" fill={theme === "light" ?"#263238": "#C4C4C4"}/>
        <ForbesIcon  fill={theme === "light" ?"#263238": "#C4C4C4"}/>
        <BusinessIcon  fill={theme === "light" ?"#263238": "#C4C4C4"}/>
        <FidelityIcon  fill={theme === "light" ?"#263238": "#C4C4C4"}/>
        {/* <WiredIcon/> */}
      </div>
  </div>
  )
}

export default Companies