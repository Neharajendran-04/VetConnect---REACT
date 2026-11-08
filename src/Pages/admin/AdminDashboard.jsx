import { Link } from 'react-router-dom'
import {
  FaHome,
  FaCalendarAlt,
  FaUserMd,
  FaUsers,
  FaSignOutAlt,
  FaBell,
  FaPaw,
  FaClock,
  FaCheckCircle,
  FaUser
} from 'react-icons/fa'
import './AdminDashboard.css'

function AdminDashboard() {
  const appointments = [
    {
      id: 'APT-001',
      owner: 'Alex Johnson',
      pet: 'Max',
      doctor: 'Dr. Emily Carter',
      date: 'Nov 12, 2026',
      time: '10:30 AM',
      status: 'Pending'
    },
    {
      id: 'APT-002',
      owner: 'Sarah Williams',
      pet: 'Bella',
      doctor: 'Dr. Michael Roberts',
      date: 'Nov 12, 2026',
      time: '11:00 AM',
      status: 'Confirmed'
    },
    {
      id: 'APT-003',
      owner: 'David Brown',
      pet: 'Charlie',
      doctor: 'Dr. Sarah Wilson',
      date: 'Nov 13, 2026',
      time: '02:00 PM',
      status: 'Completed'
    },
    {
      id: 'APT-004',
      owner: 'Emma Davis',
      pet: 'Luna',
      doctor: 'Dr. James Anderson',
      date: 'Nov 14, 2026',
      time: '09:30 AM',
      status: 'Pending'
    }
  ]

  return (
    <div className="admin-dashboard">
      <aside className="admin-dashboard-sidebar">
        <div className="admin-dashboard-brand">
          <div className="admin-dashboard-logo">
            <FaPaw />
          </div>
          <div>
            <h2>VetConnect</h2>
            <p>Admin Portal</p>
          </div>
        </div>

        <span className="admin-dashboard-menu-label">MAIN MENU</span>

        <nav className="admin-dashboard-nav">
          <Link to="/admin/dashboard" className="active">
            <FaHome /> Dashboard
          </Link>

          <Link to="/admin/appointments">
            <FaCalendarAlt /> Appointments
          </Link>

          <Link to="/admin/doctors">
            <FaUserMd /> Manage Doctors
          </Link>

          <Link to="/admin/users">
            <FaUsers /> Manage Users
          </Link>
        </nav>

        <div className="admin-dashboard-sidebar-bottom">
          <Link to="/admin/login">
            <FaSignOutAlt /> Logout
          </Link>
        </div>
      </aside>

      <main className="admin-dashboard-main">
        <header className="admin-dashboard-header">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome back! Here's what's happening at VetConnect.</p>
          </div>

          <div className="admin-dashboard-header-right">
            <button className="admin-dashboard-notification">
              <FaBell />
            </button>

            <div className="admin-dashboard-profile">
              <div className="admin-dashboard-avatar">A</div>
              <div>
                <strong>Administrator</strong>
                <span>Admin</span>
              </div>
            </div>
          </div>
        </header>

        <section className="admin-dashboard-stats">
          <div className="admin-dashboard-stat-card">
            <div className="admin-dashboard-stat-top">
              <span>Total Appointments</span>
              <div className="admin-stat-icon teal">
                <FaCalendarAlt />
              </div>
            </div>
            <h2>128</h2>
            <p>All appointment bookings</p>
          </div>

          <div className="admin-dashboard-stat-card">
            <div className="admin-dashboard-stat-top">
              <span>Pending Appointments</span>
              <div className="admin-stat-icon gold">
                <FaClock />
              </div>
            </div>
            <h2>18</h2>
            <p>Awaiting confirmation</p>
          </div>

          <div className="admin-dashboard-stat-card">
            <div className="admin-dashboard-stat-top">
              <span>Total Veterinarians</span>
              <div className="admin-stat-icon blue">
                <FaUserMd />
              </div>
            </div>
            <h2>12</h2>
            <p>Registered veterinarians</p>
          </div>

          <div className="admin-dashboard-stat-card">
            <div className="admin-dashboard-stat-top">
              <span>Registered Users</span>
              <div className="admin-stat-icon purple">
                <FaUsers />
              </div>
            </div>
            <h2>245</h2>
            <p>Pet owners registered</p>
          </div>
        </section>

        <section className="admin-dashboard-content">
          <div className="admin-dashboard-appointments">
            <div className="admin-dashboard-section-header">
              <div>
                <h2>Recent Appointments</h2>
                <p>Latest appointment activity</p>
              </div>

              <Link to="/admin/appointments" className="admin-dashboard-view-all">
                View All
              </Link>
            </div>

            <div className="admin-dashboard-table-wrapper">
              <table className="admin-dashboard-table">
                <thead>
                  <tr>
                    <th>Appointment ID</th>
                    <th>Pet Owner</th>
                    <th>Pet</th>
                    <th>Veterinarian</th>
                    <th>Date & Time</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {appointments.map((appointment) => (
                    <tr key={appointment.id}>
                      <td>{appointment.id}</td>
                      <td>{appointment.owner}</td>
                      <td>{appointment.pet}</td>
                      <td>{appointment.doctor}</td>
                      <td>
                        <strong>{appointment.date}</strong>
                        <span className="admin-dashboard-time">
                          {appointment.time}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`admin-dashboard-status ${appointment.status.toLowerCase()}`}
                        >
                          {appointment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="admin-dashboard-quick-summary">
            <div className="admin-dashboard-section-header">
              <div>
                <h2>Quick Overview</h2>
                <p>Clinic statistics</p>
              </div>
            </div>

            <div className="admin-dashboard-summary-item">
              <div className="admin-summary-icon">
                <FaUserMd />
              </div>
              <div>
                <span>Active Veterinarians</span>
                <strong>10</strong>
              </div>
            </div>

            <div className="admin-dashboard-summary-item">
              <div className="admin-summary-icon">
                <FaPaw />
              </div>
              <div>
                <span>Registered Pets</span>
                <strong>312</strong>
              </div>
            </div>

            <div className="admin-dashboard-summary-item">
              <div className="admin-summary-icon">
                <FaCheckCircle />
              </div>
              <div>
                <span>Completed Appointments</span>
                <strong>56</strong>
              </div>
            </div>

            <div className="admin-dashboard-summary-item">
              <div className="admin-summary-icon">
                <FaUser />
              </div>
              <div>
                <span>New Users This Month</span>
                <strong>24</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="admin-dashboard-bottom">
          <div className="admin-dashboard-bottom-card">
            <div>
              <h3>Manage Appointments</h3>
              <p>Review, confirm, or cancel appointment requests.</p>
            </div>
            <Link to="/admin/appointments">Manage Appointments</Link>
          </div>

          <div className="admin-dashboard-bottom-card">
            <div>
              <h3>Manage Veterinarians</h3>
              <p>View and update veterinarian information.</p>
            </div>
            <Link to="/admin/doctors">Manage Doctors</Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AdminDashboard