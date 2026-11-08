
import React from "react";
import { Link } from "react-router-dom";
import {
  FaPaw, FaHome, FaUserMd, FaCalendarAlt, FaUser,
  FaSignOutAlt, FaBell, FaSearch, FaFileMedical,
  FaSyringe, FaHeartbeat, FaDownload, FaEye
} from "react-icons/fa";
import "./MedicalRecords.css";
import DashboardSidebar from "../../Components/DashboardSidebar";

const records = [
  {
    id: 1,
    pet: "Max",
    type: "Health Checkup",
    doctor: "Dr. Emily Carter",
    date: "Oct 15, 2026",
    status: "Completed",
    icon: <FaHeartbeat />,
  },
  {
    id: 2,
    pet: "Bella",
    type: "Vaccination",
    doctor: "Dr. Sarah Wilson",
    date: "Sep 20, 2026",
    status: "Completed",
    icon: <FaSyringe />,
  },
  {
    id: 3,
    pet: "Charlie",
    type: "Dental Checkup",
    doctor: "Dr. Michael Roberts",
    date: "Aug 28, 2026",
    status: "Completed",
    icon: <FaFileMedical />,
  },
  {
    id: 4,
    pet: "Max",
    type: "Prescription",
    doctor: "Dr. Emily Carter",
    date: "Jul 10, 2026",
    status: "Completed",
    icon: <FaFileMedical />,
  },
  {
    id: 5,
    pet: "Bella",
    type: "General Examination",
    doctor: "Dr. Sarah Wilson",
    date: "Jun 05, 2026",
    status: "Completed",
    icon: <FaHeartbeat />,
  },
];

function MedicalRecords() {
  return (
    <div className="vc-medical-layout">
      <DashboardSidebar/>
      
      <main className="vc-medical-main">
        <header className="vc-medical-header">
          <div>
            <span>Pet Parent Portal</span>
            <h1>Medical Records</h1>
            <p>Keep track of your pets' health history and treatments.</p>
          </div>

          <div className="vc-medical-header-user">
            <FaBell />
            <div className="vc-medical-avatar">P</div>
            <strong>Pet Parent</strong>
          </div>
        </header>

        <section className="vc-medical-summary">
          <div className="vc-medical-summary-card">
            <div className="vc-medical-summary-icon"><FaFileMedical /></div>
            <div>
              <span>Total Records</span>
              <h2>08</h2>
              <p>Across all your pets</p>
            </div>
          </div>

          <div className="vc-medical-summary-card">
            <div className="vc-medical-summary-icon"><FaSyringe /></div>
            <div>
              <span>Vaccinations</span>
              <h2>03</h2>
              <p>Vaccination records</p>
            </div>
          </div>

          <div className="vc-medical-summary-card">
            <div className="vc-medical-summary-icon"><FaHeartbeat /></div>
            <div>
              <span>Health Checkups</span>
              <h2>05</h2>
              <p>Routine examinations</p>
            </div>
          </div>
        </section>

        <section className="vc-medical-content">
          <div className="vc-medical-section-heading">
            <div>
              <h2>Health History</h2>
              <p>Medical records for all your registered pets.</p>
            </div>
            <button type="button" className="vc-medical-download-all">
              <FaDownload /> Download All
            </button>
          </div>

          <div className="vc-medical-filters">
            <div className="vc-medical-search">
              <FaSearch />
              <input type="text" placeholder="Search records..." />
            </div>

            <select defaultValue="all">
              <option value="all">All Pets</option>
              <option value="Max">Max</option>
              <option value="Bella">Bella</option>
              <option value="Charlie">Charlie</option>
            </select>

            <select defaultValue="all">
              <option value="all">All Record Types</option>
              <option value="checkup">Health Checkup</option>
              <option value="vaccination">Vaccination</option>
              <option value="prescription">Prescription</option>
            </select>
          </div>

          <div className="vc-medical-record-list">
            {records.map((record) => (
              <div className="vc-medical-record-card" key={record.id}>
                <div className="vc-medical-record-icon">
                  {record.icon}
                </div>

                <div className="vc-medical-record-info">
                  <h3>{record.type}</h3>
                  <p>{record.pet} · {record.doctor}</p>
                  <span>{record.date}</span>
                </div>

                <span className="vc-medical-record-status">
                  {record.status}
                </span>

                <div className="vc-medical-record-actions">
                  <button type="button" title="View record">
                    <FaEye />
                  </button>
                  <button type="button" title="Download record">
                    <FaDownload />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="vc-medical-pagination">
            <span>Showing 1–5 of 8 records</span>
            <div>
              <button type="button" disabled>Previous</button>
              <button type="button" className="selected">1</button>
              <button type="button">2</button>
              <button type="button">Next</button>
            </div>
          </div>
        </section>

        <section className="vc-medical-help">
          <div>
            <h3>Need help understanding a medical record?</h3>
            <p>Contact your veterinarian for guidance about your pet's health.</p>
          </div>
          <Link to="/user/find-vet">Find a Veterinarian →</Link>
        </section>
      </main>
    </div>
  );
}

export default MedicalRecords;
