"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-400, 200]), springConfig);

  return (
    <div
      ref={ref}
      className="
        h-auto 
        md:h-auto
        pt-6 md:pt-10 
        pb-6 md:pb-10 lg:pb-12
        overflow-hidden 
        antialiased 
        relative 
        flex flex-col 
        [perspective:1000px] 
        [transform-style:preserve-3d]
      "
    >
      <Header />

      <motion.div
        style={{ rotateX, rotateZ, translateY, opacity }}
        className="px-4 md:px-10 flex flex-col space-y-6 md:space-y-8 lg:space-y-10"
      >
        {/* First Row */}
        <motion.div className="flex flex-row-reverse md:space-x-reverse space-x-4 md:space-x-12 overflow-x-auto md:overflow-visible pb-2 md:pb-3">
          {firstRow.map((product, idx) => (
            <ProductCard product={product} translate={translateX} key={`${product.title}-${idx}`} />
          ))}
        </motion.div>

        {/* Second Row */}
        <motion.div className="flex flex-row md:space-x-12 space-x-4 overflow-x-auto md:overflow-visible pb-2 md:pb-3">
          {secondRow.map((product, idx) => (
            <ProductCard product={product} translate={translateXReverse} key={`${product.title}-${idx}`} />
          ))}
        </motion.div>

        {/* Third Row */}
        <motion.div className="flex flex-row-reverse md:space-x-reverse space-x-4 md:space-x-12 overflow-x-auto md:overflow-visible pb-0">
          {thirdRow.map((product, idx) => (
            <ProductCard product={product} translate={translateX} key={`${product.title}-${idx}`} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => (
  <div className="max-w-7xl relative mx-auto py-6 md:py-12 lg:py-16 px-4 text-center md:text-left">
    <p className="text-2xl md:text-5xl font-bold dark:text-white leading-tight">
      I engage in a <br className="hidden md:block" /> diverse range of projects
    </p>
    <p className="max-w-2xl mx-auto md:mx-0 text-sm md:text-lg mt-4 md:mt-6 dark:text-neutral-200">
      Each initiative is driven by a passion for innovation, aiming to deliver impactful and
      user-centric solutions across various digital platforms.
    </p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-6 md:mt-8"
    >
      <a
        href="https://github.com/Dennis-DW?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white dark:bg-white dark:text-black font-semibold px-6 py-2 md:px-8 md:py-3 rounded-full shadow-md hover:shadow-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-300"
        >
          View More Projects
        </motion.button>
      </a>
    </motion.div>
  </div>
);

export const ProductCard = ({ product, translate }) => (
  <motion.div
    style={{ x: translate }}
    whileHover={{ y: -15 }}
    className="
      group/product 
      relative 
      flex-shrink-0 
      w-56 h-40 
      sm:w-64 sm:h-44 
      md:w-[22rem] md:h-56 
      lg:w-[26rem] lg:h-64 
      rounded-xl 
      overflow-hidden 
      shadow-md 
      bg-neutral-100 dark:bg-neutral-900
    "
  >
    <a href={product.link} className="block h-full w-full">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="object-contain absolute h-full w-full inset-0 transition-transform duration-500 group-hover/product:scale-105"
      />
    </a>
    <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-70 bg-black transition-opacity duration-300 pointer-events-none"></div>
    <h3 className="absolute bottom-3 left-3 text-sm sm:text-base md:text-lg opacity-0 group-hover/product:opacity-100 text-white transition-opacity duration-300">
      {product.title}
    </h3>
  </motion.div>
);
