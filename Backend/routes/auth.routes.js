const { Router } = require("express");

const authRouter = Router();

const registerController = require("../controllers/register.controllers");
const loginController = require("../controllers/login.controllers");

authRouter.get("/register", registerController);
authRouter.get("/Login", loginController);
authRouter.get("/Logout", registerController);

module.exports = authRouter;
