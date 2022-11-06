import React, { useEffect, useState } from 'react';
import { Card } from '../../components/CardLayout';
import { getDevices } from '../../Utils/interface/fetchClient';
import style from './style.module.scss';
import { Phone } from '../../Utils/interface/PhoneCard';
import { Pagination } from '../../components/Pagination/Pagination';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { motion, MotionConfig } from 'framer-motion';

export const PhonesPage: React.FC = () => {
  const [devices, setDevices] = useState<any>([]);
  const [inBasket, setInBasket] = useState([]);
  const [inFavorite, setInFavorite] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [devicesPerPage, setDevicesPerPage] = useState(16);
  const [isLoadin, setIsLoading] = useState(true);

  const getDevicesFromServer = async () => {
    setIsLoading(true);
    try {
      const device = getDevices();
      console.log(device);
      setDevices(await device);
    } catch (e) {
      new Error('Not Found');
    } finally {
      setIsLoading(false);
    }
  };
  const { pageId } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(+pageId);
    getDevicesFromServer();
  }, []);

  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem('basket')) || [];
    const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    setInBasket(basket);
    setInFavorite(favorite);
  }, []);

  useEffect(() => {
    if (inBasket.length) {
      const toJSON = JSON.stringify(inBasket);
      console.log(toJSON);
      localStorage.setItem('basket', toJSON);
    }
  }, [inBasket]);

  useEffect(() => {
    if (inFavorite.length) {
      const toJSON = JSON.stringify(inFavorite);
      console.log(toJSON);
      localStorage.setItem('favorite', toJSON);
    }
  }, [inFavorite]);

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

  const indexOfLastDevice = currentPage * devicesPerPage;
  const indexOfFirstDevice = indexOfLastDevice - devicesPerPage;
  const currentDevices = devices.slice(indexOfFirstDevice, indexOfLastDevice);

  return (
    <>
      <h1 className={`${style.title} S--1-4 T--1-12 D--1-24`}>Mobile phones</h1>
      <p
        className={`${style.subtitle} S--1-4 T--1-12 D--1-24`}
      >{`${devices.length} models`}</p>
      <label className={`${style.subtitle}`}>
        Sort by
        <select className={`${style.select}`}>
          <option value="">Newest</option>
        </select>
      </label>
      <label className={`${style.subtitle}`}>
        Items on page
        <select className={`${style.select}`}>
          <option value="">16</option>
        </select>
      </label>
      {isLoadin ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`${style.loader__container}`}
        >
          <Loader />
        </motion.div>
      ) : (
        <>
          <div className={`${style.catalog} S--1-4 T--1-12 D--1-24`}>
            {currentDevices.map((device) => {
              return (
                <Card
                  key={device.id}
                  device={device}
                  handleChangeBasket={handleChangeBasket}
                  inBasket={inBasket}
                  handleChangeFavorite={handleChangeFavorite}
                  inFavorite={inFavorite}
                />
              );
            })}
          </div>
          <Pagination
            devicesPerPage={devicesPerPage}
            totalDevices={devices.length}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      )}
    </>
  );
};
