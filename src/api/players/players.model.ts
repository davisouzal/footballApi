import { z } from 'zod';

export const PlayerObject = z.object({
    name: z.string(),
    dateOfBirth: z.coerce.date(),
    teamId: z.string(),
});

export const PlayerWithIdObject = PlayerObject.extend({
    id: z.string().cuid(),
});

export type PlayerType = z.infer<typeof PlayerObject>;
export type PlayerWithIdType = z.infer<typeof PlayerWithIdObject>;