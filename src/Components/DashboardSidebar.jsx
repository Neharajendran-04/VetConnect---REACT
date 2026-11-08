import React from 'react'
import './DashboardSidebar.css'
import { FaPaw, FaHome, FaUserMd, FaCalendarAlt, FaUser, FaSignOutAlt, FaHeartbeat } from "react-icons/fa";
import { Link } from 'react-router-dom'

function DashboardSidebar() {
  return (
    <aside className="vc-sidebar">
      <Link to="/user/dashboard" className="vc-sidebar-logo" title="VetConnect">
        <FaPaw />
      </Link>

      <nav className="vc-sidebar-nav">
        <Link to="/user/dashboard" className="vc-nav-icon active" title="Dashboard">
          <FaHome />
        </Link>

        <Link
          to="/user/find-vet"
          className="vc-nav-icon"
          title="Find Veterinarian"
        >
          <FaUserMd />
        </Link>

        <Link
          to="/user/appointments"
          className="vc-nav-icon"
          title="Appointments"
        >
          <FaCalendarAlt />
        </Link>
        <Link to="/user/pets" className="vc-nav-icon" title='My Pets'>
          <FaPaw />

        </Link>
        <Link to="/user/medical-records" className='vc-nav-icon' title='Medical-Records'>
          <FaHeartbeat />
        </Link>

        <Link to="/user/profile" className="vc-nav-icon" title="Profile">
          <FaUser />
        </Link>
      </nav>

      <Link to="/login" className="vc-nav-icon vc-logout" title="Logout">
        <FaSignOutAlt />
      </Link>
    </aside>
  )
}

export default DashboardSidebar
