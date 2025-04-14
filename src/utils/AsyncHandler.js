const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch {
    (error) => {
      res.status(error.status || 400).json({
        success: false,
        message: error.message,
      });
    };
  }
};

// OR - Promise Approach

// const asyncHandler = (requestHandler) => {
//     (req, res, next) => {
//         Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
//     }
// }

export { asyncHandler };
