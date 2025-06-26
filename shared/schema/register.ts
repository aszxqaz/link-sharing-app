import * as z from "zod";
import { emailSchema, passwordSchema } from "./creds";

export const registerSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
