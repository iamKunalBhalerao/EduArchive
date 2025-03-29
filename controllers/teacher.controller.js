const zod = require("zod");
const bcrypt = require("bcrypt");

const teacherModel = require("../models/teacher.model");

const tchrRegister = async (req, res, next) => {
  const { name, email, password, branch, subject, classNm } = req.body;

  const requireBody = zod.object({
    name: zod.string().min(2).max(120),
    email: zod.string().min(3).max(150).email(),
    branch: zod.string().nonempty(),
    subject: zod.string().nonempty(),
    classNm: zod.string().nonempty(),
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
      message: "Invalid Credentisls !",
      error: parseDataWithSuccess.error.errors[0].message,
    });
  }

  try {
    const existingTechr = await teacherModel.findOne({ email: email });

    if (existingTechr) {
      res.status(403).json({
        message: "User Alredy Exists",
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    await teacherModel.create([
      {
        name,
        email,
        password: hashedPassword,
        branch,
        subject,
        classNm,
      },
    ]);

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
