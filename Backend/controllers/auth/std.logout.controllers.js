const stdLogoutController = (req, res) => {
  try {
    res.send("This is Logout Page");
  } catch (error) {
    res.status(403).json({
      error: error.message,
    });
    next();
  }
};

module.exports = stdLogoutController;
