import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// utils
import api from '../../utils/api';

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
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/auth', formData);
      localStorage.setItem('token', data.token);
      localStorage.setItem('userProfile', JSON.stringify(data.userProfile));
      setUserToken(data.token);

      // Redirect after login to quiz page
      navigate('/quiz');
    } catch (error) {
      toast(error);
    }
  };

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
