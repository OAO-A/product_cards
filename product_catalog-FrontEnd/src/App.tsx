import React, { useState } from 'react';
import './style/App.scss';
// import classNames from 'classnames';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Card } from './components/CardLayout';
import { HamburgerMenu } from './components/Header/humburger/menu/HamburgerMenu';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>}
      <Container>
        <Outlet />
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
