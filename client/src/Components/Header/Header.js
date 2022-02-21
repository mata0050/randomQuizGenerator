import React from 'react';
import { NavLink } from 'react-router-dom';

// CSS
import './Header.css';

// Asset
import logo from '../../images/logo.png';

function Header({ userToken, setUserToken }) {
  // logout and remove token from localStorage
  const logout = () => {
    localStorage.removeItem('token');
    setUserToken(null);
  };
  return (
    <div className='header'>
      <img  src={logo} alt='Random Quiz' />
      <div className='menu'>
        <NavLink to='/'>
          <span>Home</span>
        </NavLink>

        {userToken !== null ? (
          <>
            <NavLink to='quiz'>
              <span>Start Quiz</span>
            </NavLink>
            <NavLink to='results'>
              <span>Results</span>
            </NavLink>
            <NavLink to='leaderboard'>
              <span>Leaderboard</span>
            </NavLink>

            <NavLink to='!#' onClick={logout}>
              <span className='button'>Logout</span>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to='login'>
              <span className='button'>Login</span>
            </NavLink>

            <NavLink to='signup'>
              <span className='button'> Signup</span>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
