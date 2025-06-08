const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const orgsSchema = new Schema(
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
    secretKey: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const orgsModel = model("organizations", orgsSchema);

module.exports = orgsModel;
