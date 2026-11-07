
import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import {
  FaPaw,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowUp
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <Container>
        <div className="contact-top">
          <div className="contact-intro">
            <span className="contact-eyebrow">
              <FaPaw /> LET'S CONNECT
            </span>

            <h2>
              Good care starts
              <br />
              with a <span>conversation.</span>
            </h2>

            <p>
              Whether you have a question or need help finding
              the right veterinarian, we're here for you.
            </p>

            <div className="contact-links">
              <a href="mailto:support@vetconnect.com">
                <FaEnvelope />
                support@vetconnect.com
                <FaArrowUp className="contact-link-arrow" />
              </a>

              <a href="tel:+919876543210">
                <FaPhoneAlt />
                +91 98765 43210
                <FaArrowUp className="contact-link-arrow" />
              </a>
            </div>
          </div>

          <div className="contact-decoration">
            <div className="contact-circle">
              <FaPaw />
            </div>

            <span className="contact-note">
              A little care goes
              <br />
              a long way.
            </span>

            <span className="contact-number">01 — 04</span>
          </div>
        </div>

        <div className="contact-form-wrap">
          <div className="contact-form-heading">
            <span>HAVE SOMETHING TO ASK?</span>
            <h3>Drop us a message.</h3>
          </div>

          <Form>
            <div className="contact-form-row">
              <Form.Group>
                <Form.Label>Your name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. Alex Johnson"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="you@example.com"
                />
              </Form.Group>
            </div>

            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Tell us what's on your mind..."
              />
            </Form.Group>

            <Button type="button" className="contact-send">
              Send message <FaArrowUp />
            </Button>
          </Form>
        </div>

        <div className="contact-footer-note">
          <span>VETCONNECT · HERE FOR EVERY PAW</span>
          <FaPaw />
        </div>
      </Container>
    </section>
  );
}

export default Contact;
