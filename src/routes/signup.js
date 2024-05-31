import React, { useState } from "react";
import "./Signup.css"; // Import the CSS file

export default function Signup() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSignIn = (name) => {
    setUsername(name);
  };

  return (
    <div className={`signup-container ${isSignUp ? "right-panel-active" : ""}`}>
      <div className="signup-form-container signup-sign-in-container">
        <SignInForm onSignIn={handleSignIn} />
      </div>
      <div className="signup-form-container signup-sign-up-container">
        <SignUpForm />
      </div>
      <div className="signup-overlay-container">
        <Overlay toggleForm={toggleForm} username={username} />
      </div>
    </div>
  );
}
const SignInForm = ({ onSignIn }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the sign in logic,
    // for simplicity, just passing the username to the parent component
    onSignIn(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="signup-h1">Sign in</h1>
      <span className="signup-span">Sign in using Username</span>
      <label>
        <input 
          type="text" 
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <button className="signup-button signup-signin" type="submit">Sign In</button>
    </form>
  );
};

const SignUpForm = () => {
  return (
    <form action="#">
    </form>
  );
};

const Overlay = ({ toggleForm, username }) => {
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
        {username && (
          <p>Welcome back, {username}!</p>
        )}
      </div>
    </div>
  );
};
