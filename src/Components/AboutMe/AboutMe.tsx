import React from "react";
import AboutMeText from "./AboutMeText";
import AboutMeIcons from "./AboutMeIcons";
import { Parallax } from 'react-scroll-parallax';
import './aboutMe.scss'
import ParallaxImage from "./ParalaxImage";
import ParallaxHeading from "../ParallaxHeading/ParallaxHeading";
import bigBen from '../../utils/icons/big-ben.png'
import gherkin from '../../utils/icons/gherkin.png'
import londonEye from '../../utils/icons/london-eye.png'


const AboutMe = () => {
    return(
            <div id="aboutme" className="AboutMe">
                <div className="AboutMe__heading">
                    <ParallaxHeading/>
                </div>
                <div className="AboutMe__content">
                    <AboutMeText/>
                    <AboutMeIcons/>
                </div>
            </div>
    )
}

export default AboutMe;