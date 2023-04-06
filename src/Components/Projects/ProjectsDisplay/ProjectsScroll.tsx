import React from "react";
import ProjectsCard from "./ProjectsCard";
import {projectsList, IProjectCard} from "./ProjectsList";


const ProjectsScroll = () => {
    return (
        <div className="ProjectsScroll">
            <div className="ProjectsScroll__content">
                {projectsList.map((project:IProjectCard)=> (
                        <ProjectsCard
                            title={project.title}
                            image={project.image}
                            link={project.link}
                        />
                ))}
            </div>
        </div>
    )
}

export default ProjectsScroll;