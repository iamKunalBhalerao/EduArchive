const authMiddleware = (req, res, next) => {
  try {
    console.log("This is Auth Middleware");
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authMiddleware;
