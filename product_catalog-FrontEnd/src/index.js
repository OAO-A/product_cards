import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CartItem } from './pages/Cartitem';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/phones">
            <Route index element={<h1>in developing</h1>} />
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
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
