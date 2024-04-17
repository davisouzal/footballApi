export default class pageNotFoundError extends Error {
  constructor(originalUrl:string) {
    super(`🔍 - Not Found - ${originalUrl}`);
    this.name = 'pageNotFoundError';
    Object.setPrototypeOf(this, pageNotFoundError.prototype);
  }
}