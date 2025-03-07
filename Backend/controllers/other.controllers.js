const otherController = (req, res, next) => {
  try {
    res.send("See all Other Content");
  } catch (error) {
    next(error);
  }
};

const uploadOtherController = (req, res, next) => {
  try {
    res.send("Upload Other Content");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  otherController,
  uploadOtherController,
};
