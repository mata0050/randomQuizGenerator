import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// CSS
import './Quiz.css';
import './Questions.css';

// api call
import addScore from '../../api/addScore';

const Questions = ({ currentQuiz, score, setScore, setHideStartQuiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState(currentQuiz[0]);
  const [arrlength, setArrLength] = useState(1);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [answeredQuestion, setAnswersQuestion] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [explanation, setExplanation] = useState('');
  const [allSelected, setAllSelected] = useState(false);
  const navigate = useNavigate();



  // go to the nextQuestion
  const nextQuestion = () => {
    setCorrectAnswer(null);
    setExplanation('');
    setAllSelected(false);
    const total_questions = currentQuiz.length;
    if (currentQuiz.length === arrlength) {
      // after last quiz add score to DB
      console.log(currentQuiz);
      addScore(currentQuiz, score, total_questions);
      navigate('/score');
    }

    if (questionNumber !== currentQuiz.length) {
      setQuestionNumber((prev) => prev + 1);
    }

    setArrLength((prev) => prev + 1);
    setCurrentQuestion(currentQuiz[arrlength]);
  };

  // check if answer is correct
  const answer = (data) => {
    // check if question has been answered
    if (answeredQuestion.includes(data.question)) {
      return toast.error('Your already answered this questions');
    }
    setAnswersQuestion((prev) => [...prev, data.question]);
    setCorrectAnswer(data.correct_answer);
    setAllSelected(true);
    setCurrentQuestion({...currentQuestion, answered: true})
    console.log(currentQuestion)

    if (data.selectedAnswers === data.correct_answer) {
      setScore((prev) => prev + 1);
      setExplanation(data.explanation);
      // toast(`Your answer ${data.answer} is correct`);
    } else {
      setExplanation(data.explanation);
      // toast.error(
      //   `Incorrect Answer, this was the correct answer:
      //     ${data.correct_answer} `
      // );
    }
  };

  console.log(correctAnswer);
  console.log(answeredQuestion);

  const styleCorrect = {
    background: 'green',
    color: 'white',
  };

  const styleDefault = {
    // background: 'white',
  };
  const styleRed = {
    background: 'red',
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

      {explanation && <p className='explanation'>{explanation}</p>}

      {(Object.keys(currentQuestion).length !== 0) &&
        <section>
          <div className='question'>
            <p>{currentQuestion.question}</p>
          </div>

          <div className='answers'>
            {currentQuestion.answer_a && (
              <p
                style={
                  correctAnswer === 'answer_a' ? styleCorrect : currentQuestion.answered ? styleRed : styleDefault
                }
                onClick={() =>
                  answer({
                    question: currentQuestion.question,
                    selectedAnswers: 'answer_a',
                    answer: currentQuestion.answer_a,
                    correct_answer: currentQuestion.correct_answer,
                    explanation: currentQuestion.explanation,
                  })
                }
              >
                {currentQuestion.answer_a}
              </p>
            )}

            {currentQuestion.answer_b && (
              <p
                style={
                  correctAnswer === 'answer_b' ? styleCorrect : currentQuestion.answered ? styleRed : styleDefault
                }
                onClick={() =>
                  answer({
                    question: currentQuestion.question,
                    selectedAnswers: 'answer_b',
                    answer: currentQuestion.answer_b,
                    correct_answer: currentQuestion.correct_answer,
                    explanation: currentQuestion.explanation,
                  })
                }
              >
                {currentQuestion.answer_b}
              </p>
            )}

            {currentQuestion.answer_c && (
              <p
                style={
                  correctAnswer === 'answer_c'  ? styleCorrect : currentQuestion.answered ? styleRed : styleDefault
                }
                onClick={() =>
                  answer({
                    question: currentQuestion.question,
                    selectedAnswers: 'answer_c',
                    answer: currentQuestion.answer_c,
                    correct_answer: currentQuestion.correct_answer,
                    explanation: currentQuestion.explanation,
                  })
                }
              >
                {currentQuestion.answer_c}
              </p>
            )}

            {currentQuestion.answer_d && (
              <p
                style={
                  correctAnswer === 'answer_d'  ? styleCorrect : currentQuestion.answered ? styleRed : styleDefault
                }
                onClick={() =>
                  answer({
                    question: currentQuestion.question,
                    selectedAnswers: 'answer_d',
                    answer: currentQuestion.answer_d,
                    correct_answer: currentQuestion.correct_answer,
                    explanation: currentQuestion.explanation,
                  })
                }
              >
                {currentQuestion.answer_d}
              </p>
            )}
          </div>
        </section>
      }

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
          Submit
        </button>
      </footer>
    </div>
  );
};

export default Questions;
