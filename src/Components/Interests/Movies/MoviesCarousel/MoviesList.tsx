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
        // poster:{moonlight},
        poster:<img className="movieListPoster" src={moonlight} alt=""></img>,
        myRating: 10
    },
    {
        title: "Arrival",
        // poster:"https://ichef.bbci.co.uk/news/976/cpsprodpb/5AB8/production/_90842232_cc5dcc0c-a0fc-4009-b8d4-73b507fdce72.jpg",
        poster:<img className="movieListPoster" src={arrival} alt=""></img>,
        myRating: 10
    },
    {
        title: "Dune",
        // poster:"https://imageio.forbes.com/specials-images/imageserve/61116cea2313e8bae55a536a/-Dune-/0x0.jpg?format=jpg&width=960",
        poster:<img className="movieListPoster" src={dune} alt=""></img>,
        myRating: 10
    },
    {
        title: "Into The Spider-verse",
        // poster:"https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg",
        poster:<img className="movieListPoster" src={spiderVerse} alt=""></img>,
        myRating: 10
    },
    {
        title: "Everything Everywhere",
        // poster:"https://i.ebayimg.com/images/g/5WoAAOSw6RlijkIB/s-l500.jpg",
        poster:<img className="movieListPoster" src={everything} alt=""></img>,
        myRating: 10
    },
    {
        title: "Endgame",
        // poster:"https://i.etsystatic.com/13367669/r/il/db21fd/2198543930/il_570xN.2198543930_4qne.jpg",
        poster:<img className="movieListPoster" src={endgame} alt=""></img>,
        myRating: 10
    },
    {
        title: "Whiplash",
        // poster:"https://i.ebayimg.com/images/g/sxsAAOSwCFhhzELK/s-l1600.jpg",
        poster:<img className="movieListPoster" src={whiplash} alt=""></img>,
        myRating: 10
    },
    {
        title: "Blind Spotting",
        // poster:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71tTyAfdIEL._AC_SL1500_.jpg",
        poster:<img className="movieListPoster" src={blindspotting} alt=""></img>,
        myRating: 10
    },
    {
        title: "Interstellar",
        // poster:"https://i.pinimg.com/originals/11/1c/5c/111c5c9ad99661af2d80e38948cf29d8.jpg",
        poster:<img className="movieListPoster" src={interstellar} alt=""></img>,
        myRating: 10
    },
    {
        title: "Parasite",
        // poster:"http://cdn.shopify.com/s/files/1/0482/3452/8936/products/Parasite-Posters-Films-Vibez-1604865069_5044517a-e4bc-4ba7-ad21-6b420007d672_600x600.jpg?v=1604865468",
        poster:<img className="movieListPoster" src={parasite} alt=""></img>,
        myRating: 10
    },
    {
        title: "The Sound Of Metal",
        // poster:"https://i.pinimg.com/originals/9e/ab/bc/9eabbc1c3b15d50744889e2e6070cdfd.jpg",
        poster:<img className="movieListPoster" src={soundOfMetal} alt=""></img>,
        myRating: 10
    },
    {
        title: "Logan",
        // poster:"https://i.etsystatic.com/27073341/r/il/3c23ae/3318664864/il_570xN.3318664864_nooa.jpg",
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

