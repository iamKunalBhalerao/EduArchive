const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

// Accept Name, Roll No., class, Batch, Email, Password

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: Number,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const StudentModel = model("students", studentSchema);

module.exports = StudentModel;
