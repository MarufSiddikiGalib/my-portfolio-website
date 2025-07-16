import React from 'react'
import ModeToggle from "@/components/ModeToggle";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from '@/components/Skills';
import ProjectCard from '@/components/ProjectCard';

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ProjectCard />


    </div>
  )
}

export default page
