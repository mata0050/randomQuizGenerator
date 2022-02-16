import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// utils
import api from '../../utils/api';

// CSS
import './Quiz.css';
import './Questions.css';

// Component
import Alert from '../ErrorMessage/Alert';

const Questions = ({ currentQuiz, score, setScore }) => {
  const [currentQuestion, setCurrentQuestion] = useState([currentQuiz[0]]);
  const [arrlength, setArrLength] = useState(1);
  const [error, setError] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [questionNumber, setQuestionNumber] = useState(1);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
        setCorrect(false);
      }, [2000]);
    }
  }, [error]);

  // go to the nextQuestion
  const nextQuestion = () => {
    if (currentQuiz.length === arrlength) {
      addScore();
      setRedirect(true);
    }

    if (questionNumber !== currentQuiz.length) {
      setQuestionNumber((prev) => prev + 1);
    }

    setArrLength((prev) => prev + 1);
    setCurrentQuestion([currentQuiz[arrlength]]);
    setCorrect(false);
    setError(false);
  };

  // check if answer is correct
  const answer = (data) => {
    if (data.selectedAnswers === data.correct_answer) {
      setScore((prev) => prev + 1);
      setCorrect(true);
    } else {
      setExplanation(data.explanation);
      setError(true);
    }
  };

  console.log(localStorage.getItem('userProfile'));

  // add Score
  const addScore = async () => {
    try {
      const { data } = await api.post('/api/score', {
        name: currentQuiz[0].language,
        user_id: localStorage.getItem('userProfile').id,
        score: score,
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (redirect) {
    return <Navigate to='/score' />;
  }

  return (
    <div className='questions'>
      {error && <Alert msg={explanation} alertType={'danger'} />}
      {correct && <Alert msg={explanation} alertType={'success'} />}
      <header>
        <h3>
          Question Number: <span>{questionNumber}</span>{' '}
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
            <p
              onClick={() =>
                answer({
                  selectedAnswers: 'answer_a',
                  correct_answer: question.correct_answer,
                  explanation: question.explanation,
                })
              }
            >
              {question.answer_a}
            </p>
            <p
              onClick={() =>
                answer({
                  selectedAnswers: 'answer_b',
                  correct_answer: question.correct_answer,
                  explanation: question.explanation,
                })
              }
            >
              {question.answer_b}
            </p>
            <p
              onClick={() =>
                answer({
                  selectedAnswers: 'answer_c',
                  correct_answer: question.correct_answer,
                  explanation: question.explanation,
                })
              }
            >
              {question.answer_c}
            </p>
            <p
              onClick={() =>
                answer({
                  selectedAnswers: 'answer_d',
                  correct_answer: question.correct_answer,
                  explanation: question.explanation,
                })
              }
            >
              {question.answer_d}
            </p>
          </div>
        </section>
      ))}

      <footer>
        <button type='submit' className='btn btn-primary question-btn'>
          Quit
        </button>
        <button
          type='submit'
          className='btn btn-primary question-btn'
          onClick={nextQuestion}
        >
          Next
        </button>
      </footer>
    </div>
  );
};

export default Questions;
