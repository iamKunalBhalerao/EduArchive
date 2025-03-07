const studentController = (req, res, next) => {
  try {
    console.log("This is Student Page");
  } catch (error) {
    res.status(403).json({
      error: error.message,
    });
    next();
  }
};

module.exports = studentController;
