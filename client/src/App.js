import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import Home from './Components/HomePage/Home';
import User from './Components/User/User';
import Quiz from './Components/Quiz/Quiz';
import Score from './Components/FinalScore/Score';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <Link to="user">User</Link>
        <Link to="quiz">Quiz</Link>
        <Link to="score">Score</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="user" element={<User/>}></Route>
        <Route path="quiz" element={<Quiz/>}></Route>
        <Route path="score" element={<Score/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
