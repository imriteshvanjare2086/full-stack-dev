require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Student = require("./models/Student");

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/studenthub")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Get all students
app.get("/students", async (req, res) => {
    const students = await Student.find().sort({ _id: 1 });

    res.json(students.map(s => ({
        ...s.toObject(),
        id: s._id.toString()
    })));
});

// Add a student
app.post("/students", async (req, res) => {
    const student = await Student.create(req.body);

    res.json({ message: "Student added successfully", id: student._id });
});

// Update a student using its index
app.put("/students/:index", async (req, res) => {
    const students = await Student.find().sort({ _id: 1 });
    const student = students[req.params.index];

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    await Student.findByIdAndUpdate(student._id, req.body);

    res.json({ message: "Student updated successfully" });
});

// Delete a student using its index
app.delete("/students/:index", async (req, res) => {
    const students = await Student.find().sort({ _id: 1 });
    const student = students[req.params.index];

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    await Student.findByIdAndDelete(student._id);

    res.json({ message: "Student deleted successfully" });
});

// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
