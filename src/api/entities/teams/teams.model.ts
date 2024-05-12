import { z } from "zod";

export const TeamSchema = z.object({
    name: z.string(),
    
})

export type TeamType = z.infer<typeof TeamSchema>;