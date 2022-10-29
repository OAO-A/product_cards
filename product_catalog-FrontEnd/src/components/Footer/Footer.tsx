import React from 'react';
import style from './footer.module.scss';

export const Footer: React.FC = () => {
  return <footer className={`${style.footer}`}>
    <a href='/' className={`${style.footer_logo}`}></a>

    <a href='/' className={`${style.footer_nav}`}>github</a>
    <a href='/' className={`${style.footer_nav}`}>contacts</a>
    <a href='/' className={`${style.footer_nav}`}>rights</a>
  </footer>;
};
