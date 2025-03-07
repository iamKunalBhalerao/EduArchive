const jwt = require('jsonwebtk')
const AdminModel = require("../models/admin.model");

const AdminAuthMiddleware = async (req, res, next) => {
  try {
    let token;

    if (req.headers.token && req.headers.token.startsWith("Bearer")) {
      token = req.headers.token.split(" ")[1];
    }

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decodedToken = jwt.verify(token, process.env.ADMIN_JWT_SECRET);

    const admin = await AdminModel.findById(decodedToken.id);

    if (!admin) return res.status(401).json({ message: "Unauthorized" });

    req.user = admin;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = AdminAuthMiddleware;
