import { PrismaClient } from "~/generated/prisma";

export type User = {
  id: string;
  email: string;
};

export type UserWithPassword = {
  id: string;
  email: string;
  hashedpwd: string;
};

export interface UserService {
  find(email: string): Promise<User>;
  findWithPassword(email: string): Promise<UserWithPassword>;
}

export class PrismaUserService implements UserService {
  constructor(private readonly prisma: PrismaClient) {}

  find(email: string): Promise<User> {
    throw new Error("Method not implemented.");
  }

  findWithPassword(email: string): Promise<UserWithPassword> {
    throw new Error("Method not implemented.");
  }
}
