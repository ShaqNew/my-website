import React from "react";

const SkillButtonContent = (props:any) => {
    const { skill, status, heading, content, backgroundImage } = props

    return (
        <div className="skillButtonContent">
            <h2 className={`skillButtonContent__heading${status}`}>
                {heading}
            </h2>
            <div className={`skillButtonContent__${skill}${status}`}>
                {content}
            </div>
        </div>
    )
}

export default SkillButtonContent;