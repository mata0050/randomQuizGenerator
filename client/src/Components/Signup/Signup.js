import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import signUpUser from '../../api/signUpUser';

function Signup({ setUserToken }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: '',
  });
  const navigate = useNavigate();

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

    if (password !== password2) {
      return toast.error(`Passwords don't match`);
    }

    signUpUser(setUserToken, user)
  };

  if (localStorage.getItem('token')) {
    navigate('/quiz');
  }

  return (
    <>
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
