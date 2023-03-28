import RocketLeague from "../../../../utils/gamePosters/rocket_league_poster.jpeg"
import GodOfWar from "../../../../utils/gamePosters/GodOfWar.webp"
import Mario from "../../../../utils/gamePosters/Mario.webp"
import SpiderMan from "../../../../utils/gamePosters/Spider-Man.jpeg"
import Skyrim from "../../../../utils/gamePosters/Skyrim.jpeg"
import TLOU from "../../../../utils/gamePosters/TheLastOfUs.jpeg"


export interface IGameCard {
    poster: any
    title: string
}

type TGameList = IGameCard[]

export const gameList:TGameList = [
    {
        poster:<img className="gamePoster" src={RocketLeague} alt=""></img>,
        title: "Rocket League"
    },
    {
        poster:<img className="gamePoster" src={GodOfWar} alt=""></img>,
        title: "God Of War"
    },
    {
        poster:<img className="gamePoster" src={Mario} alt=""></img>,
        title: "Super Mario Odyssey"
    },
    {
        poster:<img className="gamePoster" src={SpiderMan} alt=""></img>,
        title: "Spider-Man"
    },
    {
        poster:<img className="gamePoster" src={Skyrim} alt=""></img>,
        title: "Skyrim"
    },
    {
        poster:<img className="gamePoster" src={TLOU} alt=""></img>,
        title: "The Last Of Us"
    },
    {
        poster:<img className="gamePoster" src={GodOfWar} alt=""></img>,
        title: "God Of War"
    },
    {
        poster:<img className="gamePoster" src={GodOfWar} alt=""></img>,
        title: "God Of War"
    },
    {
        poster:<img className="gamePoster" src={GodOfWar} alt=""></img>,
        title: "God Of War"
    },
    {
        poster:<img className="gamePoster" src={GodOfWar} alt=""></img>,
        title: "God Of War"
    },
    {
        poster:<img className="gamePoster" src={GodOfWar} alt=""></img>,
        title: "God Of War"
    }
]