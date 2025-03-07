const adminLoginController = (req, res, next) => {
  try {
    res.send("This is Login Router");
    next();
  } catch (error) {
    res.status(403).json({
      error: error.message,
    });
    next();
  }
};

module.exports = adminLoginController;
