import React from 'react';
import style from './container.module.scss';

export type Props = {
  children: React.ReactNode;
};

export const Container = (prop: Props) => {
  return <div className={`${style.Container}`}>{prop.children}</div>;
};
