import React from 'react';
import Styles from './PhoneSlider.module.scss';
import { Phone } from '../../Utils/interface/PhoneCard';
import { Card } from '../CardLayout/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

type Props = {
  phones: Phone[];
};

export const PhoneSlider: React.FC<Props> = ({ phones }) => {
  const showPhones = phones.slice(1, 9);

  return (
    <div className={`${Styles.container} S--1-4 T--1-11 D--1-24`}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={15}
        slidesPerView='auto'
        breakpoints={{
          640: { slidesPerView: 2.5 },
          1200: { slidesPerView: 4 },
        }}
        navigation={{
          prevEl: '.home__buttonprev',
          nextEl: '.home__buttonnext',
        }}
        loop={true}
      >
        {showPhones.map((phone) => (
          <SwiperSlide key={phone.id}>
            <Card device={phone} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
