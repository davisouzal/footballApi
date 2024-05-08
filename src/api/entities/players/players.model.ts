import { z } from 'zod';

export const PlayerSchema = z.object({
    name: z.string(),
    dateOfBirth: z.string(),
    teamId: z.string().cuid(),
});

export type PlayerType = z.infer<typeof PlayerSchema>;