import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPaw } from "react-icons/fa";
import { loginApi } from "../../services/apiServices";
import "./Login.css";

function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault();
   try{
    
    const response = await loginApi({ email, password })
    console.log(response.data);
    // check whether response contains matching user
    if (response.data.length > 0) {
      const loggedInUser = response.data[0]
      // remember the logged in user 
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify(loggedInUser)
      );
      alert('Login successful')
      navigate('/user/dashboard')
    }
    else {
      alert('Invalid email or password')
    }
  }catch(error){
     alert('Something went wrong. Please try again.');
  }

  }
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

        <form onSubmit={handleLogin}>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />

          <button type="submit">Login</button>
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