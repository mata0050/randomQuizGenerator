import React, { useState } from "react";
import Alert from "../ErrorMessage/Alert";
import { Navigate } from "react-router-dom";
import './Login.css';

// utils
import api from "../../utils/api";

function Login({ setUserToken }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
