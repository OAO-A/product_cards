import React from 'react';
import style from './footer.module.scss';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../img/Logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className={`${style.footer}`}>
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
      <NavLink to="#" className={`${style.footer_nav_last}`}>
        Back to stop
      </NavLink>
    </footer>
  );
};
