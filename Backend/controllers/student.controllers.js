const studentController = (req, res, next) => {
  try {
    res.status(200).json({
      message: "Student is me",
    });
  } catch (error) {
    res.status(403).json({
      error: error.message,
    });
    next();
  }
};

module.exports = studentController;
