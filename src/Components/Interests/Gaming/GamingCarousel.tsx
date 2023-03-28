import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from "swiper";
import 'swiper/scss';
import "swiper/scss/pagination";

const GamingCarousel = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index:number, className:any) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };
    return (
        <div className="gamingCarousel">
            <Swiper
        pagination={pagination}
        modules={[Pagination]}
            className="mySwiper"
            // spaceBetween={50}
            // slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className="mySwiper__slide">
                    <img className="gamingCarousel__image" src="https://assets.reedpopcdn.com/rocket_league_switch_hero.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/rocket_league_switch_hero.jpg" alt="Rocket League" />
                </SwiperSlide>
                <SwiperSlide className="mySwiper__slide">
                    <img className="gamingCarousel__image" src="https://c4.wallpaperflare.com/wallpaper/364/113/262/the-last-of-us-poster-game-wallpaper-preview.jpg" alt="The Last Of Us" />
                </SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default GamingCarousel;