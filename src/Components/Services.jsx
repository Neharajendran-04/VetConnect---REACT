import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaStethoscope,
  FaSyringe,
  FaTooth,
  FaPaw
} from "react-icons/fa";
import "./Services.css";


function Services() {
  const services = [
    {
      icon: <FaStethoscope />,
      title: "General Consultation",
      description:
        "Professional checkups and expert advice to keep your pet healthy and happy."
    },
    {
      icon: <FaSyringe />,
      title: "Vaccination",
      description:
        "Protect your furry friends with essential vaccinations and preventive care."
    },
    {
      icon: <FaTooth />,
      title: "Dental Care",
      description:
        "Keep your pet's teeth and gums healthy with specialized dental care."
    },
    {
      icon: <FaPaw />,
      title: "Grooming & Wellness",
      description:
        "Give your pets the care they deserve with grooming and wellness services."
    }
  ];

  return (
    <section className="services-section" id="services">
      <Container>
        <div className="services-heading">
          <span className="services-badge">OUR SERVICES</span>

          <h2>Everything Your Pet Needs</h2>

          <p>
            Comprehensive veterinary care to keep your furry
            friends happy, healthy, and thriving.
          </p>
        </div>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={6} lg={3} key={index}>
              <div className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="#contact" className="service-link">
                  Learn More <span>→</span>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
