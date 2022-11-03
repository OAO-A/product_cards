import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './header.module.scss';
import { HamburgerIcon } from './humburger/icon';
import Logo from '../../img/Logo2.png';

export const Header: React.FC = () => {
  return (
    <header className={`${style.header}`}>
      <div className={`${style.main_wrapper}`}>
        <Link to="/" className={`${style.header_logo}`}>
          <img src={Logo} alt="nice_gadget" />
        </Link>

        <nav className={`${style.nav}`}>
          <ul className={`${style.nav_list}`}>
            <li className={`${style.nav_item}`}>
              <NavLink to="/" className={`${style.nav_link}`}>
                home
              </NavLink>
            </li>
            <li className={`${style.nav_item}`}>
              <NavLink to="/phones" className={`${style.nav_link}`}>
                phones
              </NavLink>
            </li>
            <li className={`${style.nav_item}`}>
              <NavLink to="/tablets" className={`${style.nav_link}`}>
                tablets
              </NavLink>
            </li>
            <li className={`${style.nav_item}`}>
              <NavLink to="/accessories" className={`${style.nav_link}`}>
                accessories
              </NavLink>
            </li>
          </ul>
        </nav>
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
