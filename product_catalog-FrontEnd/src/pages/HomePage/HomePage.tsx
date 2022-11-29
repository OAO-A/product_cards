import React, { useEffect, useState } from 'react';
import Style from './HomePage.module.scss';
import './HomePage.scss';
import { PhoneSlider } from '../../components/PhoneSlider';
import { Slider } from '../../components/Slider';
import { getDevices } from '../../Utils/interface/fetchClient';
import { NavLink } from 'react-router-dom';
import banner1 from './banners/category-phones.png';
import banner2 from './banners/category-tablets.png';
import banner3 from './banners/category-accessories.png';

export const HomePage: React.FC = () => {
  const [devices, setDevices] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const hotPrices = devices.filter(devices => devices.priceDiscount > 1200);
  
  const getDevicesFromServer = async () => {
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
    getDevicesFromServer();
  }, []);

  return (
    <>
      <h1 className={`${Style.home__title} S--1-4 T--1-12 D--1-24`}>
        Welcome to Nice Gadgets Store!
      </h1>
      <Slider />
      <h2 className={`${Style.home__subtitle} S--1-3 T--1-9 D--1-10`}>
        Brand new models
      </h2>
      <div className={`${Style.home__buttonwrapper} S--4-4 T--11-12 D--23-24`}>
        <div className="home__buttonprev"></div>
        <div className="home__buttonnext"></div>
      </div>
      <PhoneSlider phones={devices} />

      <h2 className={`${Style.home__subtitle} ${Style.home__subtitlecategory} S--1-3 T--1-9 D--1-10`}>
        Shop by category
      </h2>
      <div className={`${Style.home__categories} ${Style.categories} S--1-4 T--1-12 D--1-24`}>
        <NavLink to={'/phones'} className={`${Style.categories__block} S--1-4 T--1-4 D--1-4`}>
          <div className={Style.category__backgroundPhones}>
            <img src={banner1} alt="phones" className={Style.category__imagePhone}/>
          </div>
          <h4 className={Style.category__title}>Mobile phones</h4>
          <p className={Style.category__text}>95 models</p>
        </NavLink>
        <NavLink to={'/tablets'} className={`${Style.categories__block} S--1-4 T--1-4 D--5-8`}>
          <div className={Style.category__backgroundTablets}>
            <img src={banner2} alt="tablets" className={Style.category__imageTablet}/>
          </div>
          <h4 className={Style.category__title}>Tablets</h4>
          <p className={Style.category__text}>24 models</p>
        </NavLink>
        <NavLink to={'/accessories'} className={`${Style.categories__block} S--1-4 T--1-4 D--5-4`}>
          <div className={Style.category__backgroundAccessories}>
            <img src={banner3} alt="accessories" className={` ${Style.category__imageAcc}`}/>
          </div>
          <h4 className={Style.category__title}>Accessories</h4>
          <p className={Style.category__text}>100 models</p>
        </NavLink>
      </div>
      <h2 className={`${Style.home__subtitle} S--1-3 T--1-9 D--1-10`}>
        Hot prices
      </h2>
      <div
        className={`${Style.home__buttonwrapper} S--4-4 T--11-12 D--23-24`}
      >
        <div className="home__buttonprev"></div>
        <div className="home__buttonnext"></div>
      </div>
      <PhoneSlider phones={hotPrices} />
    </>
  );
};
