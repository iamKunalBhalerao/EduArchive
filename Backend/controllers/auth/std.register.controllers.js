const StudentModel = require("../../models/student.model");

const stdRegisterController = async (req, res, next) => {
  const { name, rollNo, classNm, batch, email, password } = req.body;

  try {
    const student = await StudentModel.create({
      name,
      rollNo,
      classNm,
      batch,
      email,
      password,
    });

    res.status(200).json({
      message: "Student Registered Successfully",
    });
  } catch (error) {
    res.status(403).json({
      error: error.message,
    });
    next();
  }
};

module.exports = stdRegisterController;
