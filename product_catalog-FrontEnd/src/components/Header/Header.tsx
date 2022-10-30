import React from 'react';
import style from './header.module.scss';
import { HamburgerIcon } from './humburger/icon';

export const Header : React.FC = () => {
  return (
    <header className={`${style.header}`}>
      <div className={`${style.main_wrapper}`}>
        <a href='/' className={`${style.header_logo}`}></a>

        <nav className={`${style.nav}`}>
          <ul className={`${style.nav_list}`}>
            <li className={`${style.nav_item}`}>
              <a href="/" className={`${style.nav_link}`}>home</a>
            </li>
            <li className={`${style.nav_item}`}>
              <a href="/phones" className={`${style.nav_link}`}>phones</a>
            </li>
            <li className={`${style.nav_item}`}>
              <a href="/tablets" className={`${style.nav_link}`}>tablets</a>
            </li>
            <li className={`${style.nav_item}`}>
              <a href="/accessories" className={`${style.nav_link}`}>accessories</a>
            </li>
          </ul>
        </nav>

      </div>

      <div className={`${style.functional_wrapper}`}>
        <div className={`${style.functional_wrapper_box}`}>
          <a href="/" className={`${style.header_favorites}`}></a>
        </div>
        <div className={`${style.functional_wrapper_box}`}>
          <a href="/" className={`${style.header_shopping_bag}`}></a>
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