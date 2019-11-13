import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";

export default function Skills() {
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <div className="skills-image-div">
          <img alt="Saad Working" src={require("../../assests/images/developerActivity.svg")}></img>
        </div>
        <div className="skills-text-div">
          <h1 className="skills-heading">What i do </h1>
          <p className="subTitle skills-text-subtitle">My passion is to solve people's problems with technology.</p>
          <SoftwareSkill />
          <div>
            <p className="subTitle skills-text">🌈 Develop beautiful Applications both for Web and Mobile</p>
            <p className="subTitle skills-text">⚡ Enjoy good challenges</p>
            <p className="subTitle skills-text">💖 Love to code</p>
          </div>
        </div>
      </div>
    </div>
  );
}
