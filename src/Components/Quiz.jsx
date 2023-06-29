import React, { useState, useContext } from 'react';

import { questions } from '../helpers/questions';
import { GameStateContext } from '../helpers/contexts';

import '../App.css';

const Quiz = () => {
  const { score, setScore, setGameState } = useContext(GameStateContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const options = questions[currentQuestion].options;

  /* добавить таймер обратного отчета для ответа */

  const handleChoose = (option) => setSelectedOption(option);

  const handleNextQuestion = () => {
    setIsButtonClicked(true);

    const isCorrectAnswer = questions[currentQuestion].correctAnswer === selectedOption;
    /* добавить рандом для вопросов */
    const nextQuestionIndex = currentQuestion + 1;

    if (isCorrectAnswer) {
      setScore(score + 1);
    }
    if (nextQuestionIndex === questions.length) {
      setGameState('finished');
    } else {
      setCurrentQuestion(nextQuestionIndex);
      setSelectedOption('');
    }
  };

  const renderOptions = () => {
    return options.map((option) => (
      <button key={option} onClick={() => handleChoose(option)} className={selectedOption === option ? 'selected' : ''}>
        {option}
      </button>
    ));
  };

  const renderButtonLabel = () => {
    return currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question';
  };

  return (
    <div className="Quiz">
      <h1>{questions[currentQuestion].question}</h1>
      <div className="questions">{renderOptions()}</div>

      <button onClick={handleNextQuestion} id="nextQuestion" className={isButtonClicked ? 'button-clicked' : ''}>
        {renderButtonLabel()}
      </button>
    </div>
  );
};

export default Quiz;
