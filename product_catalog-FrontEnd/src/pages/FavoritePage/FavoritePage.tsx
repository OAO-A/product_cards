import React, { useEffect, useState } from 'react';
import { Card } from '../../components/CardLayout';
import style from './style.module.scss';

export const FavoritePage: React.FC = () => {
  const [inBasket, setInBasket] = useState([]);
  const [inFavorite, setInFavorite] = useState([]);

  useEffect(() => {
    if (inBasket.length) {
      const toJSON = JSON.stringify(inBasket);
      console.log(toJSON);
      localStorage.setItem('basket', toJSON);
    }
  }, [inBasket]);

  useEffect(() => {
    if (inFavorite.length) {
      const toJSON = JSON.stringify(inFavorite);
      console.log(toJSON);
      localStorage.setItem('favorite', toJSON);
    }
  }, [inFavorite]);

  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem('basket')) || [];
    const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    setInBasket(basket);
    setInFavorite(favorite);
  }, []);

  const handleChangeBasket = (device) => {
    if (inBasket.some((deviceInBasket) => deviceInBasket.id === device.id)) {
      const removeDeviceFromBasket = inBasket.filter(
        (deviceInBasket) => deviceInBasket.id !== device.id
      );
      setInBasket(removeDeviceFromBasket);
      return;
    }

    setInBasket((prevBasket) => {
      const inBasketCopy = [...prevBasket];
      inBasketCopy.push({ ...device, count: 1 });
      return inBasketCopy;
    });
  };

  const handleChangeFavorite = (device) => {
    if (inFavorite.some((deviceInBasket) => deviceInBasket.id === device.id)) {
      const removeDeviceFromFavorite = inFavorite.filter(
        (deviceInFavorite) => deviceInFavorite.id !== device.id
      );
      setInFavorite(removeDeviceFromFavorite);
      return;
    }

    setInFavorite((prevFavorite) => {
      const inFavoriteCopy = [...prevFavorite];
      inFavoriteCopy.push(device);
      return inFavoriteCopy;
    });
  };

  return (
    <>
      <h1 className={`${style.title} S--1-4 T--1-12 D--1-24`}>Mobile phones</h1>
      <p
        className={`${style.subtitle} S--1-4 T--1-12 D--1-24`}
      >{`${inFavorite.length} models`}</p>
      <div className={`${style.catalog} S--1-4 T--1-12 D--1-24`}>
        {inFavorite.map((device) => {
          return (
            <Card
              key={device.id}
              device={device}
              handleChangeBasket={handleChangeBasket}
              inBasket={inBasket}
              handleChangeFavorite={handleChangeFavorite}
              inFavorite={inFavorite}
            />
          );
        })}
      </div>
    </>
  );
};
