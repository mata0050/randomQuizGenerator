import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <>
      <div>Login</div>
      <form onSubmit={onSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          value={email}
          id='email'
          name='email'
          onChange={onChange}
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          value={password}
          id='password'
          name='password'
          onChange={onChange}
        />

        <button type='submit'>Login</button>
      </form>
    </>
  );
}

export default Login;
