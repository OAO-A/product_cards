import React, { useState } from 'react';
import { Card } from '../../components/CardLayout';
import style from './style.module.scss';

export const PhonesPage: React.FC = () => {
  const [info, setInfo] = useState([]);

  return (
    <>
      <h1 className={`${style.title} S--1-4 T--1-12 D--1-24`}>Mobile phones</h1>
      <div className={`${style.catalog} S--1-4 T--1-12 D--1-24`}>
        {info &&
          info.map((card) => {
            const { id, name, fullPrice, price, screen, ram, capacity, image } =
              card;
            return <Card key={id} />;
          })}
      </div>
    </>
  );
};
