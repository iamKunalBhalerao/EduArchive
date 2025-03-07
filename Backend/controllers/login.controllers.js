const loginController = (req, res, next) => {
  try {
    res.send("This is Login Router");
  } catch (error) {
    next(error);
  }
};

module.exports = loginController;
