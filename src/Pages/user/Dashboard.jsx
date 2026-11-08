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
  FaArrowRight,
  FaClock,
  FaMapMarkerAlt,
  FaSearch,
  FaCalendarCheck,
} from "react-icons/fa";
import "./Dashboard.css";

const calendarDays = [
  null, null, null, null, null, null, 1,
  2, 3, 4, 5, 6, 7, 8,
  9, 10, 11, 12, 13, 14, 15,
  16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29,
  30,
];

function Dashboard() {
  return (
    <div className="vc-dashboard">
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
            to="/appointments"
            className="vc-nav-icon"
            title="Appointments"
          >
            <FaCalendarAlt />
          </Link>

          <Link to="/profile" className="vc-nav-icon" title="Profile">
            <FaUser />
          </Link>
        </nav>

        <Link to="/login" className="vc-nav-icon vc-logout" title="Logout">
          <FaSignOutAlt />
        </Link>
      </aside>

      <main className="vc-dashboard-main">
        <header className="vc-header">
          <div className="vc-header-title">
  <span className="vc-date">
    <FaCalendarAlt />
    Saturday, November 7, 2026
  </span>

  <h1>
    Welcome back, <span className="vc-pet-parent">Pet Parent!</span> 🐾
  </h1>

  <p>Here’s what’s happening with your pet’s care.</p>
</div>

          <div className="vc-header-right">
            <button className="vc-notification" aria-label="Notifications">
              <FaBell />
              <span />
            </button>

            <div className="vc-user-info">
              <div className="vc-avatar">P</div>
              <div>
                <strong>Pet Owner</strong>
                <small>My Account</small>
              </div>
            </div>
          </div>
        </header>

        <section className="vc-top-grid">
          <div className="vc-hero">
            <div className="vc-hero-content">
              <span className="vc-eyebrow">YOUR PET’S HEALTH MATTERS</span>
              <h2>Care that makes tails wag!</h2>
              <p>
                Find trusted veterinarians and give your furry friends
                the care they deserve.
              </p>

              <Link to="/user/find-vet" className="vc-button">
                Find a Veterinarian <FaArrowRight />
              </Link>
            </div>

            
          </div>

          <div className="vc-calendar card">
            <div className="vc-card-heading">
              <div>
                <h2>Appointment Calendar</h2>
                <p>November 2026</p>
              </div>
              <FaCalendarAlt className="vc-heading-icon" />
            </div>

            <div className="vc-calendar-grid">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                (day) => (
                  <span className="vc-weekday" key={day}>
                    {day}
                  </span>
                )
              )}

              {calendarDays.map((day, index) => (
                <span
                  key={index}
                  className={`vc-calendar-day ${
                    day === 7 ? "today" : ""
                  } ${day === 12 ? "has-appointment" : ""}`}
                >
                  {day || ""}
                </span>
              ))}
            </div>

            <div className="vc-calendar-legend">
              <span><i className="vc-dot-today" /> Today</span>
              <span><i className="vc-dot-appointment" /> Appointment</span>
            </div>

            <div className="vc-next-appointment">
              <div className="vc-next-icon">
                <FaCalendarCheck />
              </div>
              <div>
                <small>Next appointment</small>
                <strong>Nov 12 · 10:30 AM</strong>
              </div>
            </div>
          </div>
        </section>
        <section className="vc-bottom-grid">
          <div className="vc-appointment-card card">
            <div className="vc-section-heading">
              <div>
                <h2>Upcoming Appointment</h2>
                <p>Your next scheduled visit.</p>
              </div>

              <Link to="/appointments" className="vc-view-all">
                View all <FaArrowRight />
              </Link>
            </div>

            <div className="vc-appointment-details">
              <img src="/doctor.png" alt="Veterinarian" />

              <div className="vc-doctor-details">
                <h3>Dr. Emily Carter</h3>
                <p>Veterinarian · General Checkup</p>

                <div className="vc-appointment-meta">
                  <span><FaCalendarAlt /> Nov 12, 2026</span>
                  <span><FaClock /> 10:30 AM</span>
                  <span><FaMapMarkerAlt /> VetConnect Clinic</span>
                </div>
              </div>

              <span className="vc-status">Pending</span>
            </div>
          </div>

          <div className="vc-discover-card">
            <div className="vc-discover-icon">
              <FaUserMd />
            </div>

            <h2>Need a veterinarian?</h2>
            <p>
              Discover experienced veterinarians and book a visit
              for your furry friend.
            </p>

            <Link to="/find-veterinarian" className="vc-button">
              Explore Veterinarians <FaArrowRight />
            </Link>
          </div>
        </section>


        <section className="vc-quick-section">
          <div className="vc-section-heading">
            <div>
              <h2>Quick Actions</h2>
              <p>Manage your pet’s care with ease.</p>
            </div>
          </div>

          <div className="vc-quick-grid">
            <Link to="/find-veterinarian" className="vc-quick-card">
              <div className="vc-quick-icon teal">
                <FaSearch />
              </div>
              <div className="vc-quick-info">
                <h3>Find a Veterinarian</h3>
                <p>Explore trusted veterinarians.</p>
              </div>
              <FaArrowRight className="vc-quick-arrow" />
            </Link>

            <Link to="/appointments" className="vc-quick-card">
              <div className="vc-quick-icon blue">
                <FaCalendarCheck />
              </div>
              <div className="vc-quick-info">
                <h3>My Appointments</h3>
                <p>View and manage your bookings.</p>
              </div>
              <FaArrowRight className="vc-quick-arrow" />
            </Link>

            <Link to="/profile" className="vc-quick-card">
              <div className="vc-quick-icon peach">
                <FaUser />
              </div>
              <div className="vc-quick-info">
                <h3>My Profile</h3>
                <p>Update your account details.</p>
              </div>
              <FaArrowRight className="vc-quick-arrow" />
            </Link>
          </div>
        </section>

        
        <footer className="vc-dashboard-footer">
          © 2026 VetConnect. Caring for pets, together.
        </footer>
      </main>
    </div>
  );
}

export default Dashboard;
