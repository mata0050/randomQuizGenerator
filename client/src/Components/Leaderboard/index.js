import React, { useState, useEffect } from 'react';

// CSS
import './LeaderBoard';

// calling api
import {
  getAllUserQuizResults
} from '../../api/getUserQuizResults';
import getAllUsers from '../../api/getAllUsers';

// Components
import LeaderBoard from './LeaderBoard';

const Users = () => {
  const [allResults, setAllResults] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getAllUserQuizResults(setAllResults);
    getAllUsers(setAllUsers);
  }, []);

  return (
    <>
      <LeaderBoard allResults={allResults} allUsers={allUsers} />
    </>
  );
};

export default Users;