import React from "react";
import "./SocialMedia.css";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a href="https://github.com/mrodrigs" className="icon-button github" target="_blank">
        <i className="fab fa-github"></i>
        <span></span>
      </a>
      <a href="https://www.linkedin.com/in/mrodrigs/" className="icon-button linkedin" target="_blank">
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      <a href="mailto:grtorres17@gmail.com" className="icon-button google" target="_blank">
        <i className="fab fa-google"></i>
        <span></span>
      </a>
      {/* <a href="https://gitlab.com/saadpasta" className="icon-button gitlab" target="_blank">
        <i className="fab fa-gitlab"></i>
        <span></span>
      </a> */}
      <a href="https://www.facebook.com/mauricio.rodrigues19" className="icon-button facebook" target="_blank">
        <i className="fab fa-facebook-f"></i>
        <span></span>
      </a>
    </div>
  );
}
