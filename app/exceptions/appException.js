module.exports = class AppException extends Error {
  constructor(message, codeStatus) {
    super(message)
    this.resCode = codeStatus
  }
}