import React, { useState, useEffect } from "react";
import "../../styles/pages/Auth/BirthdayRequired.scss";

import Logo from "../../components/Common/Logo";

type Props = {};

const BirthdayRequired = (props: Props) => {
  const currentYear = new Date().getFullYear();
  const minYear = currentYear - 80; // For 80 years old
  const maxYear = currentYear - 13; // For 13 years old

  const validateYear = (inputYear: string): void => {
    const trimmedInputYear: string = inputYear.trim();
    const yearValue: number = parseInt(trimmedInputYear, 10);
    if (isNaN(yearValue)) {
      setYearError("Invalid year."); // Handle non-numeric input
    } else if (yearValue > maxYear) {
      setYearError("You must be older than 13 years.");
    } else if (yearValue < minYear) {
      setYearError("You must be under 80 years old.");
    } else {
      setYearError(""); // Clear error message if input is valid
    }
  };

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [yearError, setYearError] = useState("");
  const [daysInMonth, setDaysInMonth] = useState(31);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    const thirtyDaysMonths = ["Apr", "Jun", "Sep", "Nov"];
    if (month === "Feb") {
      const yearNum = parseInt(year, 10); // Parse year as number
      const isLeapYear =
        yearNum &&
        yearNum % 4 === 0 &&
        (yearNum % 100 !== 0 || yearNum % 400 === 0);
      setDaysInMonth(isLeapYear ? 29 : 28);
    } else if (thirtyDaysMonths.includes(month)) {
      setDaysInMonth(30);
    } else {
      setDaysInMonth(31);
    }
  }, [month, year]);

  const isFormFilled =
    day !== "" &&
    month !== "" &&
    year !== "" &&
    year.length === 4 &&
    yearError === "";

  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <div className="date-of-birth">
      <div className="birthday-wrapper">
        <div className="birthday-heading">
          <Logo />
        </div>
        <div className="birthday-content">
          <div className="main-form">
            <div className="birthday-form">
              <div className="form-group">
                <select
                  id="day"
                  value={day}
                  onChange={(e) => {
                    console.log("Day selected:", e.target.value); // Debugging line
                    setDay(e.target.value);
                  }}
                  aria-label="Day"
                >
                  <option value="" disabled hidden selected>
                    Day
                  </option>
                  {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
                    (day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className="form-group">
                <select
                  id="month"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  aria-label="Month"
                >
                  <option value="" disabled hidden selected>
                    Month
                  </option>
                  {months.map((m, index) => (
                    <option key={index} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="year"
                  placeholder="Year"
                  value={year}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Allow only numeric input and limit to 4 digits
                    if (/^\d{0,4}$/.test(value)) {
                      setYear(value);
                      validateYear(value); // Validate year on change
                    }
                  }}
                />
              </div>
            </div>
            {yearError && <div className="error-message">{yearError}</div>}
            <div className="answer-question">
              <div className="question" onClick={toggleAnswerVisibility}>
                Why do we need your date of birth?{" "}
                <span className="akar-icons--chevron-down icon"></span>
              </div>
              <div
                className={`answer ${isAnswerVisible ? "answer-visible" : ""}`}
              >
                We ask for your date of birth to help you have a safe and fun
                experience whatever your age.
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
              Have an Next In account? <a href="/login">Sign In</a>
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

export default BirthdayRequired;
