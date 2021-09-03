import React from "react";
import "../style/details.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import avatarlogo from "../images/avtar.svg";
// import { BrowserRouter, Link } from "react-router-dom";

function Details() {
  return (
    <div className="details" id="Details">
      <div className="details_name">
        <p>Hello, I'm</p>
        <h1>NAVEEN RAWAT</h1>
        <p className="details_p">FULL STACK WEB DEVELOPER</p>
        <div className="download_resume">
          <a href="./naveenrawat.pdf" download="resume">
            <button>Download Resume</button>
          </a>
        </div>
        <div className="details_icons">
          <a href="https://www.github.com/naveen4rawat" target="_blank">
            <GitHubIcon className="githubicon" />
          </a>
        </div>
      </div>
      <div className="details_avatar">
        <img src={avatarlogo} alt="avatar" />
      </div>
    </div>
  );
}

export default Details;

//#312783  #009fe3 5271ff logo color code
