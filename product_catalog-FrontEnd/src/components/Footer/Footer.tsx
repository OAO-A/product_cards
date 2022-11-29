import React from 'react';
import style from './footer.module.scss';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../img/Logo.png';
import classNames from 'classnames';

type Props = {
  isMenuOpen: boolean;
};

export const Footer: React.FC<Props> = ({ isMenuOpen }) => {
  // const showOnPx = 100;
  // const backToTopButton = document.querySelector('.back-to-top');

  // const scrollContainer = () => {
  //   return document.documentElement || document.body;
  // };

  // document.addEventListener('scroll', () => {
  //   if (scrollContainer().scrollTop > showOnPx) {
  //     backToTopButton.classList.remove('hidden');
  //   } else {
  //     backToTopButton.classList.add('hidden');
  //   }
  // });

  // const goToTop = () => {
  //   document.body.scrollIntoView();
  // };

  // backToTopButton.addEventListener('click', goToTop);

  return (
    <footer
      className={classNames(`${style.footer}`, {
        [`${style.menu_opened}`]: isMenuOpen,
      })}
    >
      <Link to="/">
        <img
          src={logo}
          id="top"
          className={`${style.footer_logo}`}
          alt="nice-gadget"
        />
      </Link>
      <div className={`${style.footer_nav}`}>
        <NavLink to="/github" className={`${style.footer_nav}`}>
          github
        </NavLink>
        <NavLink to="/contnacts" className={`${style.footer_nav}`}>
          contacts
        </NavLink>
        <NavLink to="/rights" className={`${style.footer_nav}`}>
          rights
        </NavLink>
        <NavLink to="" className={`${style.footer_nav}`} hidden></NavLink>
      </div>
      <button className={`${style.footer_nav_last}`} onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}>
        Back to top
      </button>
    </footer>
  );
};
