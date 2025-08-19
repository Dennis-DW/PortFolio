import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { styles } from "../../styles";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";
import CV from "../../assets/cv/WambuaResume.pdf";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll to update active state
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 70; // Offset by navbar height (70px)
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActive(link.title);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => handleScroll(id), 100);
    } else {
      handleScroll(id);
    }
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-5 z-50 md:backdrop-blur-md rounded-full md:-left-32`}
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
              className={`${
                active === link.title
                  ? "text-white border-b-2 border-white"
                  : "text-secondary hover:text-white"
              } cursor-pointer text-[18px] font-medium pb-1`}
              onClick={() => {
                setActive(link.title);
                handleNavigation(link.id);
              }}
            >
              {link.id === "contact" ? (
                <Link to="/contact">{link.title}</Link>
              ) : (
                <a href={`#${link.id}`}>{link.title}</a>
              )}
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
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 black-gradient absolute top-20 right-10 mx-4 my-2 min-w-[140px] z-10 rounded-xl sm:hidden`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-black-300 border-b-2 border-black-300"
                      : "text-tertiary hover:text-blue-200"
                  } font-medium cursor-pointer text-[15px] pb-1`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false);
                    handleNavigation(link.id);
                  }}
                >
                  {link.id === "contact" ? (
                    <Link to="/contact">{link.title}</Link>
                  ) : (
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}
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