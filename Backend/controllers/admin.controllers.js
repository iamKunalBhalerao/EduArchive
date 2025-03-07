const adminController = (req, res, next) => {
  try {
    res.send("This is Admin Route");
  } catch (error) {
    next(error);
  }
};

module.exports = adminController;
