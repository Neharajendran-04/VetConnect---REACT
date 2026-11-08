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
  FaEye,
  FaEdit,
  FaTrash
} from 'react-icons/fa'
import './ManageUsers.css'

function ManageUsers() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')

  const users = [
    {
      id: 1,
      name: 'Alex Johnson',
      email: 'alex.johnson@email.com',
      phone: '+1 555-0201',
      pets: 2,
      joined: 'Oct 10, 2026',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      email: 'sarah.williams@email.com',
      phone: '+1 555-0202',
      pets: 1,
      joined: 'Oct 15, 2026',
      status: 'Active'
    },
    {
      id: 3,
      name: 'David Brown',
      email: 'david.brown@email.com',
      phone: '+1 555-0203',
      pets: 3,
      joined: 'Oct 18, 2026',
      status: 'Active'
    },
    {
      id: 4,
      name: 'Emma Davis',
      email: 'emma.davis@email.com',
      phone: '+1 555-0204',
      pets: 1,
      joined: 'Oct 22, 2026',
      status: 'Inactive'
    },
    {
      id: 5,
      name: 'Oliver Smith',
      email: 'oliver.smith@email.com',
      phone: '+1 555-0205',
      pets: 2,
      joined: 'Oct 25, 2026',
      status: 'Active'
    }
  ]

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())

    const matchesStatus =
      statusFilter === 'All' || user.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="admin-users-layout">
      <aside className="admin-users-sidebar">
        <div className="admin-users-brand">
          <div className="admin-users-logo">
            <FaPaw />
          </div>
          <div>
            <h2>VetConnect</h2>
            <span>Admin Portal</span>
          </div>
        </div>

        <span className="admin-users-menu-label">MAIN MENU</span>

        <nav className="admin-users-nav">
          <Link to="/admin/dashboard">
            <FaHome /> Dashboard
          </Link>

          <Link to="/admin/appointments">
            <FaCalendarAlt /> Appointments
          </Link>

          <Link to="/admin/doctors">
            <FaUserMd /> Manage Doctors
          </Link>

          <Link to="/admin/users" className="active">
            <FaUsers /> Manage Users
          </Link>
        </nav>

        <div className="admin-users-sidebar-bottom">
          <Link to="/admin/login">
            <FaSignOutAlt /> Logout
          </Link>
        </div>
      </aside>

      <main className="admin-users-main">
        <header className="admin-users-header">
          <div>
            <h1>Manage Users</h1>
            <p>View and manage registered pet owners.</p>
          </div>

          <div className="admin-users-header-right">
            <button className="admin-users-notification">
              <FaBell />
            </button>

            <div className="admin-users-admin-profile">
              <div className="admin-users-avatar">A</div>
              <div>
                <strong>Administrator</strong>
                <span>Admin</span>
              </div>
            </div>
          </div>
        </header>

        <section className="admin-users-stats">
          <div className="admin-users-stat-card">
            <span>Total Users</span>
            <h2>{users.length}</h2>
            <p>Registered pet owners</p>
          </div>

          <div className="admin-users-stat-card">
            <span>Active Users</span>
            <h2>{users.filter((user) => user.status === 'Active').length}</h2>
            <p>Currently active accounts</p>
          </div>

          <div className="admin-users-stat-card">
            <span>Registered Pets</span>
            <h2>{users.reduce((total, user) => total + user.pets, 0)}</h2>
            <p>Pets belonging to users</p>
          </div>
        </section>

        <section className="admin-users-content">
          <div className="admin-users-section-header">
            <div>
              <h2>Pet Owner Directory</h2>
              <p>Manage user accounts and view their information.</p>
            </div>
          </div>

          <div className="admin-users-toolbar">
            <div className="admin-users-search">
              <FaSearch />
              <input
                type="text"
                placeholder="Search by name or email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="admin-users-table-wrapper">
            <table className="admin-users-table">
              <thead>
                <tr>
                  <th>Pet Owner</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Pets</th>
                  <th>Date Joined</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <div className="admin-users-user-cell">
                        <div className="admin-users-user-avatar">
                          {user.name.charAt(0)}
                        </div>
                        <strong>{user.name}</strong>
                      </div>
                    </td>

                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.pets}</td>
                    <td>{user.joined}</td>

                    <td>
                      <span
                        className={`admin-users-status ${user.status.toLowerCase()}`}
                      >
                        {user.status}
                      </span>
                    </td>

                    <td>
                      <div className="admin-users-actions">
                        <button title="View user">
                          <FaEye />
                        </button>
                        <button title="Edit user">
                          <FaEdit />
                        </button>
                        <button className="delete" title="Delete user">
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredUsers.length === 0 && (
                  <tr>
                    <td colSpan="7" className="admin-users-empty">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="admin-users-table-footer">
            Showing {filteredUsers.length} of {users.length} users
          </div>
        </section>
      </main>
    </div>
  )
}

export default ManageUsers