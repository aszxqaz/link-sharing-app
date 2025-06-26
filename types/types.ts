import {
  PlatformCodewars,
  PlatformDevTo,
  PlatformFreeCodeCamp,
  PlatformGithub,
  PlatformGitLab,
  PlatformHashnode,
  PlatformLinkedin,
  PlatformStackOverflow,
  PlatformYoutube,
} from "#components";
import type { Platform } from "~/shared/schema/platform";

export type ProfileDetails = {
  firstName: string;
  lastName: string;
  email: string;
};

export type PlatformLink = {
  platform: Platform;
  url: string;
};

export function getIcon(p: Platform): Object {
  switch (p) {
    case "GitHub":
      return PlatformGithub;
    case "YouTube":
      return PlatformYoutube;
    case "LinkedIn":
      return PlatformLinkedin;
    case "Dev.to":
      return PlatformDevTo;
    case "Codewars":
      return PlatformCodewars;
    case "freeCodeCamp":
      return PlatformFreeCodeCamp;
    case "GitLab":
      return PlatformGitLab;
    case "Hashnode":
      return PlatformHashnode;
    case "Stack Overflow":
      return PlatformStackOverflow;
  }
}

export function getColor(p: Platform): string {
  switch (p) {
    case "GitHub":
      return "var(--color-grey-950)";
    case "YouTube":
      return "var(--color-red-550)";
    case "LinkedIn":
      return "var(--color-blue-500)";
    case "Dev.to":
      return "var(--color-grey-900)";
    case "Codewars":
      return "var(--color-pink-900)";
    case "freeCodeCamp":
      return "var(--color-purple-950)";
    case "GitLab":
      return "var(--color-orange-500)";
    case "Hashnode":
      return "var(--color-blue-800)";
    case "Stack Overflow":
      return "var(--color-orange-600)";
  }
}
