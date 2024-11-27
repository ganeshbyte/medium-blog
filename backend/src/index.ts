import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.post("/api/v1/signin", (c) => {
  return c.text("singin");
});
app.post("/api/v1/signup", (c) => {
  return c.text("signup");
});

//blog routes
app.get("/api/v1/blog", (c) => {
  return c.text("blogs");
});

app.get("/api/v1/blog/:id", (c) => {
  return c.text("blogs");
});

app.put("/api/v1/blog", (c) => {
  return c.text("Update Blog");
});

app.post("/api/v1/blog", (c) => {
  return c.text("Create Blog");
});

export default app;
