import React from 'react';
import style from './style.module.scss';

type PhoneInfo = {
  id: number;
  namespaceId: string;
  category: string;
  phoneId: string;
  itemId: string;
  name: string;
  priceRegular: number;
  priceDiscount: number;
  description: [[string, string]];
  screen: string;
  capacity: string;
  capacityAvailable: [string];
  color: string;
  colorsAvailable: [string];
  processor: string;
  camera: string;
  ram: string;
  zoom: string;
  year: string;
  cell: [string];
  images: [string];
  resolution: string;
};

type Props = {
  item: PhoneInfo;
};

export const CartItem: React.FC<Props> = ({ item }) => {
  const { name, priceRegular, id } = item;
  return (
    <div className={`${style.cart_item} `}>
      <div className={`${style.upCart}`}>
        <div className={`${style.imgContainer}`}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.47205 1.47138C9.7324 1.21103 9.7324 0.788925 9.47205 0.528575C9.21171 0.268226 8.7896 0.268226 8.52925 0.528575L5.00065 4.05717L1.47206 0.528575C1.21171 0.268226 0.789596 0.268226 0.529247 0.528575C0.268897 0.788925 0.268897 1.21103 0.529247 1.47138L4.05784 4.99998L0.529247 8.52857C0.268897 8.78892 0.268897 9.21103 0.529247 9.47138C0.789596 9.73173 1.21171 9.73173 1.47206 9.47138L5.00065 5.94279L8.52925 9.47138C8.7896 9.73173 9.21171 9.73173 9.47205 9.47138C9.7324 9.21103 9.7324 8.78892 9.47205 8.52857L5.94346 4.99998L9.47205 1.47138Z"
              fill="#4A4D58"
            />
          </svg>
          <img
            src="data:image/jpeg;base64,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"
            alt="/"
            className={style.img}
          />
        </div>
        <p className={`${style.subtitle}`}>{name}</p>
      </div>
      <div className={`${style.upCart}`}>
        <div className={`${style.counter}`}>
          <button className={`${style.button} ${style.disActive}`}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.66602 7.99998C2.66602 7.63179 2.96449 7.33331 3.33268 7.33331H12.666C13.0342 7.33331 13.3327 7.63179 13.3327 7.99998C13.3327 8.36817 13.0342 8.66665 12.666 8.66665H3.33268C2.96449 8.66665 2.66602 8.36817 2.66602 7.99998Z"
                fill="#4A4D58"
              />
            </svg>
          </button>
          <div className={`${style.count}`}>1</div>
          <button className={`${style.button}`}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66602 1.33335C6.66602 0.965164 6.36754 0.666687 5.99935 0.666687C5.63116 0.666687 5.33268 0.965164 5.33268 1.33335V5.33335H1.33268C0.964492 5.33335 0.666016 5.63183 0.666016 6.00002C0.666016 6.36821 0.964492 6.66669 1.33268 6.66669H5.33268V10.6667C5.33268 11.0349 5.63116 11.3334 5.99935 11.3334C6.36754 11.3334 6.66602 11.0349 6.66602 10.6667V6.66669H10.666C11.0342 6.66669 11.3327 6.36821 11.3327 6.00002C11.3327 5.63183 11.0342 5.33335 10.666 5.33335H6.66602V1.33335Z"
                fill="#F1F2F9"
              />
            </svg>
          </button>
        </div>
        <div className={`${style.price}`}>{`$${priceRegular}`}</div>
      </div>
    </div>
  );
};
