import React from 'react';
import { styles } from '../../styles';
import { motion } from "framer-motion";
import heroImage from "../../assets/hero.png";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto flex items-center justify-center '>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-5`}>
        {/* Content Wrapper */}
        <div className='flex flex-col md:flex-row w-full justify-between items-center gap-5'>
          {/* Decorative Lines and Text */}
          <div className='flex flex-row items-center gap-5'>
            {/* Decorative Lines */}
            <div className='flex flex-col justify-center items-center'>
              <div className='w-5 h-5 rounded-full bg-black-300' />
              <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-black-200 to-black-white' />
            </div>

            {/* Text Content */}
            <div className='mt-5'>
              <h1 className={`${styles.heroHeadText}`}>
                I'm <span className='text-black-300'>Dennis.</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-stone-500`}>
                I develop smart <br className='hidden sm:block' /> contracts for Web3 <br />
                applications and am <br /> a web
                and mobile developer.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className='mt-10 sm:flex sm:flex-col md:flex-row md:mt-0 flex-shrink-0 items-center'>
            <img
              src={heroImage}
              alt="Astronaut in the air"
              className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-black-200 flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-black-200 mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
