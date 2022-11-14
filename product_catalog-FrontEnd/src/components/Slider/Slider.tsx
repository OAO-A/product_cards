import React, { useEffect, useState, createContext } from 'react';
import { SlidesList } from './Slider_components/SlidesList';
import { Dots } from './Slider_components/Controls/Dots';
import classNames from 'classnames';
import style from './slider.module.scss';

import banner1 from './banners/banner1.jpg';
import banner2 from './banners/banner2.jpg';
import banner3 from './banners/banner3.jpg';

const images = [banner1, banner2, banner3];

export const SliderContext = createContext(null);

const autoPlay = true;
const autoPlayTime = 5000;

export const Slider: React.FC = () => {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    setItems(images);
  }, []);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }

    setSlide(slideNumber);
  };

  const goToSlide = (number: number) => {
    setSlide(number % items.length);
  };

  const handleTouchStart = (event) => {
    const touchDown = event.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (event) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = event.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  }, [items.length, slide]);

  return (
    <div
      className={classNames(style.slider, 'S--1-4', 'T--1-12', 'D--1-24')}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
        }}
      >
        <div
          className={classNames(style.arrow, style.left, 'T--1-2', 'D--1-2')}
          onClick={() => changeSlide(-1)}
        >
          {'<'}
        </div>
        <SlidesList />
        <div
          className={classNames(
            style.arrow,
            style.right,
            'T--11-12',
            'D--23-24'
          )}
          onClick={() => changeSlide(1)}
        >
          {'>'}
        </div>
        <Dots />
      </SliderContext.Provider>
    </div>
  );
};
