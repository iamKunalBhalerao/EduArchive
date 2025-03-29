const { Router } = require("express");
const teacherRouter = Router();

const tchrRegister = require("../controllers/teacher.controller");

teacherRouter.post("/signup", tchrRegister);

module.exports = teacherRouter;
