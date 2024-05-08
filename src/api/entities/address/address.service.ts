import { Address } from "@prisma/client";
import prismaClient from "@utils/prismaUtils";
import { AddressType } from "./address.model";
import { IDeleteResponse } from "@interfaces/IDeleteResponse";

const { address } = prismaClient;

const findAll = async (): Promise<Address[]> => {
    return address.findMany();
};

const findOne = async (addressId: string): Promise<Address | null> => {
    return address.findUnique({ where: { id: addressId } });
};

const createOne = async (addressData: AddressType): Promise<Address> => {
    return address.create({ data: addressData });
};

const updateOne = async (addressId: string, addressData: AddressType): Promise<Address> => {
    return address.update({ where: { id: addressId }, data: addressData });
};

const deleteOne = async (addressId: string): Promise<IDeleteResponse<Address>> => {
    const addressToDelete = await address.delete({ where: { id: addressId } });
    return {
        message: "Address deleted successfully",
        data: addressToDelete,
    };
};

const addressService = {
    findAll,
    findOne,
    createOne,
    updateOne,
    deleteOne,
};

export default addressService;