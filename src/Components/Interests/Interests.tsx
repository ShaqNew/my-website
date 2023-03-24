import React, { useState } from "react";
import ParallaxHeading from "../ParallaxHeading/ParallaxHeading";
import InterestsButtons from "./InterestsButtons";
import './interests.scss'
import InterestsDisplay from "./InterestsDisplay";


const Interests = () => {
    const [view, setView] = useState('')

    const switchView = (newView:string) => {
        if(newView === view){
            setView('')
        } else {
            setView(newView)
        }
    }

    return(
        <section id="interests" className="Interests">
            <div className="Interests__heading">
            <ParallaxHeading
                image={
                    "https://upload.wikimedia.org/wikipedia/commons/8/8b/Stars_and_Mountains.jpg"
                }
                text={"Interests"}
            />
            </div>
            <div className="Interests__content">
                <InterestsButtons switchView={switchView}/>
                <InterestsDisplay view={view}/>
            </div>
        </section>
    )
}

export default Interests;