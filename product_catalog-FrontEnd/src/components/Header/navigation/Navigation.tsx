import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './navigation.module.scss';
import classNames from 'classnames';

type Props = {
  isMenuOpen?: boolean;
  setIsMenuOpen?: (isOpen: boolean) => void;
};

export const Navigation: React.FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav>
      <ul className={`${style.nav_list}`}>
        <li className={`${style.nav_item}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              classNames(`${style.nav_link}`,
                {[`${style.choosed_link}`]: isActive}
              )}
            onClick={() => isMenuOpen && setIsMenuOpen(false)}
          >
            home
          </NavLink>
        </li>
        <li className={`${style.nav_item}`}>
          <NavLink
            to="/phones"
            className={({ isActive }) =>
              classNames(`${style.nav_link}`,
                {[`${style.choosed_link}`]: isActive}
              )}
            onClick={() => isMenuOpen && setIsMenuOpen(false)}
          >
            phones
          </NavLink>
        </li>
        <li className={`${style.nav_item}`}>
          <NavLink
            to="/tablets"
            className={({ isActive }) =>
              classNames(`${style.nav_link}`,
                {[`${style.choosed_link}`]: isActive},
              )}
            onClick={() => isMenuOpen && setIsMenuOpen(false)}
          >
            tablets
          </NavLink>
        </li>
        <li className={`${style.nav_item}`}>
          <NavLink
            to="/accessories"
            className={({ isActive }) =>
              classNames(`${style.nav_link}`,
                {[`${style.choosed_link}`]: isActive}
              )}
            onClick={() => isMenuOpen && setIsMenuOpen(false)}
          >
            accessories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
