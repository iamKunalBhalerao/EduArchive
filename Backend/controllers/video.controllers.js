const videoController = (req, res, next) => {
  try {
    res.send("See All Videos");
  } catch (error) {
    res.status(403).json({
      error: error.message,
    });
    next();
  }
};

const uploadVideoController = (req, res, next) => {
  try {
    res.send("upload Video");
  } catch (error) {
    res.status(403).json({
      error: error.message,
    });
    next();
  }
};

module.exports = {
  videoController,
  uploadVideoController,
};
