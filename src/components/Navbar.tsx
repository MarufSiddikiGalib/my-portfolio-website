"use client"
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import ModeToggle from "@/components/ModeToggle";
import { motion, Variants } from "framer-motion";

export function Component() {


 const linkVariants: Variants = {
    hover: {
        
      x: 6,
      textShadow: "0px 0px 8px rgba(59, 130, 246, 0.8)",
      transition: { type: "spring", stiffness: 300, damping: 10, },
      
     
    },
  };



  return (
    <Navbar fluid rounded className="
    sticky top-0 z-50
    mx-auto mt-4
    w-fit
    px-8 py-2
    bg-white/30 dark:bg-gray-900/30
    backdrop-blur-md
    shadow-md
    rounded-full
    border border-gray-200 dark:border-gray-700
        
      ">
      <NavbarBrand href="#home">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <motion.span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white mx-14"
        variants={linkVariants}
        whileHover="hover"
        //variants={linkVariants}

        >Maruf Siddiki Galib</motion.span>
      </NavbarBrand>
      <div className="flex md:order-2">

        <div className='flex justify-end p-4 mx-14'>
      <ModeToggle  />
      </div>

        <NavbarToggle />
        
      </div>
      <NavbarCollapse>
        <motion.a 
         variants={linkVariants}
         whileHover="hover"
        href="#home" 
        className="text-lg"
        >
          Home
        </motion.a>

        <motion.a
         variants={linkVariants}
         whileHover="hover"
        href="#about"
        className="text-lg"
        >About</motion.a>

        <motion.a 
         variants={linkVariants}
         whileHover="hover"
        href="#skills"
        className="text-lg"
        >Skills</motion.a>


        <motion.a 
         variants={linkVariants}
         whileHover="hover"
        href="#education"
        className="text-lg"
        >Education</motion.a>


        <motion.a 
         variants={linkVariants}
         whileHover="hover"
        href="#contact"
        className="text-lg"
        >Contact</motion.a>


      </NavbarCollapse>
      
    </Navbar>
  );
}


export default Component;