import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { EarthCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { whatsappIcon, instagram, github, twitter, linkedin } from '../../assets';

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_o7uzdyc",
      "template_yxqn2mz",
      {
        from_name: form.name,
        to_name: "Dennis Wambua",
        from_email: form.email,
        to_email: "denny012dw@gmail.com",
        message: form.message,
      },
      "H5ZV072qSD42G4Tny"
    )
      .then(() => {
        setLoading(false);
        alert("Thank you. I will reach back to you as soon as possible!");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert("Something went wrong.");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75]  p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Engage Me</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white- font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='bg-tertiary py-4 px-6 placeholder:text-black-200 text-black rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className='bg-tertiary py-4 px-6 placeholder:text-black-200 text-black rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows={6}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to communicate?"
                className='bg-tertiary py-4 px-6 placeholder:text-black-200 text-black rounded-lg outline-none border-none font-medium'
              />
            </label>
            <button
              className='bg-tertiary py-3 px-8 outline-none w-fit text-secondary font-bold shadow-md shadow-primary rounded-xl hover:bg-secondary
               transition duration-300 ease-in-out transform hover:scale-105'
              type='submit'
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.5, 1.5)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />


          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/254717200173"
            target="_blank"
            rel="noopener noreferrer"
            className='fixed bottom-4 right-4 w-12 h-12 rounded-full flex justify-center items-center transition-transform transform hover:scale-110 hover:shadow-lg'
            aria-label="WhatsApp"
          >
            <img
              src={whatsappIcon}
              alt="WhatsApp"
              className='w-28 h-28 object-contain'
            />
          </a>
        </motion.div>
      </div>

      {/* footer */}
      
    </>
  );
};

export default SectionWrapper(Contact, "contact");

