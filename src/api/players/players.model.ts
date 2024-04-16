import { z } from 'zod';

const Player = z.object({
    name: z.string(),
    dateOfBirth: z.date(),
    teamId: z.string(),
});

export type PlayerType = z.infer<typeof Player>;