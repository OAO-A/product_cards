import React, { useContext } from 'react';
import { Slide } from '../Slide';
import { SliderContext } from '../../Slider';
import classNames from 'classnames';

import style from './slidesList.module.scss';

export const SlidesList: React.FC = () => {
  const { items } = useContext(SliderContext);
  return (
    <div
      className={classNames(style.slide_list, 'S--1-4', 'T--3-10', 'D--3-22')}
    >
      {items.map((item: string, index: number) => (
        <Slide key={index} imgUrl={item} index={index} />
      ))}
    </div>
  );
};
