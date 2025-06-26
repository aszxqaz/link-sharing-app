import { updateProfileSchema } from "~/shared/schema/profile.update";
import { prisma } from "../prisma";

export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event);
  const profile = await readValidatedBody(event, updateProfileSchema.parse);

  const data = {
    email: profile.email ?? "",
    firstName: profile.firstName ?? "",
    lastName: profile.lastName ?? "",
    links: profile.links,
    userEmail: user.email,
  };

  console.log("Upserting data", data);

  const updated = await prisma.profile.update({
    where: { userId: user.id },
    // create: data,
    data: data,
  });

  return updated;
});
