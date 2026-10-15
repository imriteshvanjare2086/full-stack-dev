# StudentHub Mini

A beginner-friendly Student Management System using React (Vite), Express, and CSS.

## Features
- Dummy login
- Dashboard with Total Students, Attendance, and Leaderboard cards
- Left sidebar navigation
- Profile menu with name and Logout
- Student list with add, edit, and delete
- Leaderboard sorted by points
- Attendance summary
- Responsive CSS dashboard

## Dummy login
- Email: ritesh@studenthub.com
- Password: ritesh123

This is a demo login only. It is not secure authentication and does not use a database.

## Run the backend
Open a terminal in `backend`:

```bash
npm install
npm start
```

The API runs at http://localhost:5000.

## Run the frontend
Open another terminal in `frontend`:

```bash
npm install
npm run dev
```

Open the local URL Vite prints, usually http://localhost:5173.

## Notes
- Student data is stored in a JavaScript array in the Express server.
- Data resets when the server restarts.
- The login is handled in React for demonstration only.


Main demo user: Ritesh Vanjare. His student record is preloaded (roll no. 100), and his points determine his live leaderboard rank. The backend stores demo records in memory, so changes reset when the server restarts.
