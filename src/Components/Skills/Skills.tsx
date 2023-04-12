import React from "react";
import ParallaxHeading from "../ParallaxHeading/ParallaxHeading";
import "./skills.scss"
import SkillsDisplay from "./SkillsDisplay/SkillsDisplay";

const Skills = () => {
    return(
        <div id="skills" className="Skills">
            <div className="Skills__heading">
            <ParallaxHeading
                image={
                    "https://www.wallpapertip.com/wmimgs/65-650199_backgrounds-black-and-blue.jpg"
                }
                text={"Skills"}
            />
            </div>
            <div className="Skills__content">
                <SkillsDisplay/>
            </div>
        </div>
    )
}

export default Skills;