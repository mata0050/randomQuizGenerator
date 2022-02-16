import React, { useState } from 'react';
import Alert from '../ErrorMessage/Alert';
import { Navigate } from 'react-router-dom';

// utils
import api from '../../utils/api';

function Login({ setUserToken}) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const { email, password } = formData;

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  // Login a User
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/auth', formData);
      localStorage.setItem('token', data.token);
      localStorage.setItem('userProfile', JSON.stringify(data.userProfile));
      setUserToken(data.token)
      setRedirect(true);
    } catch (error) {
      setError(true);
    }
  };

  // Redirect after login to quiz page
  if (redirect) {
    return <Navigate to='/quiz' />;
  }
  return (
    <>
      {error && (
        <Alert msg={'Login Error Please Try Again'} alertType={'danger'} />
      )}
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
