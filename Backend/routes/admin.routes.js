const { Router } = require("express");

const adminRouter = Router();

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

adminRouter.get("/:id", adminController);
adminRouter.get("/documents", documentsController);
adminRouter.get("/images", imageController);
adminRouter.get("/videos", videoController);
adminRouter.get("/other", otherController);

adminRouter.get("/:id/upload-doc", uploadDocumentController);
adminRouter.get("/:id/upload-img", uploadImageController);
adminRouter.get("/:id/upload-vid", uploadVideoController);
adminRouter.get("/:id/upload-other", uploadOtherController);

module.exports = adminRouter;
