import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import Logo from "./assets/logo.png";
import "./Login.scss";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const Signup = () => {
  const history = useHistory();
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { email, password, passwordConfirm } = form;

  const handleChange = async (evt) => {
    const { name, value } = evt.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 发送给注册页面
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (password === passwordConfirm) {
      const url =
        process.env.NODE_ENV === "production"
          ? "/api/v1/auth/register"
          : "http://localhost:5000/api/v1/auth/register";

      await axios.post(url, form, config);
    }
  };

  return (
    <div className="login-page">
      <div className="brand" onClick={() => history.push("/")}>
        <img src={Logo} alt="logo" width="100%" />
        <h2>Harmonize</h2>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <small>Sign up with email and password or social accounts.</small>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="passwordConfirm"
            onChange={handleChange}
            value={passwordConfirm}
          />
        </div>
        <div className="form-group">
          <button type="submit">Sign up</button>
        </div>
        <div className="form-group">
          <hr />
        </div>
        <div className="form-group">
          <button
            onClick={() => {
              window.location =
                process.env.NODE_ENV === "production"
                  ? "/api/v1/auth/google"
                  : "http://localhost:5000/api/v1/auth/google";
            }}
            type="button"
            className="button-google"
          >
            <i class="fab fa-google"></i> Sign in with Google
          </button>
        </div>
        <div className="form-group">
          <button
            onClick={() => {
              window.location =
                process.env.NODE_ENV === "production"
                  ? "/api/v1/auth/linkedin"
                  : "http://localhost:5000/api/v1/auth/linkedin";
            }}
            type="button"
            className="button-linkedin"
          >
            <i class="fab fa-linkedin-in"></i> Sign in with LinkedIn
          </button>
        </div>
        <div className="form-group">
          <button
            onClick={() => {
              window.location =
                process.env.NODE_ENV === "production"
                  ? "/api/v1/auth/facebook"
                  : "http://localhost:5000/api/v1/auth/facebook";
            }}
            type="button"
            className="button-google"
          >
            <i class="fab fa-facebook"></i> Sign in with Facebook
          </button>
        </div>
        <div className="form-group">
          <button
            onClick={() => {
              window.location =
                process.env.NODE_ENV === "production"
                  ? "/api/v1/auth/twitter"
                  : "http://localhost:5000/api/v1/auth/twitter";
            }}
            type="button"
            className="button-twitter"
          >
            <i class="fab fa-twitter"></i> Sign in with Twitter
          </button>
        </div>
        <small>
          Already have an account? <Link to="/login">Log in &rarr;</Link>
        </small>
      </form>
    </div>
  );
};

export default Signup;
