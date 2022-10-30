import React, { useState } from 'react';
import style from './hamburgerIcon.module.scss';
import classNames from 'classnames';

export const HamburgerIcon: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${style.hamburger_icon}`}>
      <input
        type="checkbox"
        id="toggle-hamburger"
        className={`${style.checkbox_input}`}
        onClick={() => setIsOpen(!isOpen)}
      />
      <label htmlFor="toggle-hamburger"
        className={`${style.toggle_label}`}
        id="toggle-label"
      >
        <svg
          className={classNames(
            `${style.toggle_label_circle}`,
            {[`${style.circle_opened}`]: isOpen},
          )}
          width="38px"
          height="38px"
        >
          <circle
            r="16"
            cx="17"
            cy="17"
          ></circle>
        </svg>
        <div className={classNames(
          `${style.toggle_label_hamburger}`,
          {[`${style.label_hamburger_opened}`]: isOpen}
        )}>
          <div className={
            !isOpen 
              ? `${style.center}`
              : `${style.center_opened}`
          }></div>
        </div>
      </label>
    </div>
  );
};
