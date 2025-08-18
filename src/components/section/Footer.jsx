import React from "react"
import { whatsappIcon, instagram, github, twitter, linkedin } from '../../assets';
import { SectionWrapper } from "../../hoc";

const Footer = () => {
  return (
    <div className="reltive bottom-0 w-full">
        <footer className="c-space pt-5 border-t border-white-100 border-double flex flex-col items-center gap-5">
          <div className="text-white-100 flex gap-2 text-sm">
            <p>Terms & Conditions</p>
            <p>|</p>
            <p className="text-blue-500">Privacy Policy</p>
          </div>
          <div className="flex gap-5 justify-center flex-wrap">
            <div className="social-icon">
              <a href="https://github.com/Dennis-DW" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="github" className="w-8 h-8 filter brightness-0 invert" />
              </a>
            </div>
            <div className="social-icon">
              <a href="https://x.com/Dw_denn" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="twitter" className="w-8 h-8 filter brightness-0 invert" />
              </a>
            </div>
            <div className="social-icon">
              <a href="https://www.instagram.com/denny_s_dw/?next=%2F" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="instagram" className="w-8 h-8 filter brightness-0 invert" />
              </a>
            </div>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/dennis-wambua-321a47252/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="linkedin" className="w-8 h-8 filter brightness-0 invert" />
              </a>
            </div>
          </div>

          <p className="text-black-100">© {new Date().getFullYear()} Dennis Wambua. All rights reserved.</p>
        </footer>
      </div>

  )
}

export default SectionWrapper(Footer, "")
