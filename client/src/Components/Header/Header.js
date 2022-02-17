import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header({ userToken, setUserToken }) {
  // logout and remove token from localStorage
  const logout = () => {
    localStorage.removeItem('token');
    setUserToken(null);
  };
  return (
    <div className='header'>
      <h2>LOGO</h2>
      <div className='menu'>
        <NavLink to='/'>
          <span>Home</span>
        </NavLink>

        {userToken !== null ? (
          <>
            <NavLink to='user'>
              <span>User</span>
            </NavLink>
            <NavLink to='quiz'>
              <span>Quiz</span>
            </NavLink>
            <NavLink to='score'>
              <span>Score</span>
            </NavLink>
            <NavLink to='' onClick={logout}>
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
