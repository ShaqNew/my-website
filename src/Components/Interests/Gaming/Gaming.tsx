import React from "react";
import GamingLibrary from "./GamingLibrary/GamingLibrary";
import GamingText from "./GamingText";
import "./gaming.scss"

const Gaming = () => {
    return (
        <div className="gaming">
            <h2>Gaming</h2>
            <div className="gaming__content">
                    <GamingText />
                    <GamingLibrary />
            </div>
                
        </div>
    )
}

export default Gaming;