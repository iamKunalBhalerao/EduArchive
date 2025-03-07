const zod = require("zod");
const bcrypt = require("bcrypt");

const StudentModel = require("../../models/student.model");

const stdRegisterController = async (req, res, next) => {
  const { name, rollNo, classNm, batch, email, password } = req.body;

  const requireBody = zod.object({
    name: zod.string().min(3).max(100),
    rollNo: zod.number().min(1).max(10000),
    classNm: zod.string().min(0).max(100),
    batch: zod.string().min(0).max(100),
    email: zod.string().min(5).max(150).email(),
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

  const parseStdBodySuccess = requireBody.safeParse(req.body);

  if (!parseStdBodySuccess) {
    res.status(403).json({
      message: "Invalid Email or Password",
    });
  }

  try {
    const hashedpassword = await bcrypt.hash(password, 10);

    const student = await StudentModel.create({
      name,
      rollNo,
      classNm,
      batch,
      email,
      password: hashedpassword,
    });

    res.status(200).json({
      message: "Student Registered Successfully",
      data: {
        name: student.name,
        RollNo: student.rollNo,
        ClassName: student.classNm,
        Batch: student.batch,
        Email: student.email,
      },
    });
  } catch (error) {
    res.status(403).json({
      error: error.message,
    });
    next();
  }
};

module.exports = stdRegisterController;
