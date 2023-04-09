import React from "react";
import GameCard from "./GameCard";
import { gameList, IGameCard } from "./GameList";
import './gamingLibrary.scss'


const GamingLibrary = () => {
    return (
        <div className="gamingLibrary">
            <div className="gamingLibrary__heading">
                My Favourite Games/Series
            </div>
            <div className="gamingLibrary__content">
                {gameList.map((game:IGameCard) => (
                    <GameCard game={game}/>
                ))}
            </div>
        </div>
    )
}

export default GamingLibrary