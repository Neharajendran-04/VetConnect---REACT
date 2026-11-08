import React from "react";
import { Link } from "react-router-dom";
import {
  FaPaw,
  FaHome,
  FaUserMd,
  FaCalendarAlt,
  FaUser,
  FaSignOutAlt,
  FaBell,
  FaSearch,
  FaCalendarCheck,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaEllipsisH,
} from "react-icons/fa";

import "./MyAppointments.css";

const appointments = [
  {
    id: 1,
    doctor: "Dr. Emily Carter",
    specialty: "Veterinary Surgeon",
    pet: "Max",
    date: "Nov 12, 2026",
    time: "10:30 AM",
    clinic: "VetConnect Clinic",
    status: "Upcoming",
  },
  {
    id: 2,
    doctor: "Dr. Michael Roberts",
    specialty: "Pet Dermatologist",
    pet: "Bella",
    date: "Nov 15, 2026",
    time: "02:00 PM",
    clinic: "Paws & Care Clinic",
    status: "Pending",
  },
  {
    id: 3,
    doctor: "Dr. Sarah Wilson",
    specialty: "Veterinary Dentist",
    pet: "Charlie",
    date: "Oct 28, 2026",
    time: "11:00 AM",
    clinic: "Happy Pets Center",
    status: "Completed",
  },
  {
    id: 4,
    doctor: "Dr. James Anderson",
    specialty: "General Veterinarian",
    pet: "Luna",
    date: "Oct 20, 2026",
    time: "04:30 PM",
    clinic: "VetConnect Clinic",
    status: "Cancelled",
  },
];

function MyAppointments() {
  return (
    <div className="vc-appointments-page">
      <aside className="vc-appointments-sidebar">
        <Link to="/user/dashboard" className="vc-appointments-logo">
          <FaPaw />
        </Link>

        <nav className="vc-appointments-nav">
          <Link to="/user/dashboard" title="Dashboard">
            <FaHome />
          </Link>

          <Link to="/user/find-vet" title="Find Veterinarian">
            <FaUserMd />
          </Link>

          <Link
            to="/user/appointments"
            className="active"
            title="Appointments"
          >
            <FaCalendarAlt />
          </Link>

          <Link to="/user/profile" title="Profile">
            <FaUser />
          </Link>
        </nav>

        <Link to="/login" className="vc-appointments-logout" title="Logout">
          <FaSignOutAlt />
        </Link>
      </aside>

      <main className="vc-appointments-main">
        <header className="vc-appointments-header">
          <div>
            <p className="vc-appointments-eyebrow">PET CARE MANAGEMENT</p>
            <h1>My Appointments</h1>
            <p className="vc-appointments-subtitle">
              Keep track of your pets’ veterinary visits.
            </p>
          </div>

          <div className="vc-appointments-header-right">
            <button className="vc-appointments-notification">
              <FaBell />
              <span></span>
            </button>

            <div className="vc-appointments-user">
              <div className="vc-appointments-avatar">P</div>
              <div>
                <strong>Pet Parent</strong>
                <span>Pet Owner</span>
              </div>
            </div>
          </div>
        </header>

        <section className="vc-appointments-summary">
          <div className="vc-appointment-summary-card">
            <div className="vc-summary-icon teal">
              <FaCalendarCheck />
            </div>
            <div>
              <p>Total Appointments</p>
              <h2>12</h2>
            </div>
          </div>

          <div className="vc-appointment-summary-card">
            <div className="vc-summary-icon blue">
              <FaClock />
            </div>
            <div>
              <p>Upcoming</p>
              <h2>3</h2>
            </div>
          </div>

          <div className="vc-appointment-summary-card">
            <div className="vc-summary-icon green">
              <FaCheckCircle />
            </div>
            <div>
              <p>Completed</p>
              <h2>8</h2>
            </div>
          </div>

          <div className="vc-appointment-summary-card">
            <div className="vc-summary-icon red">
              <FaTimesCircle />
            </div>
            <div>
              <p>Cancelled</p>
              <h2>1</h2>
            </div>
          </div>
        </section>

        <section className="vc-appointments-content">
          <div className="vc-appointments-section-header">
            <div>
              <h2>Appointment History</h2>
              <p>View and manage your veterinary appointments.</p>
            </div>

            <Link
              to="/user/appointments/book"
              className="vc-appointments-book-btn"
            >
              + Book Appointment
            </Link>
          </div>

          <div className="vc-appointments-toolbar">
            <div className="vc-appointments-tabs">
              <button className="active">All</button>
              <button>Upcoming</button>
              <button>Completed</button>
              <button>Cancelled</button>
            </div>

            <div className="vc-appointments-search">
              <FaSearch />
              <input type="text" placeholder="Search appointments..." />
            </div>
          </div>

          <div className="vc-appointments-table-wrapper">
            <table className="vc-appointments-table">
              <thead>
                <tr>
                  <th>Veterinarian</th>
                  <th>Pet</th>
                  <th>Date & Time</th>
                  <th>Clinic</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td>
                      <div className="vc-appointment-doctor">
                        <div className="vc-appointment-doctor-avatar">
                          <FaUserMd />
                        </div>

                        <div>
                          <strong>{appointment.doctor}</strong>
                          <span>{appointment.specialty}</span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <span className="vc-appointment-pet">
                        <FaPaw />
                        {appointment.pet}
                      </span>
                    </td>

                    <td>
                      <strong className="vc-appointment-date">
                        {appointment.date}
                      </strong>
                      <span className="vc-appointment-time">
                        {appointment.time}
                      </span>
                    </td>

                    <td>{appointment.clinic}</td>

                    <td>
                      <span
                        className={`vc-appointment-status ${appointment.status.toLowerCase()}`}
                      >
                        {appointment.status}
                      </span>
                    </td>

                    <td>
                      <button className="vc-appointment-action">
                        <FaEllipsisH />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="vc-appointments-table-footer">
            <span>Showing 4 of 12 appointments</span>

            <div className="vc-appointments-pagination">
              <button disabled>Previous</button>
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>Next</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MyAppointments;