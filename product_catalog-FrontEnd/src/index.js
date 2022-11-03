import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import { CartItem } from './pages/Cartitem';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/phones">
            <Route index element={<HomePage />} />
            <Route path=":itemId" element={<h1>in developing</h1>} />
          </Route>

          <Route path="/tablets" element={<h1>in developing</h1>} />
          <Route path="/accessories" element={<h1>in developing</h1>} />
          <Route path="/favorites" element={<h1>in developing</h1>} />
          <Route path="/basket" element={<h1>in developing</h1>} />
          <Route path="/cardItem" element={<CartItem />} />

          <Route index element={<h1>in developing</h1>} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
