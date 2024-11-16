import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.8)}
      className="m-4"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="group relative cursor-pointer overflow-hidden px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 rounded-2xl w-full h-full object-fill"
        style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', height: '480px', width: '360px' }}
      >
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#0F0F0F] transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-[#ffffff] transition-all duration-300 group-hover:bg-[#0F0F0F]">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2'
            >
              <img
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </span>
          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90 hidden group-hover:block">
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-[#E8F9FD] text-[14px] px-4'>
              {description}
            </p>
            <div className='mt-4 flex flex-wrap gap-2 items-center'>
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
          <div className="pt-5 text-base font-semibold leading-7 hidden group-hover:block">
            <p>
              <a href={source_code_link} className="text-custom-green-dark transition-all duration-300 group-hover:text-white">Read the docs &rarr;</a>
            </p>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Developments</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='w-full flex justify-center'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-black-200 text-[18px] max-w-3xl leading-[30px]'
        >
          I engage in a diverse range of projects that blend technology and creativity. From developing mobile applications with React Native to crafting interactive 3D visuals using Three.js, my work focuses on enhancing user experiences and solving complex problems. I create robust web solutions involving smart contracts for web3 applications and design engaging e-commerce website templates with Tailwind CSS and Vite. My projects also include creating dynamic petrol station finders and integrating blockchain technologies. Each initiative is driven by a passion for innovation, aiming to deliver impactful and user-centric solutions across various digital platforms.
        </motion.p>
      </div>
      <div className='mt-2 flex flex-wrap justify-center gap-6'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            {...project}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");