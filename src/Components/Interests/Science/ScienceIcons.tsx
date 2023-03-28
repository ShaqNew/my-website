import React from "react";
import kurzgesagtBird from "../../../utils/icons/kurzgesagt-bird.png"
import blackhole from "../../../utils/icons/blackhole-giphy.gif"

const ScienceIcons = () => {
    return (
        <div className="scienceIcons">
            <img className="scienceIcons__kurzgesagtBird" src={kurzgesagtBird} alt="Kurzgesagt Bird"></img>
            <img className="scienceIcons__blackhole" src={blackhole} alt="Blackhole"></img>
        </div>
    )
}

export default ScienceIcons;