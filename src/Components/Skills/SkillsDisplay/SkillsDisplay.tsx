import React, { useEffect, useState } from "react";
import SkillButton from "./SkillButton";
import { ExperienceContent, StackContent, Outlook } from "./SkillButtonContent";
import techBG from "../../../utils/skillsImages/techBackground.jpeg"
import experienceBG from "../../../utils/skillsImages/experienceBackground.jpeg"
import outlookBG from "../../../utils/skillsImages/knowledgePlug.jpeg"
import "./skillsDisplay.scss";

const SkillsDisplay = () => {
  const [activeSkill, setActiveSkill] = useState("");

  useEffect(() => {
    console.log("Active skill: ", activeSkill);
  }, [activeSkill]);

  const buttonStatus = (skill: string) => {
    if (activeSkill === "") {
      return "";
    } else if (activeSkill === skill) {
      return "--active";
    } else {
      return "--collapsed";
    }
  };

  return (
    <div className="skillsDisplay">
      <button
        style={{backgroundImage: `url(${techBG})`}}
        className={`skillsDisplay__stack${buttonStatus("stack")}`}
        data-testid="skill-button-stack"
        onClick={() => {
          setActiveSkill(activeSkill === "stack" ? "" : "stack");
        }}
      >
        <SkillButton
            skill={"stack"}
            status={buttonStatus("stack")}
            heading={"Techstack"}
            content={<StackContent/>}
        />
      </button>
      <button
        style={{backgroundImage: `url(${experienceBG})`}}
        className={`skillsDisplay__experience${buttonStatus("experience")}`}
        data-testid="skill-button-experience"
        onClick={() => {
          setActiveSkill(activeSkill === "experience" ? "" : "experience");
        }}
      >
        <SkillButton
            skill={"experience"}
            status={buttonStatus("experience")}
            heading={"Experience"}
            content={<ExperienceContent/>}
        />
      </button>
      <button
        style={{backgroundImage: `url(${outlookBG})`}}
        className={`skillsDisplay__outlook${buttonStatus("outlook")}`}
        data-testid="skill-button-outlook"
        onClick={() => {
          setActiveSkill(activeSkill === "outlook" ? "" : "outlook");
        }}
      >
      <SkillButton
          skill={"outlook"}
          status={buttonStatus("outlook")}
          heading={"Outlook"}
          content={<Outlook/>}
      />
      </button>
    </div>
  );
};

export default SkillsDisplay;
