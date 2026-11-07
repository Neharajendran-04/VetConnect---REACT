import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Doctors.css";

function Doctors() {
  const doctors = [
    {
      name: "Dr. Emily Carter",
      specialization: "Small Animal Specialist",
      experience: "8 years experience",
      location: "Kochi, Kerala",
      rating: "4.9",
      image: "/vetenarians/vet1.png",
    },
    {
      name: "Dr. James Wilson",
      specialization: "Veterinary Surgeon",
      experience: "10 years experience",
      location: "Thrissur, Kerala",
      rating: "4.8",
      image:  "/vetenarians/vet2.png",
    },
    {
      name: "Dr. Sophia Martin",
      specialization: "Pet Dermatologist",
      experience: "6 years experience",
      location: "Calicut, Kerala",
      rating: "4.9",
      image: "/vetenarians/vet3.png",
    },
    {
      name: "Dr. Daniel Thomas",
      specialization: "Animal Care Specialist",
      experience: "7 years experience",
      location: "Trivandrum, Kerala",
      rating: "4.7",
      image:  "/vetenarians/vet4.png",
    },
  ];

  return (
    <section className="doctors-section" id="doctors">
      <Container>
        <div className="doctors-heading">
          <span className="doctors-badge">OUR VETERINARIANS</span>

          <h2>Meet Our Trusted Veterinarians</h2>

          <p>
            Experienced and compassionate professionals dedicated
            to keeping your pets healthy and happy.
          </p>
        </div>

        <Row className="g-4">
          {doctors.map((doctor, index) => (
            <Col md={6} lg={3} key={index}>
              <div className="doctor-card">
                <div className="doctor-image-wrapper">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="doctor-image"
                  />

                  <div className="doctor-rating">
                    <FaStar />
                    <span>{doctor.rating}</span>
                  </div>
                </div>

                <div className="doctor-info">
                  <h3>{doctor.name}</h3>

                  <p className="doctor-specialization">
                    {doctor.specialization}
                  </p>

                  <p className="doctor-experience">
                    {doctor.experience}
                  </p>

                  <div className="doctor-location">
                    <FaMapMarkerAlt />
                    <span>{doctor.location}</span>
                  </div>

                  <Link
                    to="/select-portal"
                    className="doctor-book-btn"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="doctors-footer">
          <Link to="/select-portal" className="view-doctors-btn">
            View All Veterinarians →
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default Doctors;