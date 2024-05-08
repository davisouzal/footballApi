import { z } from 'zod';

export const idObject = z.object({
    id: z.string().cuid(),
});

export type IdType = z.infer<typeof idObject>;