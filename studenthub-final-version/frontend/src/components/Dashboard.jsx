import React from "react";
function attendance(student) {
  const total = student.present + student.absent;
  return total === 0 ? 0 : Math.round(student.present / total * 100);
}

export default function Dashboard({ students, setPage, user }) {
  const avg = students.length
    ? Math.round(students.reduce((sum, s) => sum + attendance(s), 0) / students.length)
    : 0;
  const ranked = [...students].sort((a, b) => b.points - a.points);
  const leaders = ranked.slice(0, 3);
  const myRank = ranked.findIndex(s => s.name.toLowerCase() === "ritesh vanjare") + 1;
  const me = ranked.find(s => s.name.toLowerCase() === "ritesh vanjare");

  return (
    <>
      <section className="welcome-row">
        <div>
          <p className="section-kicker">YOUR CAMPUS AT A GLANCE</p>
          <h2>Welcome back, {user?.name?.split(" ")[0] || "Ritesh"} <span>✦</span></h2>
          <p className="muted">Your student profile, campus activity and performance at a glance.</p>
        </div>
        <div className="date-chip"><span>◷</span> Student overview</div>
      </section>

      <section className="stats-grid">
        <button className="stat-card stat-blue" onClick={() => setPage("Students")}>
          <div className="stat-top"><span className="stat-icon">♙</span><span className="stat-arrow">↗</span></div>
          <p>Total students</p><h3>{students.length}</h3>
          <span className="stat-link">View student directory <b>→</b></span>
        </button>
        <button className="stat-card stat-green" onClick={() => setPage("Attendance")}>
          <div className="stat-top"><span className="stat-icon">✓</span><span className="stat-arrow">↗</span></div>
          <p>Average attendance</p><h3>{avg}<small>%</small></h3>
          <span className="stat-link">View attendance report <b>→</b></span>
        </button>
        <button className="stat-card stat-amber" onClick={() => setPage("Leaderboard")}>
          <div className="stat-top"><span className="stat-icon">♛</span><span className="stat-arrow">↗</span></div>
          <p>Leaderboard</p><h3>{students.length}<small> ranked</small></h3>
          <span className="stat-link">Explore top performers <b>→</b></span>
        </button>
      </section>

      <section className="personal-highlight surface-card">
        <div className="personal-avatar">R</div>
        <div className="personal-copy"><span className="section-kicker">YOUR PERFORMANCE</span><h3>Ritesh Vanjare</h3><p>Information Technology · Third Year · Roll No. 100</p></div>
        <div className="personal-metric"><span>Leaderboard rank</span><strong>#{myRank || "—"}</strong></div>
        <div className="personal-metric"><span>Total points</span><strong>{me ? me.points : 0} <small>pts</small></strong></div>
        <button className="button button-primary" onClick={() => setPage("Leaderboard")}>View my rank →</button>
      </section>

      <section className="dashboard-grid">
        <div className="surface-card recent-card">
          <div className="card-heading">
            <div><h3>Student directory</h3><p>Recently added student records</p></div>
            <button className="text-button" onClick={() => setPage("Students")}>View all →</button>
          </div>
          <div className="table-wrap">
            <table>
              <thead><tr><th>STUDENT</th><th>ROLL NO.</th><th>DEPARTMENT</th><th>YEAR</th></tr></thead>
              <tbody>
                {students.slice(-4).reverse().map(s => (
                  <tr key={s.roll}>
                    <td><div className="student-cell"><span className="student-avatar">{s.name.charAt(0)}</span><strong>{s.name}</strong></div></td>
                    <td>{s.roll}</td><td>{s.department}</td><td><span className="soft-badge">{s.year}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
            {students.length === 0 && <div className="empty-state">No students yet. Add your first student.</div>}
          </div>
        </div>

        <div className="surface-card leaderboard-card">
          <div className="card-heading"><div><h3>Top performers</h3><p>Ranked by points</p></div><span className="trophy-mark">♛</span></div>
          <div className="leader-list">
            {leaders.map((s, i) => (
              <div className="leader-row" key={s.roll}>
                <span className={`rank rank-${i + 1}`}>{i + 1}</span>
                <span className="student-avatar">{s.name.charAt(0)}</span>
                <div className="leader-name"><strong>{s.name}</strong><span>Roll no. {s.roll}</span></div>
                <strong className="leader-points">{s.points}<small> pts</small></strong>
              </div>
            ))}
            {leaders.length === 0 && <div className="empty-state">No student points yet.</div>}
          </div>
          <button className="full-width-link" onClick={() => setPage("Leaderboard")}>Open leaderboard <span>→</span></button>
        </div>
      </section>
      <p className="page-footnote">StudentHub <span>·</span> Simple tools for better student outcomes</p>
    </>
  );
}
