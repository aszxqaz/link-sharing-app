import * as z from "zod";
import { platformsEnum } from "./platform";

export const updateProfileSchema = z.object({
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  links: z.record(platformsEnum, z.string().url()),
  imgSrc: z.string(),
});

export type UpdateProfileSchema = z.infer<typeof updateProfileSchema>;
