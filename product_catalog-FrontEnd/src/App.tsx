import React from 'react';
import './style/App.scss';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Card } from './components/CardLayout';

function App() {
  return (
    <div className="App">
      <Header />
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
