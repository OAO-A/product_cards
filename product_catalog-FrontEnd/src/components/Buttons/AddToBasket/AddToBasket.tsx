import React, { useState } from 'react';
import classNames from 'classnames';
import Styles from './AddToBasket.module.scss';
import { Phone } from '../../../Utils/interface/PhoneCard';

type Props = {
  device: Phone;
  inBasket: Phone[];
  handleChangeBasket: (device: Phone) => void;
};

export const AddToBasket: React.FC<Props> = ({
  device,
  inBasket,
  handleChangeBasket,
}) => {
  return (
    <button
      className={`${Styles.card__buy} ${
        inBasket.some((deviceInBasket) => deviceInBasket.id === device.id)
          ? Styles.card__buy_inCart
          : ''
      }`}
      onClick={() => handleChangeBasket(device)}
    >
      {inBasket.some((deviceInBasket) => deviceInBasket.id === device.id)
        ? 'In cart'
        : 'Add to cart'}
    </button>
  );
};
