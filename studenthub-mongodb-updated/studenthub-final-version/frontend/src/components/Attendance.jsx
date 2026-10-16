import React from "react";
function percent(student) {
  const total = student.present + student.absent;
  return total === 0 ? 0 : Math.round(student.present / total * 100);
}

export default function Attendance({ students }) {
  const average = students.length
    ? Math.round(students.reduce((sum, s) => sum + percent(s), 0) / students.length)
    : 0;

  return (
    <>
      <section className="attendance-overview">
        <div className="surface-card attendance-summary">
          <span className="summary-symbol green-symbol">✓</span>
          <p>Average attendance</p><h2>{average}%</h2>
          <span className="summary-note">Across all students</span>
        </div>
        <div className="surface-card attendance-summary">
          <span className="summary-symbol blue-symbol">♙</span>
          <p>Students tracked</p><h2>{students.length}</h2>
          <span className="summary-note">Current student records</span>
        </div>
      </section>
      <section className="surface-card directory-surface">
        <div className="card-heading"><div><h3>Attendance records</h3><p>Present and absent days for each student</p></div><span className="count-badge">{students.length} students</span></div>
        <div className="table-wrap">
          <table>
            <thead><tr><th>STUDENT</th><th>ROLL NO.</th><th>PRESENT DAYS</th><th>ABSENT DAYS</th><th>ATTENDANCE</th></tr></thead>
            <tbody>
              {students.map(s => (
                <tr key={s.roll}>
                  <td><div className="student-cell"><span className="student-avatar">{s.name.charAt(0)}</span><strong>{s.name}</strong></div></td>
                  <td>{s.roll}</td><td>{s.present}</td><td>{s.absent}</td>
                  <td><div className="attendance-cell"><div className="progress-track"><span style={{ width: `${percent(s)}%` }} /></div><strong>{percent(s)}%</strong></div></td>
                </tr>
              ))}
            </tbody>
          </table>
          {students.length === 0 && <div className="empty-state">No attendance records yet.</div>}
        </div>
      </section>
    </>
  );
}
