import { AnyZodObject } from "zod";

export default interface IRequestValidators {
    params?: AnyZodObject;
    body?: AnyZodObject;
    query?: AnyZodObject;
}