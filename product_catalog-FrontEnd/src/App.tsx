import React, { useEffect, useState } from 'react';
import './style/App.scss';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { HamburgerMenu } from './components/Header/humburger/menu/HamburgerMenu';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && (
        <HamburgerMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      )}
      <Container>
        <Outlet />
      </Container>
      <Footer isMenuOpen={isMenuOpen} />
    </div>
  );
}

export default App;
