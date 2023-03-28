import React from "react";
import ParallaxHeading from "../ParallaxHeading/ParallaxHeading";
import "./skills.scss"
import SkillsText from "./SkillsText";

const Skills = () => {
    return(
        <div id="skills" className="Skills">
            <div className="AboutMe__heading">
            <ParallaxHeading
                image={
                "https://upload.wikimedia.org/wikipedia/commons/8/8b/Stars_and_Mountains.jpg"
                }
                text={"Skills"}
            />
            </div>
            <div className="Skills__content">
                <SkillsText/>
            </div>
        </div>
    )
}

export default Skills;