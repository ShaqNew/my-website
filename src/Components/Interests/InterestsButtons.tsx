import React from "react";

const InterestsButtons = (props: {switchView:any}) => {
const {switchView} = props

    return (
        <div className="buttonsContainer">
            <button onClick={() => switchView('Gaming')} className="buttonsContainer__button">Gaming</button>
            <button onClick={() => switchView('Movies')} className="buttonsContainer__button">Movies</button>
            <button onClick={() => switchView('Science')} className="buttonsContainer__button">Science</button>
            {/* <button onClick={() => switchView('Animals')} className="buttonsContainer__button">Animals</button> */}
        </div>
    )
}

export default InterestsButtons