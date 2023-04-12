import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { movieList, IMovieCard } from "./MoviesList";
import './moviesCarousel.scss'
import 'swiper/scss';
import "swiper/scss/pagination";
import "swiper/scss/navigation";

const MoviesCarousel = () => {

    return (
        <div className="moviesCarousel">
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
                        <div className="movieCard">
                            {/* TODO: Limit the char size of the title */}
                            <h2 className="movieCard__title">{movie.title}</h2>
                            {typeof movie.poster === "string" ?
                            <img className="movieCard__poster" src={movie.poster} alt={movie.title}></img>:movie.poster}
                            <div className="movieCard__rating">{movie.myRating}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default MoviesCarousel;