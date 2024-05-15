import { Request, Response, NextFunction } from "express";
import { LoginResponseType, LoginType, RegisterType } from "./account.model";
import { SignOptions, sign } from "jsonwebtoken";
import accountService from "./account.service";
import loginNotRight from "@utils/exceptions/loginNotRightError";
import { comparePassword, hashPassword } from "@utils/bcryptUtils";
import usersService from "@api/entities/users/users.service";

const loginUser = async (
  req: Request,
  res: Response<LoginResponseType>,
  next: NextFunction
) => {
  try {
    const possibleUser = await usersService.findByEmail(req.body.email);
    if (!possibleUser) {
      res.status(401);
      throw new loginNotRight();
    }
    const comparedPassword = await comparePassword(
      req.body.password,
      possibleUser.password
    );
    if (!comparedPassword) {
      res.status(401);
      throw new loginNotRight();
    }

    const jwtToken = sign(
      {
        id: possibleUser.id,
        name: possibleUser.name,
        role: possibleUser.role,
      },
      process.env.TOKEN_SECRET || "secret",
      { expiresIn: "3h" } as SignOptions
    );

    const userLogin = {
      id: possibleUser.id,
      name: possibleUser.name,
      email: possibleUser.email,
      role: possibleUser.role,
      addressId: possibleUser.addressId,
      userToken: jwtToken,
    };
    res.status(200).json(userLogin);
  } catch (error) {
    next(error);
  }
};

const registerUser = async (
  req: Request<{}, { message: string }, RegisterType>,
  res: Response<{ message: string }>,
  next: NextFunction
) => {
  try {
    const possibleUser = await usersService.findByEmail(req.body.email);
    if (possibleUser) {
      res.status(409);
      throw new Error("User already exists");
    }
    req.body.password = await hashPassword(req.body.password);
    await accountService.registerUser(req.body);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

const accountController = {
  loginUser,
  registerUser,
};

export default accountController;
