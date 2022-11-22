import React, { useEffect, useState } from 'react';
import Style from './HomePage.module.scss';
import { PhoneSlider } from '../../components/PhoneSlider';
import { Slider } from '../../components/Slider';
import { getDevices } from '../../Utils/interface/fetchClient';
import { NavLink } from 'react-router-dom';
import { Category } from '../../components/Categories/Category';

export const HomePage: React.FC = () => {
  const [devices, setDevices] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  
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
    getDevicesFromServer()
      .then(result => setDevices(result[1]))
      .catch(() => {
        throw new Error('Something went wrong');
      });
  }, []);
  
  const newModels = devices.slice(0, 3);
  const hotPrice = devices.filter((phone) => phone.priceDiscount >= 1300).slice(0, 2);
  
  return (
    <>
      <h1 className={`${Style.title} S--1-4 T--1-12 D--1-24`}>
        Welcome to Nice Gadgets Store!
      </h1>
      <Slider />
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
            image={'../../img/category-phones.png'}
            title={'Phones'}
            text={'95 models'}
            backgroundColor={''}
          />
        </NavLink>
        <NavLink to={'/tablets'} className={Style.category}>
          <Category
            image={'../../img/category-phones.png'}
            title={'Tablets'}
            text={'15 models'}
            backgroundColor={''}
          />
        </NavLink>
        <NavLink to={'/accessories'} className={Style.category}>
          <Category
            image="../../img/category-accessories.png"
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
      <PhoneSlider phones={hotPrice} />
    </>
  );
};
