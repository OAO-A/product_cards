import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.scss';

type Props = {
  devicesPerPage: number;
  totalDevices: number;
  setCurrentPage: (number) => void;
  currentPage: number;
};

export const Pagination: React.FC<Props> = ({
  devicesPerPage,
  totalDevices,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDevices / devicesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={`${style.pagination__container} D--1-24 T--1-12 S--1-4`}>
      <Link
        className={`${style.pagination__button} ${style.pagination__button_arow}`}
        to={`/phones/${currentPage - 1}`}
        onClick={() =>
          setCurrentPage((prevCurrenPage) => {
            return prevCurrenPage - 1;
          })
        }
      >
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.47124 0.528514C5.21089 0.268165 4.78878 0.268165 4.52843 0.528514L0.528433 4.52851C0.268083 4.78886 0.268083 5.21097 0.528433 5.47132L4.52843 9.47132C4.78878 9.73167 5.21089 9.73167 5.47124 9.47132C5.73159 9.21097 5.73159 8.78886 5.47124 8.52851L1.94265 4.99992L5.47124 1.47132C5.73159 1.21097 5.73159 0.788864 5.47124 0.528514Z"
            fill="#F1F2F9"
          />
        </svg>
      </Link>
      <ul className={`${style.pagination}`}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <Link
              to={`/phones/${number}`}
              onClick={() => setCurrentPage(number)}
              className={`${style.pagination__button} ${
                currentPage === number && style.isActive
              }`}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        className={`${style.pagination__button} ${style.pagination__button_arow}`}
        to={`/phones/${currentPage + 1}`}
        onClick={() =>
          setCurrentPage((prevCurrenPage) => {
            return prevCurrenPage + 1;
          })
        }
      >
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.528758 0.528514C0.789108 0.268165 1.21122 0.268165 1.47157 0.528514L5.47157 4.52851C5.73192 4.78886 5.73192 5.21097 5.47157 5.47132L1.47157 9.47132C1.21122 9.73167 0.789108 9.73167 0.528758 9.47132C0.268409 9.21097 0.268409 8.78886 0.528758 8.52851L4.05735 4.99992L0.528758 1.47132C0.268409 1.21097 0.268409 0.788864 0.528758 0.528514Z"
            fill="#F1F2F9"
          />
        </svg>
      </Link>
    </div>
  );
};
