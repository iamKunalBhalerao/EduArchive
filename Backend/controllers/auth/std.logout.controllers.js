const stdLogoutController = (req, res) => {
  try {
    res.send("This is Logout Page");
  } catch (error) {
    next(error);
  }
};

module.exports = stdLogoutController;
