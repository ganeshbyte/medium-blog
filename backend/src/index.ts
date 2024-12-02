import { Hono } from "hono";
import { cors } from "hono/cors";
import { blogRouter } from "../routes/blog";
import { userRouter } from "../routes/user";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.use(
  cors({
    origin: "http://localhost:5173", // Allow the specific origin
    allowHeaders: ["Content-Type", "Authorization", "X-Custom-Header"], // Include Content-Type
    allowMethods: ["POST", "GET", "OPTIONS"], // Allow necessary HTTP methods
    credentials: true, // Allow credentials if required
  })
);

app.route("/api/v1/blog", blogRouter);
app.route("/api/v1/user", userRouter);

export default app;
