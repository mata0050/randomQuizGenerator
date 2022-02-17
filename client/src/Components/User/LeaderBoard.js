import React from 'react';

// Import CSS
import './User.css';
import './LeaderBoard.css';

const LeaderBoard = ({ allResults, allUsers }) => {
  return (
    <div className='table leader-board'>
      <h2>LeaderBoard</h2>
      <table className='leader-table box-shadow'>
        <tr>
          <th></th>
          <th className='text-center'>Total Questions Answered</th>
          <th>Points</th>
        </tr>
        {allResults.map((result) => (
          <tr>
            <td>
              {allUsers
                .filter((user) => user.id === result.user_id)
                .map((user) => (
                  <div className='user'>
                    {console.log(user)}
                    <img src={user.avatar} alt='' />
                    <span className='bold'>{`${user.first_name} ${user.last_name}`}</span>
                  </div>
                ))}
            </td>
            <td className='bold text-center'> {result.total_questions}</td>
            <td className='bold'>
              <i className='fa-solid fa-star' style={{ color: 'gold' }} />
              {Math.round(result.average_score)}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default LeaderBoard;
