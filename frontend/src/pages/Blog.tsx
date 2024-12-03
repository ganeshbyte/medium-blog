import { Link } from "react-router-dom";
import { Avatar } from "../components/Avatar";
import type { IBlog } from "../types";

interface BlogCardProps {
  blog: IBlog;
}

export const Blog = ({ blog }: BlogCardProps) => {
  return (
    <div className="shadow-sm block shadow-gray-400 px-2 py-4 w-[300px] md:w-[500] lg:w-[700px] rounded-sm mb-10">
      <div className="flex items-center mb-3">
        <Avatar author={blog.author?.name as string} size={"big"}></Avatar>
        <div className="px-2">
          {blog.author?.name} &#46; {blog.publishedDate || "24 April"}
        </div>
      </div>
      <Link to={`${blog.id}`}>
        <div className="font-bold text-2xl text-gray-900">{blog.title}</div>
      </Link>
      <div className="text-gray-400 mb-3">
        {blog.content?.length && blog.content.slice(0, 100) + "..."}
      </div>
      <div className="text-gray-500">{`${
        blog.content?.length && Math.ceil(blog.content.length / 100)
      } minutes`}</div>
    </div>
  );
};
