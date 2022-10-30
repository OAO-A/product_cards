import React from 'react';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { CartItem } from './components/Cartitem';
import './style/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <CartItem />
      </Container>
    </div>
  );
}

export default App;
