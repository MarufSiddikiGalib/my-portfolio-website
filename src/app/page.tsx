import React from 'react'
import ModeToggle from "@/components/ModeToggle";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from '@/components/Skills';

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />


    </div>
  )
}

export default page
