import * as z from "zod";

export const platforms = [
  "GitHub",
  "YouTube",
  "LinkedIn",
  "Dev.to",
  "Codewars",
  "freeCodeCamp",
  "GitLab",
  "Hashnode",
  "Stack Overflow",
] as const;

export const platformsEnum = z.enum(platforms);

export type Platform = z.infer<typeof platformsEnum>;
