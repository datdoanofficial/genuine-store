import React, { useState } from "react";
import "../../styles/pages/Auth/Login.scss";
import Logo from "../../components/Common/Logo";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormFilled = email !== "" && password !== "";

  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-heading">
          <Logo />
          <div className="login-title">Login</div>
        </div>
        <div className="login-content">
          <div className="login-form">
            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="featured">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <div className="forgot-password">
                <a href="/login/forgot-password">Forgot Password?</a>
              </div>
            </div>
            <button className={`login-btn ${!isFormFilled ? "disabled" : ""}`}>
              Login
            </button>
            <a href="/privacy-policy" className="privacy-policy-link">
              Privacy Policy
            </a>
            <div className="sign-up-link">
              Do you have an Next In account? <a href="/register">Sign Up</a>
            </div>
            <a href="/" className="back-home-link">
              Back to home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
