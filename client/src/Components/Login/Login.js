import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// CSS
import './Login.css';

// api call
import loginUser from '../../api/loginUser';

function Login({ setUserToken }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Login a User
  const onSubmit = (e) => {
    e.preventDefault();

    loginUser(setUserToken, formData);
  };

  if (localStorage.getItem('token')) {
    navigate('/quiz');
  }
  return (
    <div className='card'>
      <div className='card-header'>
        <h3>Login</h3>
      </div>
      <div className='card-body'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              className='form-control'
              type='text'
              value={email}
              id='email'
              name='email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              className='form-control'
              type='password'
              value={password}
              id='password'
              name='password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary start-btn'>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
