import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import { CartItem } from '../../components/CartItem';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

export const BasketPage: React.FC = () => {
  const [devicesInBasket, setDevicesInBasket] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [isCheckout, setIsCheckout] = useState(false);

  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem('basket')) || [];
    setDevicesInBasket(basket);
  }, []);

  useEffect(() => {
    const calculatingTotalCost = devicesInBasket.reduce(
      (sum, device) => sum + device.priceDiscount * device.count,
      0
    );
    setTotalCost(calculatingTotalCost);
    if (devicesInBasket.length) {
      const toJSON = JSON.stringify(devicesInBasket);
      console.log(toJSON);
      localStorage.setItem('basket', toJSON);
    }
  }, [devicesInBasket]);

  return (
    <>
      {isCheckout && (
        <div className={`${style.blurBg}`}>
          <div className={`${style.alert}`}>
            <h2 className={`${style.totalCost}`}>Proceed to Checkout?</h2>
            <div>
              <button
                className={`${style.buyButton}`}
                onClick={() => setIsCheckout(false)}
              >
                No
              </button>
              <button
                className={`${style.buyButton}`}
                onClick={() => setIsCheckout(false)}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
      <h1 className={`${style.title}`}>Cart</h1>
      <div className={`${style.cart} S--1-4 T--1-12 D--1-16`}>
        {!devicesInBasket.length ? (
          <div className={`${style.continer}`}>
            <h1 className={`${style.totalCost}`}>{'it\'s still empty'}</h1>
            <Link to="/phones">
              <button
                className={`${style.buyButton}`}
                onClick={() => setIsCheckout(false)}
              >
                Go to phone catalog
              </button>
            </Link>
          </div>
        ) : (
          devicesInBasket.map((device) => {
            console.log(device);
            return (
              <AnimatePresence key={device.id}>
                <CartItem
                  key={device.id}
                  device={device}
                  setDevicesInBasket={setDevicesInBasket}
                />
              </AnimatePresence>
            );
          })
        )}
      </div>

      {!!devicesInBasket.length && (
        <div className={`${style.total} S--1-4 T--1-12 D--17-24`}>
          <h2 className={`${style.totalCost}`}>{`$${totalCost}`}</h2>
          <p
            className={`${style.totalSubtilte}`}
          >{`Total for ${devicesInBasket.length} items`}</p>
          <div className={`${style.line}`} />
          <button
            className={`${style.buyButton}`}
            onClick={() => setIsCheckout(true)}
          >
            Checkout
          </button>
        </div>
      )}
    </>
  );
};
