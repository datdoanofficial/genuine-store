import React, { useState } from "react";
import "../../styles/pages/Auth/Register.scss";
import Logo from "../../components/Common/Logo";

type Props = {};

const Register = (props: Props) => {
  const [termsChecked, setTermsChecked] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermsChecked(event.target.checked);
  };

  const isFormFilled =
    firstName !== "" &&
    lastName !== "" &&
    displayName !== "" &&
    email !== "" &&
    password !== "" &&
    true &&
    termsChecked;

  return (
    <div className="register">
      <div className="regis-wrapper">
        <div className="regis-heading">
          <Logo />
        </div>
        <div className="regis-content">
          <div className="regis-form">
            <div className="form-group name">
              <input
                type="text"
                id="first-name"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                id="last-name"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="display-name"
                placeholder="Display Name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </div>
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
              <div className="agree-terms">
                <input
                  type="checkbox"
                  id="terms-of-service"
                  checked={termsChecked}
                  onChange={handleTermsChange}
                />
                <label htmlFor="terms-of-service">
                  I have read and agree to the{" "}
                  <a href="/terms-of-service" className="terms-link">
                    terms of service
                  </a>
                </label>
              </div>
            </div>
            <button
              className={`continue-btn ${!isFormFilled ? "disabled" : ""}`}
            >
              continue
            </button>
            <a href="/privacy-policy" className="privacy-policy-link">
              Privacy Policy
            </a>
            <div className="sign-in-link">
              Already have an Next In account? <a href="/login">Sign In</a>
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

export default Register;
