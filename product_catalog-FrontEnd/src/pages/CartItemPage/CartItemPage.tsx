import React from 'react';
import style from './cart.module.scss';
import img1 from '../../img/phones/apple-iphone-xs-max/spacegray/00.jpg';
import img2 from '../../img/phones/apple-iphone-xs-max/spacegray/01.jpg';
import img3 from '../../img/phones/apple-iphone-xs-max/spacegray/02.jpg';
import img4 from '../../img/phones/apple-iphone-xs-max/spacegray/03.jpg';
import img5 from '../../img/phones/apple-iphone-xs-max/spacegray/04.jpg';

export const CartItemPage = () => {
  return (
    <>
      <h2 className={`${style.good_title} D--1-24 T--1-12 S--1-4`}>
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h2>
      <div className={`${style.good_images} S--1-4 T--3-5 D--5-8`}>
        <img
          src={img1}
          alt="main-img"
          className={`${style.main_img} D--4-12 S--1-4 T--3-6`}
        />
        <div className={`${style.secondary_images} S--1-4 T--1-2`}>
          <div className={`${style.good_wrapper} D--1-1`}>
            <img
              src={img2}
              alt="1"
              className={`${style.secondary_img} D--1-1`}
            />
          </div>
          <div className={`${style.good_wrapper} D--1-1`}>
            <img
              src={img3}
              alt="1"
              className={`${style.secondary_img} D--1-1`}
            />
          </div>
          <div className={`${style.good_wrapper} D--1-1`}>
            <img
              src={img4}
              alt="1"
              className={`${style.secondary_img} D--1-1`}
            />
          </div>
          <div className={`${style.good_wrapper} D--1-1`}>
            <img
              src={img5}
              alt="1"
              className={`${style.secondary_img} D--1-1`}
            />
          </div>
          <div className={`${style.good_availableColors} D--14-17`}></div>
        </div>
      </div>

      <div className={`${style.good_a} S--1-4 T--8-12 D--14-20`}>
        <div className={`${style.good_colors} S--1-4 T--8-12 D--14-20`}>
          <div>
            <p>AVAILABLE COLORS</p>
            <div className={`${style.good_color}`}>
              <button
                autoFocus
                className={`${style.color_button} ${style.button_1}`}
              ></button>
            </div>
            <div className={`${style.good_color}`}>
              <button
                className={`${style.color_button} ${style.button_2}`}
              ></button>
            </div>
            <div className={`${style.good_color}`}>
              <button
                className={`${style.color_button} ${style.button_3}`}
              ></button>
            </div>
            <div className={`${style.good_color}`}>
              <button
                className={`${style.color_button} ${style.button_4}`}
              ></button>
            </div>
          </div>
          <p className={`${style.good_id} S--4-4`}>ID: 802390</p>
        </div>
        <div className={`${style.good_capacity} S--1-4 T--8-12 D--14-20`}>
          <p>Select capacity</p>
          <div>
            <button autoFocus className={`${style.capacity_selector}`}>
              64 GB
            </button>
            <button className={`${style.capacity_selector}`}>256 GB</button>
            <button className={`${style.capacity_selector}`}>512 GB</button>
          </div>
        </div>
        <div className={`${style.good_prices} S--1-4 T--8-12 D--14-20`}>
          <p className={`${style.good_prices_current}`}>$799</p>
          <p className={`${style.good_prices_previous}`}>$1199</p>
        </div>
        <div className={`${style.good_purchaise} S--1-4 T--8-12 D--14-20`}>
          <button className={`${style.purchaise_btn}`}>Add to cart</button>
          <button className={`${style.favorite_btn}`}>
            <img src="/icon/like.svg" alt="" />
          </button>
        </div>
        <div className={`${style.good_details} S--1-4 T--8-12 D--14-20`}>
          <div className={`${style.good_detail}`}>
            <p className={`${style.good_detail_1}`}>Screen</p>
            <p className={`${style.good_detail_2}`}>6.5” OLED</p>
          </div>
          <div className={`${style.good_detail}`}>
            <p className={`${style.good_detail_1}`}>Resolution</p>
            <p className={`${style.good_detail_2}`}>2688x1242</p>
          </div>
          <div className={`${style.good_detail}`}>
            <p className={`${style.good_detail_1}`}>Processor</p>
            <p className={`${style.good_detail_2}`}>Apple A12 Bionic</p>
          </div>
          <div className={`${style.good_detail}`}>
            <p className={`${style.good_detail_1}`}>RAM</p>
            <p className={`${style.good_detail_2}`}>3 GB</p>
          </div>
        </div>
      </div>
    </>
  );
};
