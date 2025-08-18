import React from 'react';
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { testimonials } from "../../constants";
import { AnimatedTestimonials,Footer,IntegrationsSection } from "../../components"


const Feedbacks = () => {
  return (
    <div className='mt-12 rounded-[20px]'>
      <div className={`bg-gray-200 rounded-2xl ${styles.padding} min-h-[100px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
      <IntegrationsSection/>
      <Footer />
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");