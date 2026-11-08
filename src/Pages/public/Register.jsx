import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPaw } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { checkEmailApi, registerApi } from "../../services/apiServices";
import "./Register.css";


function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState(
    { fullname: "", 
       email: "",
      phone: "", 
      password: "",
      confirmPassword: "" 
    })

  const addUser = async (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      alert("Password Mismatch. Please try again.")
      return
    }
    const existingUser = await checkEmailApi(user.email)
    if(existingUser.data.length > 0){
      alert('You have already registered. Please Login')
      return
    } 
      const newUser = {
        fullname: user.fullname,
        email: user.email,
        phone: user.phone,
        password: user.password
      }
      try {
        const response = await registerApi(newUser)
        if (response.status === 201) {
          alert("Account created successfully!")
          navigate('/login')

        }
      } catch (error) {
        alert("Registration failed. Please try again.")
      }
  }

  return (
    <div className="register-page">
      <div className="register-card">
        <FaPaw className="register-icon" />

        <h1>Create Account</h1>
        <p>Join VetConnect and care for your pets</p>

        <form onSubmit={addUser}>
          <input value={user.fullname} onChange={e => setUser({ ...user, fullname: e.target.value })} type="text" placeholder="Full Name" required />
          <input value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} type="email" placeholder="Email Address" required />
          <input value={user.phone} onChange={e => setUser({ ...user, phone: e.target.value })} type="tel" placeholder="Phone Number" required />
          <input value={user.password} onChange={e => setUser({ ...user, password: e.target.value })}   minLength={8} type="password" placeholder="Password" required />
          <input value={user.confirmPassword} onChange={e => setUser({ ...user, confirmPassword: e.target.value })}   minLength={8} type="password" placeholder="Confirm Password" required />

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