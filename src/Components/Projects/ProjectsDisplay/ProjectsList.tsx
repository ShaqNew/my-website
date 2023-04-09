import reactShop from "../../../utils/projectImages/react-ts-shop.png"
import reactSearch from "../../../utils/projectImages/react-search-table.png"

export interface IProjectCard {
    title: string
    image: any
    link: string
}

type TProjectList = IProjectCard[]

export const projectsList:TProjectList = [
    {
        title: "React Shop",
        // image:<img className="card__image" src={reactShop} alt=""></img>,
        image:reactShop,
        link:"https://github.com/ShaqNew/react-shop"
    },
    {
        title: "Search Table",
        image:reactSearch,
        link:"https://github.com/ShaqNew/React-Property-Search-Table"
    }
    // ,
    // {
    //     title: "Search Table",
    //     image:"../../../utils/projectImages/react-ts-shop.png",
    //     link:""
    // }
]