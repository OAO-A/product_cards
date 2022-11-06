import React, { useEffect, useState } from 'react';
import style from './cart.module.scss';
import Style from '../../components/CardLayout/card.module.scss';
import img1 from '../../img/phones/apple-iphone-xs-max/spacegray/00.jpg';
import img2 from '../../img/phones/apple-iphone-xs-max/spacegray/01.jpg';
import img3 from '../../img/phones/apple-iphone-xs-max/spacegray/02.jpg';
import img4 from '../../img/phones/apple-iphone-xs-max/spacegray/03.jpg';
import img5 from '../../img/phones/apple-iphone-xs-max/spacegray/04.jpg';
import { getDevice } from '../../Utils/interface/fetchClient';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';

export const CartItemPage = () => {
  const [device, setDevice] = useState<any>();
  const [isLoadin, setIsLoading] = useState(true);
  const [inBasket, setInBasket] = useState([]);
  const [inFavorite, setInFavorite] = useState([]);

  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem('basket')) || [];
    const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    setInBasket(basket);
    setInFavorite(favorite);
  }, []);

  const { id } = useParams();

  const getDevicesFromServer = async () => {
    setIsLoading(true);
    try {
      const device = getDevice(+id);
      setDevice(await device);
    } catch (e) {
      new Error('Not Found');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDevicesFromServer();
  }, []);

  const handleChangeBasket = (device) => {
    if (inBasket.some((deviceInBasket) => deviceInBasket.id === device.id)) {
      const removeDeviceFromBasket = inBasket.filter(
        (deviceInBasket) => deviceInBasket.id !== device.id
      );
      setInBasket(removeDeviceFromBasket);
      return;
    }

    setInBasket((prevBasket) => {
      const inBasketCopy = [...prevBasket];
      inBasketCopy.push({ ...device, count: 1 });
      return inBasketCopy;
    });
  };

  const handleChangeFavorite = (device) => {
    if (inFavorite.some((deviceInBasket) => deviceInBasket.id === device.id)) {
      const removeDeviceFromFavorite = inFavorite.filter(
        (deviceInFavorite) => deviceInFavorite.id !== device.id
      );
      setInFavorite(removeDeviceFromFavorite);
      return;
    }

    setInFavorite((prevFavorite) => {
      const inFavoriteCopy = [...prevFavorite];
      inFavoriteCopy.push(device);
      return inFavoriteCopy;
    });
  };

  return (
    <>
      {isLoadin ? (
        <Loader />
      ) : (
        <>
          <h2 className={`${style.good_title} D--1-24 T--1-12 S--1-4`}>
            {device.name}
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
                  {device.capacity}
                </button>
                {device.capacityAvailable.map((capacity) => {
                  if (device.capacity === capacity) {
                    return;
                  }
                  return (
                    <button
                      key={capacity}
                      className={`${style.capacity_selector}`}
                    >
                      {capacity}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className={`${style.good_prices} S--1-4 T--8-12 D--14-20`}>
              <p
                className={`${style.good_prices_current}`}
              >{`$${device.priceRegular}`}</p>
              <p
                className={`${style.good_prices_previous}`}
              >{`$${device.priceDiscount}`}</p>
            </div>
            <div className={`${style.good_purchaise} S--1-4 T--8-12 D--14-20`}>
              <button
                className={` ${style.purchaise_btn} ${
                  inBasket.some(
                    (deviceInBasket) => deviceInBasket.id === device.id
                  )
                    ? Style.card__buy_inCart
                    : ''
                }`}
                onClick={() => handleChangeBasket(device)}
              >{`${
                  inBasket.some(
                    (deviceInBasket) => deviceInBasket.id === device.id
                  )
                    ? 'Add to cart'
                    : 'In cart'
                }`}</button>
              <button
                className={`${Style.card__fav} ${
                  inFavorite.some(
                    (deviceInFavorite) => deviceInFavorite.id === device.id
                  )
                    ? Style.card__fav_isActive
                    : ''
                }`}
                onClick={() => handleChangeFavorite(device)}
              ></button>
            </div>
            <div className={`${style.good_details} S--1-4 T--8-12 D--14-20`}>
              <div className={`${style.good_detail}`}>
                <p className={`${style.good_detail_1}`}>Screen</p>
                <p className={`${style.good_detail_2}`}>{device.screen}</p>
              </div>
              <div className={`${style.good_detail}`}>
                <p className={`${style.good_detail_1}`}>Resolution</p>
                <p className={`${style.good_detail_2}`}>{device.resolution}</p>
              </div>
              <div className={`${style.good_detail}`}>
                <p className={`${style.good_detail_1}`}>Processor</p>
                <p className={`${style.good_detail_2}`}>{device.processor}</p>
              </div>
              <div className={`${style.good_detail}`}>
                <p className={`${style.good_detail_1}`}>RAM</p>
                <p className={`${style.good_detail_2}`}>{device.ram}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
