import { z } from "zod";

export const FileModel = z.string();

export type FileType = z.infer<typeof FileModel>;
