import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  FaHome,
  FaCalendarAlt,
  FaUserMd,
  FaUsers,
  FaSignOutAlt,
  FaBell,
  FaPaw,
  FaSearch,
  FaPlus,
  FaEdit,
  FaTrash
} from 'react-icons/fa'
import './ManageDoctors.css'

function ManageDoctors() {
  const [search, setSearch] = useState('')
  const [specialty, setSpecialty] = useState('All')

  const doctors = [
    {
      id: 1,
      name: 'Dr. Emily Carter',
      specialty: 'General Practice',
      email: 'emily.carter@vetconnect.com',
      phone: '+1 555-0101',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Dr. Michael Roberts',
      specialty: 'Surgery',
      email: 'michael.roberts@vetconnect.com',
      phone: '+1 555-0102',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Dr. Sarah Wilson',
      specialty: 'Dermatology',
      email: 'sarah.wilson@vetconnect.com',
      phone: '+1 555-0103',
      status: 'Active'
    },
    {
      id: 4,
      name: 'Dr. James Anderson',
      specialty: 'Dentistry',
      email: 'james.anderson@vetconnect.com',
      phone: '+1 555-0104',
      status: 'Inactive'
    },
    {
      id: 5,
      name: 'Dr. Olivia Martin',
      specialty: 'Cardiology',
      email: 'olivia.martin@vetconnect.com',
      phone: '+1 555-0105',
      status: 'Active'
    }
  ]

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.email.toLowerCase().includes(search.toLowerCase())

    const matchesSpecialty =
      specialty === 'All' || doctor.specialty === specialty

    return matchesSearch && matchesSpecialty
  })

  return (
    <div className="admin-doctors-layout">
      <aside className="admin-doctors-sidebar">
        <div className="admin-doctors-brand">
          <div className="admin-doctors-logo">
            <FaPaw />
          </div>
          <div>
            <h2>VetConnect</h2>
            <span>Admin Portal</span>
          </div>
        </div>

        <span className="admin-doctors-menu-label">MAIN MENU</span>

        <nav className="admin-doctors-nav">
          <Link to="/admin/dashboard">
            <FaHome /> Dashboard
          </Link>

          <Link to="/admin/appointments">
            <FaCalendarAlt /> Appointments
          </Link>

          <Link to="/admin/doctors" className="active">
            <FaUserMd /> Manage Doctors
          </Link>

          <Link to="/admin/users">
            <FaUsers /> Manage Users
          </Link>
        </nav>

        <div className="admin-doctors-sidebar-bottom">
          <Link to="/admin/login">
            <FaSignOutAlt /> Logout
          </Link>
        </div>
      </aside>

      <main className="admin-doctors-main">
        <header className="admin-doctors-header">
          <div>
            <h1>Manage Doctors</h1>
            <p>Manage veterinarian profiles and clinic availability.</p>
          </div>

          <div className="admin-doctors-header-right">
            <button className="admin-doctors-notification">
              <FaBell />
            </button>

            <div className="admin-doctors-admin-profile">
              <div className="admin-doctors-avatar">A</div>
              <div>
                <strong>Administrator</strong>
                <span>Admin</span>
              </div>
            </div>
          </div>
        </header>

        <section className="admin-doctors-stats">
          <div className="admin-doctors-stat-card">
            <span>Total Doctors</span>
            <h2>{doctors.length}</h2>
            <p>Registered veterinarians</p>
          </div>

          <div className="admin-doctors-stat-card">
            <span>Active Doctors</span>
            <h2>{doctors.filter((doctor) => doctor.status === 'Active').length}</h2>
            <p>Currently available</p>
          </div>

          <div className="admin-doctors-stat-card">
            <span>Specialties</span>
            <h2>{new Set(doctors.map((doctor) => doctor.specialty)).size}</h2>
            <p>Areas of expertise</p>
          </div>
        </section>

        <section className="admin-doctors-content">
          <div className="admin-doctors-section-header">
            <div>
              <h2>Veterinarian Directory</h2>
              <p>View and manage registered veterinarians.</p>
            </div>

            <button className="admin-doctors-add-button">
              <FaPlus /> Add Doctor
            </button>
          </div>

          <div className="admin-doctors-toolbar">
            <div className="admin-doctors-search">
              <FaSearch />
              <input
                type="text"
                placeholder="Search by doctor name or email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            >
              <option value="All">All Specialties</option>
              <option value="General Practice">General Practice</option>
              <option value="Surgery">Surgery</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Dentistry">Dentistry</option>
              <option value="Cardiology">Cardiology</option>
            </select>
          </div>

          <div className="admin-doctors-table-wrapper">
            <table className="admin-doctors-table">
              <thead>
                <tr>
                  <th>Veterinarian</th>
                  <th>Specialty</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredDoctors.map((doctor) => (
                  <tr key={doctor.id}>
                    <td>
                      <div className="admin-doctors-doctor-cell">
                        <div className="admin-doctors-doctor-avatar">
                          <FaUserMd />
                        </div>
                        <strong>{doctor.name}</strong>
                      </div>
                    </td>

                    <td>{doctor.specialty}</td>
                    <td>{doctor.email}</td>
                    <td>{doctor.phone}</td>

                    <td>
                      <span
                        className={`admin-doctors-status ${doctor.status.toLowerCase()}`}
                      >
                        {doctor.status}
                      </span>
                    </td>

                    <td>
                      <div className="admin-doctors-actions">
                        <button title="Edit doctor">
                          <FaEdit />
                        </button>
                        <button className="delete" title="Delete doctor">
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredDoctors.length === 0 && (
                  <tr>
                    <td colSpan="6" className="admin-doctors-empty">
                      No doctors found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="admin-doctors-table-footer">
            Showing {filteredDoctors.length} of {doctors.length} doctors
          </div>
        </section>
      </main>
    </div>
  )
}

export default ManageDoctors