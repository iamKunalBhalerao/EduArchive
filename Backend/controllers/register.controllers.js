const registerController = (req, res, next) => {
  try {
    res.send("This is register controller");
  } catch (error) {
    next(error);
  }
};

module.exports = registerController;
