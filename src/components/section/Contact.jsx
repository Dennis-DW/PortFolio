import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { whatsappIcon } from "../../assets";


const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
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
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        alert("Something went wrong.");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="relative min-h-screen py-12 font-generalsans mt-0 mb-0">
      <div className="container mx-auto flex flex-col-reverse xl:flex-row gap-10 overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Form Section */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="md:w-1/2 lg:w-1/2 w-full bg-gradient-to-br from-accent/20 via-card to-tertiary/30 backdrop-blur-md p-5 rounded-xl shadow-lg border border-accent/20 z-10 relative"
        >
          {/* Header and Canvas Row */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col">
              <p className={`${styles.sectionSubText} text-accent text-white uppercase tracking-wider`}>
                Engage Me
              </p>
              <h3 className={`${styles.sectionHeadText} text-foreground font-bold`}>Contact.</h3>
            </div>
            <div className="w-[100px] h-[100px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px]">
              <EarthCanvas />
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-3"
          >
            <label className="flex flex-col">
              <span className="text-foreground font-bold uppercase text-sm mb-1">
                Your Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-2 px-4 placeholder:text-black-200 text-black-100 rounded-md outline-none border border-border focus:border-accent focus:ring-4 focus:ring-accent/30 transition-all duration-300 ease-out shadow-md w-full"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-foreground font-bold uppercase text-sm mb-1">
                Your Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-2 px-4 placeholder:text-black-200 text-black-100 rounded-md outline-none border border-border focus:border-accent focus:ring-4 focus:ring-accent/30 transition-all duration-300 ease-out shadow-md w-full"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-foreground font-bold uppercase text-sm mb-1">
                Your Message
              </span>
              <textarea
                rows={3}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to communicate?"
                className="bg-tertiary py-2 px-4 placeholder:text-black-200 text-black-100 rounded-md outline-none border border-border focus:border-accent focus:ring-4 focus:ring-accent/30 transition-all duration-300 ease-out resize-y shadow-md w-full"
              />
            </label>
            <button
              className="bg-accent py-2 px-6 text-accent-foreground font-bold uppercase rounded-md shadow-md hover:shadow-xl hover:bg-accent/80 transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/50 disabled:opacity-50 mt-4"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
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

export default SectionWrapper(Contact, "contact");