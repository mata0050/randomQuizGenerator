<<<<<<< HEAD
import React, { useState } from "react";
import Alert from "../ErrorMessage/Alert";
import { Navigate } from "react-router-dom";
import "./Signup.css";

// utils
import api from "../../utils/api";
=======
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// api call
import signUpUser from '../../api/signUpUser';
>>>>>>> d445ebef94cfb0d997fc4b007b4c3395fc5244b7

function Signup({ setUserToken }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
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

<<<<<<< HEAD
    if (password === password2) {
      setError(true);
    }
    try {
      const { data } = await api.post("/register", user);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userProfile", JSON.stringify(data.userProfile));
      setUserToken(data.token);
      setRedirect(true);
    } catch (error) {
      setError(true);
=======
    if (password !== password2) {
      return toast.error(`Passwords don't match`);
>>>>>>> d445ebef94cfb0d997fc4b007b4c3395fc5244b7
    }
    signUpUser(setUserToken, user);
  };

<<<<<<< HEAD
  // Redirect after login to quiz page
  if (redirect) {
    return <Navigate to="/quiz" />;
=======
  if (localStorage.getItem('token')) {
    navigate('/quiz');
>>>>>>> d445ebef94cfb0d997fc4b007b4c3395fc5244b7
  }

  return (
<<<<<<< HEAD
    <div className="card">
      {error && (
        <Alert msg={"Please try registering again"} alertType={"danger"} />
      )}
      <div className="card-header">
        {" "}
        <h3>Signup</h3>{" "}
      </div>
      <div className="card-body">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName"> First Name</label>
            <input
              className="form-control"
              type="text"
              name="first_name"
              id="firstName"
              value={first_name}
              onChange={onChange}
            />
          </div>
          <div className="form-group"> 
            <label htmlFor="lastName"> Last Name</label>
            <input className="form-control"
              type="text"
              name="last_name"
              id="lastName"
              value={last_name}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"> Email</label>
            <input className="form-control"
              type="email"
              name="email"
              id="Email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password1"> Password</label>
            <input className="form-control"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input className="form-control"
              type="password"
              name="password2"
              id="password2"
              value={password2}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className='btn btn-primary start-btn'>Login</button>
          </div>
        </form>
      </div>
    </div>
=======
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
>>>>>>> d445ebef94cfb0d997fc4b007b4c3395fc5244b7
  );
}

export default Signup;
