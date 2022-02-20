import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import './Signup.css';

// api call
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

  // Register a User
  const onSubmit = (e) => {
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
    signUpUser(setUserToken, user);
  };

  if (localStorage.getItem('token')) {
    navigate('/quiz');
  }

  return (
    <div className='wrapper bg-white'>
      <div className=''>
        {' '}
        <h3>Signup</h3>{' '}
      </div>
      <div className='card-body'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            {/* <label htmlFor='firstName'> First Name</label> */}
            <input
              className='form-control name'
              placeholder='First Name'
              type='text'
              name='first_name'
              id='firstName'
              value={first_name}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            {/* <label htmlFor='lastName'> Last Name</label> */}
            <input
              className='form-control name'
              placeholder='Last Name'
              type='text'
              name='last_name'
              id='lastName'
              value={last_name}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            {/* <label htmlFor='email'> Email</label> */}
            <input
              className='form-control email'
              placeholder='Email Address'
              type='email'
              name='email'
              id='Email'
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            {/* <label htmlFor='password1'> Password</label> */}
            <input
              className='form-control password'
              placeholder='Password'
              type='password'
              name='password'
              id='password'
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            {/* <label htmlFor='password2'>Confirm Password</label> */}
            <input
              className='form-control password'
              placeholder='Confirm Password'
              type='password'
              name='password2'
              id='password2'
              value={password2}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary start-btn signup'>
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
