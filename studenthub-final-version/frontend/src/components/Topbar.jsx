import React, { useState } from "react";

export default function Topbar({ page, user, onLogout }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="topbar-title">
        <p className="breadcrumb">Workspace <span>/</span> {page}</p>
        <h1>{page === "Dashboard" ? "Overview" : page}</h1>
      </div>

      <div className="topbar-actions">
        <div className="today-pill"><span>●</span> Personal workspace</div>
        <div className="profile-wrap">
          <button className="profile-button" onClick={() => setOpen(!open)}>
            <div className="profile-avatar">{user?.name?.charAt(0) || "R"}</div>
            <div className="profile-copy"><strong>{user?.name || "Ritesh Vanjare"}</strong><span>Website User</span></div>
            <span className="chevron">⌄</span>
          </button>
          {open && (
            <div className="profile-menu">
              <div className="profile-menu-heading">
                <strong>{user?.name || "Ritesh Vanjare"}</strong>
                <span>{user?.email || "ritesh@studenthub.com"}</span>
              </div>
              <button onClick={() => { setOpen(false); onLogout(); }}>
                <span>↪</span> Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
