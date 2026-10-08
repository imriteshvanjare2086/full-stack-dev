const express = require("express");

const app = express();

app.use(express.json());

const arr = [5, 2, 8, 1, 9, 3];

// Get original array
app.get("/array", (req, res) => {
  res.json(arr);
});

// Sort ascending
app.get("/array/sort", (req, res) => {
  const result = [...arr].sort((a, b) => a - b);
  res.json(result);
});

// Sort descending
app.get("/array/sort-desc", (req, res) => {
  const result = [...arr].sort((a, b) => b - a);
  res.json(result);
});

// Reverse
app.get("/array/reverse", (req, res) => {
  const result = [...arr].reverse();
  res.json(result);
});

// Map
app.get("/array/map", (req, res) => {
  const result = arr.map((num) => num * 2);
  res.json(result);
});

// Filter
app.get("/array/filter", (req, res) => {
  const result = arr.filter((num) => num > 5);
  res.json(result);
});

// Find
app.get("/array/find", (req, res) => {
  const result = arr.find((num) => num > 5);
  res.json(result);
});

// Includes
app.get("/array/includes/:num", (req, res) => {
  const num = Number(req.params.num);
  const result = arr.includes(num);

  res.json(result);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});