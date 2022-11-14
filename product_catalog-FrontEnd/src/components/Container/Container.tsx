import React from 'react';
import style from './container.module.scss';
import { Props } from './Props';

export const Container = (prop: Props) => {
  return <div className={`${style.Container}`}>{prop.children}</div>;
};
