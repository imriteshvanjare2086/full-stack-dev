
import React, { useState } from "react";

const blank = {
  name: "",
  roll: "",
  department: "",
  year: "First Year",
  points: 0,
  present: 0,
  absent: 0
};

export default function Students({ students, saveStudent, deleteStudent }) {
  const [form, setForm] = useState(blank);
  const [editIndex, setEditIndex] = useState(-1);

  function change(field, value) {
    setForm({ ...form, [field]: value });
  }

  function edit(student, index) {
    setForm({
      name: student.name,
      roll: student.roll,
      department: student.department,
      year: student.year,
      points: student.points ?? 0,
      present: student.present ?? 0,
      absent: student.absent ?? 0
    });

    setEditIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function submit(e) {
    e.preventDefault();

    const student = {
      ...form,
      points: Number(form.points),
      present: Number(form.present),
      absent: Number(form.absent)
    };

    saveStudent(student, editIndex).then(() => {
      setForm({ ...blank });
      setEditIndex(-1);
    });
  }

  function cancelEdit() {
    setForm({ ...blank });
    setEditIndex(-1);
  }

  // Sort students by points, highest first.
  // Keep the original index so Edit and Delete target the correct record.
  const sortedStudents = [...students]
    .map((student, originalIndex) => ({
      student,
      originalIndex
    }))
    .sort(
      (a, b) =>
        Number(b.student.points || 0) -
        Number(a.student.points || 0)
    );

  return (
    <div className="page-content">
      <div className="welcome-row">
        <div>
          <p className="section-kicker">STUDENT MANAGEMENT</p>
          <h2>Manage Students</h2>
          <p className="muted">
            Add, edit and manage all student records.
          </p>
        </div>
      </div>

      <div className="surface-card form-surface">
        <div className="card-heading">
          <div>
            <h3>
              {editIndex === -1 ? "Add New Student" : "Edit Student"}
            </h3>
            <p>Enter the student's details below.</p>
          </div>
          <div className="form-symbol">+</div>
        </div>

        <form className="student-form" onSubmit={submit}>
          <div className="field">
            <label>Student Name</label>
            <input
              type="text"
              placeholder="Enter student name"
              value={form.name}
              onChange={(e) => change("name", e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label>Roll Number</label>
            <input
              type="text"
              placeholder="Enter roll number"
              value={form.roll}
              onChange={(e) => change("roll", e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label>Department</label>
            <input
              type="text"
              placeholder="Enter department"
              value={form.department}
              onChange={(e) => change("department", e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label>Year</label>
            <select
              value={form.year}
              onChange={(e) => change("year", e.target.value)}
            >
              <option>First Year</option>
              <option>Second Year</option>
              <option>Third Year</option>
              <option>Fourth Year</option>
            </select>
          </div>

          <div className="field">
            <label>Points</label>
            <input
              type="number"
              min="0"
              placeholder="Enter points"
              value={form.points}
              onChange={(e) => change("points", e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label>Present Days</label>
            <input
              type="number"
              min="0"
              placeholder="Enter present days"
              value={form.present}
              onChange={(e) => change("present", e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label>Absent Days</label>
            <input
              type="number"
              min="0"
              placeholder="Enter absent days"
              value={form.absent}
              onChange={(e) => change("absent", e.target.value)}
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="button button-primary">
              {editIndex === -1 ? "+ Add Student" : "Update Student"}
            </button>

            {editIndex !== -1 && (
              <button
                type="button"
                className="button button-quiet"
                onClick={cancelEdit}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="surface-card directory-surface">
        <div className="card-heading">
          <div>
            <h3>All Students</h3>
            <p>{students.length} students registered</p>
          </div>
        </div>

        {students.length === 0 ? (
          <div className="empty-state">
            No students added yet.
          </div>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>STUDENT</th>
                  <th>ROLL NO.</th>
                  <th>DEPARTMENT</th>
                  <th>YEAR</th>
                  <th>POINTS</th>
                  <th>PRESENT</th>
                  <th>ABSENT</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>

              <tbody>
                {sortedStudents.map(({ student: s, originalIndex }) => (
                  <tr key={s.roll}>
                    <td>
                      <div className="student-cell">
                        <div className="student-avatar">
                          {s.name.charAt(0)}
                        </div>
                        <strong>{s.name}</strong>
                      </div>
                    </td>

                    <td>{s.roll}</td>
                    <td>{s.department}</td>
                    <td>{s.year}</td>

                    <td>
                      <span className="points-badge">
                        {s.points ?? 0}
                      </span>
                    </td>

                    <td>{s.present ?? 0}</td>
                    <td>{s.absent ?? 0}</td>

                    <td>
                      <div className="row-actions">
                        <button
                          type="button"
                          className="small-edit"
                          onClick={() => edit(s, originalIndex)}
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          className="small-delete"
                          onClick={() => deleteStudent(originalIndex)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
