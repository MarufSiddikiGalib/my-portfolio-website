import React from 'react'
import ModeToggle from "@/components/ModeToggle";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from '@/components/Skills';
import ProjectCard from '@/components/ProjectCard';
import Contact from '@/components/Contact'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ProjectCard />
      <Contact />


    </div>
  )
}

export default page
