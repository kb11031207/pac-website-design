  "use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  title?: string;
  subtitle?: string;
  /** When true, no outer background/padding block is rendered (for embedding in a section). */
  embedded?: boolean;
  /** When "dark", uses #788668 background and light text/dots for contrast. */
  variant?: "light" | "dark";
}

export function Timeline({ data, title, subtitle, embedded = false, variant = "light" }: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const isDark = variant === "dark";
  const wrapperClass = embedded
    ? "w-full"
    : isDark
      ? "w-full bg-[#788668] font-sans md:px-10 rounded-2xl overflow-hidden"
      : "w-full bg-white font-sans md:px-10";

  return (
    <div className={wrapperClass} ref={containerRef}>
      {(title != null || subtitle != null) && (
        <div className="max-w-7xl mx-auto pt-12 pb-4 px-4 md:px-8 lg:px-10">
          {title != null && (
            <h2 className={`text-lg md:text-4xl mb-4 max-w-4xl font-bold ${isDark ? "text-white" : "text-[#3D3D3D]"}`}>
              {title}
            </h2>
          )}
          {subtitle != null && (
            <p className={`text-sm md:text-base max-w-sm ${isDark ? "text-white/90" : "text-[#5C5C5C]"}`}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex justify-start pt-6 md:pt-16 md:gap-10 ${index === 0 ? "pt-4 md:pt-8" : ""}`}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className={`h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center ${isDark ? "bg-[#788668]" : "bg-white"}`}>
                <div className={`h-4 w-4 rounded-full p-2 ${isDark ? "bg-white/90 border border-white" : "bg-[#F8F4EC] border border-[#788668]/30"}`} />
              </div>
              <h3 className={`hidden md:block text-lg md:pl-20 md:text-xl font-semibold ${isDark ? "text-white" : "text-[#788668]"}`}>
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className={`md:hidden block text-lg mb-4 text-left font-semibold ${isDark ? "text-white" : "text-[#788668]"}`}>
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className={`absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ${isDark ? "via-white/30" : "via-[#F8F4EC]"}`}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className={`absolute inset-x-0 top-0 w-[2px] rounded-full ${isDark ? "bg-gradient-to-t from-white/60 via-white/40 to-transparent from-[0%] via-[10%]" : "bg-gradient-to-t from-[#788668] via-[#A3C2B8] to-transparent from-[0%] via-[10%]"}`}
          />
        </div>
      </div>
    </div>
  );
}
