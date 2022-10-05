import { useState } from 'react';
import './App.css';
import { GameContextProvider } from './context/gameContext';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Board from './Board/Board';

function App() {
  return (
    <GameContextProvider>
      <Header />
      <Board />
      <Footer />
    </GameContextProvider>
  );
}

export default App;
