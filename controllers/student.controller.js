const studentModel = require("../models/student.model");

const helloStd = (req, res, next) => {
  res.send("Hello from student route");
};

const stdSignUp = async (req, res, next) => {
  try {
    const { name, email, password, branch, classNm, rollNo } = req.body;
    const student = studentModel.create(req.body);

    res.status(201).json({
      message: "You are successfully signed up",
      data: {
        name: name,
        email: email,
        branch: branch,
        className: classNm,
        RollNo: rollNo,
      },
    });
  } catch (err) {
    next(err.message);
  }
};

module.exports = {
  helloStd,
  stdSignUp,
};
