
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
  FaPlus,
  FaSearch,
  FaMars,
  FaVenus,
  FaEllipsisH,
  FaHeartbeat,
  FaCalendarCheck,
  FaArrowRight,
} from "react-icons/fa";
import "./MyPets.css";
import DashboardSidebar from "../../Components/DashboardSidebar";

const pets = [
  {
    id: 1,
    name: "Max",
    image: "/max.png",
    species: "Dog",
    breed: "Golden Retriever",
    age: "3 years",
    gender: "Male",
    weight: "28 kg",
    lastVisit: "October 15, 2026",
    nextVisit: "November 12, 2026",
    color: "gold",
  },
  {
    id: 2,
    name: "Bella",
    image: "/bella.png",
    species: "Cat",
    breed: "Persian",
    age: "2 years",
    gender: "Female",
    weight: "4.5 kg",
    lastVisit: "September 20, 2026",
    nextVisit: "No upcoming visit",
    color: "pink",
  },
  {
    id: 3,
    name: "Charlie",
    image: "/charlie.png",
    species: "Dog",
    breed: "Beagle",
    age: "1 year",
    gender: "Male",
    weight: "12 kg",
    lastVisit: "October 28, 2026",
    nextVisit: "No upcoming visit",
    color: "blue",
  },
];

function MyPets() {
  return (
    <div className="vc-pets-layout">
      <DashboardSidebar />

      <main className="vc-pets-main">
        <header className="vc-pets-header">
          <div>
            <p className="vc-pets-header-greeting">Pet Parent Portal</p>
            <h1>My Pets</h1>
            <p className="vc-pets-header-subtitle">
              Keep your furry family members’ information organized.
            </p>
          </div>

          <div className="vc-pets-header-actions">
            <button className="vc-pets-notification" type="button">
              <FaBell />
              <span></span>
            </button>

            <div className="vc-pets-user">
              <div className="vc-pets-user-avatar">P</div>
              <div>
                <strong>Pet Parent</strong>
                <small>Pet Owner</small>
              </div>
            </div>
          </div>
        </header>

        <section className="vc-pets-welcome">
          <div>
            <span className="vc-pets-welcome-label">YOUR PET FAMILY</span>
            <h2>Every pet deserves the best care.</h2>
            <p>
              Manage your pets’ profiles and keep track of their health
              and appointments in one place.
            </p>
          </div>
          <div className="vc-pets-welcome-icon">
            <FaPaw />
          </div>
        </section>

        <section className="vc-pets-overview">
          <div className="vc-pets-overview-card">
            <div className="vc-pets-overview-icon">
              <FaPaw />
            </div>
            <div>
              <span>Total Pets</span>
              <strong>03</strong>
            </div>
          </div>

          <div className="vc-pets-overview-card">
            <div className="vc-pets-overview-icon green">
              <FaCalendarCheck />
            </div>
            <div>
              <span>Upcoming Visits</span>
              <strong>01</strong>
            </div>
          </div>

          <div className="vc-pets-overview-card">
            <div className="vc-pets-overview-icon orange">
              <FaHeartbeat />
            </div>
            <div>
              <span>Health Records</span>
              <strong>08</strong>
            </div>
          </div>
        </section>

        <section className="vc-pets-section">
          <div className="vc-pets-section-heading">
            <div>
              <h2>My Pet Profiles</h2>
              <p>View and manage your registered pets.</p>
            </div>

            <button className="vc-pets-add-button" type="button">
              <FaPlus />
              Add New Pet
            </button>
          </div>

          <div className="vc-pets-toolbar">
            <div className="vc-pets-search">
              <FaSearch />
              <input type="text" placeholder="Search pets by name..." />
            </div>

            <span className="vc-pets-count">Showing 3 pets</span>
          </div>

          <div className="vc-pets-grid">
            {pets.map((pet) => (
              <article className="vc-pets-card" key={pet.id}>
                <div className={`vc-pets-card-top ${pet.color}`}>
                  <button className="vc-pets-more-button" type="button">
                    <FaEllipsisH />
                  </button>

                  <div className="vc-pets-photo">
                    <img
                      src={pet.image}
                      alt={pet.name}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <FaPaw className="vc-pets-photo-fallback" />
                  </div>
                </div>

                <div className="vc-pets-card-content">
                  <div className="vc-pets-name-row">
                    <div>
                      <h3>{pet.name}</h3>
                      <span className="vc-pets-breed">
                        {pet.breed}
                      </span>
                    </div>

                    <span className="vc-pets-species">
                      {pet.species}
                    </span>
                  </div>

                  <div className="vc-pets-details">
                    <div>
                      <span>Age</span>
                      <strong>{pet.age}</strong>
                    </div>
                    <div>
                      <span>Gender</span>
                      <strong>
                        {pet.gender === "Male" ? <FaMars /> : <FaVenus />}
                        {pet.gender}
                      </strong>
                    </div>
                    <div>
                      <span>Weight</span>
                      <strong>{pet.weight}</strong>
                    </div>
                  </div>

                  <div className="vc-pets-visit-info">
                    <div>
                      <span>Last Visit</span>
                      <strong>{pet.lastVisit}</strong>
                    </div>
                    <div>
                      <span>Next Visit</span>
                      <strong>{pet.nextVisit}</strong>
                    </div>
                  </div>

                  <div className="vc-pets-card-actions">
                    <Link
                      to={`/user/pets/${pet.id}`}
                      className="vc-pets-details-button"
                    >
                      View Details
                      <FaArrowRight />
                    </Link>

                    <Link
                      to="/user/appointments/book"
                      className="vc-pets-book-button"
                    >
                      Book Visit
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="vc-pets-health-tip">
          <div className="vc-pets-health-tip-icon">
            <FaHeartbeat />
          </div>
          <div>
            <h3>Keep your pets healthy</h3>
            <p>
              Regular checkups and vaccinations help your pets live
              happier, healthier lives.
            </p>
          </div>
          <Link to="/user/medical-records">
            View Medical Records <FaArrowRight />
          </Link>
        </section>
      </main>
    </div>
  );
}

export default MyPets;
