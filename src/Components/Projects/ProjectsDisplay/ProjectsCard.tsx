import React from 'react';
import { IProjectCard } from './ProjectsList';

const ProjectsCard = (props:IProjectCard) => {
    const { title, image, link } = props

    return (
        <div className="card">
        <img className="card__image" src={image} alt={title} />
        {/* {image} */}
        {/* <img className="card__image" src="../../../utils/projectImages/react-ts-shop.png" alt={title} />
        <img className="card__image" src={shop} alt=""/> */}
        <h3>{title}</h3>
        <a href={link} target="_blank" rel="noreferrer">
            View on Github
        </a>
        </div>
    );
};

export default ProjectsCard;
