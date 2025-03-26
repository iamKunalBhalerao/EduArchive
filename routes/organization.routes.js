const { Router } = require("express");
const { orgRegister } = require("../controllers/organisation.controller");
const organizationRouter = Router();

organizationRouter.post("/register", orgRegister);
// organizationRouter.post("/login", orgLogin);

module.exports = organizationRouter;
