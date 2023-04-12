import moonlight from "../../../../utils/posters/MoonlightPoster.jpeg"
import arrival from "../../../../utils/posters/ArrivalPoster.jpeg"
import dune from "../../../../utils/posters/DunePoster.jpeg"
import spiderVerse from "../../../../utils/posters/SpiderversePoster.jpeg"
import everything from "../../../../utils/posters/EEAAOPoster.jpeg"
import endgame from "../../../../utils/posters/EndgamePoster.webp"
import whiplash from "../../../../utils/posters/WhiplashPoster.jpeg"
import blindspotting from "../../../../utils/posters/BlindspottingPoster.jpeg"
import interstellar from "../../../../utils/posters/InterstellarPoster.jpeg"
import parasite from "../../../../utils/posters/ParasitePoster.webp"
import soundOfMetal from "../../../../utils/posters/SoundofmetalPoster.jpeg"
import logan from "../../../../utils/posters/LoganPoster.webp"
import hereditarty from "../../../../utils/posters/ParasitePoster.webp"
import hotFuzz from "../../../../utils/posters/HotFuzzPoster.jpeg"

export interface IMovieCard {
    title: string
    poster: any
    myRating: number
}

type TMovieList = IMovieCard[]



export const movieList:TMovieList = [
    {
        title: "Moonlight",
        poster:<img className="movieListPoster" src={moonlight} alt=""></img>,
        myRating: 10
    },
    {
        title: "Arrival",
        poster:<img className="movieListPoster" src={arrival} alt=""></img>,
        myRating: 10
    },
    {
        title: "Dune",
        poster:<img className="movieListPoster" src={dune} alt=""></img>,
        myRating: 10
    },
    {
        title: "Into The Spider-verse",
        poster:<img className="movieListPoster" src={spiderVerse} alt=""></img>,
        myRating: 10
    },
    {
        title: "Everything Everywhere",
        poster:<img className="movieListPoster" src={everything} alt=""></img>,
        myRating: 10
    },
    {
        title: "Endgame",
        poster:<img className="movieListPoster" src={endgame} alt=""></img>,
        myRating: 10
    },
    {
        title: "Whiplash",
        poster:<img className="movieListPoster" src={whiplash} alt=""></img>,
        myRating: 10
    },
    {
        title: "Blind Spotting",
        poster:<img className="movieListPoster" src={blindspotting} alt=""></img>,
        myRating: 10
    },
    {
        title: "Interstellar",
        poster:<img className="movieListPoster" src={interstellar} alt=""></img>,
        myRating: 10
    },
    {
        title: "Parasite",
        poster:<img className="movieListPoster" src={parasite} alt=""></img>,
        myRating: 10
    },
    {
        title: "The Sound Of Metal",
        poster:<img className="movieListPoster" src={soundOfMetal} alt=""></img>,
        myRating: 10
    },
    {
        title: "Logan",
        poster:<img className="movieListPoster" src={logan} alt=""></img>,
        myRating: 10
    },
    {
        title: "Hereditary",
        // poster:"https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_.jpg",
        poster:<img className="movieListPoster" src={hereditarty} alt=""></img>,
        myRating: 10
    },
    {
        title: "Hot Fuzz",
        poster:<img className="movieListPoster" src={hotFuzz} alt=""></img>,
        myRating: 10
    }
]

