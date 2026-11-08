import React from "react";
import { Link } from "react-router-dom";
import { FaPaw } from "react-icons/fa";
import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <Link to="/" className="back-home">
          ← Back to Home
        </Link>

        <div className="login-brand">
          <FaPaw />
          <span>VetConnect</span>
        </div>

        <h1>Welcome Back!</h1>
        <p>Login to continue caring for your pets.</p>

        <form>
          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
          />

          <Link className="btn" to={'/user/dashboard'} type="submit">Login</Link>
        </form>

        <p className="register-text">
          Don't have an account? <Link to="/register">Register</Link>
        </p>

        <div className="admin-login">
          <span>Are you an admin?</span>
          <Link to="/admin/dashboard">Login as Admin</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;