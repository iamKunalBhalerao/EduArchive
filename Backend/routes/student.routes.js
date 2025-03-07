const { Router } = require("express");

// Student Controllers
const studentController = require("../controllers/student.controllers");
const { documentsController } = require("../controllers/documents.controllers");
const { imageController } = require("../controllers/image.controllers");
const { videoController } = require("../controllers/video.controllers");
const { otherController } = require("../controllers/other.controllers");

// Student Authentication requires
const stdRegisterController = require("../controllers/auth/std.register.controllers");
const stdLoginController = require("../controllers/auth/std.login.controllers");
const stdLogoutController = require("../controllers/auth/std.logout.controllers");
const studentAuthMiddleware = require("../auth/student.auth.iddleware");

const studentRouter = Router();

// Student Authentication Routes
studentRouter.post("/register", stdRegisterController);
studentRouter.post("/login", stdLoginController);
studentRouter.post("/logout", stdLogoutController);

// Student Routes
studentRouter.get("/", studentAuthMiddleware, studentController);
studentRouter.get("/documents", documentsController);
studentRouter.get("/images", imageController);
studentRouter.get("/videos", videoController);
studentRouter.get("/other", otherController);

module.exports = studentRouter;
