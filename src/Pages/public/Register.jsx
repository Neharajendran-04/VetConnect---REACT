import React from "react";
import { Link } from "react-router-dom";
import { FaPaw } from "react-icons/fa";
import "./Register.css";

function Register() {
  return (
    <div className="register-page">
      <div className="register-card">
        <FaPaw className="register-icon" />

        <h1>Create Account</h1>
        <p>Join VetConnect and care for your pets</p>

        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />

          <button type="submit">Register</button>
        </form>

        <p className="register-login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;