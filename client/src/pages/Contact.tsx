import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pages/Contact.scss";

type Props = {};

const Contact = (props: Props) => {
  // State to track the length of the phone number input
  const [phoneLength, setPhoneLength] = useState(0);

  // Event handler for phone number input changes
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;
    const numericValue = currentValue.replace(/\D/g, "");
    event.target.value = numericValue;
    setPhoneLength(numericValue.length);
  };

  return (
    <div className="contact-page">
      <div className="heading">
        <div className="title">Contact</div>
      </div>
      <div className="content-form">
        <div className="contact-form">
          <div className="heading">
            <div className="head-title">Let's talk</div>
            <div className="head-content">
              Get in touch with us using the enquiry form or contact details
              below.
            </div>
          </div>
          <div className="fullname-phone">
            <div className="fullname">
              <label>Full Name</label>
              <input type="text" id="name" />
            </div>
            <div className="phone">
              <label>Phone Number</label>
              <div className="phone-input">
                <input
                  type="tel"
                  id="phone"
                  maxLength={10} // Ensure the input accepts a maximum of 10 characters
                  onChange={handlePhoneChange} // Bind the event handler
                />
                <div className="length-field">
                  <span>{10 - phoneLength}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="email">
            <label>Email</label>
            <input type="email" id="email" />
          </div>
          <div className="message">
            <label>Message</label>
            <textarea id="message"></textarea>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="receive-message" />
            <label htmlFor="receive-message">
              I agree to receive other communication messages.
            </label>
          </div>
          <button type="submit" className="submit-btn">
            Send
          </button>
        </div>
        <div className="contact-information">
          <div className="banner"></div>
          <div className="contact-in4">
            <div className="email">
              <div className="mail-icon">
                <span className="formkit--email"></span>
              </div>
              <div className="text">
                <div className="label">Email</div>
                <div className="email-txt">datdoanofficial@gmail.com</div>
              </div>
            </div>
            <div className="phone">
              <div className="phone-icon">
                <span className="ph--phone-light"></span>
              </div>
              <div className="text">
                <div className="label">Phone Number</div>
                <div className="phone-txt">(+84) 916 709 786</div>
              </div>
            </div>
            <div className="address">
              <div className="address-icon">
                <span className="ph--building-office"></span>
              </div>
              <div className="text">
                <div className="label">Address</div>
                <div className="address-txt">Unknown, Ho Chi Minh City</div>
              </div>
            </div>
            <div className="social">
              <div className="social-icon">
                <span className="solar--global-outline"></span>
              </div>
              <div className="text">
                <div className="label">Social</div>
                <div className="social-item">
                  <ul>
                    <li>
                      <Link to="">LinkedIn</Link>
                    </li>
                    <li>
                      <Link to="">Wechat</Link>
                    </li>
                    <li>
                      <Link to="">Instagram</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
