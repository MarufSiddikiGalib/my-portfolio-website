"use client";
import Image from "next/image";
import { useEffect } from "react";

const skills = {
  "Programming Languages": [
    { name: "JavaScript", logo: "/logos/javascript.svg" },
    { name: "C++", logo: "/logos/cpp.svg" },
    { name: "C#", logo: "/logos/csharp.svg" },
    { name: "Java", logo: "/logos/java.svg" },
    { name: "PHP", logo: "/logos/php.svg" },
  ],
  "Front End": [
    { name: "React.js", logo: "/logos/react.svg" },
    { name: "Next.js", logo: "/logos/nextjs.svg" },
    { name: "HTML", logo: "/logos/html.svg" },
    { name: "CSS", logo: "/logos/css.svg" },
    { name: "Bootstrap", logo: "/logos/bootstrap.svg" },
    { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
  ],
  "Backend": [
    { name: "Express.js", logo: "/logos/express.svg" },
    { name: "Node.js", logo: "/logos/nodejs.svg" },
  ],
  Databases: [
    { name: "MongoDB", logo: "/logos/mongodb.svg" },
    { name: "MySQL", logo: "/logos/sql.svg" },
  ],
  "Tools & Platforms": [
    { name: "Git", logo: "/logos/git.svg" },
    { name: "GitHub", logo: "/logos/github.svg" },
    { name: "VS Code", logo: "/logos/vscode.svg" },
    { name: "Figma", logo: "/logos/figma.svg" },
    { name: "Vercel", logo: "/logos/vercel.svg" },
  ],
};

export default function Skills() {


 // 👇 Animation trigger with IntersectionObserver
   useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            // 👇 Remove disappear and trigger appear
            el.classList.remove("animate-disappear");
            el.classList.add("animate-appear");
          } else {
            // 👇 Remove appear and trigger disappear
            el.classList.remove("animate-appear");
            el.classList.add("animate-disappear");
          }
        });
      },
      { threshold: [0.2] } 
    );

    const elements = document.querySelectorAll(".skill-block");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);




  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white to-slate-100 dark:from-black dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
          My Skills
        </h2>

        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              {category}
            </h3>
            <div className="flex flex-wrap gap-6">
              {items.map((skill, idx) => (
                <div
                  key={idx}
                   // 👇 Added `skill-block` class for observer to detect
                  className="skill-block opacity-0 group w-24 md:w-28 text-center "
                >
                  <div className="w-16 h-16 mx-auto relative mb-2">
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      fill
                      className="object-contain transition-transform duration-300 hover:scale-120"
                    />
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

<style jsx>{`
         @keyframes appear {
  from {
    opacity: 0;
    transform: translateX(40px);
    
  }
  to {
    opacity: 1;
    transform: translateX(0);
   
  }
}

.animate-appear {
  animation: appear 0.8s ease forwards;
}

@keyframes disappear {
  from {
    opacity: 1;
    transform: translateX(0);
    
  }
  to {
    opacity: 0;
    transform: translateX(40px);
    
  }
}

.animate-disappear {
  animation: disappear 0.8s ease forwards;
}

        `}</style>


      </div>
    </section>
  );
}
