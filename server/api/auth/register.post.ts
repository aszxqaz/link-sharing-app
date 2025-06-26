import { hash } from "argon2";
import { registerSchema } from "~/shared/schema/register";
import { prisma } from "../../prisma";

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(
    event,
    registerSchema.parse
  );
  const hashedpwd = await hash(password);
  try {
    const user = await prisma.user.create({
      data: {
        email,
        hashedpwd,
      },
      select: {
        email: true,
      },
    });
    return user;
  } catch (e) {
    console.error(e);
    throw createError({
      message: "An error occured",
      status: 500,
    });
  }
});
