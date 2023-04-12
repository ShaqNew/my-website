import React from "react";

const SkillButton = (props:any) => {
    const { skill, status, heading, content } = props

    // status: "active"|"collapsed"|{null}

    return (
        <div className={`skillButton${status}`}>
            <h2 className={`skillButton__heading${status}`}>
                {heading}
            </h2>
            <div className={`skillButton__${skill}${status}`}>
                {/* ANIMATE THEM WITH CSS */}
                {status === "--active"?
                content:
                null}
            </div>
        </div>
    )
}

export default SkillButton;