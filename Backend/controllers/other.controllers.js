const otherController = (req, res, next) => {
  try {
    res.send("See all Other Content");
  } catch (error) {
    res.status(403).json({
      error: error.message,
    });
    next();
  }
};

const uploadOtherController = (req, res, next) => {
  try {
    res.send("Upload Other Content");
  } catch (error) {
    res.status(403).json({
      error: error.message,
    });
    next();
  }
};

module.exports = {
  otherController,
  uploadOtherController,
};
