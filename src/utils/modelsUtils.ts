import { z } from 'zod';

const idObject = z.object({
    id: z.string().cuid(),
});

export default idObject;