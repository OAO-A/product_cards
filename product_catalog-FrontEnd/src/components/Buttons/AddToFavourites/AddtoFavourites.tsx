import React, { useState } from 'react';
import classNames from 'classnames';
import './AddToFavourites.scss';

export const AddtoFavourites: React.FC = () => {
  const [addedToFavorites, setAddedToFavorites] = useState(false);

  const hadleAddToFavorites = () => {
    setAddedToFavorites((prevState) => !prevState);
  };

  return (
    <button
      type="button"
      className={classNames('card__fav', {
        card__fav_isActive: addedToFavorites,
      })}
      onClick={hadleAddToFavorites}
    ></button>
  );
};
