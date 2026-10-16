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

This is a demo login only. It is not secure authentication. Student records are stored in MongoDB; the demo login itself remains in the React frontend.

## Connect to MongoDB using MongoDB Compass
1. Install and start MongoDB Community Server on your computer.
2. Open MongoDB Compass and connect to `mongodb://127.0.0.1:27017`.
3. The backend uses the database named `studenthub`. It creates the database and `students` collection automatically when it first saves data.
4. The file `backend/.env` already uses the local connection string. If your MongoDB server uses a different address, update `MONGODB_URI` there.

## Run the backend
Open a terminal in `backend`:

```bash
npm install
npm start
```

The API runs at http://localhost:5000. On the first successful run, the original five demo students are inserted into MongoDB only if the `students` collection is empty. New, edited, and deleted student records are saved directly to MongoDB and persist after restarting the backend.

## Run the frontend
Open another terminal in `frontend`:

```bash
npm install
npm run dev
```

Open the local URL Vite prints, usually http://localhost:5173.

## Notes
- Student records and their present/absent day counts are stored in MongoDB using Mongoose.
- The backend no longer uses a JavaScript array as the student data store.
- MongoDB Compass is the graphical tool for viewing the `studenthub.students` collection.
- The login is handled in React for demonstration only and is not database-backed authentication.


Main demo user: Ritesh Vanjare. His student record is preloaded (roll no. 100), and his points determine his live leaderboard rank. The backend inserts demo records into MongoDB once when the database is empty. Subsequent changes persist in MongoDB.
