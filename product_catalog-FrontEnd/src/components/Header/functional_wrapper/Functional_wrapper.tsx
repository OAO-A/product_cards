import React from 'react';
import style from './functional_wrapper.module.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  setIsMenuOpen: (isOpen: boolean) => void;
};

export const Functional_wrapper: React.FC<Props> = ({ setIsMenuOpen }) => {
  return (
    <div className={`${style.functional_wrapper}`}>
      <div className={classNames(`${style.functional_wrapper_box}`)}>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            classNames(`${style.favorites}`, {
              [`${style.choosed_link}`]: isActive,
            })
          }
          onClick={() => setIsMenuOpen(false)}
        ></NavLink>
      </div>
      <div className={classNames(`${style.functional_wrapper_box}`)}>
        <NavLink
          to="/basket"
          className={({ isActive }) => {
            return classNames(`${style.shopping_bag}`, {
              [`${style.choosed_link}`]: isActive,
            });
          }}
          onClick={() => setIsMenuOpen(false)}
        ></NavLink>
      </div>
    </div>
  );
};
