import React, { useEffect, useState } from 'react';
import { Card } from '../../components/CardLayout';
import { Phone, PhoneCard } from '../../Utils/interface/PhoneCard';
import style from './style.module.scss';
import { PhoneSlider } from '../../components/PhoneSlider';
import { Slider } from '../../components/Slider';
import { getDevices } from '../../Utils/interface/fetchClient';

export const HomePage: React.FC = () => {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [phoneList, setphoneList] = useState<Phone[]>([]);

  const newModels = phoneList.filter((phone) => +phone.year >= 2019);
  const hotPrice = phoneList.filter((phone) => phone.priceDiscount >= 1300);

  fetch('https://product-catalog-nice.herokuapp.com/api/device')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setInfo(data);
      console.log(info);
    });

  return (
    <>
      <h1 className={`${style.title} S--1-4 T--1-12 D--1-24`}>
        Welcome to Nice Gadgets Store!
      </h1>
      <Slider />
      <PhoneSlider phones={newModels} />
      <h2 className={`${style.newModels__subtitle} S--1-3 T--1-9 D--1-10`}>
        Brand new models
      </h2>
      <div
        className={`${style.newModels__buttonwrapper} S--4-4 T--11-12 D--23-24`}
      >
        <div className={style.newModels__buttonprev}></div>
        <div className={style.newModels__buttonnext}></div>
      </div>
      <PhoneSlider phones={newModels} />
    </>
  );
};
