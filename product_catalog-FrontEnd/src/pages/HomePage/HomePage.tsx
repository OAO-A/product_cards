import React, { useState } from 'react';
import { Card } from '../../components/CardLayout';
import Style from '../../components/CardLayout/card.module.scss';
import { Slider } from '../../components/Slider';

export const HomePage: React.FC = () => {
  const [info, setInfo] = useState([]);

  fetch('https://nice-gadjet-products-catalogue.herokuapp.com/api/device')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setInfo(data);
      console.log(info);
    });
  return (
    <>
      <Slider />
      {info &&
        info.map((card) => {
          const { id, name, fullPrice, price, screen, ram, capacity, image } =
            card;
          return (
            <div key={id} className={Style.card} data-qa="card">
              <img src={`../../${image}`} alt="/" className={Style.card__img} />
              <p className={Style.card__name}>{name} (iMT9G2FS/A)</p>

              <div className={Style.card__price}>
                <p className={Style.card__price_old}>{`${fullPrice}$`}</p>
                <p className={Style.card__price_new}>{`${price}$`}</p>
              </div>

              <div className={Style.card__stats}>
                <div className={Style.card__stats_items}>
                  <p className={Style.card__stats_item}>Screen</p>
                  <p className={Style.card__stats_item}>Capacity</p>
                  <p className={Style.card__stats_item}>RAM</p>
                </div>

                <div className={Style.card__stats_info}>
                  <p className={Style.card__stats_info}>{screen}</p>
                  <p className={Style.card__stats_info}>{capacity}</p>
                  <p className={Style.card__stats_info}>{ram}</p>
                </div>
              </div>

              <div className={Style.card__buttons}>
                <button className={Style.card__buy}>Add to cart</button>

                <button className={Style.card__fav}></button>
              </div>
            </div>
          );
        })}
    </>
  );
};
