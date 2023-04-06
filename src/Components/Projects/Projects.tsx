import React from "react";
import ParallaxHeading from "../ParallaxHeading/ParallaxHeading";
import "./projects.scss";
import ProjectsCarousel from "./ProjectsDisplay/ProjectsCarousel";
import ProjectsScroll from "./ProjectsDisplay/ProjectsScroll";

const Projects = () => {
  let broswerWidth = window.innerWidth;
  return (
    <div id="projects" className="Projects">
      <div className="Projects__heading">
        <ParallaxHeading
          image={
            // "https://upload.wikimedia.org/wikipedia/commons/8/8b/Stars_and_Mountains.jpg"
            "https://www.wallpapertip.com/wmimgs/65-650199_backgrounds-black-and-blue.jpg"
          }
          text={"Projects"}
        />
      </div>
      <div className="Projects__content">
        {broswerWidth > 800 ? <ProjectsCarousel /> : <ProjectsScroll />}
      </div>
    </div>
  );
};

export default Projects;
