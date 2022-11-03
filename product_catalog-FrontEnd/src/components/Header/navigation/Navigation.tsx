import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './navigation.module.scss';
import classNames from 'classnames';
import { motion } from 'framer-motion';

type Props = {
  isMenuOpen?: boolean;
  setIsMenuOpen?: (isOpen: boolean) => void;
};

export const Navigation: React.FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
  const animateFrom = { opacity: 0, x: 40 };
  const animateTo = { opacity: 1, x: 0 };
  return (
    <nav>
      <ul className={`${style.nav_list}`}>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.05 }}
          className={`${style.nav_item}`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              classNames(`${style.nav_link}`,
                {[`${style.choosed_link}`]: isActive}
              )}
            onClick={() => isMenuOpen && setIsMenuOpen(false)}
          >
            home
          </NavLink>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.1 }}
          className={`${style.nav_item}`}
        >
          <NavLink
            to="/phones"
            className={({ isActive }) =>
              classNames(`${style.nav_link}`,
                {[`${style.choosed_link}`]: isActive}
              )}
            onClick={() => isMenuOpen && setIsMenuOpen(false)}
          >
            phones
          </NavLink>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.2 }}
          className={`${style.nav_item}`}
        >
          <NavLink
            to="/tablets"
            className={({ isActive }) =>
              classNames(`${style.nav_link}`,
                {[`${style.choosed_link}`]: isActive},
              )}
            onClick={() => isMenuOpen && setIsMenuOpen(false)}
          >
            tablets
          </NavLink>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.3 }}
          className={`${style.nav_item}`}
        >
          <NavLink
            to="/accessories"
            className={({ isActive }) =>
              classNames(`${style.nav_link}`,
                {[`${style.choosed_link}`]: isActive}
              )}
            onClick={() => isMenuOpen && setIsMenuOpen(false)}
          >
            accessories
          </NavLink>
        </motion.li>
      </ul>
    </nav>
  );
};
