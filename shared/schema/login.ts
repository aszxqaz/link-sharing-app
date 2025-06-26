import * as z from "zod";
import { emailSchema, passwordSchema } from "./creds";

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
