const zod = require("zod");
const bcrypt = require("bcrypt");

const orgsModel = require("../models/organization.model");

const orgRegister = async (req, res, next) => {
  const { name, email, password, secretKey } = req.body;

  const requireBody = zod.object({
    name: zod.string().min(3).max(150).nonempty(),
    email: zod.string().min(3).max(180).email(),
    secretKey: zod.string().min(8).max(12).nonempty(),
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
      message: "Some Credentials are Incorrect !",
      error: parseDataWithSuccess.error.errors[0].message,
    });
  }

  try {
    const existingOrg = await orgsModel.findOne({ email: email });

    if (existingOrg) {
      res.status(403).json({
        message: "Organization Alredy Exists!",
      });
    }

    const hashedPassword = bcrypt.hash(password, 10);
    const HashKey = bcrypt.hash(secretKey, 5);

    await orgsModel.create([
      { name, email, password: hashedPassword, secretKey: HashKey },
    ]);

    res.status(201).json({
      message: "Organization registered successfully",
      data: {
        name: name,
        email: email,
        secretKey: secretKey + "Do Not share this key with anyone !",
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { orgRegister };
