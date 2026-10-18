const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let students = [
  { name: "Ritesh Vanjare", roll: "100", department: "Information Technology", year: "Third Year", points: 98, present: 19, absent: 1, isWebsiteUser: true },
  { name: "Aarav Sharma", roll: "101", department: "Computer Science", year: "Third Year", points: 95, present: 18, absent: 2 },
  { name: "Priya Patil", roll: "102", department: "Information Technology", year: "Second Year", points: 88, present: 19, absent: 1 },
  { name: "Rohan Deshmukh", roll: "103", department: "Computer Science", year: "Third Year", points: 76, present: 16, absent: 4 },
  { name: "Ananya Kulkarni", roll: "104", department: "Electronics", year: "First Year", points: 84, present: 17, absent: 3 }
];

app.get("/students", (req, res) => res.json(students));

app.post("/students", (req, res) => {
  students.push(req.body);
  res.json(students);
});

app.put("/students/:index", (req, res) => {
  const index = Number(req.params.index);
  if (index < 0 || index >= students.length) {
    return res.status(404).json({ message: "Student not found" });
  }
  students[index] = req.body;
  res.json(students);
});

app.delete("/students/:index", (req, res) => {
  const index = Number(req.params.index);
  if (index < 0 || index >= students.length) {
    return res.status(404).json({ message: "Student not found" });
  }
  students.splice(index, 1);
  res.json(students);
});

app.listen(5000, () => console.log("StudentHub API running at http://localhost:5000"));
