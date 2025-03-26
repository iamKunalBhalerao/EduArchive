const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
    enum: ["CSE", "IT", "ECE", "EEE", "MECH", "CIV"],
  },
  classNm: {
    type: String,
    required: true,
    enum: ["FE", "SE", "TE", "BE"],
  },
  rollNo: {
    type: Number,
    required: true,
    unique: true,
  },
});

const studentModel = model("students", studentSchema);

module.exports = studentModel;
