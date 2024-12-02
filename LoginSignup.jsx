import React, { useState } from 'react';
import './LoginSignup.css';
import email_icon from '../Assets/email.jpg';
import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';

export const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateInputs = () => {
    let valid = true;
    if (!email.includes("@")) {
      setEmailError("Email must contain @");
      valid = false;
    } else {
      setEmailError("");
    }
    if (password.length < 8 || !/\d/.test(password) || !/[A-Z]/.test(password)) {
      setPasswordError("Password must be at least 8 characters long and contain a number and an uppercase letter.");
      valid = false;
    } else {
      setPasswordError("");
    }
    return valid;
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email Id" value={email} onChange={(e) => setEmail(e.target.value)} />
          {emailError && <div className="error">{emailError}</div>}
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {passwordError && <div className="error">{passwordError}</div>}
        </div>
      </div>
      {action === "Sign Up" ? null : <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
      </div>
      <button className='but' onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default LoginSignup;
