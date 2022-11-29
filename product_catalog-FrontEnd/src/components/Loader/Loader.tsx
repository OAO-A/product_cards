import React from 'react';
import style from './style.module.scss';
import png from './pngegg.png';

export const Loader: React.FC = () => (
  <div className={`${style.continer}`}>
    <img className={`${style.loader} ${style.spiner}`} src={png} alt="" />
  </div>
);
