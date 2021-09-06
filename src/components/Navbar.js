import React, { useEffect, useState } from "react";
import navlogo from "../images/naveenlogo2.png";
import "../style/navbar.css";
import DarkModeToggle from "react-dark-mode-toggle";
import { Link } from "react-scroll";
import { setTheme } from "./theme";
import st from "./switchoff1.wav";

function Navbar() {
  const switchoff = new Audio(st);
  const [togClass, setTogClass] = useState("light");
  let theme = localStorage.getItem("theme");
  const handleOnClick = () => {
    switchoff.play();
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setTogClass("light");
    } else {
      setTheme("theme-dark");
      setTogClass("dark");
    }
    switchoff.currentTime = 0;
  };
  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTogClass("dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setTogClass("light");
    }
  }, [theme]);

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
      <DarkModeToggle
        onChange={handleOnClick}
        checked={togClass === "light" ? false : true}
        size={70}
      />
    </div>
  );
}

export default Navbar;
