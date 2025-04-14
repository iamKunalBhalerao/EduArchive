const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const teacherSchema = new Schema(
  {
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
    subject: {
      type: String,
      required: true,
    },
    classNm: {
      type: String,
      required: true,
      enum: ["FE", "SE", "TE", "BE"],
    },
  },
  { timestamps: true }
);

const teacherModel = model("teachers", teacherSchema);

module.exports = teacherModel;
