import React, { useState } from 'react';
import { Card } from '../../components/CardLayout';
import style from './style.module.scss';

export const HomePage: React.FC = () => {
  const [info, setInfo] = useState([]);

  fetch('https://product-catalog-nice.herokuapp.com/api/device')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setInfo(data);
      console.log(info);
    });
  return (
    <>
      <h1 className={`${style.title} S--1-4 T--1-12 D--1-24`}>РАБОТАЕМ!!!</h1>
    </>
  );
};
