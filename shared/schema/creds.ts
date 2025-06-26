import * as z from "zod";

export const emailSchema = z
  .string()
  .email({ message: "Email format is invalid" });

export const passwordSchema = z
  .string()
  .min(5, { message: "Password is min 5 characters length" });
