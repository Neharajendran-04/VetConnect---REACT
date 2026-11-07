import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPaw, FaArrowRight } from "react-icons/fa";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <span className="paw paw-1"><FaPaw /></span>
      <span className="paw paw-2"><FaPaw /></span>
      <span className="paw paw-3"><FaPaw /></span>
      <span className="paw paw-4"><FaPaw /></span>
      <span className="paw paw-5"><FaPaw /></span>

      <Container className="hero-container">
        <Row className="align-items-center">
          <Col lg={6} className="hero-content">
            <span className="hero-badge">
              <FaPaw /> Trusted Care for Your Pets
            </span>

            <h1>
              Connecting Pets
              <br />
              <span>to Better Care.</span>
            </h1>

            <p>
              Find trusted veterinarians and book quality care
              for your beloved pets, all in one place.
            </p>

            <div className="hero-buttons">
              <Button href="#doctors" className="primary-btn">
                Find a Veterinarian <FaArrowRight />
              </Button>
   
              <Link to={'/select-portal'} className="secondary-btn">
                Get Started
              </Link>
            </div>

            <div className="hero-features">
              <span><FaPaw /> Trusted Veterinarians</span>
              <span><FaPaw /> Easy Booking</span>
              <span><FaPaw /> Quality Pet Care</span>
            </div>
          </Col>

          <Col lg={6} className="hero-image-wrapper">
            <div className="hero-artwork">
              <div className="hero-circle hero-circle-dark"></div>
              <div className="hero-circle hero-circle-light"></div>

              <div className="hero-image-inner">
                <img
                  src="/hero.png"
                  alt="Veterinarian holding a puppy"
                  className="hero-image"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
