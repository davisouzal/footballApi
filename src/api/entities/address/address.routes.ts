import { Router } from "express";
import addressController from "./address.controller";
import { validateRequestHandler } from "@api/middlewares/validateRequestHandler";
import { idObject } from "@utils/modelsUtils";
import { AddressSchema } from "./address.model";

const addressRouter = Router();

addressRouter.get("/address", addressController.getAddresses);

addressRouter.get(
    "/address/:id", 
    validateRequestHandler({
        params: idObject,
    }),
    addressController.getAddress
);

addressRouter.post(
    "/address",
    validateRequestHandler({
        body: AddressSchema,
    }),
    addressController.createAddress
);

addressRouter.put(
    "/address/:id",
    validateRequestHandler({
        params: idObject,
        body: AddressSchema,
    }),
    addressController.updateAddress
);

addressRouter.delete(
    "/address/:id",
    validateRequestHandler({
        params: idObject,
    }),
    addressController.deleteAddress
);

export default addressRouter;