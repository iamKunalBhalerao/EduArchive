const adminController = (req, res, next) => {
  try {
    res.send("This is Admin Route");
  } catch (error) {
    res.status(403).json({
      error: error.message,
    });
    next();
  }
};

module.exports = adminController;
