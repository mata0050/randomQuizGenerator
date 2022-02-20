import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// CSS
import './Quiz.css';
import './Questions.css';

// api call
import addScore from '../../api/addScore';

const Questions = ({ currentQuiz, score, setScore, setHideStartQuiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState([currentQuiz[0]]);
  const [arrlength, setArrLength] = useState(1);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [answeredQuestion, setAnswersQuestion] = useState([]);
  const navigate = useNavigate();

  // go to the nextQuestion
  const nextQuestion = () => {
    const total_questions = currentQuiz.length;
    if (currentQuiz.length === arrlength) {
      // after last quiz add score to DB
      console.log(currentQuiz)
      addScore(currentQuiz, score, total_questions);
      navigate('/score');
    }

    if (questionNumber !== currentQuiz.length) {
      setQuestionNumber((prev) => prev + 1);
    }

    setArrLength((prev) => prev + 1);
    setCurrentQuestion([currentQuiz[arrlength]]);
  };

  // check if answer is correct
  const answer = (data) => {
    // check if question has been answered
    if (answeredQuestion.includes(data.question)) {
      return toast.error('Your already answered this questions');
    }
    setAnswersQuestion((prev) => [...prev, data.question]);

    if (data.selectedAnswers === data.correct_answer) {
      setScore((prev) => prev + 1);
      toast(`Your answer ${data.answer} is correct`);
    } else {
      toast.error(
        `Incorrect Answer, this was the correct answer: 
          ${data.correct_answer} 
      Explanation
         ${data.explanation}`
      );
    }
  };

  return (
    <div className='questions'>
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
                  question: question.question,
                  selectedAnswers: 'answer_a',
                  answer: question.answer_a,
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
                  question: question.question,
                  selectedAnswers: 'answer_b',
                  answer: question.answer_b,
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
                  question: question.question,
                  selectedAnswers: 'answer_c',
                  answer: question.answer_c,
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
                  question: question.question,
                  selectedAnswers: 'answer_d',
                  answer: question.answer_d,
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
        <button
          type='submit'
          className='btn btn-primary question-btn'
          onClick={() => setHideStartQuiz(true)}
        >
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
