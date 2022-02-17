import React, { useState } from "react";
import Alert from "../ErrorMessage/Alert";
import { Navigate } from "react-router-dom";
import "./Signup.css";

// utils
import api from "../../utils/api";

function Signup({ setUserToken }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
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
      const { data } = await api.post("/register", user);
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
  );
}

export default Signup;
