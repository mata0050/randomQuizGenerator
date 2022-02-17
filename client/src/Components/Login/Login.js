<<<<<<< HEAD
import React, { useState } from "react";
import Alert from "../ErrorMessage/Alert";
import { Navigate } from "react-router-dom";
import './Login.css';

// utils
import api from "../../utils/api";
=======
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// api call
import loginUser from '../../api/loginUser';
>>>>>>> d445ebef94cfb0d997fc4b007b4c3395fc5244b7

function Login({ setUserToken }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
<<<<<<< HEAD
    try {
      const { data } = await api.post("/auth", formData);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userProfile", JSON.stringify(data.userProfile));
      setUserToken(data.token);
      setRedirect(true);
    } catch (error) {
      setError(true);
    }
  };

  // Redirect after login to quiz page
  if (redirect) {
    return <Navigate to="/quiz" />;
  }
  return (
    <div className="card">
      {error && (
        <Alert msg={"Login Error Please Try Again"} alertType={"danger"} />
      )}
      <div className="card-header"><h3>Login</h3></div>
      <div className="card-body">
=======
    loginUser(setUserToken, formData);
  };

  if (localStorage.getItem('token')) {
    navigate('/quiz');
  }
  return (
    <>
      <div>Login</div>
>>>>>>> d445ebef94cfb0d997fc4b007b4c3395fc5244b7
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email" >
            Email
          </label>
          <input className="form-control"
            type="text"
            value={email}
            id="email"
            name="email"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" >
            Password
          </label>
          <input className="form-control"
            type="password"
            value={password}
            id="password"
            name="password"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
        <button type="submit" className='btn btn-primary start-btn'>Login</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Login;
