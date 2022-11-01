import React from 'react';
import style from './hamburgerMenu.module.scss';
import { Navigation } from '../../navigation';
import { Functional_wrapper } from '../../functional_wrapper';
// import classNames from 'classnames';

export const HamburgerMenu: React.FC = () => {
  return (
    <div className={`${style.mob_nav}`}>
      <Navigation />
      <Functional_wrapper />
    </div>
  );
};
