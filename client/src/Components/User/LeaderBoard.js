import React from 'react';

// Import CSS
import './User.css';
import './LeaderBoard.css';

const LeaderBoarder = ({ allResults, allUsers }) => {
  return (
    <div className='table'>
      <h2>LeaderBoard</h2>
      <table>
        {allResults.map((result) => (
          <tr>
            <td>
              {allUsers
                .filter((user) => user.id === result.user_id)
                .map((user) => (
                  <div className='user'>
                    <img src={user.avatar} alt='' />
                    <span className='bold'>{`${user.first_name} ${user.first_last}`}</span>
                  </div>
                ))}
            </td>
            <td className='bold'> {result.total_questions}</td>
            <td className='bold'>
              <i className='fa-solid fa-star' style={{color:'gold'}} />
              {Math.round(result.average_score)}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default LeaderBoarder;
