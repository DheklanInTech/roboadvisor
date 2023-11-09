"use client"

import React,{useState} from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button,NavbarMenuToggle, NavbarMenu,NavbarMenuItem,} from "@nextui-org/react";
import { ThemeSwitcher } from "../ThemeSwitcher";



const NavbarComponent = () => {
const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const[isActive,setIsActive] = useState(false)
 

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl"  isBlurred={false} className=" bg-white dark:bg-dark-green fixed">
      
      <NavbarBrand>
      <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-gray-600 dark:text-white"
        />
      
        <p className="font-bold ml-4 text-sm">RoboAdvisor</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className=" text-lemon-green" href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link className="text-lemon-green" href="#">Login</Link>
        </NavbarItem>
        <NavbarItem className="flex items-center gap-4">
          <Button as={Link} className=" bg-lemon-green text-white text-xs" href="#" variant="flat">
            Sign Up
          </Button>
          <ThemeSwitcher/>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-white dark:bg-dark-green">
     
      <NavbarMenuItem onMenuOpenChange={setIsMenuOpen}>
      <Link href="#" aria-current="page" className={`${isActive ? "text-blue-600" : "text-white"}`}>
          Pricing 
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
      <Link href="#" aria-current="page" className={`${isActive ? "text-blue-600" : "text-white"} mb-3`} >
          About
        </Link>
     </NavbarMenuItem>
     <NavbarMenuItem className="flex lg:hidden mb-2">
         
      </NavbarMenuItem>
      <NavbarMenuItem className="flex lg:hidden">
     
      </NavbarMenuItem>
    </NavbarMenu>
    </Navbar>
  );
}
export default NavbarComponent
