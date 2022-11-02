import React from 'react';
import Style from '../../components/CardLayout/card.module.scss';
import phone from '../../img/category-phones.png';

export const Card: React.FC = () => {
  return (
    <div className={Style.card} data-qa="card">
      <img src={phone} alt="/" className={Style.card__img} />
      <p className={Style.card__name}>
        Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
      </p>

      <div className={Style.card__price}>
        <p className={Style.card__price_old}>$899</p>
        <p className={Style.card__price_new}>$1899</p>
      </div>

      <div className={Style.card__stats}>
        <div className={Style.card__stats_items}>
          <p className={Style.card__stats_item}>Screen</p>
          <p className={Style.card__stats_item}>Capacity</p>
          <p className={Style.card__stats_item}>RAM</p>
        </div>

        <div className={Style.card__stats_info}>
          <p className={Style.card__stats_info}>5.8” OLED</p>
          <p className={Style.card__stats_info}>64 GB</p>
          <p className={Style.card__stats_info}>4 GB</p>
        </div>
      </div>

      <div className={Style.card__buttons}>
        <button className={Style.card__buy}>Add to cart</button>

        <button className={Style.card__fav}></button>
      </div>
    </div>
  );
};
