
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import {LuSunMoon} from "react-icons/lu"

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div className=" ">
   
     
       {theme === "dark" ? 
      <LuSunMoon className=" cursor-pointer" onClick={() => setTheme('light')} /> :
      <LuSunMoon className=" cursor-pointer"  onClick={() => setTheme('dark')}/>
       }
     
    </div>
  )
};