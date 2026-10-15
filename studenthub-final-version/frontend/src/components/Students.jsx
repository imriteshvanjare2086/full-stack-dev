import React, { useState } from "react";

const blank = { name: "", roll: "", department: "", year: "First Year" };

export default function Students({ students, saveStudent, deleteStudent }) {
  const [form, setForm] = useState(blank);
  const [editIndex, setEditIndex] = useState(-1);

  function change(field, value) {
    setForm({ ...form, [field]: value });
  }

  function edit(student, index) {
    setForm({ name: student.name, roll: student.roll, department: student.department, year: student.year });
    setEditIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function submit(e) {
    e.preventDefault();
    const old = students[editIndex];
    const student = {
      ...form,
      points: editIndex === -1 ? 0 : old.points,
      present: editIndex === -1 ? 0 : old.present,
      absent: editIndex === -1 ? 0 : old.absent
    };
    saveStudent(student, editIndex).then(() => {
      setForm(blank);
      setEditIndex(-1);
    });
  }

  return (
    <>
      <section className="surface-card form-surface">
        <div className="card-heading"><div><h3>{editIndex === -1 ? "Add a student" : "Edit student"}</h3><p>Enter basic student information below.</p></div><span className="form-symbol">＋</span></div>
        <form className="student-form" onSubmit={submit}>
          <div className="field"><label>Full name</label><input value={form.name} onChange={e => change("name", e.target.value)} placeholder="e.g. Sam Taylor" required /></div>
          <div className="field"><label>Roll number</label><input value={form.roll} onChange={e => change("roll", e.target.value)} placeholder="e.g. 105" required /></div>
          <div className="field"><label>Department</label><input value={form.department} onChange={e => change("department", e.target.value)} placeholder="e.g. Computer Science" required /></div>
          <div className="field"><label>Academic year</label><select value={form.year} onChange={e => change("year", e.target.value)}><option>First Year</option><option>Second Year</option><option>Third Year</option><option>Fourth Year</option></select></div>
          <div className="form-actions">
            <button className="button button-primary" type="submit">{editIndex === -1 ? "＋ Add student" : "Save changes"}</button>
            {editIndex !== -1 && <button className="button button-quiet" type="button" onClick={() => { setForm(blank); setEditIndex(-1); }}>Cancel</button>}
          </div>
        </form>
      </section>

      <section className="surface-card directory-surface">
        <div className="card-heading"><div><h3>All students</h3><p>Manage student records and details</p></div><span className="count-badge">{students.length} records</span></div>
        <div className="table-wrap">
          <table>
            <thead><tr><th>STUDENT</th><th>ROLL NO.</th><th>DEPARTMENT</th><th>YEAR</th><th>ACTIONS</th></tr></thead>
            <tbody>
              {students.map((s, index) => (
                <tr key={s.roll}>
                  <td><div className="student-cell"><span className="student-avatar">{s.name.charAt(0)}</span><strong>{s.name}</strong></div></td>
                  <td>{s.roll}</td><td>{s.department}</td><td><span className="soft-badge">{s.year}</span></td>
                  <td><div className="row-actions"><button className="small-edit" onClick={() => edit(s, index)}>Edit</button><button className="small-delete" onClick={() => deleteStudent(index)}>Delete</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
          {students.length === 0 && <div className="empty-state">No students found. Add your first student above.</div>}
        </div>
      </section>
    </>
  );
}
