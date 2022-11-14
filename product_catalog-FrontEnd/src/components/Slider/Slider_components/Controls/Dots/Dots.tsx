import React, { useContext } from 'react';
import { SliderContext } from '../../../Slider';
import { Dot } from '../Dot';
import classNames from 'classnames';

import style from './dots.module.scss';

export const Dots: React.FC = () => {
  const { slidesCount } = useContext(SliderContext);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />);
    }

    return dots;
  };

  return (
    <div className={classNames(style.dots, 'S--1-4', 'T--1-12', 'D--1-24')}>
      {renderDots()}
    </div>
  );
};
