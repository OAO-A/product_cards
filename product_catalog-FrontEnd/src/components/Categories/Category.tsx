import React from 'react';

import Style from './Category.module.scss';

type Props = {
  image: string;
  title: string;
  text: string;
  backgroundColor: string;
};

export const Category: React.FC<Props> = ({
  image,
  title,
  text,
  backgroundColor,
}) => {
  return (
    <div className={Style.category}>
      <div className={backgroundColor}>
        <img src={image} alt="phone_img" className={Style.category__image} />
      </div>
      <h4 className={Style.category__title}>{title}</h4>
      <p className={Style.category__text}>{text}</p>
    </div>
  );
};
