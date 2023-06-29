import React, { useContext, useRef, useEffect } from 'react';

import { GameStateContext } from '../helpers/contexts';

import '../App.css';

const Menu = () => {
  const { setGameState, setUserName } = useContext(GameStateContext);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleStart = () => {
    setGameState('playing');
  };

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div className="Menu">
      <label>Sup! What's your name?</label>
      {/* добавить валидацию */}
      <input
        className="input"
        type="text"
        placeholder="Enter your name"
        onChange={handleChangeUserName}
        ref={inputRef}
      />
      <button id="startQuiz" onClick={handleStart}>
        Start Quiz
      </button>
    </div>
  );
};

export default Menu;
