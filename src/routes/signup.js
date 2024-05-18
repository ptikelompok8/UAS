import React, { useState } from "react";
import "./Signup.css"; // Import the CSS file

export default function Signup() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={`signup-container ${isSignUp ? "right-panel-active" : ""}`}>
      <div className="signup-form-container signup-sign-in-container">
        <SignInForm />
      </div>
      <div className="signup-form-container signup-sign-up-container">
        <SignUpForm />
      </div>
      <div className="signup-overlay-container">
        <Overlay toggleForm={toggleForm} />
      </div>
    </div>
  );
}

const SignInForm = () => {
  return (
    <form action="#">
      <h1 className="signup-h1">Sign in</h1>
      <span className="signup-span">Sign in using E-Mail Address</span>
      <label>
        <input type="email" placeholder="Email" />
      </label>
      <label>
        <input type="password" placeholder="Password" />
      </label>
      <a className="signup-a" href="#">Forgot your password?</a>
      <button className="signup-button signup-signin">Sign In</button>
    </form>
  );
};

const SignUpForm = () => {
  return (
    <form action="#">
      <h1 className="signup-h1">Sign Up</h1>
      <span className="signup-span">Use your Email for registration</span>
      <label>
        <input type="text" placeholder="Name" />
      </label>
      <label>
        <input type="email" placeholder="Email" />
      </label>
      <label>
        <input type="password" placeholder="Password" />
      </label>
      <button className="signup-button signup-signup" style={{ marginTop: "9px" }}>
        Sign Up
      </button>
    </form>
  );
};

const Overlay = ({ toggleForm }) => {
  return (
    <div className="signup-overlay">
      <div className="signup-overlay-panel signup-overlay-left">
        <h1 className="signup-h1">Log in</h1>
        <p className="signup-p">Sign in here if you already have an account</p>
        <button className="signup-button signup-ghost mt-5" onClick={toggleForm}>
          Sign In
        </button>
      </div>
      <div className="signup-overlay-panel signup-overlay-right">
        <h1 className="signup-h1">Create Account!</h1>
        <p className="signup-p">Sign up if you still don't have an account ...</p>
        <button className="signup-button signup-ghost" onClick={toggleForm}>
          Sign Up
        </button>
      </div>
    </div>
  );
};
