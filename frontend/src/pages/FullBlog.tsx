import { useParams } from "react-router-dom";
import { Avatar } from "../components/Avatar";
import { Skeleton } from "../components/Skeleton";
import { useBlog } from "../hooks";

export const FullBlog = () => {
  const param = useParams();
  const { loading, blog } = useBlog({ id: param?.id as string });

  if (loading) {
    return <Skeleton></Skeleton>;
  }

  return (
    <>
      <div className="flex gap-10 justify-center">
        <div className="w-1/2">
          <div className="text-4xl font-bold mb-2">{blog?.title}</div>
          <div className="text-gray-500 mb-5">
            {blog?.publishedDate || "24 May 2024"}
          </div>
          <div className="text-gray-500 mb-5">{blog?.content}</div>
        </div>
        <div className="w-1/3">
          <div className="mb-2">Author</div>
          <div className="flex gap-2">
            <Avatar author={blog?.author?.name as string} size={6}></Avatar>
            <span className="text-xl font-bold">
              {blog?.author?.name || "Anonymous"}
            </span>
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
          </div>
        </div>
      </div>
    </>
  );
};
