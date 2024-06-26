import React, { useState, useRef, useEffect } from "react";
import "../../styles/pages/Auth/VerifyEmail.scss";
import Logo from "../../components/Common/Logo";

type Props = {};

const VerifyEmail = (props: Props) => {
  const [codes, setCodes] = useState(["", "", "", "", "", ""]);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [wasOnceFilled, setWasOnceFilled] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null); // Track focused input
  const inputRefs = useRef<React.RefObject<HTMLInputElement>[]>([]);
  inputRefs.current = codes.map(
    (_, i) => inputRefs.current[i] ?? React.createRef()
  );

  const isFormFilled = codes.every((code) => code.length === 1);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    // Use setTimeout to ensure the cursor position is set after the input gains focus
    setTimeout(() => {
      const valueLength = event.target.value.length;
      event.target.setSelectionRange(valueLength, valueLength);
    }, 0);
  };

  const handleChange = (value: string, index: number) => {
    if (!hasInteracted) setHasInteracted(true);
    const newCodes = [...codes];
    newCodes[index] = value.slice(0, 1);
    setCodes(newCodes);
    if (value && index < codes.length - 1) {
      const nextInput = inputRefs.current[index + 1];
      if (nextInput && nextInput.current) {
        nextInput.current.focus();
      }
    }
    // Check if all fields are filled and update `wasOnceFilled`
    const allFilled = codes.every((code) => code.length > 0);
    if (allFilled) {
      setWasOnceFilled(true);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      e.key === "Backspace" &&
      index > 0 &&
      (!codes[index] || codes[index].length === 0)
    ) {
      // Focus on previous input when backspace is pressed and current input is empty
      const prevInput = inputRefs.current[index - 1];
      if (prevInput && prevInput.current) {
        prevInput.current.focus();
        // Set cursor position to the end of the input value
        const valueLength = prevInput.current.value.length;
        prevInput.current.setSelectionRange(valueLength, valueLength);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      // Focus on previous input when left arrow key is pressed
      const prevInput = inputRefs.current[index - 1];
      if (prevInput && prevInput.current) {
        prevInput.current.focus();
        // Set cursor position to the end of the input value
        const valueLength = prevInput.current.value.length;
        prevInput.current.setSelectionRange(valueLength, valueLength);
      }
    } else if (e.key === "ArrowRight" && index < codes.length - 1) {
      // Focus on next input when right arrow key is pressed
      const nextInput = inputRefs.current[index + 1];
      if (nextInput && nextInput.current) {
        nextInput.current.focus();
        // Set cursor position to the end of the input value
        const valueLength = nextInput.current.value.length;
        nextInput.current.setSelectionRange(valueLength, valueLength);
      }
    } else if (e.key >= "0" && e.key <= "9") {
      // Replace the current input with the key pressed and move to the next input
      e.preventDefault(); // Prevent the default input behavior
      const newCodes = [...codes];
      newCodes[index] = e.key; // Replace the current input with the key pressed
      setCodes(newCodes);

      // Move focus to the next input if not the last one
      if (index < codes.length - 1) {
        const nextInput = inputRefs.current[index + 1];
        if (nextInput && nextInput.current) {
          nextInput.current.focus();
        }
      }
    }
  };
  return (
    <div className="verify-email">
      <div className="verify-email-wrapper">
        <div className="verify-email-heading">
          <Logo />
          <div className="verify-email-title">Verify</div>
        </div>
        <div className="description">
          To complete account setup, you need to verify{" "}
          <span>datdoanofficial@gmail.com</span>. Please check your email then
          enter the security code below.
        </div>
        <div className="verify-email-content">
          <div className="verify-email-form">
            <div className="form-group">
              {codes.map((code, index) => (
                <input
                  key={index}
                  ref={inputRefs.current[index]}
                  type="tel"
                  id={`verification-code-${index}`}
                  value={code}
                  maxLength={1}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onFocus={handleFocus} // Attach the handleFocus function here
                  onBlur={() => setFocusedIndex(null)}
                  style={{
                    borderColor:
                      wasOnceFilled &&
                      !isFormFilled &&
                      codes.some((code) => code.length === 0)
                        ? "red" // Set border color to red if wasOnceFilled is true and not all fields are filled
                        : focusedIndex === index
                        ? "#c4c4c4"
                        : "#5a5a5a", // Use focus color or default otherwise
                  }}
                />
              ))}
            </div>
            <button className={`verify-btn ${!isFormFilled ? "disabled" : ""}`}>
              Verify Email
            </button>
            <div className="resend-request">
              Didn't receive the email? Check the spam folder.{" "}
              <a href="/register">Resend request</a> or{" "}
              <a href="/register">change email address</a>
            </div>
            <div className="sign-in-link">
              Already have an account? <a href="/login">Sign In</a>
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

export default VerifyEmail;
