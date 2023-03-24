import React, { useEffect } from "react";
import Animals from "./Animals/Animals";
import Gaming from "./Gaming/Gaming";
import Movies from "./Movies/Movies";
import Science from "./Science/Science";

const InterestsDisplay = (props: {view:string}) => {
    const {view} = props

    const displayView = () => {
        switch(view){
            case 'Gaming':
                return <Gaming/>;
            case 'Movies':
                return <Movies/>;
            case 'Science':
                return <Science/>;
            case 'Animals':
                return <Animals/>;
            default:
                return null
        }
    }

    return (
        <div className="displayContainer">
            {displayView() ? displayView() : <div className="defaultView">default view</div>}
        </div>
    )
}

export default InterestsDisplay;