import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar, FaQuoteRight, FaPaw } from "react-icons/fa";
import "./Testimonials.css";

function Testimonials() {
  const reviews = [
    {
      name: "Sarah Johnson",
      pet: "Max, Golden Retriever",
      initials: "SJ",
      review:
        "VetCare made finding the right veterinarian so easy. Max received wonderful care, and booking an appointment took just a few minutes!",
      featured: true,
    },
    {
      name: "Arjun Menon",
      pet: "Milo, Persian Cat",
      initials: "AM",
      review:
        "I found a trusted vet near my home without any hassle. The whole appointment process was smooth and convenient.",
    },
    {
      name: "Priya Sharma",
      pet: "Bella, Labrador",
      initials: "PS",
      review:
        "The platform is simple to use, and I love how easily I can compare veterinarians before booking.",
    },
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <Container>
        <div className="testimonials-heading">
          <span className="testimonials-badge">
            <FaPaw /> HAPPY PET PARENTS
          </span>

          <h2>
            Loved by pets.
            <br />
            <span>Trusted by their people.</span>
          </h2>

          <p>
            Real experiences from pet parents who trust VetCare
            for their furry family members.
          </p>
        </div>

        <Row className="g-4 align-items-stretch">
          {reviews.map((review, index) => (
            <Col
              lg={index === 0 ? 6 : 3}
              md={index === 0 ? 12 : 6}
              key={index}
            >
              <div
                className={`testimonial-card ${
                  review.featured ? "testimonial-featured" : ""
                }`}
              >
                <FaQuoteRight className="testimonial-quote-icon" />

                <div className="testimonial-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>

                <p className="testimonial-review">
                  “{review.review}”
                </p>

                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {review.initials}
                  </div>

                  <div>
                    <h4>{review.name}</h4>
                    <span>{review.pet}</span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;