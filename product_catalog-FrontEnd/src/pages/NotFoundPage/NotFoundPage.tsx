import React from 'react';
import style from './style.module.scss';

export const NotFoundPage: React.FC = () => (
  <div className={`${style.title} D--1-8 T--1-8 S--1-4`}>
    <h1 className={`${style.title}`}>Page not found</h1>
    <div className={`${style.gif_container}`}>
      <img
        src="https://media.giphy.com/media/g01ZnwAUvutuK8GIQn/giphy.gif"
        className={`${style.gif}`}
        alt="travolta"
      />
    </div>
  </div>
);
