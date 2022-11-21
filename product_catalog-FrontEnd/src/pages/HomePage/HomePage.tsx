import React, { useEffect, useState } from 'react';
import { Phone } from '../../Utils/interface/PhoneCard';
import Style from './style.module.scss';
import { PhoneSlider } from '../../components/PhoneSlider';
import { Slider } from '../../components/Slider';
import { getDevice, getDevices } from '../../Utils/interface/fetchClient';
import { NavLink } from 'react-router-dom';
import { Category } from '../../components/Categories/Category';

export const HomePage: React.FC = () => {
  const [info, setInfo] = useState([]);
  const [phoneList, setPhoneList] = useState<Phone[]>([]);
  const [devices, setDevices] = useState<any>([]);
  const [isLoadin, setIsLoading] = useState(true);

  const newModels = phoneList.filter((phone) => +phone.year >= 2019);
  const hotPrice = phoneList.filter((phone) => phone.priceDiscount >= 1300);

  const getDevicesFromServer = async (models: Phone[]) => {
    try {
      const device = getDevices();
      console.log(device);
      setDevices(await device);
    } catch (error) {
      new Error('Not Found');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDevicesFromServer(newModels);
  }, []);

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
      <h1 className={`${Style.title} S--1-4 T--1-12 D--1-24`}>
        Welcome to Nice Gadgets Store!
      </h1>
      <Slider />
      <PhoneSlider phones={newModels} />
      <h2 className={`${Style.newModels__subtitle} S--1-3 T--1-9 D--1-10`}>
        Brand new models
      </h2>
      <div
        className={`${Style.newModels__buttonwrapper} S--4-4 T--11-12 D--23-24`}
      >
        <div className={Style.newModels__buttonprev}></div>
        <div className={Style.newModels__buttonnext}></div>
      </div>
      <PhoneSlider phones={newModels} />

      <h2 className={`${Style.newModels__subtitle} S--1-3 T--1-9 D--1-10`}>
        Shop by category
      </h2>
      <div className={`${Style.category__block} S--1-4 T--1-12 D--1-24`}>
        <NavLink to={'/phones'} className={Style.category}>
          <Category
            image={''}
            title={'Phones'}
            text={'95 models'}
            backgroundColor={''}
          />
        </NavLink>
        <NavLink to={'/tablets'} className={Style.category}>
          <Category
            image={''}
            title={'Tablets'}
            text={'15 models'}
            backgroundColor={''}
          />
        </NavLink>
        <NavLink to={'/accessories'} className={Style.category}>
          <Category
            image={''}
            title={'Accessories'}
            text={'117 models'}
            backgroundColor={''}
          />
        </NavLink>
      </div>
      <h2 className={`${Style.newModels__subtitle} S--1-3 T--1-9 D--1-10`}>
        Hot prices
      </h2>
      <div
        className={`${Style.newModels__buttonwrapper} S--4-4 T--11-12 D--23-24`}
      >
        <div className={Style.newModels__buttonprev}></div>
        <div className={Style.newModels__buttonnext}></div>
      </div>
    </>
  );
};
