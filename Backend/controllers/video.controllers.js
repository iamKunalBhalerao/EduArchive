const videoController = (req, res, next) => {
  try {
    res.send("See All Videos");
  } catch (error) {
    next(error);
  }
};

const uploadVideoController = (req, res, next) => {
  try {
    res.send("upload Video");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  videoController,
  uploadVideoController,
};
