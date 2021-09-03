import React from "react";
import "../style/footer.css";
import navlogo from "../images/naveenlogo2.png";

function Footer() {
  return (
    <div className="footer" id="Footer">
      <div className="navbar_logo">
        <img src={navlogo} alt="logo" />
      </div>
      <p>Made with react by me.</p>
    </div>
  );
}

export default Footer;
