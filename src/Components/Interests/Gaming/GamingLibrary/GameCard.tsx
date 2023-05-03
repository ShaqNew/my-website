import React from "react";
import "./gameCard.scss"

const GameCard = (props:any) => {
    const { game } = props;


    return (
        <div className="gameCard" data-testid="gaming-card">
            <div className="gameCard__poster">
                {game.poster}
            </div>
            <div className="gameCard__title">
                {game.title}
            </div>
        </div>
    )
}

export default GameCard;