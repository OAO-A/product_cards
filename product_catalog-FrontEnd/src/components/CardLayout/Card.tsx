import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Style from '../../components/CardLayout/card.module.scss';
import phone from '../../img/category-phones.png';
import { Phone } from '../../Utils/interface/PhoneCard';
import { AddtoFavourites } from '../../components/Buttons/AddToFavourites';
import { AddToBasket } from '../../components/Buttons/AddToBasket';

type Props = {
  device: Phone;
};

export const Card: React.FC<Props> = ({ device }) => {
  const {
    name,
    namespaceId,
    itemId,
    priceRegular,
    priceDiscount,
    screen,
    capacity,
    ram,
    images,
    id,
  } = device;

  const [inBasket, setInBasket] = useState([]);
  const [inFavorite, setInFavorite] = useState([]);

  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem('basket')) || [];
    const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    setInBasket(basket);
    setInFavorite(favorite);
  }, []);

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
    <div className={Style.card} data-qa='card'>
      <Link className={Style.card__link} to={`/cardItem/${namespaceId}/${id}`}>
        <img src={phone} alt="/" className={Style.card__img} />
        <p className={Style.card__name}>{name}</p>
      </Link>

      <div className={Style.card__price}>
        <p className={Style.card__price_old}>{`$${priceRegular}`}</p>
        <p className={Style.card__price_new}>{`$${priceDiscount}`}</p>
      </div>

      <div className={Style.card__stats}>
        <div className={Style.card__stats_items}>
          <p className={Style.card__stats_item}>Screen</p>
          <p className={Style.card__stats_item}>Capacity</p>
          <p className={Style.card__stats_item}>RAM</p>
        </div>

        <div className={Style.card__stats_info}>
          <p className={Style.card__stats_info}>{`${screen}`}</p>
          <p className={Style.card__stats_info}>{`${capacity}`}</p>
          <p className={Style.card__stats_info}>{`${ram}`}</p>
        </div>
      </div>

      <div className={Style.card__buttons}>
        <AddToBasket
          device={device}
          inBasket={inBasket}
          handleChangeBasket={handleChangeBasket} 
        />
        <AddtoFavourites
          device={device}
          inFavourites={inFavorite}
          hadleAddToFavorites={handleChangeFavorite}
        />
      </div>
    </div>
  );
};
