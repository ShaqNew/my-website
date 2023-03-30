import React from "react";
import AboutMeText from "./AboutMeText";
import AboutMeIcons from "./AboutMeIcons";
import "./aboutMe.scss";
import ParallaxHeading from "../ParallaxHeading/ParallaxHeading";
import CityParallax from "./CityParallax/CityParallax";

const AboutMe = () => {
  return (
    <div id="aboutme" className="AboutMe">
      <div className="AboutMe__heading">
        <ParallaxHeading
          image={
            // "https://upload.wikimedia.org/wikipedia/commons/8/8b/Stars_and_Mountains.jpg"
            "https://i.pinimg.com/originals/a9/02/c3/a902c36ba47e99e7330ff4ced84f7425.jpg"
          }
          text={"About Me"}
        />
      </div>
      <div className="AboutMe__content">
        <AboutMeText />
        <AboutMeIcons />
        {/* <CityParallax/> */}
      </div>
    </div>
  );
};

export default AboutMe;
