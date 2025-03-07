const { Router } = require("express");

const adminRouter = Router();

// Admin Controllers
const adminController = require("../controllers/admin.controllers.js");

const {
  documentsController,
  uploadDocumentController,
} = require("../controllers/documents.controllers.js");

const {
  imageController,
  uploadImageController,
} = require("../controllers/image.controllers.js");

const {
  videoController,
  uploadVideoController,
} = require("../controllers/video.controllers.js");

const {
  otherController,
  uploadOtherController,
} = require("../controllers/other.controllers.js");

// Admin Authentication requires
const adminRegisterController = require("../controllers/auth/admin.register.controllers.js");
const adminLoginController = require("../controllers/auth/admin.login.controllers.js");
const adminLogoutController = require("../controllers/auth/admin.logout.controllers.js");

// Authentication
adminRouter.post("/register", adminRegisterController);
adminRouter.post("/login", adminLoginController);
adminRouter.post("/logout", adminLogoutController);

// Admin Routes
adminRouter.get("/:id", adminController);
adminRouter.get("/documents", documentsController);
adminRouter.get("/images", imageController);
adminRouter.get("/videos", videoController);
adminRouter.get("/other", otherController);

// Upload Routes
adminRouter.get("/:id/upload-doc", uploadDocumentController);
adminRouter.get("/:id/upload-img", uploadImageController);
adminRouter.get("/:id/upload-vid", uploadVideoController);
adminRouter.get("/:id/upload-other", uploadOtherController);

module.exports = adminRouter;
