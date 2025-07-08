import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Utility for merging classNames (optional, or use classnames lib)

type Project = {
  title: string;
  imageUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    title: "A Fidget Spinner without any moving parts",
    imageUrl: "https://cloud-r2xrlpq9q-hack-club-bot.vercel.app/0spinner.png",
    githubUrl: "https://github.com/hackclub/OnBoard/tree/main/projects/E-Fidget%20Lite",
  },
  {
    title: "Project Two",
    imageUrl: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/7e51c1129ae840b9626f04786beea81ee03fceef_image.png",
    githubUrl: "https://github.com/yourusername/project-two",
  },
   {
    title: "Project One",
    imageUrl: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/7e51c1129ae840b9626f04786beea81ee03fceef_image.png",
    githubUrl: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    imageUrl: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/7e51c1129ae840b9626f04786beea81ee03fceef_image.png",
    githubUrl: "https://github.com/yourusername/project-two",
  },
   {
    title: "Project One",
    imageUrl: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/7e51c1129ae840b9626f04786beea81ee03fceef_image.png",
    githubUrl: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    imageUrl: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/7e51c1129ae840b9626f04786beea81ee03fceef_image.png",
    githubUrl: "https://github.com/yourusername/project-two",
  },
];

const SCROLL_SPEED = 0.5; // pixels per frame

export default function ProjectCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    const container = containerRef.current;

    const scroll = () => {
      if (container && !isPaused) {
        container.scrollLeft += SCROLL_SPEED;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Duplicate projects to create seamless loop effect
  const loopedProjects = [...projects, ...projects];

  return (
    <div className="overflow-hidden relative w-full py-6  scrollbar-hide">
      <div
        ref={containerRef}
        className="flex w-full gap-4 overflow-x-scroll scrollbar-hide"
        style={{
          scrollBehavior: "auto",
          whiteSpace: "nowrap",
        }}
      >
        {loopedProjects.map((project, idx) => (
          <motion.div
            key={idx}
            className="relative min-w-[600px] h-[400px] rounded-xl overflow-hidden shadow-lg group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0  bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-sm hover:text-blue-400"
              >
                View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
