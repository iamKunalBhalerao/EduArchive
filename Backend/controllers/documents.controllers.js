const documentsController = (req, res, next) => {
  try {
    res.send("See all Docs");
  } catch (error) {
    next(error);
  }
};

const uploadDocumentController = (req, res, next) => {
  try {
    res.send("This is upload document controller");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  documentsController,
  uploadDocumentController,
};
