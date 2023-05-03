import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { movieList, IMovieCard } from "./MoviesList";
import './moviesCarousel.scss'
import 'swiper/scss';
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import MovieCard from "./MovieCard";

const MoviesCarousel = () => {

    return (
        <div className="moviesCarousel" data-testid="movies-carousel-content">
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
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
                {movieList.map((movie:IMovieCard) => (
                    <SwiperSlide>
                        <MovieCard movie={movie}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default MoviesCarousel;