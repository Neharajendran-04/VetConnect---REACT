
import React from "react";
import { Link } from "react-router-dom";
import {
  FaPaw, FaHome, FaUserMd, FaCalendarAlt, FaUser,
  FaSignOutAlt, FaBell, FaCamera, FaEnvelope,
  FaPhone, FaMapMarkerAlt, FaLock, FaEdit
} from "react-icons/fa";
import "./MyProfile.css";

function MyProfile() {
  return (
    <div className="vc-profile-layout">
      <aside className="vc-profile-sidebar">
        <div className="vc-profile-logo">
          <FaPaw />
          <span>VetConnect</span>
        </div>

        <p className="vc-profile-menu-title">MENU</p>

        <nav>
          <Link to="/user/dashboard"><FaHome /> Dashboard</Link>
          <Link to="/user/pets"><FaPaw /> My Pets</Link>
          <Link to="/user/find-vet"><FaUserMd /> Find Vet</Link>
          <Link to="/user/appointments"><FaCalendarAlt /> Appointments</Link>
          <Link to="/user/medical-records"><FaPaw /> Medical Records</Link>
          <Link to="/user/profile" className="active"><FaUser /> My Profile</Link>
        </nav>

        <Link to="/login" className="vc-profile-logout">
          <FaSignOutAlt /> Logout
        </Link>
      </aside>

      <main className="vc-profile-main">
        <header className="vc-profile-header">
          <div>
            <span>Pet Parent Portal</span>
            <h1>My Profile</h1>
            <p>Manage your personal information and account settings.</p>
          </div>

          <div className="vc-profile-header-user">
            <FaBell />
            <div className="vc-profile-avatar-small">P</div>
            <strong>Pet Parent</strong>
          </div>
        </header>

        <section className="vc-profile-card">
          <div className="vc-profile-cover"></div>

          <div className="vc-profile-identity">
            <div className="vc-profile-photo">
              <div className="vc-profile-photo-placeholder">P</div>
              <button type="button" title="Change profile photo">
                <FaCamera />
              </button>
            </div>

            <div className="vc-profile-identity-info">
              <h2>Alex Johnson</h2>
              <p>Pet Parent · Member since 2026</p>
              <span className="vc-profile-status">● Active Account</span>
            </div>

            <button type="button" className="vc-profile-edit-button">
              <FaEdit /> Edit Profile
            </button>
          </div>
        </section>

        <div className="vc-profile-content-grid">
          <section className="vc-profile-info-card">
            <div className="vc-profile-section-heading">
              <div>
                <h3>Personal Information</h3>
                <p>Your basic contact details</p>
              </div>
              <FaUser />
            </div>

            <div className="vc-profile-info-grid">
              <div className="vc-profile-info-item">
                <span>Full Name</span>
                <strong>Alex Johnson</strong>
              </div>

              <div className="vc-profile-info-item">
                <span>Email Address</span>
                <strong><FaEnvelope /> alex.johnson@email.com</strong>
              </div>

              <div className="vc-profile-info-item">
                <span>Phone Number</span>
                <strong><FaPhone /> +91 98765 43210</strong>
              </div>

              <div className="vc-profile-info-item">
                <span>Gender</span>
                <strong>Not specified</strong>
              </div>

              <div className="vc-profile-info-item">
                <span>Date of Birth</span>
                <strong>January 15, 1998</strong>
              </div>

              <div className="vc-profile-info-item">
                <span>Account Type</span>
                <strong>Pet Owner</strong>
              </div>
            </div>
          </section>

          <section className="vc-profile-info-card">
            <div className="vc-profile-section-heading">
              <div>
                <h3>Address Information</h3>
                <p>Your residential address</p>
              </div>
              <FaMapMarkerAlt />
            </div>

            <div className="vc-profile-info-grid address-grid">
              <div className="vc-profile-info-item">
                <span>Street Address</span>
                <strong>123 Green Valley Road</strong>
              </div>

              <div className="vc-profile-info-item">
                <span>City</span>
                <strong>Kochi</strong>
              </div>

              <div className="vc-profile-info-item">
                <span>State</span>
                <strong>Kerala</strong>
              </div>

              <div className="vc-profile-info-item">
                <span>Postal Code</span>
                <strong>682001</strong>
              </div>

              <div className="vc-profile-info-item">
                <span>Country</span>
                <strong>India</strong>
              </div>
            </div>
          </section>
        </div>

        <section className="vc-profile-info-card vc-profile-password-card">
          <div className="vc-profile-section-heading">
            <div>
              <h3>Account Security</h3>
              <p>Manage your password and security</p>
            </div>
            <FaLock />
          </div>

          <div className="vc-profile-password-row">
            <div>
              <strong>Password</strong>
              <p>••••••••••••</p>
            </div>

            <button type="button" className="vc-profile-change-password">
              Change Password
            </button>
          </div>
        </section>

        <div className="vc-profile-bottom-actions">
          <button type="button" className="vc-profile-cancel">
            Cancel
          </button>
          <button type="button" className="vc-profile-save">
            Save Changes
          </button>
        </div>
      </main>
    </div>
  );
}

export default MyProfile;
