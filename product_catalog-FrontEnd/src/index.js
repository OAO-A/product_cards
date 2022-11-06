import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import { CartItemPage } from './pages/CartItemPage/';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';
import { BasketPage } from './pages/BasketPage';
import { FavoritePage } from './pages/FavoritePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/phones">
            <Route index element={<Navigate to="/phones/1" />} />
            <Route path=":pageId" element={<PhonesPage />} />
          </Route>

          <Route path="/tablets" element={<h1>in developing</h1>} />
          <Route path="/accessories" element={<h1>in developing</h1>} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/cardItem">
            <Route index element={<Navigate to=":pageId/" />} />
            <Route path=":pageId/:id" element={<CartItemPage />} />
          </Route>

          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
