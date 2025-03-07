const imageController = (req, res, next) => {
  try {
    res.send("See All Images");
  } catch (error) {
    res.status(403).json({
      error: error.message,
    });
    next();
  }
};

const uploadImageController = (req, res, next) => {
  try {
    res.send("See All Images");
  } catch (error) {
    res.status(403).json({
      error: error.message,
    });
    next();
  }
};

module.exports = {
  imageController,
  uploadImageController,
};
