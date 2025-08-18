import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { EarthCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { whatsappIcon } from '../../assets';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert('Please fill in all fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    emailjs
      .send(
        'service_o7uzdyc',
        'template_yxqn2mz',
        {
          from_name: form.name,
          to_name: 'Dennis Wambua',
          from_email: form.email,
          to_email: 'denny012dw@gmail.com',
          message: form.message,
        },
        'H5ZV072qSD42G4Tny'
      )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will reach back to you as soon as possible!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setLoading(false);
        // console.error(error); // Commented out
        alert('Something went wrong.');
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="relative min-h-screen py-12 font-generalsans">
      <div className="container mx-auto xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Form Section */}
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] bg-primary p-8 rounded-lg "
        >
          <p className={`${styles.sectionSubText} text-accent`}>Engage Me</p>
          <h3 className={`${styles.sectionHeadText} text-foreground `}>Contact.</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-6 ">
            <label className="flex flex-col">
              <span className="text-foreground font-medium mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-3 px-5 placeholder:text-black-200 text-black-100 rounded-md outline-none border border-border focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all duration-300"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-foreground font-medium mb-2">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-3 px-5 placeholder:text-black-200 text-black-100 rounded-md outline-none border border-border focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all duration-300"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-foreground font-medium mb-2">Your Message</span>
              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to communicate?"
                className="bg-tertiary py-3 px-5 placeholder:text-black-200 text-black-100 rounded-md outline-none border border-border focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all duration-300 resize-none"
              />
            </label>
            <button
              className="bg-accent py-3 px-8 text-accent-foreground font-bold rounded-md shadow-md hover:bg-accent/80 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>

        {/* Earth Canvas Section */}
        <motion.div
          variants={slideIn('right', 'tween', 0.5, 1.5)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/254717200173"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 w-14 h-14 bg-accent rounded-full flex justify-center items-center shadow-md hover:shadow-lg transition-transform transform hover:scale-110 z-50 shadow-card backdrop-blur-sm"
          aria-label="WhatsApp"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8 object-contain" />
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');