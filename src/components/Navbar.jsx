import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import CV from "../assets/cv/ WambuaResume.pdf";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-10 z-20  md:backdrop-blur-md rounded-full md:-left-32`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 md:ml-36"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="DW" className="w-12 h-12 object-contain" />
          <p className="text-white text-[20px] font-bold cursor-pointer">
            Dennis <span className="sm:block hidden">| &nbsp;Wambua</span>
          </p>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} cursor-pointer hover:text-white text-[18px] font-medium`}
              onClick={() => {
                setActive(link.title);
                const element = document.getElementById(link.id);
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li>
            <a
              href={CV}
              download="Dennis_Wambua_Resume.pdf"
              className="text-black bg-white hover:bg-blue-400 py-2 px-4 rounded-full text-[18px] font-medium"
            >
              Download CV
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="sm:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-6 h-6 cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
            aria-label="Menu"
          />

          {/* Mobile Menu */}
          <div
            className={`${toggle ? "flex" : "hidden"} p-6 black-gradient absolute top-20 right-10 mx-4 my-2 min-w-[140px] z-10 rounded-xl sm:hidden`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-black-300" : "text-tertiary"} font-medium cursor-pointer hover:text-blue-200 text-[15px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false);
                    const element = document.getElementById(link.id);
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li>
                <a
                  href={CV}
                  download="Dennis_Wambua_Resume.pdf"
                  className="text-black bg-white hover:bg-blue-400 py-2 px-4 rounded-full text-[18px] font-medium"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
