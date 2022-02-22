
// CSS
import './User.css';

const UserScoreBoard = ({ results }) => {

  return (
    <div className='table '>
      <h2>My Quiz Results</h2>
      <table className='box-shadow results'>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Total Questions</th>
          <th>Percentage</th>
        </tr>

        {results.map((result) => (
          <tr>
            <td>{result.name}</td>
            <td>{result.score}</td>
            <td>{result.total_questions}</td>
            <td>
              {Math.round((result.score / result.total_questions) * 100)} %
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default UserScoreBoard;
