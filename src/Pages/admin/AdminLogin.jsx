import React from "react";
import { Link } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import "./AdminLogin.css";

function AdminLogin() {
  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <Link to="/" className="admin-back-home">
          ← Back to Home
        </Link>

        <div className="admin-login-brand">
          <FaUserShield />
          <span>VetConnect</span>
        </div>

        <h1>Admin Login</h1>
        <p>Login to manage VetConnect</p>

        <form>
          <input
            type="email"
            placeholder="Admin Email Address"
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
          />

          <Link to={'/admin/dashboard'} type="submit">Login as Admin</Link>
        </form>

        <p className="admin-user-login">
          Not an admin? <Link to="/login">Login as Pet Owner</Link>
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;