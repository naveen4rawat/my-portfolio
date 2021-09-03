import React from "react";
import "../style/skills.css";
import hero from "../images/hero.svg";
import htmllogo from "../images/html.svg";
import jslogo from "../images/javascript.svg";
import reactlogo from "../images/react.svg";
import nodelogo from "../images/nodejs.svg";

function Skills() {
  return (
    <div className="skills" id="Skills">
      <div className="skills_logo">
        <img className="logo_image" src={hero} alt="" />
      </div>
      <div className="skillset">
        <h1>My Skillset</h1>
        <div className="skills_logos">
          <img src={htmllogo} alt="" />
          <img src={jslogo} alt="" />
          <img src={reactlogo} alt="" />
          <img src={nodelogo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
