const adminRegisterController = (req, res, next) => {
  try {
    res.send("This is register controller");
  } catch (error) {
    res.status(403).json({
      error: error.message,
    });
    next();
  }
};

module.exports = adminRegisterController;
