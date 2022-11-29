import React, { useContext } from 'react';
import { SliderContext } from '../../../Slider';
import classNames from 'classnames';

import style from './dot.module.scss';

type Props = {
  number: number;
};

export const Dot: React.FC<Props> = ({ number }) => {
  const { goToSlide, slideNumber } = useContext(SliderContext);

  return (
    <div
      className={classNames(style.dot, {
        [style.selected]: slideNumber === number,
      })}
      onClick={() => goToSlide(number)}
    />
  );
};
