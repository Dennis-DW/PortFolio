import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { styles } from "../styles";  
import { navLinks } from "../constants";  
import { logo, menu, close } from "../assets";  
import CV from "../assets/cv/CVWambua.pdf";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20`}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} 
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="DW" className='w-12 h-12 object-contain' />
          <p className='text-white text-[20px] font-bold cursor-pointer'>
            Dennis <span className='sm:block hidden'>| &nbsp;Wambua Kioko</span>
          </p>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} cursor-pointer hover:text-white text-[18px] font-medium`}
              onClick={() => {
                setActive(link.title);
                window.scrollTo({ top: document.getElementById(link.id).offsetTop, behavior: 'smooth' });
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          {/* Download CV Button */}
          <li>
            <a
              href={CV}
              download="Dennis_Wambua_Kioko_CV.pdf"
              className='text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-full text-[18px] font-medium'
            >
              Download CV
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-6 h-6 cursor-pointer object-contain'
            onClick={() => setToggle(!toggle)}
            aria-label="Menu"
          />

          {/* Mobile Menu */}
          <div className={`${!toggle ? "hidden" : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[120px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer hover:text-white text-[15px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false);
                    window.scrollTo({ top: document.getElementById(link.id).offsetTop, behavior: 'smooth' });
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              {/* Download CV Button in Mobile Menu */}
              <li>
                <a
                  href={CV}
                  download="Dennis_Wambua_Kioko_CV.pdf"
                  className='text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-full text-[15px] font-medium'
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;


