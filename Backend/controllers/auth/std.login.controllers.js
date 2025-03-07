const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const StudentModel = require("../../models/student.model");

const stdLoginController = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const student = await StudentModel.findOne({ email: email });

    if (!student) {
      res.status(403).json({
        message: "User Not Found",
      });
    }

    const comparePassword = await bcrypt.compare(password, student.password);

    if (comparePassword) {
      const token = jwt.sign(
        { id: student._id },
        process.env.STUDENT_JWT_SECRET
      );

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

module.exports = stdLoginController;
