import React, { useState } from "react";
import navlogo from "../images/naveenlogo2.png";
import "../style/navbar.css";
import DarkModeToggle from "react-dark-mode-toggle";
import { Link } from "react-scroll";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img src={navlogo} alt="logo" />
      </div>

      <div className="navbar_options">
        <div className="navbar_option">
          <Link
            activeClass="active"
            to="Details"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </div>
        <div className="navbar_option">
          <Link
            activeClass="active"
            to="Skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Skills
          </Link>
        </div>
        <div className="navbar_option">
          <Link
            activeClass="active"
            to="Projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </div>
        <div className="navbar_option">
          <Link
            activeClass="active"
            to="GetinTouch"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Get in Touch
          </Link>
        </div>
        <div className="navbar_option">
          <Link
            activeClass="active"
            to="Footer"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Footer
          </Link>
        </div>
      </div>
      <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={70} />
    </div>
  );
}

export default Navbar;
