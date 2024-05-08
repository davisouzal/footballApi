import { z } from 'zod';

export const PlayerSchema = z.object({
    name: z.string(),
    dateOfBirth: z
    .string()
    .refine(
        (dateOfBirth) => dateOfBirth.match(/^\d{4}-\d{2}-\d{2}$/),
        (dateOfBirth) => ({
            message: `Invalid date format for ${dateOfBirth}. Please use YYYY-MM-DD`,
        })
    )
    .transform((date) => new Date(date).toISOString()),
    teamId: z.string().cuid(),
});

export type PlayerType = z.infer<typeof PlayerSchema>;