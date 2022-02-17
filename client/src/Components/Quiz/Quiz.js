import React, { useState, useEffect } from 'react';

// CSS
import './Quiz.css';

// Components
import Questions from './Questions';
import StartQuiz from './StartQuiz';

function Quiz({ currentQuiz, setCurrentQuiz, score, setScore }) {
  const [hideStartQuiz, setHideStartQuiz] = useState(true);

  useEffect(() => {
    if (hideStartQuiz) {
      setScore(0);
      console.log(score);
    }
  }, [hideStartQuiz, setScore, score]);

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
