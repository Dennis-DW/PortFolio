"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import Floating, { FloatingElement } from "../fancy/image/parallax-floating";
import { technologies } from "../../constants";
import { BallCanvas } from "../canvas";


const rasterTechnologies = technologies.filter((t) =>
  typeof t.icon === "string" ? !t.icon.endsWith(".svg") : true
);

const Preview = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".floating-element", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) });
  }, []);

  return (
    <div
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden"
      ref={scope}
    >
      {/* Floating Elements */}
      <Floating sensitivity={-1} className="overflow-visible h-[50vh] w-[210vh] z-20">
        {rasterTechnologies.map((technology, index) => {
          const top = 10 + ((index * 17) % 70);
          const left = 10 + ((index * 23) % 80);
          return (
            <FloatingElement
              key={technology.name}
              depth={(index % 4) + 1}
              className="floating-element"
              style={{ top: `${top}%`, left: `${left}%` }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
                style={{ width: 96, height: 96 }}
              >
                <BallCanvas icon={technology.icon} />
              </motion.div>
            </FloatingElement>
          );
        })}
      </Floating>
      <motion.div
        className="z-10 text-center space-y-4 items-center flex flex-col"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}
      >
     
      </motion.div>
    </div>
  );
};

export default Preview;