import React, { useEffect, useState } from 'react';
import Style from './HomePage.module.scss';
import './HomePage.scss';
import { PhoneSlider } from '../../components/PhoneSlider';
import { Slider } from '../../components/Slider';
import { getDevices } from '../../Utils/interface/fetchClient';
import { NavLink } from 'react-router-dom';
import { Category } from '../../components/Categories/Category';
import banner1 from './banners/category-phones.png';
import banner2 from './banners/category-tablets.png';
import banner3 from './banners/category-accessories.png';

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
  const hotPrice = devices.filter((phone) => phone.priceDiscount >= 1300).slice(0, 3);

  const bgcPhone = 'category__wrapper category__wrapper--mobile';
  const bgcPTablet = 'category__wrapper category__wrapper--tablet';
  const bgcAccessories = 'category__wrapper category__wrapper--accessories';
  
  return (
    <>
      <h1 className={`${Style.home__title} S--1-4 T--1-12 D--1-24`}>
        Welcome to Nice Gadgets Store!
      </h1>
      <Slider />
      <h2 className={`${Style.home__subtitle} S--1-3 T--1-9 D--1-10`}>
        Brand new models
      </h2>
      <div
        className={`${Style.home__buttonwrapper} S--4-4 T--11-12 D--23-24`}
      >
        <div className="home__buttonprev"></div>
        <div className="home__buttonnext"></div>
      </div>
      <PhoneSlider phones={newModels} />

      <h2 className={`${Style.home__subtitle} ${Style.home__subtitlecategory} S--1-3 T--1-9 D--1-10`}>
        Shop by category
      </h2>
      <div className={`${Style.home__categories} ${Style.categories} S--1-4 T--1-12 D--1-24`}>
        <NavLink to={'/phones'} className={`${Style.categories__block} S--1-4 T--1-4 D--1-4`}>
          <Category
            image={banner1}
            title={'Phones'}
            text={'95 models'}
            backgroundColor={`${Style.categories__wrapper} ${Style.categories__wrappermobile}`}
          />
        </NavLink>
        <NavLink to={'/tablets'} className={`${Style.categories__block} S--1-4 T--1-4 D--5-8`}>
          <Category
            image={banner2}
            title={'Tablets'}
            text={'15 models'}
            backgroundColor={`${Style.categories__wrapper} ${Style.categories__wrappertablet}`}
          />
        </NavLink>
        <NavLink to={'/accessories'} className={`${Style.categories__block} S--1-4 T--1-4 D--5-4`}>
          <Category
            image={banner3}
            title={'Accessories'}
            text={'117 models'}
            backgroundColor={`${Style.categories__wrapper} ${Style.categories__wrapperaccessories}`}
          />
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
      <PhoneSlider phones={hotPrice} />
    </>
  );
};
