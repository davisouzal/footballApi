import { z } from "zod";

export const AddressSchema = z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
})

export type AddressType = z.infer<typeof AddressSchema>;