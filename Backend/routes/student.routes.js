const { Router } = require("express");

const studentController = require("../controllers/student.controllers");
const { documentsController } = require("../controllers/documents.controllers");
const { imageController } = require("../controllers/image.controllers");
const { videoController } = require("../controllers/video.controllers");
const { otherController } = require("../controllers/other.controllers");

const studentRouter = Router();

studentRouter.get("/:id", studentController);
studentRouter.get("/documents", documentsController);
studentRouter.get("/images", imageController);
studentRouter.get("/videos", videoController);
studentRouter.get("/other", otherController);

module.exports = studentRouter;
