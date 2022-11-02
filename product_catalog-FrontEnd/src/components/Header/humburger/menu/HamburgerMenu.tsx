import React from 'react';
import style from './hamburgerMenu.module.scss';
import { Navigation } from '../../navigation';
import { Functional_wrapper } from '../../functional_wrapper';

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
};

export const HamburgerMenu: React.FC<Props> = ({
  setIsMenuOpen,
  isMenuOpen,
}) => {
  return (
    <div className={`${style.mob_nav}`}>
      <Navigation setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <Functional_wrapper setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};
