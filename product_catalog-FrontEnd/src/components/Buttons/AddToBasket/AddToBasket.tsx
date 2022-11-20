import React, { useState } from 'react';
import classNames from 'classnames';
import './AddToBasket.scss';

export const AddToBasket: React.FC = () => {
  const [addedToCart, setAddedToCart] = useState(false);

  const hadleAddToCart = () => {
    setAddedToCart((prevState) => !prevState);
  };

  return (
    <button
      type="button"
      className={classNames('card__buy', {
        card__buy_inCart: addedToCart,
      })}
      onClick={hadleAddToCart}
    >
      {addedToCart ? 'Added' : 'Add to cart'}
    </button>
  );
};
