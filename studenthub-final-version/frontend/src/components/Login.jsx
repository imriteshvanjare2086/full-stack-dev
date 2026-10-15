import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("ritesh@studenthub.com");
  const [password, setPassword] = useState("ritesh123");
  const [error, setError] = useState("");

  function submit(e) {
    e.preventDefault();
    if (email === "ritesh@studenthub.com" && password === "ritesh123") {
      setError("");
      onLogin({ name: "Ritesh Vanjare", email: "ritesh@studenthub.com", role: "Website User" });
    } else {
      setError("Incorrect email or password. Try the demo credentials.");
    }
  }

  return (
    <div className="login-page">
      <div className="login-decoration decoration-one" />
      <div className="login-decoration decoration-two" />
      <section className="login-card">
        <div className="login-brand">
          <div className="brand-mark">S</div>
          <div><strong>StudentHub</strong><span>Student Workspace</span></div>
        </div>
        <div className="login-intro">
          <span className="eyebrow">WELCOME BACK, RITESH</span>
          <h1>Sign in to your<br />dashboard</h1>
          <p>Track your student profile, points, attendance and campus leaderboard in one place.</p>
        </div>
        <form onSubmit={submit} className="login-form">
          <label htmlFor="email">Email address</label>
          <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          {error && <p className="form-error">{error}</p>}
          <button className="button button-primary login-submit" type="submit">Sign in <span>→</span></button>
        </form>
        <div className="demo-note">
          <span className="demo-dot" />
          <div><strong>Demo access</strong><p>ritesh@studenthub.com · ritesh123</p></div>
        </div>
        <p className="login-footer">StudentHub · Student administration made simple</p>
      </section>
    </div>
  );
}
