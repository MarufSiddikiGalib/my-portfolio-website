"use client";

import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface CardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  liveLink: string;
  sourceCode: string;
}

function ProjectCard({
  title,
  description,
  image,
  tech,
  features,
  liveLink,
  sourceCode,
}: CardProps) {
  return (
    <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-2xl hover:shadow-pink-400/100  transition-all duration-500 overflow-hidden min-h-[450px]">
      {/* Left - Image */}
      <div className="md:w-1/2 w-full h-72 md:h-auto relative group">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Right - Content */}
      <div className="p-8 flex flex-col justify-between md:w-1/2 w-full space-y-6">
        <div>
          <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">{title}</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap mt-6 gap-3">
            {tech.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Key Features */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-base space-y-1">
              {features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 text-base font-medium bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Visit <FaExternalLinkAlt />
          </a>
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 text-base font-medium bg-gray-700 text-white rounded hover:bg-gray-800 transition"
          >
            Source Code <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

// Full Section Component
export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 bg-slate-50 dark:bg-slate-900 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-14">
          Projects
        </h2>

        <ProjectCard
          title="Metro Rail Ticket Booking System"
          description="A web application for booking tickets for the metro rail system."
          image="/project-image/metro.png"
          tech={[
            "Next.js",
            "Node.js",
            "Express.js",
            "My SQL",
            "Tailwind CSS",
          ]}
          features={[
            "Real-time metro map",
            "Journey Planner using Google Map",
          ]}
          liveLink="https://metro-rail-2.vercel.app/"
          sourceCode="https://metro-rail-2.vercel.app/"
        />

<br />
<br />


        <ProjectCard
          title="Youtube Clone"
          description="A web application that replicates the core features of YouTube."
          image="/project-image/yt-clone.png"
          tech={[
            "React.js",
            "Node.js",
            "Tailwind CSS",
          ]}
          features={[
            "video showing",
            "Search functionality",
          ]}
          liveLink="https://youtube-clone-galib.vercel.app/"
          sourceCode="https://github.com/MarufSiddikiGalib/youtube_clone"
        />

<br />
<br />

      <ProjectCard
          title="E Commerce"
          description="A web application for online shoping platform this is under development you can visit and experience the developed part of it "
          image="/project-image/e-commerce.png"
          tech={[
            "Next.js",
            "React.js",
            "Node.js",
            "Tailwind CSS",
            "Python",
            "Django",
          ]}
          features={[
            "buy and sell product",
            "admin dashboard ",
          ]}
          liveLink="https://shop.wasikahmed.com/"
          sourceCode="https://shop.wasikahmed.com/"
        />





      </div>
    </section>





  );
}
