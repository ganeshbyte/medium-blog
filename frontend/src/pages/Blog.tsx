import { Avatar } from "../components/Avatar";

interface BlogCardProps {
  authorName?: string;
  title?: string;
  content?: string;
  publishedDate?: string;
}

export const Blog = ({
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  if (authorName?.length) {
  }
  return (
    <div className="shadow-sm block shadow-gray-400 px-2 py-4 w-[700px] rounded-sm mb-10">
      <div className="flex items-center mb-3">
        <Avatar author={authorName as string} size={5}></Avatar>
        <div className="px-2">
          {authorName} &#46; {publishedDate}
        </div>
      </div>
      <div className="font-bold text-2xl text-gray-900">{title}</div>
      <div className="text-gray-400 mb-3">
        {content?.length && content.slice(0, 100) + "..."}
      </div>
      <div className="text-gray-500">{`${
        content?.length && Math.ceil(content.length / 100)
      } minutes`}</div>
    </div>
  );
};
