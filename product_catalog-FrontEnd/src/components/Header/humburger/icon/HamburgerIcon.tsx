import React from 'react';
import style from './hamburgerIcon.module.scss';
import classNames from 'classnames';

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

export const HamburgerIcon: React.FC<Props> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <div className={`${style.hamburger_icon}`}>
      <input
        type="checkbox"
        id="toggle-hamburger"
        className={`${style.checkbox_input}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <label htmlFor="toggle-hamburger" className={`${style.toggle_label}`}>
        <svg width="36px" height="36px">
          <circle
            className={classNames(`${style.toggle_label_circle}`, {
              [`${style.circle_opened}`]: isMenuOpen,
            })}
            r="16"
            cx="18"
            cy="18"
          ></circle>
        </svg>
        <div
          className={classNames(`${style.toggle_label_hamburger}`, {
            [`${style.label_hamburger_opened}`]: isMenuOpen,
          })}
        >
          <div
            className={
              !isMenuOpen ? `${style.center}` : `${style.center_opened}`
            }
          ></div>
        </div>
      </label>
    </div>
  );
};
