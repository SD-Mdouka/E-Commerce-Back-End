// @desc  this class responsable about opertion errors
class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith(4) ? "Fail" : "error";
    this.isOperation = true;
  }
}
module.exports = ApiError;
