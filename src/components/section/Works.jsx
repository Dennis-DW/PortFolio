"use client";
import React from 'react';
import { HeroParallax } from "../ui/hero-parallax";
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { styles } from '../../styles';
import { github } from '../../assets';
import { SectionWrapper } from '../../hoc';
import { products } from '../../constants';
import { fadeIn, textVariant } from '../../utils/motion';



const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Developments</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <HeroParallax products={products} />
    </>
  );
};

export default SectionWrapper(Works, "");