import React from "react";
import "../../styles/pages/Auth/EmailSent.scss";
import Logo from "../../components/Common/Logo";

type Props = {};

const EmailSent = (props: Props) => {
  return (
    <div className="email-sent">
      <div className="email-sent-wrapper">
        <div className="email-sent-heading">
          <Logo />
          <div className="email-sent-title">Email Sent</div>
        </div>
        <div className="description">
          An email has been sent to your email address with instructions on how
          to reset your password. If you don’t receive it within a few minutes,
          please check that you used the e-mail address for your Epic Games
          account and try again or contact us for help.
        </div>
        <div className="email-sent-content">
          <div className="email-sent-form">
            <a href="/login" className="sign-in-btn">
              Sign In
            </a>
            <a href="/" className="back-home-link">
              Back to home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSent;
