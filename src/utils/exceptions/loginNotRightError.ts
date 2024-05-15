export default class loginNotRight extends Error {
  constructor() {
    super(`🔑 - Login not right - Please check your email and password`);
    this.name = "pageNotFoundError";
    Object.setPrototypeOf(this, loginNotRight.prototype);
  }
}
