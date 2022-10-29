import React from 'react';
import style from './header.module.scss';

export const Header : React.FC = () => {
  return (
    <header className={`${style.header}`}>
      <a href='/' className={`${style.header_logo}`}></a>
    </header>
  );
};