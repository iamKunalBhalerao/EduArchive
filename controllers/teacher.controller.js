const teacherModel = require("../models/teacher.model");

const tchrRegister = async (req, res, next) => {
  const { name, email, password, branch, subject, classNm } = req.body;
  try {
    const teacher = await teacherModel.create(req.body);

    res.status(201).json({
      message: "Teacher registered successfully",
      data: {
        name: name,
        email: email,
        branch: branch,
        subject: subject,
        classNm: classNm,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = tchrRegister;
