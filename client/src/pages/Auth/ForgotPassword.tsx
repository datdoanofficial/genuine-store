import React, { useState } from "react";
import "../../styles/pages/Auth/ForgotPassword.scss";
import Logo from "../../components/Common/Logo";

type Props = {};

const ForgotPassword = (props: Props) => {
  const [email, setEmail] = useState("");

  const isFormFilled = email !== "";

  return (
    <div className="forgot-pwd">
      <div className="forgot-pwd-wrapper">
        <div className="forgot-pwd-heading">
          <Logo />
        </div>
        <div className="description">
          Please fill in the email that you used to register. You will be sent
          an email with instructions on how to reset your password.
        </div>
        <div className="forgot-pwd-content">
          <div className="forgot-pwd-form">
            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              className={`continue-btn ${!isFormFilled ? "disabled" : ""}`}
            >
              Continue
            </button>
            <div className="sign-in-link">
              Remember your password? <a href="/login">Sign In</a>
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

export default ForgotPassword;
