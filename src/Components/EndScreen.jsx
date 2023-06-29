import { useContext } from 'react';

import '../App.css';

import { GameStateContext } from '../helpers/contexts';
import { questions } from '../helpers/questions';

const EndScreen = () => {
  const { score, setScore, setGameState, userName } = useContext(GameStateContext);

  const handleRestart = () => {
    setScore(0);
    setGameState('menu');
  };

  /* добавить таблицу лидеров */

  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h2>{userName}, your score is</h2>
      <h2>
        {score} out of {questions.length}
      </h2>
      <button onClick={handleRestart}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
