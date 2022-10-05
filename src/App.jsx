import { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Board from './Board/Board';

function App() {
  return (
    <div>
      <Header />
      <Board />
      <Footer />
    </div>
  );
}

export default App;
