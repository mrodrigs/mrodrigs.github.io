import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";

export default function Contact() {
  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">Contact Me ☎️</h1>
          <p className="subTitle contact-subtitle">If you're interested in my work or just want to have a talk =)</p>
        </div>
        <div className="contact-text-div">
          <h1 className="contact-detail">+55-14997081201</h1>

          <h1 className="contact-detail-email">grtorres17@gmail.com</h1>

          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
