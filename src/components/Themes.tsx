import React, { useEffect, useState } from "react";
import { EffectCreative, Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import "../assets/styles/themes-slider.scss";
import { Theme } from '../types/themes';
import DatesSlider from "./DatesSlider";

interface Props {
  themes: Array<Theme>;
  activeTheme: number;
  setActiveTheme: Function;
  className: string;
}

const Themes = ({ themes, activeTheme, setActiveTheme, className }: Props) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  useEffect(() => {
    swiper?.slideTo(activeTheme)
  }, [activeTheme])

  const convertSlidersCount = (count: number): string => {
    return count < 10 ? `0${count}` : `${count}`
  }

  const onPrevButtonClick = (): void => {
    const newTheme = activeTheme - 1;
    newTheme < 0 ? setActiveTheme(0) : setActiveTheme(newTheme);
  }

  const onNextButtonClick = (): void => {
    const newTheme = activeTheme + 1;
    newTheme > (themes.length - 1) ? setActiveTheme(themes.length - 1) : setActiveTheme(newTheme);
  }

  return (
    <div className={`themes-slider ${className}`}>
      <div className="themes-slider__controls">
        <div className="themes-slider__fraction">
          <span className="themes-slider__current">
            {convertSlidersCount(activeTheme + 1)}
          </span>
          /
          <span className="themes-slider__total">
            {convertSlidersCount(themes.length)}
          </span>
        </div>
        <div className="themes-slider__buttons">
          <button className="themes-slider__button themes-slider__button--prev" onClick={onPrevButtonClick} disabled={activeTheme === 0}>
            <span className="visually-hidden">Prev</span>
          </button>
          <button className="themes-slider__button themes-slider__button--next" onClick={onNextButtonClick} disabled={activeTheme === (themes.length - 1)}>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Swiper
        onSwiper={setSwiper}
        className="themes-slider__slider"
        modules={[Pagination, EffectCreative]}
        pagination
        slidesPerView={1}
        allowTouchMove={false}
        effect={"creative"}
        speed={500}
        creativeEffect={
          {
            prev: {
              opacity: 0,
              translate: [0, '15%', 0],
            },
            next: {
              opacity: 0,
              translate: [0, '15%', 0],
            },
          }
        }
      >
        {themes.map((theme, index) => (
          <SwiperSlide className="themes-slider__slide" key={index}>
            <DatesSlider theme={theme} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Themes;