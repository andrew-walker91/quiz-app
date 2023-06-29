import React, { useState } from 'react';

import Menu from './Components/Menu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';

import { GameStateContext } from './helpers/contexts';

import './App.css';

const App = () => {
  const [gameState, setGameState] = useState('menu');
  const [userName, setUserName] = useState('');
  const [score, setScore] = useState(0);

  /* добавить интернационализацию */

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === 'menu' && <Menu />}
        {gameState === 'playing' && <Quiz />}
        {gameState === 'finished' && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
};

export default App;
