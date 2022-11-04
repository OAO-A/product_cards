import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.scss';
import { HamburgerIcon } from './humburger/icon';
import Logo from '../../img/Logo2.png';
import { Navigation } from './navigation';
import { Functional_wrapper } from './functional_wrapper';

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
};

export const Header: React.FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className={`${style.header}`}>
      <div className={`${style.main_wrapper}`}>
        <Link to="/" className={`${style.header_logo}`}>
          <img src={Logo} alt="nice_gadget" />
        </Link>

        <div className={`${style.nav_bar}`}>
          <div className={`${style.PC_navigation}`}>
            <Navigation />
          </div>
        </div>
      </div>

      <div className={`${style.wrapper}`}>
        <Functional_wrapper setIsMenuOpen={setIsMenuOpen} />
      </div>

      <HamburgerIcon isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};
