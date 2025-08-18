"use client";
import { useScroll, useTransform, motion, useInView } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          const itemRef = useRef(null);
          const isInView = useInView(itemRef, { margin: "0px 0px -50% 0px" });

          // Parallax effect for each timeline item
          const parallaxY = useTransform(scrollYProgress, [0, 1], [50, -50]);

          return (
            <motion.div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
              ref={itemRef}
              style={{
                y: parallaxY, // Apply parallax effect
              }}
            >
              {/* Sticky date column */}
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div
                  className={`h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center ${
                    isInView ? "bg-black" : "bg-gray-300 dark:bg-gray-700"
                  }`}
                >
                  {/* Inner circle */}
                  <div
                    className={`h-6 w-6 rounded-full flex items-center justify-center ${
                      isInView
                        ? "bg-black border-black"
                        : "bg-muted dark:bg-gray-500 border-border"
                    }`}
                  >
                    {/* Smallest white circle */}
                    <div
                      className={`h-3 w-3 rounded-full ${
                        isInView ? "bg-white" : "bg-gray-200 dark:bg-gray-600"
                      }`}
                    />
                  </div>
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-black-200 dark:text-black-200">
                  {item.title}
                </h3>
              </div>

              {/* Content */}
              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-black-200 dark:text-black-200">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </motion.div>
          );
        })}

        {/* Vertical line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] 
                     bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
                     from-transparent from-[0%] via-muted dark:via-black-200 to-transparent to-[99%]
                     [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] 
                       bg-gradient-to-t from-primary via-secondary to-transparent 
                       from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};