const imageController = (req, res, next) => {
  try {
    res.send("See All Images");
  } catch (error) {
    next(error);
  }
};

const uploadImageController = (req, res, next) => {
  try {
    res.send("See All Images");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  imageController,
  uploadImageController,
};
