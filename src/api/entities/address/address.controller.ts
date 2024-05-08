import { Address } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import addressService from "./address.service";
import { IdType } from "@utils/modelsUtils";
import objectNotFoundError from "@utils/exceptions/objectNotFoundError";
import { IDeleteResponse } from "@interfaces/IDeleteResponse";

const getAddresses = async (
    req: Request,
    res: Response<Address[]>,
    next: NextFunction
    ) => {
    try {
        const addresses = await addressService.findAll();
        res.status(200).send(addresses);
    } catch (error) {
        next(error);
    }
};

const getAddress = async (
    req: Request<IdType>,
    res: Response<Address>,
    next: NextFunction
    ) => {
    try {
        const address = await addressService.findOne(req.params.id);
        if (!address) {
            res.status(404);
            const error = new objectNotFoundError("Address", req.params.id);
            next(error);
        }
        res.status(200).send(address as Address);
    } catch (error) {
        next(error);
    }
}

const createAddress = async (
    req: Request,
    res: Response<Address>,
    next: NextFunction
) => {
    try {
        const createResult = await addressService.createOne(req.body);
        res.status(201).send(createResult);
    } catch (error) {
        next(error);
    }
};

const updateAddress = async (
    req: Request<IdType>,
    res: Response<Address>,
    next: NextFunction
) => {
    try {
        const updateResult = await addressService.updateOne(
            req.params.id,
            req.body
        );
        res.status(200).send(updateResult);
    } catch (error) {
        next(error);
    }
};

const deleteAddress = async (
    req: Request<IdType>,
    res: Response<IDeleteResponse<Address>>,
    next: NextFunction
) => {
    try {
        await addressService.deleteOne(req.params.id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

const addressController = {
    getAddresses,
    getAddress,
    createAddress,
    updateAddress,
    deleteAddress,
};

export default addressController;