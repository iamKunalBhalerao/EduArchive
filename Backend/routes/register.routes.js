const { Router } = require("express");

const registerRouter = Router();

const registerController = require("../controllers/register.controllers.js");

registerRouter.get("/", registerController);

module.exports = registerRouter;
