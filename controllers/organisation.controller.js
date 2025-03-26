const orgsModel = require("../models/organization.model");

const orgRegister = async (req, res, next) => {
  try {
    const { name, email, password, secretKey } = req.body;

    const org = await orgsModel.create(req.body);

    res.status(201).json({
      message: "Organization registered successfully",
      data: {
        name: name,
        email: email,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { orgRegister };
