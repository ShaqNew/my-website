import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import ProjectsCard from "./ProjectsCard";
import {projectsList, IProjectCard} from "./ProjectsList";
import 'swiper/scss';
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "./projectsDisplay.scss";

const ProjectsCarousel = () => {
    return (
        <div className="ProjectsCarousel">
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter:true
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            >
                {projectsList.map((project:IProjectCard)=>(
                    <SwiperSlide>
                        <ProjectsCard
                            title={project.title}
                            image={project.image}
                            link={project.link}
                        />
                    </SwiperSlide>                    
                ))}
            </Swiper>
        </div>
    )
}

export default ProjectsCarousel;