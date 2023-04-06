import RocketLeague from "../../../../utils/gamePosters/rocket_league_poster.jpeg"
import GodOfWar from "../../../../utils/gamePosters/GodOfWar.webp"
import Mario from "../../../../utils/gamePosters/Mario.webp"
import SpiderMan from "../../../../utils/gamePosters/Spider-Man.jpeg"
import Skyrim from "../../../../utils/gamePosters/Skyrim.jpeg"
import TLOU from "../../../../utils/gamePosters/TheLastOfUs.jpeg"
import Stellaris from "../../../../utils/gamePosters/Stellaris.jpeg"
import dishonored2 from "../../../../utils/gamePosters/dishonored2.jpeg"
import titanfall from "../../../../utils/gamePosters/Titanfall2.jpeg"
import NoMansSky from "../../../../utils/gamePosters/NoMansSky.webp"



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
        poster:<img className="gamePoster" src={NoMansSky} alt=""></img>,
        title: "No Man's Sky"
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
        title: "Elder Scrolls"
    },
    {
        poster:<img className="gamePoster" src={TLOU} alt=""></img>,
        title: "The Last Of Us"
    },
    {
        poster:<img className="gamePoster" src={Stellaris} alt=""></img>,
        title: "Stellaris"
    },
    {
        poster:<img className="gamePoster" src={dishonored2} alt=""></img>,
        title: "Dishonored"
    },
    {
        poster:<img className="gamePoster" src={titanfall} alt=""></img>,
        title: "Titanfall"
    }
]