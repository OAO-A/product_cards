import React, { useEffect } from 'react';
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
  useEffect(() => {
    document.body.classList.add(`${style.lock_scroll}`);
    window.scrollTo(0, 0);

    return () => {
      document.body.classList.remove(`${style.lock_scroll}`);
    };
  }, [isMenuOpen]);

  return (
    <div className={`${style.mob_nav}`}>
      <Navigation setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <Functional_wrapper setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};
