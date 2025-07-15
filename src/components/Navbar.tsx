
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import ModeToggle from "@/components/ModeToggle";

export function Component() {
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
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white mx-14">Maruf Siddiki Galib</span>
      </NavbarBrand>
      <div className="flex md:order-2">

        <div className='flex justify-end p-4 mx-14'>
      <ModeToggle  />
      </div>

        <NavbarToggle />
        
      </div>
      <NavbarCollapse>
        <NavbarLink href="#home">
          Home
        </NavbarLink>
        <NavbarLink href="#about">About</NavbarLink>
        <NavbarLink href="#skills">Skills</NavbarLink>
        <NavbarLink href="#projects">Projects</NavbarLink>
        <NavbarLink href="#education">Education</NavbarLink>
        <NavbarLink href="#contact">Contact</NavbarLink>
      </NavbarCollapse>
      
    </Navbar>
  );
}


export default Component;