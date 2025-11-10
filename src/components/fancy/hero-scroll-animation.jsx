'use client';

import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import React, { useRef, forwardRef } from 'react';
import { About, HeroStart } from '../../components';

/**
 * @typedef {Object} SectionProps
 * @property {MotionValue<number>} scrollYProgress
 */

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -3]);
  return (
    <motion.section
      style={{ scale, rotate }}
      className="sticky top-0 min-h-screen bg-gradient-to-t from-background to-card flex items-center justify-center z-40"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:clamp(30px,5vw,40px)_clamp(30px,5vw,40px)] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <HeroStart />
    </motion.section>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.section
      className="relative bg-primary text-foreground z-40"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <article className="container mx-auto relative z-10">
        <About />
        </article>
        <div    
      >
        <h1 className="text-[15vw] translate-y-20 leading-[100%] uppercase font-semibold text-center text-gray_gradient transition-all ease-linear">
        Experience.
        </h1>
        <div
          style={{
            background: 'radial-gradient(ellipse 120% 80% at top left, #0b090a, #ffffff 120%)',
          }}
          className="text-foreground h-44 relative z-40 grid place-content-center text-2xl rounded-tr-full rounded-tl-full"
        ></div>
      </div>
    </motion.section>
  );
};

const HeroAnimation = forwardRef((props, ref) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <main ref={container} className="relative bg-background z-30">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
});

HeroAnimation.displayName = 'HeroAnimation';

export default HeroAnimation;