import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Style from '../../components/CardLayout/card.module.scss';
import phone from '../../img/category-phones.png';
import { Phone } from '../../Utils/interface/PhoneCard';

type Props = {
  device: Phone;
  handleChangeBasket: (device: Phone) => void;
  handleChangeFavorite: (device: Phone) => void;
  inBasket: Phone[];
  inFavorite: Phone[];
};

export const Card: React.FC<Props> = ({
  device,
  handleChangeBasket,
  inBasket,
  handleChangeFavorite,
  inFavorite,
}) => {
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

  return (
    <div className={Style.card} data-qa="card">
      <Link to={`/cardItem/${namespaceId}/${id}`}>
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
        <button
          className={`${Style.card__buy} ${
            inBasket.some((deviceInBasket) => deviceInBasket.id === device.id)
              ? Style.card__buy_inCart
              : ''
          }`}
          onClick={() => handleChangeBasket(device)}
        >
          {inBasket.some((deviceInBasket) => deviceInBasket.id === device.id)
            ? 'In cart'
            : 'Add to cart'}
        </button>

        <button
          className={`${Style.card__fav} ${
            inFavorite.some(
              (deviceInFavorite) => deviceInFavorite.id === device.id
            )
              ? Style.card__fav_isActive
              : ''
          }`}
          onClick={() => handleChangeFavorite(device)}
        ></button>
      </div>
    </div>
  );
};
