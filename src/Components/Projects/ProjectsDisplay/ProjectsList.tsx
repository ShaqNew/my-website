import React from "react";
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
        image:reactShop,
        link:"https://github.com/ShaqNew/react-shop"
    },
    {
        title: "Search Table",
        image:reactSearch,
        link:"https://github.com/ShaqNew/React-Property-Search-Table"
    }
]