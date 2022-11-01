import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './navigation.module.scss';

export const Navigation = () => {
  return (
    <nav>
      <ul className={`${style.nav_list}`}>
        <li className={`${style.nav_item}`}>
          <NavLink to="/" className={`${style.nav_link}`}>
            home
          </NavLink>
        </li>
        <li className={`${style.nav_item}`}>
          <NavLink to="/phones" className={`${style.nav_link}`}>
            phones
          </NavLink>
        </li>
        <li className={`${style.nav_item}`}>
          <NavLink to="/tablets" className={`${style.nav_link}`}>
            tablets
          </NavLink>
        </li>
        <li className={`${style.nav_item}`}>
          <NavLink to="/accessories" className={`${style.nav_link}`}>
            accessories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
