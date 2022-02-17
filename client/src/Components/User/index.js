import React, { useState, useEffect } from 'react';

// CSS
import './User.css';

// calling api
import {
  getUserQuizResults,
  getAllUserQuizResults,
} from '../../api/getUserQuizResults';
import getAllUsers from '../../api/getAllUsers';

// Components
import UserScoreBoard from './UserScoreBoard';
import LeaderBoard from './LeaderBoard';

const User = () => {
  const [results, setResults] = useState([]);
  const [allResults, setAllResults] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getUserQuizResults(setResults);
    getAllUserQuizResults(setAllResults);
    getAllUsers(setAllUsers);
  }, []);

  return (
    <>
      <UserScoreBoard results={results} />
      <LeaderBoard allResults={allResults} allUsers={allUsers} />
    </>
  );
};

export default User;
