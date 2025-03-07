const { Router } = require("express");

const registerController = require("../controllers/register.controllers");

const registerRouter = Router();

registerRouter.get("/", registerController);

module.exports = registerRouter;
