import React from "react";
import ScienceIcons from "./ScienceIcons";
import ScienceText from "./ScienceText";
import "./science.scss"

const Science = () => {
    return (
        <div className="science" data-testid="science-div">
            <h2>Science</h2>
            <div className="science__content">
                <ScienceText />
                <ScienceIcons />
            </div>
        </div>
    )
}

export default Science;