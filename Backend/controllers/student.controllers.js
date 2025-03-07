const studentController = (req, res, next) => {
  try {
    console.log("This is Student Page");
  } catch (error) {
    next(error);
  }
};

module.exports = studentController;
