import React from "react";
export default function Leaderboard({ students }) {
  const ranked = [...students].sort((a, b) => b.points - a.points);

  return (
    <section className="surface-card directory-surface">
      <div className="card-heading"><div><h3>Leaderboard</h3><p>Student performance ranked by points</p></div><span className="trophy-mark">♛</span></div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>RANK</th><th>STUDENT</th><th>ROLL NO.</th><th>DEPARTMENT</th><th>POINTS</th></tr></thead>
          <tbody>
            {ranked.map((s, i) => (
              <tr key={s.roll}>
                <td><span className={`rank rank-${i < 3 ? i + 1 : "other"}`}>{i + 1}</span></td>
                <td><div className="student-cell"><span className="student-avatar">{s.name.charAt(0)}</span><strong>{s.name}</strong></div></td>
                <td>{s.roll}</td><td>{s.department}</td><td><span className="points-badge">{s.points} pts</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        {students.length === 0 && <div className="empty-state">No students to rank yet.</div>}
      </div>
    </section>
  );
}
