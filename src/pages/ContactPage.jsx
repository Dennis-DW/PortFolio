import React from "react";
import { Contact, Navbar, Footer, StarsCanvas, ContactBackground } from "../components";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="relative">
        {/* <div className="h-[14vh]"></div> */}
        <div className="relative">
          <ContactBackground />
          <div className="relative z-20 md:-mt-[300px] lg:-mt-[300px] px-4 sm:px-6 lg:px-8">
            <Contact />
          </div>
        </div>
        <StarsCanvas />
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;