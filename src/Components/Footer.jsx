
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaPaw,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="vetcare-footer">
      <Container>
        <Row className="footer-main">
          <Col lg={4} md={6} className="footer-brand">
            <div className="footer-logo">
              <FaPaw />
              <span>VetConnect</span>
            </div>

            <p>
              Caring for your furry family members with
              compassion, convenience, and trusted veterinary
              professionals.
            </p>

            <div className="footer-socials">
              <a href="#facebook" aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a href="#instagram" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="#twitter" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </Col>

          <Col lg={2} md={6} className="footer-links">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Our Services</a>
            <a href="#doctors">Veterinarians</a>
            <a href="#testimonials">Testimonials</a>
          </Col>

          <Col lg={3} md={6} className="footer-links">
            <h4>Our Services</h4>
            <a href="#services">General Consultation</a>
            <a href="#services">Vaccination</a>
            <a href="#services">Dental Care</a>
            <a href="#services">Grooming & Wellness</a>
          </Col>

          <Col lg={3} md={6} className="footer-contact">
            <h4>Contact Us</h4>

            <div>
              <FaMapMarkerAlt />
              <span>Kochi, Kerala, India</span>
            </div>

            <div>
              <FaPhoneAlt />
              <span>+91 98765 43210</span>
            </div>

            <div>
              <FaEnvelope />
              <span>support@vetconnect.com</span>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} VetConnect. All rights reserved.
          </p>

          <p>
            Made with <span>♥</span> for our furry friends
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
