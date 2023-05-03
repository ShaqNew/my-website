import React from 'react';
import { IProjectCard } from './ProjectsList';

const ProjectsCard = (props:IProjectCard) => {
    const { title, image, link } = props

    return (
        <div className="card" data-testid="project-card">
        <img className="card__image" src={image} alt={title} />
        <h3>{title}</h3>
        <a href={link} target="_blank" rel="noreferrer">
            View on Github
        </a>
        </div>
    );
};

export default ProjectsCard;
