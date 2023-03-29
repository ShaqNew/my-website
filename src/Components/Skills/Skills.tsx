import React from "react";
import ParallaxHeading from "../ParallaxHeading/ParallaxHeading";
import "./skills.scss"
import SkillsDisplay from "./SkillsDisplay/SkillsDisplay";
import SkillsText from "./SkillsText";

const Skills = () => {
    return(
        <div id="skills" className="Skills">
            <div className="Skills__heading">
            <ParallaxHeading
                image={
                "https://upload.wikimedia.org/wikipedia/commons/8/8b/Stars_and_Mountains.jpg"
                }
                text={"Skills"}
            />
            </div>
            <div className="Skills__content">
                {/* <SkillsText/> */}
                <SkillsDisplay/>
                {/* <TeckStack/> */}
                {/* <Experience/> */}
                {/* <Outlook/> */}
            </div>
        </div>
    )
}

export default Skills;