export default class objectNotFoundError extends Error {
    constructor(object:string, id:string) {
      super(`Error: Object not found - ${object}:${id}`);
      this.name = 'pageNotFoundError';
      Object.setPrototypeOf(this, objectNotFoundError.prototype);
    }
  }