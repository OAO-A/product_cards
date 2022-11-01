import React from 'react';
import style from './functional_wrapper.module.scss';
import { NavLink } from 'react-router-dom';

export const Functional_wrapper: React.FC = () => {
  return (
    <div className={`${style.functional_wrapper}`}>
      <div className={`${style.functional_wrapper_box}`}>
        <NavLink to="/favorites" className={`${style.favorites}`}></NavLink>
      </div>
      <div className={`${style.functional_wrapper_box}`}>
        <NavLink to="/basket" className={`${style.shopping_bag}`}></NavLink>
      </div>
    </div>
  );
};
