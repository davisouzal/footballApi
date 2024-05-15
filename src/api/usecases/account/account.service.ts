import prismaClient from "@utils/prismaUtils";
import { LoginType, RegisterType } from "./account.model";

const { user, address } = prismaClient;

const registerUser = async (data: RegisterType) : Promise<void> => {
    const newAddress = await address.create({
        data: {
            street: data.street,
            city: data.city,
            state: data.state,
            zip: data.zip,
        },
    });

    await user.create({
        data: {
            email: data.email,
            name: data.name,
            password: data.password,
            role: data.role,
            addressId: newAddress.id,
        },
    });
}

const accountService = {
    registerUser,
};

export default accountService;
