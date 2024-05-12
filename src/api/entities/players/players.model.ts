import { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PlayerSchema = z.object({
    name: z.string(),
    dateOfBirth: z
    .instanceof(Date),
    teamId: z.string().cuid(),
});

export type PlayerType = z.infer<typeof PlayerSchema>;