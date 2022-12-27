const globalError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  if (process.env.MODE_ENV === "development") {
    sendErrrorForDev(res, err);
  } else {
    sendErrrorForProd(res, err);
  }
};
const sendErrrorForDev = (res, err) => {
  return res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};
const sendErrrorForProd = (res, err) => {
  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};
module.exports = globalError;
