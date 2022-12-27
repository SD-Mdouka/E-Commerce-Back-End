const globalError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.statusCode = res.statusCode || 500;
  error.status(err.statusCode).json({
    status: err.status,
    error: err,
    mmessage: err.mmessage,
    status: err.status,
  });
};
module.exports = globalError;
