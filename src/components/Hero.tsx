// components/Hero.tsx
"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button"; // If using shadcn UI. Else, use <button>
import { motion, Variants } from "framer-motion";

export default function Hero() {


const linkVariants: Variants = {
    hover: {
        
      x: 6,
      textShadow: "0px 0px 8px rgba(59, 130, 246, 0.8)",
      transition: { type: "spring", stiffness: 300, damping: 10, },
      
     
    },
  };


  return (
    <section id ="home" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-10 bg-gradient-to-br from-white to-slate-100 dark:from-black dark:to-slate-900">
      {/* Left Side */}
      <div className=" text-center md:text-left w-full  space-y-6">
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
          Hello! I'm Maruf Siddiki Galib,<br />
          <span className="text-blue-600 dark:text-blue-400">a Full Stack Developer</span> and a Quick Learner.
        </h1>

        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button
           className="px-6 py-3 text-lg rounded-full">
            <motion.span
             variants={linkVariants}
              whileHover="hover"
            > View Resume </motion.span>
          </Button>
        </a>
      </div>

      {/* Right Side */}
      <div className=" md:flex justify-center  ">
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4  border-indigo-400 hover:shadow-pink-400/80 hover:ring-8 hover:ring-pink-300 hover:scale-110 transition-all duration-500">
          <Image
            src="/my-avatar.jpeg" // Put your image in public/my-avatar.jpeg
            alt="Maruf Siddiki Galib"
            width={256}
            height={256}
            className="object-cover w-full h-full "
            priority
          />
        </div>
      </div>
    </section>
  );
}
