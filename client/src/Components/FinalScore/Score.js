import React from 'react';
import './Score.css';



function Score({ score, currentQuiz }) {


  return (
    <div className='score'>
      <div style={{'textAlign':'center'}}>
        <h2>Final Score {`${score}/ ${currentQuiz.length}`}</h2>
        <h1>
          Percentage : {Math.round((score / currentQuiz.length) * 100)} %
        </h1>
      </div>
    </div>
  );
}

export default Score;
