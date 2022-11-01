import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.scss';
import { HamburgerIcon } from './humburger/icon';
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
        <Link to="/" className={`${style.header_logo}`}></Link>

        <div className={`${style.nav_bar}`}>
          <div className={`${style.PC_navigation}`}>
            <Navigation />
          </div>
        </div>
      </div>

      <Functional_wrapper />

      <HamburgerIcon isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* <div>
        
        <a href=""></a> 
        component with hamburger icon will be here
         
      </div> */}
    </header>
  );
};
