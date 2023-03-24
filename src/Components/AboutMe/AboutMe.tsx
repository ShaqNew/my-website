import React from "react";
import AboutMeText from "./AboutMeText";
import AboutMeIcons from "./AboutMeIcons";
import "./aboutMe.scss";
import ParallaxHeading from "../ParallaxHeading/ParallaxHeading";

const AboutMe = () => {
  return (
    <div id="aboutme" className="AboutMe">
      <div className="AboutMe__heading">
        <ParallaxHeading
          image={
            "https://upload.wikimedia.org/wikipedia/commons/8/8b/Stars_and_Mountains.jpg"
          }
          text={"About Me"}
        />
      </div>
      <div className="AboutMe__content">
        <AboutMeText />
        <AboutMeIcons />
      </div>
    </div>
  );
};

export default AboutMe;
