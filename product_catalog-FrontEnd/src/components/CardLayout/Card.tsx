import React from 'react';
import Style from '../../components/CardLayout/card.module.scss';
import phone from '../../img/category-phones.png';

export const Card: React.FC = () => {
  return (
    <div className={Style.card} data-qa="card">
      <img src={phone} alt="/" className={Style.card__img} />
      <p className={Style.card__name}>
        Apple iPhone 14 Pro 128GB Silver (MQ023)
      </p>

      <div className={Style.card__price}>
        <p className={Style.card__price_amount}>$800</p>
      </div>

      <div className={Style.card__stats}>
        <div className={Style.card__stats_items}>
          <p className={Style.card__stats_item}>Screen</p>
          <p className={Style.card__stats_item}>Capacity</p>
          <p className={Style.card__stats_item}>RAM</p>
        </div>

        <div className={Style.card__stats_info}>
          <p className={Style.card__stats_info}>6.1” OLED</p>
          <p className={Style.card__stats_info}>128 GB</p>
          <p className={Style.card__stats_info}>6 GB</p>
        </div>
      </div>

      <div className={Style.card__buttons}>
        <button className={Style.card__buy}>Add to cart</button>

        <button className={Style.card__fav}></button>
      </div>
    </div>
  );
};
