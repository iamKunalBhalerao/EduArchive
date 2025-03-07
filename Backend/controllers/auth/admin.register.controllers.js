const zod = require("zod");
const bcrypt = require("bcrypt");
const AdminModel = require("../../models/admin.model");

const adminRegisterController = async (req, res, next) => {
  const { name, classNm, subject, email, password } = req.body;

  const requireBody = zod.object({
    name: zod.string().min(3).max(100),
    classNm: zod.string().min(0).max(100),
    subject: zod.string().min(0).max(100),
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

    const admin = await AdminModel.create({
      name,
      classNm,
      subject,
      email,
      password: hashedpassword,
    });

    res.status(200).json({
      message: "Admin Registered Successfully",
      data: {
        name: admin.name,
        ClassName: admin.classNm,
        Subject: admin.subject,
        Email: admin.email,
      },
    });
  } catch (error) {
    res.status(403).json({
      error: error.message,
    });
    next();
  }
};

module.exports = adminRegisterController;
