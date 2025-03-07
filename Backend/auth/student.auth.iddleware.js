const jwt = require("jsonwebtoken");
const StudentModel = require("../models/student.model");

const studentAuthMiddleware = async (req, res, next) => {
  try {
    let token;

    if (req.headers.token && req.headers.token.startsWith("Bearer")) {
      token = req.headers.token.split(" ")[1];
    }

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decodedToken = jwt.verify(token, process.env.STUDENT_JWT_SECRET);

    const student = await StudentModel.findById(decodedToken.id);

    if (!student) return res.status(401).json({ message: "Unauthorized" });

    req.user = student;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = studentAuthMiddleware;
