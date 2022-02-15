import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Components/HomePage/Home';
import User from './Components/User/User';
import Quiz from './Components/Quiz/Quiz';
import Score from './Components/FinalScore/Score';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="user" element={<User/>}></Route>
        <Route path="quiz" element={<Quiz/>}></Route>
        <Route path="score" element={<Score/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="signup" element={<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
