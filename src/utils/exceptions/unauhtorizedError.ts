    export default class unauthorizedError extends Error {
      constructor() {
        super(
          `Hmm.... It seems that you are not allowed to access this route.`
        );
        this.name = "UnauthorizedError";
        Object.setPrototypeOf(this, unauthorizedError.prototype);
      }
    }