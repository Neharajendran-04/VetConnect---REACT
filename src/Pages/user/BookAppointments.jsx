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
  FaCalendarCheck,
  FaClock,
  FaMapMarkerAlt,
  FaStethoscope,
  FaChevronDown,
} from "react-icons/fa";

import "./BookAppointments.css";

function BookAppointments() {
  return (
    <div className="vc-book-page">
      <aside className="vc-book-sidebar">
        <Link to="/user/dashboard" className="vc-book-logo">
          <FaPaw />
        </Link>

        <nav className="vc-book-nav">
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

        <Link to="/login" className="vc-book-logout" title="Logout">
          <FaSignOutAlt />
        </Link>
      </aside>

      <main className="vc-book-main">
        <header className="vc-book-header">
          <div>
            <p className="vc-book-eyebrow">PET CARE MANAGEMENT</p>
            <h1>Book an Appointment</h1>
            <p className="vc-book-subtitle">
              Schedule a visit with a trusted veterinarian for your pet.
            </p>
          </div>

          <div className="vc-book-header-right">
            <button className="vc-book-notification">
              <FaBell />
              <span />
            </button>

            <div className="vc-book-user">
              <div className="vc-book-avatar">P</div>
              <div>
                <strong>Pet Parent</strong>
                <span>Pet Owner</span>
              </div>
            </div>
          </div>
        </header>

        <div className="vc-book-layout">
          <section className="vc-book-form-card">
            <div className="vc-book-form-heading">
              <div className="vc-book-heading-icon">
                <FaCalendarCheck />
              </div>
              <div>
                <h2>Appointment Details</h2>
                <p>Fill in the details below to schedule your visit.</p>
              </div>
            </div>

            <form className="vc-book-form">
              <div className="vc-book-form-section">
                <h3>Pet & Veterinarian</h3>

                <div className="vc-book-form-grid">
                  <div className="vc-book-field">
                    <label htmlFor="pet">Select Your Pet</label>
                    <div className="vc-book-input-wrapper">
                      <FaPaw />
                      <select id="pet" defaultValue="">
                        <option value="" disabled>
                          Choose a pet
                        </option>
                        <option>Max — Golden Retriever</option>
                        <option>Bella — Persian Cat</option>
                        <option>Charlie — Beagle</option>
                      </select>
                      <FaChevronDown className="vc-book-select-icon" />
                    </div>
                  </div>

                  <div className="vc-book-field">
                    <label htmlFor="vet">Select Veterinarian</label>
                    <div className="vc-book-input-wrapper">
                      <FaUserMd />
                      <select id="vet" defaultValue="">
                        <option value="" disabled>
                          Choose a veterinarian
                        </option>
                        <option>Dr. Emily Carter</option>
                        <option>Dr. Michael Roberts</option>
                        <option>Dr. Sarah Wilson</option>
                        <option>Dr. James Anderson</option>
                      </select>
                      <FaChevronDown className="vc-book-select-icon" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="vc-book-form-section">
                <h3>Schedule Your Visit</h3>

                <div className="vc-book-form-grid">
                  <div className="vc-book-field">
                    <label htmlFor="date">Appointment Date</label>
                    <div className="vc-book-input-wrapper">
                      <FaCalendarAlt />
                      <input type="date" id="date" />
                    </div>
                  </div>

                  <div className="vc-book-field">
                    <label htmlFor="time">Preferred Time</label>
                    <div className="vc-book-input-wrapper">
                      <FaClock />
                      <select id="time" defaultValue="">
                        <option value="" disabled>
                          Select time
                        </option>
                        <option>09:00 AM</option>
                        <option>10:00 AM</option>
                        <option>10:30 AM</option>
                        <option>11:00 AM</option>
                        <option>02:00 PM</option>
                        <option>03:00 PM</option>
                        <option>04:00 PM</option>
                      </select>
                      <FaChevronDown className="vc-book-select-icon" />
                    </div>
                  </div>
                </div>

                <div className="vc-book-field">
                  <label>Appointment Type</label>

                  <div className="vc-book-type-options">
                    <label className="vc-book-type-option">
                      <input
                        type="radio"
                        name="appointmentType"
                        defaultChecked
                      />
                      <span className="vc-book-type-content">
                        <FaStethoscope />
                        <span>
                          <strong>In-Clinic Visit</strong>
                          <small>Visit the veterinary clinic</small>
                        </span>
                      </span>
                    </label>

                    <label className="vc-book-type-option">
                      <input type="radio" name="appointmentType" />
                      <span className="vc-book-type-content">
                        <FaMapMarkerAlt />
                        <span>
                          <strong>Home Visit</strong>
                          <small>Veterinarian visits your home</small>
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="vc-book-form-section">
                <h3>Reason for Visit</h3>

                <div className="vc-book-field">
                  <label htmlFor="reason">Describe your pet’s concern</label>
                  <textarea
                    id="reason"
                    rows="4"
                    placeholder="Tell us about your pet's symptoms, concerns, or reason for the visit..."
                  />
                </div>
              </div>

              <div className="vc-book-form-actions">
                <Link
                  to="/user/appointments"
                  className="vc-book-cancel-btn"
                >
                  Cancel
                </Link>

                <button type="button" className="vc-book-submit-btn">
                  Confirm Appointment
                  <FaCalendarCheck />
                </button>
              </div>
            </form>
          </section>

          <aside className="vc-book-summary">
            <div className="vc-book-summary-banner">
              <div className="vc-book-summary-banner-icon">
                <FaPaw />
              </div>
              <h2>Your Pet’s Health Matters</h2>
              <p>
                Regular veterinary visits help keep your furry friend healthy
                and happy.
              </p>
            </div>

            <div className="vc-book-summary-card">
              <h3>Booking Summary</h3>

              <div className="vc-book-summary-item">
                <span>Selected Pet</span>
                <strong>Not selected</strong>
              </div>

              <div className="vc-book-summary-item">
                <span>Veterinarian</span>
                <strong>Not selected</strong>
              </div>

              <div className="vc-book-summary-item">
                <span>Date</span>
                <strong>Not selected</strong>
              </div>

              <div className="vc-book-summary-item">
                <span>Time</span>
                <strong>Not selected</strong>
              </div>

              <div className="vc-book-summary-item">
                <span>Visit Type</span>
                <strong>In-Clinic Visit</strong>
              </div>

              <div className="vc-book-summary-note">
                <FaClock />
                <p>
                  Your appointment will be confirmed after the clinic reviews
                  your booking request.
                </p>
              </div>
            </div>

            <div className="vc-book-help-card">
              <h4>Need help booking?</h4>
              <p>Contact our support team if you need assistance.</p>
              <Link to="/user/profile">Contact Support</Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default BookAppointments;