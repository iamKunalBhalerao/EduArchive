const { Router } = require("express");
const teacherRouter = Router();

const tchrRegister = require("../controllers/teacher.controller");

teacherRouter.post("/register", tchrRegister);

module.exports = teacherRouter;
