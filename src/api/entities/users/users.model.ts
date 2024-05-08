import { z } from "zod";

const UserRole = ['ADMIN', 'USER'] as const

export const UserSchema = z.object({
    email: z.string().email(),
    name: z.string(),
    password: z.string().min(6),
    role: z.enum(UserRole),
    addressId: z.string().cuid(),
})

export type UserType = z.infer<typeof UserSchema>;
