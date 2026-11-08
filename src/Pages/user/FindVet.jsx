import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPaw,
  FaHome,
  FaUserMd,
  FaCalendarAlt,
  FaUser,
  FaSignOutAlt,
  FaBell,
  FaSearch,
  FaMapMarkerAlt,
  FaStar,
  FaClock,
  FaFilter,
  FaArrowRight,
} from "react-icons/fa";
import "./FindVet.css";

const veterinarians = [
  {
    id: 1,
    name: "Dr. Emily Carter",
    specialty: "General Veterinarian",
    clinic: "VetConnect Animal Clinic",
    experience: "8 years experience",
    rating: 4.9,
    reviews: 124,
    availability: "Available Today",
    image: "/doctor.png",
  },
  {
    id: 2,
    name: "Dr. Michael Roberts",
    specialty: "Pet Dermatologist",
    clinic: "Happy Paws Veterinary Center",
    experience: "10 years experience",
    rating: 4.8,
    reviews: 98,
    availability: "Available Tomorrow",
    image: "/doctor.png",
  },
  {
    id: 3,
    name: "Dr. Sarah Wilson",
    specialty: "Animal Surgeon",
    clinic: "Healthy Tails Clinic",
    experience: "6 years experience",
    rating: 4.7,
    reviews: 85,
    availability: "Available Today",
    image: "/doctor.png",
  },
  {
    id: 4,
    name: "Dr. James Anderson",
    specialty: "General Veterinarian",
    clinic: "PawCare Veterinary Hospital",
    experience: "12 years experience",
    rating: 5.0,
    reviews: 156,
    availability: "Available Tomorrow",
    image: "/doctor.png",
  },
];

function FindVeterinarian() {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("All");

  const filteredVeterinarians = veterinarians.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(search.toLowerCase()) ||
      doctor.clinic.toLowerCase().includes(search.toLowerCase());

    const matchesSpecialty =
      specialty === "All" || doctor.specialty === specialty;

    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="vc-vet-page">
      <aside className="vc-vet-sidebar">
        <Link to="/dashboard" className="vc-vet-logo" title="VetConnect">
          <FaPaw />
        </Link>

        <nav className="vc-vet-nav">
          <Link to="/dashboard" title="Dashboard">
            <FaHome />
          </Link>

          <Link
            to="/find-veterinarian"
            className="active"
            title="Find Veterinarian"
          >
            <FaUserMd />
          </Link>

          <Link to="/appointments" title="Appointments">
            <FaCalendarAlt />
          </Link>

          <Link to="/profile" title="Profile">
            <FaUser />
          </Link>
        </nav>

        <Link to="/login" className="vc-vet-logout" title="Logout">
          <FaSignOutAlt />
        </Link>
      </aside>

      <main className="vc-vet-main">
        <header className="vc-vet-header">
          <div>
            <span className="vc-vet-date">
              YOUR PET'S HEALTH MATTERS
            </span>

            <h1>Find a Veterinarian</h1>

            <p>
              Discover trusted veterinarians and find the right care
              for your furry friend.
            </p>
          </div>

          <button className="vc-vet-notification" aria-label="Notifications">
            <FaBell />
          </button>
        </header>

        <section className="vc-vet-search-section">
          <div className="vc-vet-search-box">
            <FaSearch />

            <input
              type="text"
              placeholder="Search veterinarian, specialty, or clinic..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button type="button">Search</button>
          </div>

          <div className="vc-vet-filter">
            <FaFilter />

            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            >
              <option value="All">All Specialties</option>
              <option value="General Veterinarian">
                General Veterinarian
              </option>
              <option value="Pet Dermatologist">
                Pet Dermatologist
              </option>
              <option value="Animal Surgeon">
                Animal Surgeon
              </option>
            </select>
          </div>
        </section>

        <section className="vc-vet-results">
          <div className="vc-vet-results-heading">
            <div>
              <h2>Available Veterinarians</h2>
              <p>{filteredVeterinarians.length} veterinarians found</p>
            </div>
          </div>

          <div className="vc-vet-grid">
            {filteredVeterinarians.map((doctor) => (
              <div className="vc-vet-card" key={doctor.id}>
                <div className="vc-vet-card-top">
                  <span className="vc-vet-availability">
                    <span className="vc-vet-status-dot" />
                    {doctor.availability}
                  </span>

                  <span className="vc-vet-rating">
                    <FaStar />
                    {doctor.rating}
                    <small>({doctor.reviews})</small>
                  </span>
                </div>

                <div className="vc-vet-doctor">
                  <img src={doctor.image} alt={doctor.name} />
                </div>

                <div className="vc-vet-card-info">
                  <h3>{doctor.name}</h3>

                  <span className="vc-vet-specialty">
                    {doctor.specialty}
                  </span>

                  <p className="vc-vet-clinic">
                    <FaMapMarkerAlt />
                    {doctor.clinic}
                  </p>

                  <p className="vc-vet-experience">
                    <FaClock />
                    {doctor.experience}
                  </p>
                </div>

                <div className="vc-vet-card-actions">
                  <Link
                    to={`/veterinarian/${doctor.id}`}
                    className="vc-vet-profile-btn"
                  >
                    View Profile
                  </Link>

                  <Link
                    to={`/book-appointment/${doctor.id}`}
                    className="vc-vet-book-btn"
                  >
                    Book <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredVeterinarians.length === 0 && (
            <div className="vc-vet-empty">
              <FaSearch />
              <h3>No veterinarians found</h3>
              <p>Try searching with a different name or specialty.</p>
            </div>
          )}
        </section>

        <footer className="vc-vet-footer">
          © 2026 VetConnect. Caring for pets, together.
        </footer>
      </main>
    </div>
  );
}

export default FindVeterinarian;
