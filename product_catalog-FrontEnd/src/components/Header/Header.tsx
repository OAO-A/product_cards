import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './header.module.scss';
import { HamburgerIcon } from './humburger/icon';
import { Navigation } from './navigation';

export const Header: React.FC = () => {
  return (
    <header className={`${style.header}`}>
      <div className={`${style.main_wrapper}`}>
        <Link to="/" className={`${style.header_logo}`}></Link>

        <Navigation />
      </div>

      <div className={`${style.functional_wrapper}`}>
        <div className={`${style.functional_wrapper_box}`}>
          <NavLink
            to="/favorites"
            className={`${style.header_favorites}`}
          ></NavLink>
        </div>
        <div className={`${style.functional_wrapper_box}`}>
          <NavLink
            to="/basket"
            className={`${style.header_shopping_bag}`}
          ></NavLink>
        </div>
        <HamburgerIcon />
        {/* <div>
        </div> */}
      </div>

      {/* <div>
        
        <a href=""></a> 
        component with hamburger icon will be here
         
      </div> */}
    </header>
  );
};
