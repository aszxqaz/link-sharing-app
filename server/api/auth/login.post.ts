import { verify } from "argon2";
import { loginSchema } from "~/shared/schema/login";
import { prisma } from "../../prisma";

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, loginSchema.parse);
  let user;

  // Find the user in the database
  try {
    user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
  } catch (e) {
    console.error(e);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong",
    });
  }
  if (!user)
    throw createError({
      statusCode: 401,
      statusMessage: "Wrong email or password",
    });

  // Verify the password
  const verified = await verify(user.hashedpwd, password);
  if (!verified)
    throw createError({
      statusCode: 401,
      statusMessage: "Wrong email or password",
    });

  await setUserSession(event, {
    user: {
      id: user.id,
      email,
    },
  });

  return {};
});

// export default eventHandler(async (event) => {
//   const body = await readBody(event);
//   const { email, password } = LoginRequest.parse(body);
// let user;
// try {
//   user = await prisma.user.findUnique({
//     where: {
//       email,
//     },
//   });
// } catch (e) {
//   console.error(e);
//   throw createError({
//     statusCode: 500,
//     statusMessage: "Something went wrong",
//   });
// }
// if (!user)
//   throw createError({
//     statusCode: 401,
//     statusMessage: "Wrong email or password",
//   });

// const verified = await verify(user.hashedpwd, password);
// if (!verified)
//   throw createError({
//     statusCode: 401,
//     statusMessage: "Wrong email or password",
//   });

//   const runtimeConfig = useRuntimeConfig();

//   const token = await V4.sign({ sub: user.email }, runtimeConfig.pasetoSecret);

//   setCookie(event, "token", token);

//   return {
//     id: user.id,
//     email: user.email,
//   };
// });
