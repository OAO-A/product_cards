import React from 'react';
import './style/App.scss';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
