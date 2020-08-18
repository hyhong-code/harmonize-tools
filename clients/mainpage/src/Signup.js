import React from "react";
import { Link, useHistory } from "react-router-dom";

import Logo from "./assets/logo.png";
import "./Login.scss";

const Signup = () => {
  const history = useHistory();
  return (
    <div className="login-page">
      <div className="brand" onClick={() => history.push("/")}>
        <img src={Logo} alt="logo" width="100%" />
        <h2>Harmonize</h2>
      </div>
      <form className="login-form">
        <h1>Sign Up</h1>
        <small>Sign up with email and password or social accounts.</small>
        <div className="form-group">
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Confirm Password" />
        </div>
        <div className="form-group">
          <button type="submit">Sign up</button>
        </div>
        <div className="form-group">
          <hr />
        </div>
        <div className="form-group">
          <button type="button" className="button-linkedin">
            <i class="fab fa-linkedin-in"></i> Sign in with LinkedIn
          </button>
        </div>
        <div className="form-group">
          <button type="button" className="button-google">
            <i class="fab fa-facebook"></i> Sign in with Facebook
          </button>
        </div>
        <div className="form-group">
          <button type="button" className="button-twitter">
            <i class="fab fa-twitter"></i> Sign in with Twitter
          </button>
        </div>
        <div className="form-group">
          <button type="button" className="button-google">
            <i class="fab fa-google"></i> Sign in with Google
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
