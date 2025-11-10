import React from "react";
import { Experience, Feedbacks, Hero, Navbar, StarsCanvas, Works} from "../components";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <div className="relative z-0">
        <div className="relative z-10">
          <Experience />
          <Works />
          <Feedbacks />          
          <StarsCanvas />
        </div>
      </div>
     
    </>
  );
};

export default LandingPage;