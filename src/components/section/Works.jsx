"use client";
import React from 'react';
import { HeroParallax } from "../ui/hero-parallax";
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { SectionWrapper } from '../../hoc';
import { products } from '../../constants';
import { fadeIn, textVariant } from '../../utils/motion';



const Works = () => {
  return (
    <>
    <div className="c-space my-2" id="work">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Developments</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <HeroParallax products={products} />
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");