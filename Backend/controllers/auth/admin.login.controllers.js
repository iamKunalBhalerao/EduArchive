const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const AdminModel = require("../../models/admin.model");

const adminLoginController = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const admin = await AdminModel.findOne({ email: email });

    if (!admin) {
      res.status(403).json({
        message: "User Not Found",
      });
    }

    const comparePassword = await bcrypt.compare(password, admin.password);

    if (comparePassword) {
      const token = jwt.sign({ id: admin._id }, process.env.ADMIN_JWT_SECRET);

      res.status(200).json({
        token,
      });
    } else {
      res.status(403).json({
        message: "Invalid Password",
      });
    }
  } catch (error) {
    res.status(403).json({
      error: error.message,
    });
    next();
  }
};

module.exports = adminLoginController;
