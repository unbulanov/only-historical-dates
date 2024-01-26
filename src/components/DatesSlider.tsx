import React from "react";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../assets/styles/dates-slider.scss";
import { Theme } from '../types/themes';

interface Props {
  theme: Theme;
}

const DatesSlider = ({ theme }: Props) => {
  return (
    <div className="dates-slider">
      <h3 className="dates-slider__title container">
        {theme.title}
      </h3>
      <button className="dates-slider__button dates-slider__button--prev">
        <span className="visually-hidden">Prev</span>
      </button>
      <button className="dates-slider__button dates-slider__button--next">
        <span className="visually-hidden">Next</span>
      </button>
      <Swiper
        className="dates-slider__slider"
        slidesPerView="auto"
        grabCursor={true}
        modules={[Navigation]}
        navigation={{
          nextEl: '.dates-slider__button--next',
          prevEl: '.dates-slider__button--prev',
        }}
      >
        {theme.dates.map((date, index) => (
          <SwiperSlide key={index} className="dates-slider__slide">
            <h4 className="dates-slider__date-title">
              {date.date}
            </h4>
            <p className="dates-slider__date-text">
              {date.text}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default DatesSlider;