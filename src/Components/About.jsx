
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
   FaUserMd,
  FaPaw,
  FaMapMarkerAlt,
  FaStar
} from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="about-content">
            <span className="about-badge">ABOUT VETCONNECT</span>
            <h2>Caring for Pets, Like Family</h2>
            <p>
              VetConnect connects pet owners with trusted veterinary professionals, making quality pet care more accessible, convenient, and compassionate.
            </p>
            <ul>
              <li>Compassionate Pet Care</li>
              <li>Trusted Veterinary Professionals</li>
              <li>Convenient Appointment Booking</li>
            </ul>
          </Col>
          <Col lg={6}>
            <div className="about-visual">
              <div className="about-stats">
                <div className="stat-card">
                  <FaUserMd className="stat-icon" />
                  <h3>500<span>+</span></h3>
                  <p>Verified veterinarians</p>
                </div>
                <div className="stat-card stat-highlight">
                 <FaPaw className="stat-icon" />
                  <h3>10k<span>+</span></h3>
                  <p>Pets cared for</p>
                </div>
                <div className="stat-card">
                  <FaMapMarkerAlt className="stat-icon" />
                  <h3>25<span>+</span></h3>
                  <p>Cities covered</p>
                </div>
                <div className="stat-card">
                  <FaStar className="stat-icon" />
                  <h3>4.8<span className="star">★</span></h3>
                  <p>Average rating</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
