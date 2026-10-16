import React from "react";
const items = [
  { name: "Dashboard", icon: "▦" },
  { name: "Students", icon: "♙" },
  { name: "Leaderboard", icon: "♛" },
  { name: "Attendance", icon: "✓" }
];

export default function Sidebar({ page, setPage }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-mark">S</div>
        <div><strong>StudentHub</strong><span>Student Workspace</span></div>
      </div>

      <p className="nav-label">WORKSPACE</p>
      <nav className="nav-list">
        {items.map(item => (
          <button
            key={item.name}
            className={`nav-item ${page === item.name ? "selected" : ""}`}
            onClick={() => setPage(item.name)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.name}</span>
            {page === item.name && <span className="nav-indicator" />}
          </button>
        ))}
      </nav>

      <div className="sidebar-help">
        <div className="help-icon">✦</div>
        <strong>Keep growing</strong>
        <p>Every student has the potential to do something great.</p>
      </div>

      <div className="sidebar-user">
        <div className="user-avatar">R</div>
        <div><strong>Ritesh Vanjare</strong><span>Website user</span></div>
        <span className="online-dot" />
      </div>
    </aside>
  );
}
