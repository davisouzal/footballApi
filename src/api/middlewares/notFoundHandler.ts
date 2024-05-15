import { Request, Response, NextFunction } from "express";
import pageNotFoundError from "../../utils/exceptions/pageNotFoundError";

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  res.status(404);
  const error = new pageNotFoundError(req.originalUrl);
  next(error);
};

export default notFoundHandler;
