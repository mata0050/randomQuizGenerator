import React from 'react';
import { Link } from 'react-router-dom';
import './Score.css';

function Score({ score, currentQuiz }) {
  return (
    <div className='score'>
      <div style={{ textAlign: 'center' }}>
        <h2>Final Score {`${score}/ ${currentQuiz.length}`}</h2>
        <h1>Percentage : {Math.round((score / currentQuiz.length) * 100)} %</h1>
      </div>

      <footer>
        <Link className='score-link' to='/quiz'>Take another quiz</Link>
        <Link className='score-link' to='/results'>Results</Link>
        <Link  className='score-link' to='/leaderboard'>Leader Board</Link>
      </footer>
    </div>
  );
}

export default Score;
