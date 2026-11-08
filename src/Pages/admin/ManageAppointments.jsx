import { useState } from "react";
import { Link } from "react-router-dom";
import "./ManageAppointments.css";

const appointmentData = [
  {
    id: 1,
    owner: "Alex Johnson",
    pet: "Max",
    petType: "Golden Retriever",
    doctor: "Dr. Emily Carter",
    date: "Nov 12, 2026",
    time: "10:00 AM",
    type: "In-clinic",
    status: "Confirmed",
  },
  {
    id: 2,
    owner: "Sophia Williams",
    pet: "Bella",
    petType: "Persian Cat",
    doctor: "Dr. Michael Roberts",
    date: "Nov 12, 2026",
    time: "11:30 AM",
    type: "Home Visit",
    status: "Pending",
  },
  {
    id: 3,
    owner: "Daniel Brown",
    pet: "Charlie",
    petType: "Beagle",
    doctor: "Dr. Sarah Wilson",
    date: "Nov 13, 2026",
    time: "02:00 PM",
    type: "In-clinic",
    status: "Pending",
  },
  {
    id: 4,
    owner: "Olivia Davis",
    pet: "Luna",
    petType: "Labrador",
    doctor: "Dr. James Anderson",
    date: "Nov 14, 2026",
    time: "09:30 AM",
    type: "In-clinic",
    status: "Completed",
  },
  {
    id: 5,
    owner: "Ethan Wilson",
    pet: "Milo",
    petType: "Shih Tzu",
    doctor: "Dr. Emily Carter",
    date: "Nov 15, 2026",
    time: "04:00 PM",
    type: "Home Visit",
    status: "Cancelled",
  },
];

function ManageAppointments() {
  const [appointments, setAppointments] = useState(appointmentData);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredAppointments = appointments.filter((appointment) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      appointment.owner.toLowerCase().includes(searchText) ||
      appointment.pet.toLowerCase().includes(searchText) ||
      appointment.doctor.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All" || appointment.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const updateStatus = (id, newStatus) => {
    setAppointments((previousAppointments) =>
      previousAppointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: newStatus }
          : appointment
      )
    );
  };

  const totalAppointments = appointments.length;
  const pendingAppointments = appointments.filter(
    (appointment) => appointment.status === "Pending"
  ).length;
  const confirmedAppointments = appointments.filter(
    (appointment) => appointment.status === "Confirmed"
  ).length;
  const completedAppointments = appointments.filter(
    (appointment) => appointment.status === "Completed"
  ).length;

  return (
    <div className="manage-appointments">
      <aside className="appointments-sidebar">
        <div className="appointments-logo">
          <span className="logo-icon">🐾</span>
          <div>
            <h2>VetConnect</h2>
            <p>Admin Panel</p>
          </div>
        </div>

        <nav className="appointments-nav">
          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/appointments" className="active">
            Appointments
          </Link>
          <Link to="/admin/doctors">Manage Doctors</Link>
          <Link to="/admin/users">Manage Users</Link>
        </nav>

        <div className="appointments-sidebar-bottom">
          <Link to="/admin/login">Logout</Link>
        </div>
      </aside>

      <main className="appointments-main">
        <header className="appointments-header">
          <div>
            <h1>Manage Appointments</h1>
            <p>Review and manage veterinary appointments.</p>
          </div>

          <div className="admin-profile">
            <div className="admin-avatar">A</div>
            <div>
              <strong>Administrator</strong>
              <span>Admin</span>
            </div>
          </div>
        </header>

        <section className="appointment-stats">
          <div className="appointment-stat-card">
            <span>Total Appointments</span>
            <h2>{totalAppointments}</h2>
          </div>

          <div className="appointment-stat-card">
            <span>Pending</span>
            <h2>{pendingAppointments}</h2>
          </div>

          <div className="appointment-stat-card">
            <span>Confirmed</span>
            <h2>{confirmedAppointments}</h2>
          </div>

          <div className="appointment-stat-card">
            <span>Completed</span>
            <h2>{completedAppointments}</h2>
          </div>
        </section>

        <section className="appointments-content">
          <div className="appointments-section-heading">
            <div>
              <h2>Appointment List</h2>
              <p>View and update appointment details.</p>
            </div>
          </div>

          <div className="appointments-filters">
            <input
              type="text"
              placeholder="Search owner, pet, or veterinarian..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <div className="appointments-table-wrapper">
            <table className="appointments-table">
              <thead>
                <tr>
                  <th>Pet Owner</th>
                  <th>Pet</th>
                  <th>Veterinarian</th>
                  <th>Date & Time</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredAppointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td>
                      <strong>{appointment.owner}</strong>
                    </td>

                    <td>
                      <strong>{appointment.pet}</strong>
                      <span className="appointment-subtext">
                        {appointment.petType}
                      </span>
                    </td>

                    <td>{appointment.doctor}</td>

                    <td>
                      <strong>{appointment.date}</strong>
                      <span className="appointment-subtext">
                        {appointment.time}
                      </span>
                    </td>

                    <td>{appointment.type}</td>

                    <td>
                      <span
                        className={`appointment-status ${appointment.status.toLowerCase()}`}
                      >
                        {appointment.status}
                      </span>
                    </td>

                    <td>
                      <div className="appointment-actions">
                        {appointment.status === "Pending" && (
                          <>
                            <button
                              className="confirm-btn"
                              onClick={() =>
                                updateStatus(appointment.id, "Confirmed")
                              }
                            >
                              Confirm
                            </button>

                            <button
                              className="cancel-btn"
                              onClick={() =>
                                updateStatus(appointment.id, "Cancelled")
                              }
                            >
                              Cancel
                            </button>
                          </>
                        )}

                        {appointment.status === "Confirmed" && (
                          <button
                            className="complete-btn"
                            onClick={() =>
                              updateStatus(appointment.id, "Completed")
                            }
                          >
                            Complete
                          </button>
                        )}

                        {(appointment.status === "Completed" ||
                          appointment.status === "Cancelled") && (
                          <span className="no-action">No actions</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredAppointments.length === 0 && (
                  <tr>
                    <td colSpan="7" className="appointments-empty">
                      No appointments found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ManageAppointments;
