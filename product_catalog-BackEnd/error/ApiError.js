class ApiError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this. message = message;
  }

  static badRequst(message) {
    return new ApiError(404, message);
  }

  static internal(message) {
    return new ApiError(403, message);
  }
}

module.exports = ApiError;
