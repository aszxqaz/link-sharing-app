import { prisma } from "../prisma";

export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event);
  const profile = await prisma.profile.findUnique({
    where: { userId: user.id },
  });
  return profile;
});
