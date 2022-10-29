import React from 'react';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './style/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <div className='test S--2-3 T--1-2 D--1-6'>1</div>
        <div className='test D'>2</div>
        <div className='test D'>3</div>
        <div className='test D'>4</div>
        <div className='test D'>5</div>
        <div className='test D'>6</div>
        <div className='test D'>7</div>
        <div className='test D'>8</div>
        <div className='test D'>9</div>
        <div className='test D'>10</div>
        <div className='test D'>11</div>
        <div className='test D'>12</div>
        <div className='test D'>13</div>
        <div className='test D'>14</div>
        <div className='test D'>15</div>
        <div className='test D'>16</div>
        <div className='test D'>17</div>
        <div className='test D'>18</div>
        <div className='test D'>19</div>
        <div className='test D'>20</div>
        <div className='test D'>21</div>
        <div className='test D'>22</div>
        <div className='test D'>23</div>
        <div className='test D'>24</div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
