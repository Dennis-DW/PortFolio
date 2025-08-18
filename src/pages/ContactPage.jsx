import React from "react";
import { Contact, Navbar, Footer,StarsCanvas } from "../components";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
        <Footer />
      </div>
     
    </>
  );
};

export default ContactPage;