import React from 'react';
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
    <div className="newModels">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={4}
        navigation={{
          prev: '.homepage__button-prev',
          next: '.homepage__button-next',
        }}
        loop
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
