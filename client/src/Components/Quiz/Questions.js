import React, { useState } from 'react';
import './Quiz.css';
import './Questions.css';

const Questions = ({ currentQuiz, score, setScore }) => {
  const [currentQuestion, setCurrentQuestion] = useState([currentQuiz[0]]);
  const [arrlength, setArrLength] = useState(currentQuiz.length)

  console.log(currentQuiz[1])

  console.log(arrlength);
  

  return (
    <div className='questions'>
      <header>
        <h3>
          Question Number: <span>0</span>{' '}
        </h3>
        <h3>
          Score:
          <span>{score}</span>
        </h3>
      </header>

      {currentQuestion.map((question) => (
        <section>
          <div className='question'>
            <p>{question.question}</p>
          </div>

          <div className='answers'>
            <p>{question.answer_a}</p>
            <p>{question.answer_b}</p>
            <p>{question.answer_c}</p>
            <p>{question.answer_d}</p>
          </div>
        </section>
      ))}

      <footer>
        <button type='submit' className='btn btn-primary question-btn'>
          Quit
        </button>
        <button type='submit' className='btn btn-primary question-btn' onClick={()=> setCurrentQuestion()}>
          Next
        </button>
      </footer>
    </div>
  );
};

export default Questions;
