import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import Students from "./components/Students";
import Leaderboard from "./components/Leaderboard";
import Attendance from "./components/Attendance";

const API = "http://localhost:5000/students";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("Dashboard");
  const [students, setStudents] = useState([]);

  function getStudents() {
    fetch(API).then(res => res.json()).then(setStudents).catch(() => {
      console.error("Could not connect to the backend. Is server.js running?");
    });
  }

  useEffect(() => {
    if (loggedIn) getStudents();
  }, [loggedIn]);

  function saveStudent(student, index) {
    const url = index === -1 ? API : `${API}/${index}`;
    const method = index === -1 ? "POST" : "PUT";

    return fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    }).then(() => getStudents());
  }

  function deleteStudent(index) {
    fetch(`${API}/${index}`, { method: "DELETE" }).then(() => getStudents());
  }

  if (!loggedIn) {
    return <Login onLogin={(account) => { setUser(account); setLoggedIn(true); }} />;
  }

  return (
    <div className="app-layout">
      <Sidebar page={page} setPage={setPage} />
      <main className="main-area">
        <Topbar page={page} user={user} onLogout={() => {
          setUser(null);
          setLoggedIn(false);
          setPage("Dashboard");
        }} />
        {page === "Dashboard" && (
          <Dashboard students={students} setPage={setPage} user={user} />
        )}
        {page === "Students" && (
          <Students students={students} saveStudent={saveStudent} deleteStudent={deleteStudent} />
        )}
        {page === "Leaderboard" && <Leaderboard students={students} />}
        {page === "Attendance" && <Attendance students={students} />}
      </main>
    </div>
  );
}
