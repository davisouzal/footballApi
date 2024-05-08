import { z } from "zod";

const UserRole = ["ADMIN", "USER"] as const;

const UserSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string().min(6),
  role: z.enum(UserRole),
  addressId: z.string().cuid(),
});

const AddressSchema = z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string().length(9),
});

export const RegisterSchema = z.union([UserSchema, AddressSchema]);
export type RegisterType = z.infer<typeof RegisterSchema>;

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});
export type LoginType = z.infer<typeof LoginSchema>;