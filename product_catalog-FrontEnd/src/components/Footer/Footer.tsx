import React from 'react';
import style from './footer.module.scss';
import logo from '../../img/Logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className={`${style.footer}`}>
      <a href="/">
        <img
          src={logo}
          id="top"
          className={`${style.footer_logo}`}
          alt="nice-gadget"
        />
      </a>
      <div className={`${style.footer_nav}`}>
        <a href="/github" className={`${style.footer_nav}`}>
          github
        </a>
        <a href="/contnacts" className={`${style.footer_nav}`}>
          contacts
        </a>
        <a href="/rights" className={`${style.footer_nav}`}>
          rights
        </a>
        <a href="" className={`${style.footer_nav}`} hidden></a>
      </div>
      <a href="#" className={`${style.footer_nav_last}`}>
        Back to stop
      </a>
    </footer>
  );
};
