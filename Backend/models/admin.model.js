const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  classNm: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const AdminModel = model("admins", adminSchema);

module.exports = AdminModel;
