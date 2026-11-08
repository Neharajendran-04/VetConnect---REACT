
import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaPaw, FaHome, FaUserMd, FaCalendarAlt, FaUser,
  FaSignOutAlt, FaBell, FaArrowLeft, FaEdit,
  FaCalendarCheck, FaHeartbeat, FaSyringe,
  FaWeight, FaFileMedical, FaClock
} from "react-icons/fa";
import "./PetDetails.css";
import DashboardSidebar from "../../Components/DashboardSidebar";

const pets = {
  1: {
    name: "Max",
    image: "/max.png",
    species: "Dog",
    breed: "Golden Retriever",
    age: "3 years",
    gender: "Male",
    weight: "28 kg",
    birthday: "November 15, 2023",
    color: "Golden",
    microchip: "VC-100245",
    lastVisit: "October 15, 2026",
    nextVisit: "November 12, 2026",
    vet: "Dr. Emily Carter",
  },
  2: {
    name: "Bella",
    image: "/bella.png",
    species: "Cat",
    breed: "Persian",
    age: "2 years",
    gender: "Female",
    weight: "4.5 kg",
    birthday: "May 20, 2024",
    color: "White",
    microchip: "VC-100246",
    lastVisit: "September 20, 2026",
    nextVisit: "No upcoming appointment",
    vet: "Dr. Sarah Wilson",
  },
  3: {
    name: "Charlie",
    image: "/charlie.png",
    species: "Dog",
    breed: "Beagle",
    age: "1 year",
    gender: "Male",
    weight: "12 kg",
    birthday: "October 10, 2025",
    color: "Brown & White",
    microchip: "VC-100247",
    lastVisit: "October 28, 2026",
    nextVisit: "No upcoming appointment",
    vet: "Dr. Michael Roberts",
  },
};

function PetDetails() {
  const { petId } = useParams();
  const pet = pets[petId] || pets[1];

  return (
    <div className="vc-detail-layout">
      <DashboardSidebar />

      <main className="vc-detail-main">
        <header className="vc-detail-header">
          <div>
            <span>Pet Parent Portal</span>
            <h1>Pet Details</h1>
            <p>View your pet's profile and health information.</p>
          </div>

          <div className="vc-detail-header-user">
            <FaBell />
            <div className="vc-detail-avatar">P</div>
            <strong>Pet Parent</strong>
          </div>
        </header>

        <Link to="/user/pets" className="vc-detail-back">
          <FaArrowLeft /> Back to My Pets
        </Link>

        <section className="vc-detail-profile">
          <div className="vc-detail-image">
            <img
              src={pet.image}
              alt={pet.name}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <FaPaw className="vc-detail-image-fallback" />
          </div>

          <div className="vc-detail-profile-info">
            <span className="vc-detail-health-badge">● Healthy</span>
            <h2>{pet.name}</h2>
            <p>{pet.breed} · {pet.species}</p>

            <div className="vc-detail-tags">
              <span>{pet.age}</span>
              <span>{pet.gender}</span>
              <span>{pet.weight}</span>
            </div>
          </div>

          <div className="vc-detail-profile-buttons">
            <button type="button"><FaEdit /> Edit Profile</button>
            <Link to="/user/appointments/book">
              <FaCalendarCheck /> Book Appointment
            </Link>
          </div>
        </section>

        <section className="vc-detail-stats">
          <div className="vc-detail-stat">
            <FaHeartbeat />
            <div><span>Health Status</span><strong>Good</strong></div>
          </div>
          <div className="vc-detail-stat">
            <FaSyringe />
            <div><span>Vaccinations</span><strong>Up to date</strong></div>
          </div>
          <div className="vc-detail-stat">
            <FaWeight />
            <div><span>Current Weight</span><strong>{pet.weight}</strong></div>
          </div>
        </section>

        <div className="vc-detail-columns">
          <section className="vc-detail-panel">
            <h3>Basic Information</h3>
            <p className="vc-detail-panel-subtitle">Pet profile details</p>

            <div className="vc-detail-info-grid">
              <div><span>Name</span><strong>{pet.name}</strong></div>
              <div><span>Species</span><strong>{pet.species}</strong></div>
              <div><span>Breed</span><strong>{pet.breed}</strong></div>
              <div><span>Gender</span><strong>{pet.gender}</strong></div>
              <div><span>Date of Birth</span><strong>{pet.birthday}</strong></div>
              <div><span>Color</span><strong>{pet.color}</strong></div>
              <div><span>Microchip ID</span><strong>{pet.microchip}</strong></div>
              <div><span>Weight</span><strong>{pet.weight}</strong></div>
            </div>
          </section>

          <section className="vc-detail-panel">
            <h3>Appointment Overview</h3>
            <p className="vc-detail-panel-subtitle">Recent and upcoming visits</p>

            <div className="vc-detail-visit">
              <FaCalendarAlt />
              <div>
                <span>Last Visit</span>
                <strong>{pet.lastVisit}</strong>
                <small>{pet.vet}</small>
              </div>
            </div>

            <div className="vc-detail-visit">
              <FaClock />
              <div>
                <span>Next Appointment</span>
                <strong>{pet.nextVisit}</strong>
              </div>
            </div>

            <Link to="/user/appointments" className="vc-detail-text-link">
              View All Appointments →
            </Link>
          </section>
        </div>

        <section className="vc-detail-panel vc-detail-medical">
          <div className="vc-detail-panel-heading">
            <div>
              <h3>Recent Medical History</h3>
              <p className="vc-detail-panel-subtitle">Recent health records</p>
            </div>
            <FaFileMedical />
          </div>

          <div className="vc-detail-record">
            <FaHeartbeat />
            <div>
              <strong>Routine Health Checkup</strong>
              <span>{pet.lastVisit}</span>
              <p>General examination completed. Pet reported in good health.</p>
            </div>
            <span className="vc-detail-completed">Completed</span>
          </div>

          <div className="vc-detail-record">
            <FaSyringe />
            <div>
              <strong>Vaccination</strong>
              <span>September 2026</span>
              <p>Routine vaccination recorded in medical history.</p>
            </div>
            <span className="vc-detail-completed">Completed</span>
          </div>

          <Link to="/user/medical-records" className="vc-detail-text-link">
            View Full Medical History →
          </Link>
        </section>

        <section className="vc-detail-care-banner">
          <div>
            <h3>Need veterinary care for {pet.name}?</h3>
            <p>Find a trusted veterinarian and schedule a visit.</p>
          </div>
          <Link to="/user/find-vet">Find a Vet →</Link>
        </section>
      </main>
    </div>
  );
}

export default PetDetails;
