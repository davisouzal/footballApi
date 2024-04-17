import { z } from 'zod';

export const PlayerObject = z.object({
    name: z.string(),
    dateOfBirth: z.string().transform((val) => new Date(val).toISOString()),
    teamId: z.string(),
});

export type PlayerType = z.infer<typeof PlayerObject>;
export type PlayerWithId = PlayerType & { id: string };