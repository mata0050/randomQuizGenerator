import React, { useState } from 'react';
import Alert from '../ErrorMessage/Alert';
import { Navigate } from 'react-router-dom';

// utils
import api from '../../utils/api';

function Signup({ setUserToken }) {

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: '',
  });
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const { first_name, last_name, email, password, password2 } = formData;

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Login a User
  const onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      first_name,
      last_name,
      password,
      email,
    };

    if (password === password2) {
      setError(true);
    }
    try {
      const { data } = await api.post('/register', user);
      localStorage.setItem('token', data.token);
      localStorage.setItem('userProfile', JSON.stringify(data.userProfile));
      setUserToken(data.token);
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
        <Alert msg={'Please try registering again'} alertType={'danger'} />
      )}
      <div>Signup</div>
      <form onSubmit={onSubmit}>
        <label htmlFor='firstName'> First Name</label>
        <input
          type='text'
          name='first_name'
          id='firstName'
          value={first_name}
          onChange={onChange}
        />
        <label htmlFor='lastName'> Last Name</label>
        <input
          type='text'
          name='last_name'
          id='lastName'
          value={last_name}
          onChange={onChange}
        />
        <label htmlFor='email'> Email</label>
        <input
          type='email'
          name='email'
          id='Email'
          value={email}
          onChange={onChange}
        />
        <label htmlFor='password1'> Password</label>
        <input
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={onChange}
        />
        <label htmlFor='password2'>Confirm Password</label>
        <input
          type='password'
          name='password2'
          id='password2'
          value={password2}
          onChange={onChange}
        />

        <button type='submit'>Login</button>
      </form>
    </>
  );
}

export default Signup;
