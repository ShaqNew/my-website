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
                    "https://www.wallpapertip.com/wmimgs/65-650199_backgrounds-black-and-blue.jpg"
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