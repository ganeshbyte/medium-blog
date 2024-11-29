import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { SignupType, signinInput, signupInput } from "@ganesh2111/common-app";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const res = signupInput.safeParse(body);

  if (!res.success) {
    return c.json(
      {
        message: "invalid inputs",
      },
      400
    );
  }

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  });

  const token = await sign(
    { id: user.id, exp: Math.floor(Date.now() / 1000) + 60 * 5 },
    c.env.JWT_SECRET,
    "HS256"
  );

  return c.json({
    jwt: token,
  });
});

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    //@ts-ignore
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const res = signinInput.safeParse(body);

  if (!res.success) {
    return c.json(
      {
        message: "invalid inputs",
      },
      400
    );
  }
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({ error: "user not found" });
  }

  const jwt = await sign(
    { id: user.id, exp: Math.floor(Date.now() / 1000) + 60 * 5 },
    c.env.JWT_SECRET
  );
  return c.json({ jwt });
});
