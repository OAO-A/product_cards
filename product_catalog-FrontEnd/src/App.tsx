import React from 'react';
import './style/App.scss';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { CartItem } from './pages/Cartitem';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Outlet />
        <CartItem />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
