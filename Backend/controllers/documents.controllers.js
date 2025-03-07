const documentsController = (req, res, next) => {
  try {
    res.send("See all Docs");
  } catch (error) {
    res.status(403).json({
      error: error.message,
    });
    next();
  }
};

const uploadDocumentController = (req, res, next) => {
  try {
    res.send("This is upload document controller");
  } catch (error) {
    res.status(403).json({
      error: error.message,
    });
    next();
  }
};

module.exports = {
  documentsController,
  uploadDocumentController,
};
