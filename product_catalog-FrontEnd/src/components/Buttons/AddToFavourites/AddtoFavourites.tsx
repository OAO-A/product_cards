import React, { useState } from 'react';
import Styles from './AddToFavourites.module.scss';
import { Phone } from '../../../Utils/interface/PhoneCard';

type Props = {
  device: Phone;
  inFavourites: Phone[];
  hadleAddToFavorites: (device: Phone) => void;
};

export const AddtoFavourites: React.FC<Props> = ({
  device,
  inFavourites,
  hadleAddToFavorites,
}) => {
  return (
    <button
      type="button"
      className={`${Styles.card__fav} ${
        inFavourites.some(
          (deviceInFavorite) => deviceInFavorite.id === device.id
        )
          ? Styles.card__fav_isActive
          : ''
      }`}
      onClick={() => hadleAddToFavorites(device)}
    ></button>
  );
};
