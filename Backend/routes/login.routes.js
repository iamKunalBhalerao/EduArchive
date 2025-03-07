const { Router } = require("express");

const loginRouter = Router();

const loginController = require("../controllers/login.controllers.js");

loginRouter.get("/", loginController);

module.exports = loginRouter;
