import React, { useState } from 'react';
import './Quiz.css';

// Components
import Questions from './Questions';
import StartQuiz from './StartQuiz';

function Quiz({ currentQuiz, setCurrentQuiz, score, setScore }) {
  const [hideStartQuiz, setHideStartQuiz] = useState(true);

  return (
    <section>
      {hideStartQuiz ? (
        <StartQuiz
          setCurrentQuiz={setCurrentQuiz}
          setHideStartQuiz={setHideStartQuiz}
          hideStartQuiz={hideStartQuiz}
        />
      ) : (
        <Questions
          score={score}
          setScore={setScore}
          currentQuiz={currentQuiz}
        />
      )}
    </section>
  );
}

export default Quiz;
