const zod = require("zod");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const studentModel = require("../models/student.model");

const stdSignUp = async (req, res, next) => {
  const { name, email, password, branch, classNm, rollNo } = req.body;

  const requireBody = zod.object({
    name: zod.string().min(3).max(100).nonempty(),
    email: zod.string().min(3).max(150).email(),
    branch: zod.string().nonempty(),
    classNm: zod.string().nonempty(),
    rollNo: zod.number().int(),
    password: zod
      .string()
      .min(3)
      .max(100)
      .refine((value) => /[A-Z]/.test(value), {
        message: "Password must contain at least one uppercase letter",
      })
      .refine((value) => /[a-z]/.test(value), {
        message: "Password must contain at least one lowercase letter",
      })
      .refine((value) => /\d/.test(value), {
        message: "Password must contain at least one digit",
      })
      .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
        message: "Password must contain at least one special character",
      }),
  });

  const parseDataWithSuccess = requireBody.safeParse(req.body);

  if (!parseDataWithSuccess.success) {
    res.status(403).json({
      message: "Invalid Email or Password",
      error: parseDataWithSuccess.error.errors[0].message,
    });
    return;
  }
  try {
    const existingStd = await studentModel.findOne({ email: email });
    if (existingStd) {
      return res.status(400).json({
        message: "Student already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await studentModel.create([
      {
        name,
        email,
        password: hashedPassword,
        branch,
        classNm,
        rollNo,
      },
    ]);

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
    next(err);
  }
};

module.exports = {
  stdSignUp,
};
