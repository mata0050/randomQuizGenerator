import React, { useState, useEffect } from 'react';

// CSS
import './User.css';

// calling api
import {
  getUserQuizResults,
} from '../../api/getUserQuizResults';


// Components
import UserScoreBoard from './UserScoreBoard';


const User = () => {
  const [results, setResults] = useState([]);
  

  useEffect(() => {
    getUserQuizResults(setResults);
  }, []);

  return (
    <>
      <UserScoreBoard results={results} />
    </>
  );
};

export default User;
