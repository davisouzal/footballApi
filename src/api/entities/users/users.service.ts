import prismaClient from "@utils/prismaUtils";
import { UserType } from "./users.model";
import { User } from "@prisma/client";
import { IDeleteResponse } from "@interfaces/IDeleteResponse";

const { user } = prismaClient;

const findAll = async () : Promise<User[]> => {
  return user.findMany();
};

const findOne = async (userId: string) : Promise<User | null>=> {
  return user.findUnique({ where: { id: userId } });
};

const createOne = async (userData: UserType) : Promise<User> => {
    return user.create({ data: userData });
};

const updateOne = async (userId: string, userData: UserType) : Promise<User>=> {
    return user.update({ where: { id: userId }, data: userData });
};

const deleteOne = async (userId: string) : Promise<IDeleteResponse<User>> => {
    const userToDelete = await user.delete({ where: { id: userId } });
    return {
        message: "User deleted successfully",
        data: userToDelete,
    };
};

const usersService = {
    findAll,
    findOne,
    createOne,
    updateOne,
    deleteOne,
};

export default usersService;