import React, { useEffect, useState } from "react";
import SkillButtonContent from "./SkillButtonContent";
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
        className={`skillsDisplay__stack${buttonStatus("stack")}`}
        onClick={() => {
          setActiveSkill(activeSkill === "stack" ? "" : "stack");
        }}
      >
        {/* <h2 className={`skillsDisplay__stackHeading${buttonStatus("stack")}`}>
          Techstack
        </h2> */}
        <SkillButtonContent
            skill={"stack"}
            status={buttonStatus("stack")}
            heading={"Techstack"}
            content={"To be imported from Techstack content"}
            backgroundImage={null}
        />
      </button>
      <button
        className={`skillsDisplay__experience${buttonStatus("experience")}`}
        onClick={() => {
          setActiveSkill(activeSkill === "experience" ? "" : "experience");
        }}
      >
        <SkillButtonContent
            skill={"experience"}
            status={buttonStatus("experience")}
            heading={"Experience"}
            content={"To be imported from Experience content"}
            backgroundImage={null}
        />
      </button>
      <button
        className={`skillsDisplay__outlook${buttonStatus("outlook")}`}
        onClick={() => {
          setActiveSkill(activeSkill === "outlook" ? "" : "outlook");
        }}
      >
      <SkillButtonContent
          skill={"outlook"}
          status={buttonStatus("outlook")}
          heading={"Outlook"}
          content={"To be imported from Outlook content"}
          backgroundImage={null}
      />
        {/* <h2
          className={`skillsDisplay__outlookHeading${buttonStatus("outlook")}`}
        >
          Outlook
        </h2> */}
      </button>
    </div>
  );
};

export default SkillsDisplay;
