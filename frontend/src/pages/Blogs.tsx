import { useBlogs } from "../hooks";
import { Blog } from "./Blog";

interface Blog {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
  };
}

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div className="grid-cols-1 justify-center">
      {blogs?.length &&
        blogs.map((blog: Blog) => (
          <Blog
            authorName={blog.author?.name}
            content={blog.content}
            publishedDate="23 May 2024"
            title={blog.title}
            key={blog.id}
          ></Blog>
        ))}
    </div>
  );
};
