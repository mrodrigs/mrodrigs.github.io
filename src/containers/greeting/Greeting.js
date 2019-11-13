import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

export default function Greeting() {
  return (
    <div className="gretting-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">Hi, I'm Maurício =)</h1>
            <p className="greeting-text-p subTitle">
              Full Stack Javascript Developer <span role="img" aria-label="Notebook">💻</span><br></br>
              Computer Science @FCT-Unesp <span role="img" aria-label="Notebook">📚</span><br></br>
              Reactjs, Nodejs and React Native ⚛️
            </p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              {/* <Button text="See my resume" newTab={true} href="https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing" /> */}
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img alt="saad sitting on table" src={require("../../assests/images/manOnTable.svg")}></img>
        </div>
      </div>
    </div>
  );
}
