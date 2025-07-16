"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-16 bg-gradient-to-br from-white to-slate-100 dark:from-black dark:to-slate-900">
      
      {/* Left Side: Info */}
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="text-lg text-black dark:text-white font-bold">Full Stack Developer</p>
         <p className="text-lg text-black dark:text-white font-bold">
    🎓 Pursuing Computer Science and Engineering at <br />
    American International University-Bangladesh (AIUB)
  </p>
        <p className="text-md text-black dark:text-white text-lg">📧 marufsiddikig@gmail.com</p>
        <p className="text-md text-black dark:text-white text-lg">📍 Dhaka, Bangladesh</p>
        <p className="mt-4 text-black dark:text-white leading-relaxed text-lg">
          A goal-oriented software developer with experience in building web applications
          using modern technologies like React, Next.js, and more. Seeking to utilize my
          technical skills to deliver exceptional user experiences.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 justify-center md:justify-start mt-6 text-2xl text-gray-700 dark:text-gray-300">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:marufsiddikig@gmail.com" className="hover:text-red-500 transition">
            <FaEnvelope />
          </a>
          <a href="https://x.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition">
            <FaXTwitter />
          </a>
        </div>
      </div>

      {/* Right Side: Tech Logos with Floating Animation */}
      <div className="w-full md:w-1/2 flex flex-wrap items-center justify-center gap-10 mt-10 md:mt-0">
        {[
          { src: "/logos/nextjs.svg", name: "Next.js" },
          { src: "/logos/react.svg", name: "React" },
          { src: "/logos/express.svg", name: "Express.js" },
          { src: "/logos/sql.svg", name: "SQL" },
        ].map((tech, i) => (
          <div
            key={i}
            className={`flex flex-col items-center animate-float delay-${i} hover:scale-110 transition-transform duration-500 `}
          >
            <div className="w-16 h-16 relative mb-2">
              <Image
                src={tech.src}
                alt={tech.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-700 dark:text-gray-300">{tech.name}</p>
          </div>
        ))}
<style jsx>{`
@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-35px); }
  100% { transform: translateY(0); }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}


 .delay-0 {
    animation-delay: 0s;
  }

  .delay-1 {
    animation-delay: 0.3s;
  }

  .delay-2 {
    animation-delay: 0.6s;
  }

  .delay-3 {
    animation-delay: 0.9s;
  }


`}</style>

      </div>
    </section>
  );
}
