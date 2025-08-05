import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParts } from "@/components/PartsWrapper";

const SCROLL_SPEED = 5;

export default function ProjectCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const { parts, loading, error } = useParts();

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

    const intervalId = setInterval(scroll, 16);
    return () => clearInterval(intervalId);
  }, [isPaused]);

  if (loading) return <div className="text-white">Loading carousel...</div>;
  if (error) return <div className="text-red-400">Error: {error}</div>;

  const loopedParts = [...parts, ...parts];

  return (
    <div className="overflow-hidden relative w-full py-6 scrollbar-hide">
      <div
        ref={containerRef}
        className="flex w-full gap-4 overflow-x-scroll scrollbar-hide"
        style={{ whiteSpace: "nowrap" }}
      >
        {loopedParts.map((part, idx) => (
          <motion.div
            key={idx}
            className="relative min-w-[600px] h-[400px] rounded-xl overflow-hidden shadow-lg group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <img
              src={part.image}
              alt={part.name}
              className="object-contain w-full h-full group-hover:blur-sm"
            />
            <div className="absolute inset-0 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center p-4">
              <h3 className="text-xl font-semibold mb-2">{part.name}</h3>
              {part.ref && (
                <a
                  href={part.ref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-sm hover:text-blue-400"
                >
                  Reference
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
