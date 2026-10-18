const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    roll: { type: String, required: true, trim: true },
    department: { type: String, required: true, trim: true },
    year: {
      type: String,
      enum: ["First Year", "Second Year", "Third Year", "Fourth Year"],
      default: "First Year"
    },
    points: { type: Number, default: 0, min: 0 },
    present: { type: Number, default: 0, min: 0 },
    absent: { type: Number, default: 0, min: 0 },
    isWebsiteUser: { type: Boolean, default: false }
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Student", studentSchema);
