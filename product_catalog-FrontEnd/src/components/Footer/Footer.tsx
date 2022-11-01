import React from 'react';
import style from './footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={`${style.footer}`}>
      <a href="/">
        <img
          src="../../../public/Logo.png"
          id="top"
          className={`${style.footer_logo}`}
          alt="nice-gadget"
        />
      </a>
      <div className={`${style.footer_nav}`}>
        <a href="/" className={`${style.footer_nav}`}>
          github
        </a>
        <a href="/" className={`${style.footer_nav}`}>
          contacts
        </a>
        <a href="/" className={`${style.footer_nav}`}>
          rights
        </a>
        <a href="" className={`${style.footer_nav}`} hidden></a>
      </div>
      <a href="top" className={`${style.footer_nav_last}`}>
        Back to stop
      </a>
    </footer>
  );
};
