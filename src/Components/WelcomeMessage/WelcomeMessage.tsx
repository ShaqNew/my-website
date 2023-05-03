import React from "react";
import {TypeAnimation} from 'react-type-animation'
import ConstructionSign from "../../utils/PNGs/Under-Construction.png";
import "./welcomeMessage.scss";

const WelcomeMessage = () => {
  return (
    <div className="welcome" data-testid="welcome-div">
      <h1 className="welcome__heading" data-testid="welcome-heading">
        Shaq's<br></br>Portfolio
      </h1>
      <p className="welcome__message" data-testid="welcome-message">Hi and welcome to my personal page!</p>
      <p data-testid="welcome-message-animation">
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
      <div className="welcome__links" data-testid="welcome-links">
        <a className="welcome__links--about" href="#aboutme" data-testid="welcome-about">
          About Me
        </a>
        <a className="welcome__links--interests" href="#interests" data-testid="welcome-interests">
          Interests
        </a>
        <a className="welcome__links--skills" href="#skills" data-testid="welcome-skills">
          Skills
        </a>
        <a className="welcome__links--projects" href="#projects" data-testid="welcome-projects">
          Projects
        </a>
      </div>
      <img className="welcome__constructionSign" src={ConstructionSign} alt="Under roadsign"/>
    </div>
  );
};

export default WelcomeMessage;
