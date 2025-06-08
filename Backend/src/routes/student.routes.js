const { Router } = require("express");
const { helloStd, stdSignUp } = require("../controllers/student.controller");

const studentRouter = Router();

studentRouter.post("/signup", stdSignUp);

module.exports = studentRouter;
