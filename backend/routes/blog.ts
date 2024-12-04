import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

//it is an middleware
blogRouter.use(async (c, next) => {
  const jwt = c.req.header("Authorization");
  console.log({ jwt });
  if (!jwt) {
    c.status(401);
    return c.json({ error: "unauthorized" });
  }
  const token = jwt.split(" ")[1];
  const payload = await verify(token, c.env.JWT_SECRET);

  if (!payload) {
    c.status(401);
    return c.json({ error: "unauthorized" });
  }
  c.set("userId", payload?.id as string);
  await next();
});

blogRouter.post("/", async (c) => {
  const userId = c.get("userId");

  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: userId,
    },
  });
  return c.json(blog);
});

blogRouter.put("/", async (c) => {
  const userId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  prisma.blog.update({
    where: {
      id: body.id,
      authorId: userId,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });

  return c.text("updated post");
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const page: number = parseInt(c.req.query("page") as string) || 1;

  const limit: number = parseInt(c.req.query("limit") as string) || 10;

  const startIndex = page > 0 ? (page - 1) * limit : 1;

  const endIndex = page > 0 ? page * limit : 10;

  const totalBlogs = await prisma.blog.count();

  const pages = {
    previous: {},
    next: {},
  };

  const blog = await prisma.blog.findMany({
    take: limit,
    skip: startIndex,
    select: {
      id: true,
      title: true,
      content: true,
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });

  if (startIndex > 0) {
    pages.previous = {
      page: page - 1,
      limit: limit,
    };
  }
  if (endIndex < totalBlogs) {
    pages.next = {
      page: page + 1,
      limit: limit,
    };
  }

  return c.json({
    data: [...blog],
    prev: pages.previous,
    next: pages.next,
    total: totalBlogs,
  });
});

blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.blog.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      content: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  return c.json(blog);
});

//Warning All Blog Will Be Deleted

blogRouter.delete("/", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.blog.deleteMany();

  return c.json({
    message: "All Blog Deleted",
  });
});
