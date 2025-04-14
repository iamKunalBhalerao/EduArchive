const { Router } = require("express");
const { orgRegister } = require("../controllers/organisation.controller");
const organizationRouter = Router();

organizationRouter.post("/signup", orgRegister);
// organizationRouter.post("/login", orgLogin);

module.exports = organizationRouter;
