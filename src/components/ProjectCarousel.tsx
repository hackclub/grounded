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
    title: "A digital level with RGB LEDs",
    imageUrl: "https://cloud-myjum5y6g-hack-club-bot.vercel.app/0longhorn2.png",
    githubUrl: "https://jams.hackclub.com/batch/sparkletilt-pcb",
  },
  {
    title: "A non-contact temperature meter",
    imageUrl: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/ae8f46ee7f073299633edd7b0d4ad17281649096_image-6-removebg-preview.png",
    githubUrl: "https://github.com/souptik-samanta/Infrared-gun",
  },
  {
    title: "A USB Hardware Key",
    imageUrl: "https://cloud-6a1wip38p-hack-club-bot.vercel.app/1totk_key.png",
    githubUrl: "https://github.com/hackclub/OnBoard/tree/main/projects/TOTKey",
  },
  {
    title: "An Awesome USB Hub",
    imageUrl: "https://cloud-c953eezuq-hack-club-bot.vercel.app/0hub.png",
    githubUrl: "https://jams.hackclub.com/batch/usb-hub",
  },

];

const SCROLL_SPEED = 1; // pixels per frame, must be a whole number for firefox :/

export default function ProjectCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scroll = () => {
      if (!container || isPaused) return;

      container.scrollLeft += SCROLL_SPEED;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    };

    const intervalId = setInterval(scroll, 16); // ~60fps

    return () => clearInterval(intervalId);
  }, [isPaused]);

  // Duplicate projects to create seamless loop effect
  const loopedProjects = [...projects, ...projects];

  return (
    <div className="overflow-hidden relative w-full py-6 scrollbar-hide">
      <div
        ref={containerRef}
        className="flex w-full gap-4 overflow-x-scroll scrollbar-hide"
        style={{
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
              className="object-contain w-full h-full group-hover:blur-sm"
            />
            <div className="absolute inset-0 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center p-4">
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
