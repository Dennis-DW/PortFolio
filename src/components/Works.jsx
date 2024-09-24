import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { styles } from '../styles';
import { github,terminal } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.8)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="p-8 rounded-2xl sm:w-[365px] w-full"
      >
        <div className='relative w-full h-[300px]'>
          {/* Image with blur and green overlay on hover */}
          <img
            src={image}
            alt={name}
            className='rounded-2xl w-full h-full object-fill'
            style={{
              transition: 'filter 0.3s ease',
            }}
          />
          {/* Green overlay on hover */}
          <div className='absolute inset-0 bg-[#378B29] bg-opacity-60 opacity-0 hover:opacity-100 rounded-2xl transition-opacity duration-300' />
          
          {/* Content with blur and hover effect */}
          <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            {/* Description with padding */}
            <p className='mt-2 text-secondary text-[14px] px-4'>
              {description}
            </p>
            <div className='mt-4 flex flex-wrap gap-2 items-center'>
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
              {/* Github Icon */}
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
            </div>
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
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[18px] max-w-3xl leading-[30px]'
        >
          I engage in a diverse range of projects that blend technology and creativity. From developing mobile applications with React Native to crafting interactive 3D visuals using Three.js, my work focuses on enhancing user experiences and solving complex problems. I create robust web solutions involving smart contracts for web3 applications and design engaging e-commerce website templates with Tailwind CSS and Vite. My projects also include creating dynamic petrol station finders and integrating blockchain technologies. Each initiative is driven by a passion for innovation, aiming to deliver impactful and user-centric solutions across various digital platforms.
        </motion.p>
      </div>
      <div className='mt-2 flex flex-wrap gap-2 relative'>
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
