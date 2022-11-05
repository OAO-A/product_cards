import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import { Loader } from '../../components/Loader/Loader';
import { CartItem } from '../../components/CartItem';

export const BasketPage: React.FC = () => {
  const [info, setInfo] = useState([]);
  const [visibleInfo, setVisibleInfo] = useState([]);

  useEffect(() => {
    if (visibleInfo.length !== 5) {
      setVisibleInfo(info.slice(0, 6));
    }
  }, [info]);

  return (
    <>
      <h1 className={`${style.title}`}>Cart</h1>
      <div className={`${style.cart} S--1-4 T--1-12 D--1-16`}>
        {!visibleInfo.length ? (
          <div className={`${style.continer}`}>
            <Loader />
          </div>
        ) : (
          info.map((item, index) => {
            if (index > 1) {
              return;
            }
            return <CartItem key={item.id} item={item} />;
          })
        )}
      </div>
      <div className={`${style.total} S--1-4 T--1-12 D--17-24`}>
        <h2 className={`${style.totalCost}`}>$2658</h2>
        <p className={`${style.totalSubtilte}`}>Total for 3 items</p>
        <div className={`${style.line}`} />
        <button className={`${style.buyButton}`}>Checkout</button>
      </div>
    </>
  );
};
