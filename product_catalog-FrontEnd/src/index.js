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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/phones">
            <Route index element={<PhonesPage />} />
            <Route path=":itemId" element={<h1>in developing</h1>} />
          </Route>

          <Route path="/tablets" element={<h1>in developing</h1>} />
          <Route path="/accessories" element={<h1>in developing</h1>} />
          <Route path="/favorites" element={<h1>in developing</h1>} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/cardItem" element={<CartItemPage />} />

          <Route index element={<Navigate to="/home"/>} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
