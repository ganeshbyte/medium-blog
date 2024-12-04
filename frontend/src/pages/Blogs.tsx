import { useState } from "react";
import { Skeleton } from "../components/Skeleton";
import { useBlogs } from "../hooks";
import { IBlog } from "../types";
import { Blog } from "./Blog";
export const Blogs = () => {
  const [page, setPage] = useState(1);

  const limit = 5;

  const { loading, blogs, prev, next } = useBlogs({ page, limit });

  if (loading) {
    return <Skeleton></Skeleton>;
  }

  return (
    <>
      <div className="flex flex-col items-center min-h-screen ">
        {blogs?.length &&
          blogs.map((blog: IBlog) => <Blog blog={blog} key={blog.id}></Blog>)}
      </div>

      <div className="flex items-center justify-center  mb-5 gap-10">
        {prev?.page && (
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Prev
          </button>
        )}

        {next?.page && (
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};
