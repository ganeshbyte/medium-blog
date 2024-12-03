import { Skeleton } from "../components/Skeleton";
import { useBlogs } from "../hooks";
import { IBlog } from "../types";
import { Blog } from "./Blog";
export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <Skeleton></Skeleton>;
  }
  return (
    <div className="flex flex-col items-center justify-center">
      {blogs?.length &&
        blogs.map((blog: IBlog) => <Blog blog={blog} key={blog.id}></Blog>)}
    </div>
  );
};