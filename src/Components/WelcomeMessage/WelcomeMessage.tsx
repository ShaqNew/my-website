import React from "react";
import {TypeAnimation} from 'react-type-animation'
import ConstructionSign from "../../utils/PNGs/Under-Construction.png";
import "./welcomeMessage.scss";

const WelcomeMessage = () => {
  return (
    <div className="welcome">
      <h1 className="welcome__heading">
        Shaq's<br></br>Portfolio
      </h1>
      <p className="welcome__message">Hi and welcome to my personal page!</p>
      <p>
        I created this website to introduce myself as a 
        <TypeAnimation
            sequence={[
                ' developer.',
                3000,
                ' developer and a person.',
                1000,
                ' developer and a person! :D',
                6000,
            ]}
            speed={50}
            repeat={Infinity}
        />
      </p>
      <li className="welcome__links">
        <a className="welcome__links--about" href="#aboutme">
          About Me
        </a>
        <a className="welcome__links--interests" href="#interests">
          Interests
        </a>
        <a className="welcome__links--skills" href="#skills">
          Skills
        </a>
        <a className="welcome__links--projects" href="#projects">
          Projects
        </a>
      </li>
      <img className="welcome__constructionSign" src={ConstructionSign} alt="Under roadsign"/>
    </div>
  );
};

export default WelcomeMessage;
